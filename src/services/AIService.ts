// Simple heuristic for educational monitoring
const EDUCATIONAL_KEYWORDS = ['physics', 'chemistry', 'biology', 'math', 'project', 'assignment', 'formula'];

export const monitorChatContent = (message: string): { isEducational: boolean, aiResponse?: string } => {
  const isEducational = EDUCATIONAL_KEYWORDS.some(keyword => message.toLowerCase().includes(keyword));
  
  if (!isEducational) {
    return { 
      isEducational: false, 
      aiResponse: "I noticed the conversation drifted. Let's refocus on your educational goals. Do you have a question about your current project?" 
    };
  }
  
  return { isEducational: true };
};
