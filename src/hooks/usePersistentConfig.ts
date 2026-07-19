import { useEffect, useState } from 'react';

export const usePersistentConfig = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    if (!stored || stored === 'undefined') return initialValue;
    try {
        return JSON.parse(stored);
    } catch {
        return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
