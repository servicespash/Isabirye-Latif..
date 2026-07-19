/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

// The 'frequency' represents the site's "breathing rate" (pulse speed).
interface MotionContextType {
  globalFrequency: number;
  setGlobalFrequency: (val: number) => void;
  focusState: string | null; // ID of the currently focused navigation node
  setFocusState: (id: string | null) => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [globalFrequency, setGlobalFrequency] = useState(1);
  const [focusState, setFocusState] = useState<string | null>(null);

  return (
    <MotionContext.Provider value={{ globalFrequency, setGlobalFrequency, focusState, setFocusState }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotionPulse = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotionPulse must be used within a MotionProvider');
  }
  return context;
};
