export interface NavigationNode {
  id: string;
  title: string;
  path: string;
  category: 'architecture' | 'media_labs' | 'academics' | 'comm';
  resonanceWeight: number;
  description: string;
}

export const IndexMatrix: Record<string, NavigationNode> = {
  home: { 
    id: 'home', 
    title: 'Home', 
    path: '/', 
    category: 'architecture', 
    resonanceWeight: 0.8, 
    description: 'The heartbeat of the system.' 
  },
  origin: { 
    id: 'origin', 
    title: 'ORIGIN', 
    path: '/manifesto', 
    category: 'architecture', 
    resonanceWeight: 1.0, 
    description: 'The story of the Solo Architect.' 
  },
  projects: { 
    id: 'projects', 
    title: 'Projects', 
    path: '/projects', 
    category: 'architecture', 
    resonanceWeight: 0.9, 
    description: 'Proof of work and industrial endurance.' 
  },
  showcase: { 
    id: 'showcase', 
    title: 'Website Templates | Isabirye Latif Design Portfolio & Gallery', 
    path: '/showcase', 
    category: 'architecture', 
    resonanceWeight: 0.85, 
    description: 'Explore a premium gallery of professional website templates and interactive client showcase previews designed by Solo Architect Isabirye Latif. High-performance, scalable web architecture for business, education, portfolios, and enterprise needs.' 
  },
  resonance: { 
    id: 'resonance', 
    title: 'Resonance', 
    path: '/resonance', 
    category: 'architecture', 
    resonanceWeight: 0.95, 
    description: 'Cymatic Resonance live pulse and coordination.' 
  },
  study: { 
    id: 'study', 
    title: 'Study', 
    path: '/study', 
    category: 'architecture', 
    resonanceWeight: 0.92, 
    description: 'Cymatic Study educational sync portal.' 
  },
  creative: { 
    id: 'creative', 
    title: 'Creative Lab', 
    path: '/creative', 
    category: 'media_labs', 
    resonanceWeight: 0.7, 
    description: 'Generative wave experiments and sensory layers.' 
  },
  creatives: { 
    id: 'creatives', 
    title: 'Creatives Showcase', 
    path: '/creatives', 
    category: 'media_labs', 
    resonanceWeight: 0.75, 
    description: 'Sonic frequencies, visual compositions, and tactical discourse.' 
  },
  learning: { 
    id: 'learning', 
    title: 'Learning', 
    path: '/learning', 
    category: 'academics', 
    resonanceWeight: 0.6, 
    description: 'The evolution of knowledge.' 
  },
  socials: { 
    id: 'socials', 
    title: 'Socials', 
    path: '/socials', 
    category: 'comm', 
    resonanceWeight: 0.5, 
    description: 'Direct communication pipelines.' 
  },
  legal: { 
    id: 'legal', 
    title: 'Compliance', 
    path: '/legal', 
    category: 'architecture', 
    resonanceWeight: 0.4, 
    description: 'Absolute data sovereignty and integrity.' 
  },
  transparency: { 
    id: 'transparency', 
    title: 'Transparency', 
    path: '/transparency', 
    category: 'architecture', 
    resonanceWeight: 0.45, 
    description: 'Live system logs and operational telemetry.' 
  },
  stack: { 
    id: 'stack', 
    title: 'Stack', 
    path: '/stack', 
    category: 'architecture', 
    resonanceWeight: 0.4, 
    description: 'Deep architectural tech stack audit.' 
  }
};


