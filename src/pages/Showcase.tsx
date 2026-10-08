import React from 'react';

const ShowcasePage: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <iframe
        src="/showcase/index.html"
        title="Template Showcase"
        className="absolute inset-0 w-full h-full border-none"
        allowFullScreen
      />
    </div>
  );
};

export default ShowcasePage;
