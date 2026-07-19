import { useState, useEffect } from 'react';

const focuses = [
  'Architecting: Cymatic Study',
  'Studying: Counselling',
  'Creating: Celestial Fantasy'
];

export const StatusStream = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % focuses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-xs text-hub-accent tracking-widest uppercase">
      {focuses[index]}
    </div>
  );
};
