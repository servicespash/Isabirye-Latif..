// Simple heuristic for educational monitoring
const EDUCATIONAL_KEYWORDS = ['physics', 'chemistry', 'biology', 'math', 'project', 'assignment', 'formula', 'kinetic', 'respiration'];

export const monitorChatContent = (message: string): { isEducational: boolean, aiResponse?: string } => {
  const query = message.toLowerCase();
  const isEducational = EDUCATIONAL_KEYWORDS.some(keyword => query.includes(keyword));
  
  if (!isEducational) {
    return { 
      isEducational: false, 
      aiResponse: "I noticed the conversation drifted. Let's refocus on your educational goals. Do you have a question about your current project or syllabus?" 
    };
  }
  
  let response = "Great query! Keeping your studies focused on high-performance academic results is key. Which part of the S3 syllabus or project details shall we break down next?";
  
  if (query.includes('physics') || query.includes('kinetic') || query.includes('formula')) {
    response = "Excellent question! For Kinetic Energy, remember the fundamental equation: KE = ½mv² (where m is mass in kg, and v is velocity in m/s). To solve vector displacements, make sure to separate your horizontal and vertical components. How is your project calculations coming along?";
  } else if (query.includes('biology') || query.includes('respiration') || query.includes('cellular')) {
    response = "Fantastic biological inquiry! Cellular respiration is the metabolic pathway that breaks down glucose to produce ATP (Adenosine Triphosphate). The chemical equation is: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36 ATP. Would you like to map out the Krebs Cycle or Glycolysis phase for your S3 report?";
  } else if (query.includes('chemistry')) {
    response = "Excellent chemistry prompt. Remember that chemical reactions always conserve mass and atomic balance. When writing equations, count the atoms of each element on both reactants and products sides. What reaction are you working on?";
  } else if (query.includes('math')) {
    response = "Brilliant! Math is the universal language of systems. If you're working on algebraic expressions or coordinate geometry, let me know the values and we can trace the proofs step-by-step.";
  }
  
  return { 
    isEducational: true,
    aiResponse: response
  };
};

