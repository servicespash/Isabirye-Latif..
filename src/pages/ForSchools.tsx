import { Helmet } from 'react-helmet-async';
import { CymaticLayout } from '../components/CymaticLayout';

export const ForSchools = () => (
  <CymaticLayout>
    <Helmet>
      <title>Cymatic Study | Synchronized Education Architecture</title>
      <meta name="description" content="Transform educational institutions into synchronized learning ecosystems with Cymatic Study's resonance-driven tools." />
    </Helmet>
    <div className="max-w-4xl mx-auto py-16 space-y-8">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter">For Schools</h1>
      <p className="text-lg text-[var(--color-text-secondary)]">
        Cymatic Study transforms educational institutions into synchronized learning ecosystems.
      </p>
      {/* Add more content */}
    </div>
  </CymaticLayout>
);

export default ForSchools;
