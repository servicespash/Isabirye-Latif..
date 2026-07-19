import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const BoundaryWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ErrorBoundary>
            {children}
        </ErrorBoundary>
    );
};

export const CymaticLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <BoundaryWrapper>
            {children}
        </BoundaryWrapper>
    );
};
