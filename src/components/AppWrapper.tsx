import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { RepoRail } from './RepoRail';

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen w-full">
        <RepoRail />
        <div className="flex-1 w-full min-w-0">
          {children}
        </div>
      </div>
    </ErrorBoundary>
  );
};
