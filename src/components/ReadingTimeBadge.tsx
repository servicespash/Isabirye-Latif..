import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { useReadingTime } from '../hooks/useReadingTime';

interface ReadingTimeBadgeProps {
  content: React.ReactNode;
}

export const ReadingTimeBadge: React.FC<ReadingTimeBadgeProps> = ({ content }) => {
  const { minutes, wordCount } = useReadingTime(content);

  return (
    <div className="flex items-center gap-3 my-3 text-[10px] font-mono text-[var(--color-text-secondary)] tracking-wider">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-sm">
        <Clock className="w-3 h-3 text-[var(--color-accent)] animate-pulse" />
        <span>READING TIME: <strong className="text-[var(--color-text-primary)]">{minutes} MIN</strong></span>
      </div>
      <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-sm">
        <BookOpen className="w-3 h-3 text-[var(--color-accent)]" />
        <span>COMPLEXITY: <strong className="text-[var(--color-text-primary)]">{wordCount} WORDS</strong></span>
      </div>
    </div>
  );
};
