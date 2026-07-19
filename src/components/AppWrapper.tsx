import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
};
