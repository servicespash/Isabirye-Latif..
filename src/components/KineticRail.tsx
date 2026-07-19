import React from 'react';
import { Link } from 'react-router-dom';

export const KineticRail: React.FC = () => (
  <header className="fixed top-0 left-0 w-full z-[1000] p-4">
    <div className="kinetic-rail-border">
      <div className="kinetic-rail-inner">
        <Link to="/" className="brand-logo">CYMATIC EVOLUTION</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/manifesto">Origin</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/showcase">Showcase</Link>
          <Link to="/creatives">Creatives</Link>
          <Link to="/learning">Learning</Link>
          <Link to="/socials">Socials</Link>
        </nav>

      </div>
    </div>
  </header>
);
