import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("CYMATIC_ROOT_NOT_FOUND");

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
);
