import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IndexMatrix } from '../navigation/IndexMatrix';

export const useDocumentMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const currentNode = Object.values(IndexMatrix).find(
      (node) => node.path === location.pathname
    );

    document.title = currentNode 
      ? `Cymatic | ${currentNode.title}` 
      : 'Cymatic Study';

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentNode?.description || 'Architecting Innovation.');

  }, [location]);
};
