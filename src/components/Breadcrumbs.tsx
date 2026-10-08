import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { IndexMatrix } from '../navigation/IndexMatrix';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="mb-6 flex items-center text-xs font-mono text-[var(--color-text-secondary)] overflow-x-auto whitespace-nowrap print-hidden">
      <Link to="/" className="flex items-center hover:text-[var(--color-accent)] transition-colors" title="Home">
        <Home className="w-3.5 h-3.5" />
      </Link>
      
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        // Try to find the title from IndexMatrix
        const matrixEntry = Object.values(IndexMatrix).find(node => node.path === to);
        const title = matrixEntry ? matrixEntry.title.split('|')[0].trim() : value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-3.5 h-3.5 mx-1 opacity-50" />
            {isLast ? (
              <span className="text-[var(--color-accent)] font-medium" aria-current="page">
                {title}
              </span>
            ) : (
              <Link to={to} className="hover:text-[var(--color-accent)] transition-colors">
                {title}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
