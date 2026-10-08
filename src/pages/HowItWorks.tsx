import { Helmet } from 'react-helmet-async';
import { CymaticLayout } from '../components/CymaticLayout';

export const HowItWorks = () => (
  <CymaticLayout>
    <Helmet>
      <title>Cymatic Study | How Our Resonance Architecture Works</title>
      <meta name="description" content="Discover how Cymatic resonance architecture orchestrates synchronization and clarity across institutional and educational nodes." />
    </Helmet>
    <div className="max-w-4xl mx-auto py-16 space-y-8">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter">How It Works</h1>
      <p className="text-lg text-[var(--color-text-secondary)]">
        Learn how Cymatic architecture orchestrates synchronization across institutional nodes.
      </p>
    </div>
  </CymaticLayout>
);

export default HowItWorks;
