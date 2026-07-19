import { useState } from 'react';
import { Project, ChatMessage } from '../types/Study';
import { monitorChatContent } from '../services/AIService';

export const useStudyService = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 'p1', title: 'Cellular Respiration Analysis', subject: 'Biology', classLevel: 'S3', description: 'Detailed breakdown of metabolic pathways.', deadline: '2026-07-01' },
    { id: 'p2', title: 'Kinetic Energy Equations', subject: 'Physics', classLevel: 'S3', description: 'Calculate velocity and force vectors.', deadline: '2026-07-05' }
  ]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;
    const newMessage: ChatMessage = { id: Date.now().toString(), sender: 'student', content, timestamp: new Date() };
    setChatMessages(prev => [...prev, newMessage]);

    const monitoring = monitorChatContent(content);
    if (monitoring.aiResponse) {
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          sender: 'ai', 
          content: monitoring.aiResponse!, 
          timestamp: new Date() 
        }]);
      }, 600);
    }
  };

  const submitProject = (projectId: string) => {
    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, status: 'pending' as const } : p
    ));
    // Simulate teacher marking after 3 seconds
    setTimeout(() => {
      setProjects(prev => prev.map(p => 
        p.id === projectId ? { ...p, status: 'marked' as const, grade: 85 } : p
      ));
    }, 3000);
  };

  return { projects, chatMessages, sendMessage, submitProject };
};
