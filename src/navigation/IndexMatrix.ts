export interface NavigationNode {
  id: string;
  title: string;
  path: string;
  category: 'architecture' | 'media_labs' | 'academics' | 'comm';
  resonanceWeight: number;
  description: string;
}

export const IndexMatrix: Record<string, NavigationNode> = {
  origin: { 
    id: 'origin', 
    title: 'ORIGIN', 
    path: '/manifesto', 
    category: 'architecture', 
    resonanceWeight: 1.0, 
    description: 'The story of the Solo Architect.' 
  },
  home: { 
    id: 'home', 
    title: 'Home', 
    path: '/', 
    category: 'architecture', 
    resonanceWeight: 0.8, 
    description: 'The heartbeat of the system.' 
  },
  projects: { 
    id: 'projects', 
    title: 'Projects', 
    path: '/projects', 
    category: 'architecture', 
    resonanceWeight: 0.9, 
    description: 'Proof of work and industrial endurance.' 
  },
  creative: { 
    id: 'creative', 
    title: 'Creative', 
    path: '/creative', 
    category: 'media_labs', 
    resonanceWeight: 0.7, 
    description: 'Generative experiments and sensory layers.' 
  },
  learning: { 
    id: 'learning', 
    title: 'Learning', 
    path: '/learning', 
    category: 'academics', 
    resonanceWeight: 0.6, 
    description: 'The evolution of knowledge.' 
  }
};

