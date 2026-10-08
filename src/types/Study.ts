export type Subject = 'Chemistry' | 'Biology' | 'Physics' | 'Mathematics';
export type ClassLevel = 'S1' | 'S2' | 'S3' | 'S4';

export interface Project {
  id: string;
  title: string;
  subject: Subject;
  classLevel: ClassLevel;
  description: string;
  deadline: string;
  status?: 'pending' | 'marked';
  grade?: number;
}

export interface Submission {
  id: string;
  projectId: string;
  studentId: string;
  teacherId: string;
  status: 'pending' | 'marked';
  grade?: number; // 0-100
  feedback?: string;
  submittedAt: Date;
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'teacher' | 'ai';
  content: string;
  timestamp: Date;
}
