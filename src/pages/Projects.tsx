import { CymaticLayout } from '../components/CymaticLayout';
import { Card } from '../components/Card';

export const Projects = () => {
  return (
    <CymaticLayout>
      <div className="space-y-12">
        <div className="border-b-2 border-[var(--color-border)] pb-12">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-[var(--color-text-primary)] uppercase">// 02_PROJECTS: THE_BUILDER</h1>
          <p className="mt-6 text-xl italic font-serif text-[var(--color-accent)]">"A deep-dive into technical architecture, infrastructure services, and the code powering cymatichub.xyz."</p>
        </div>

        <section className="grid md:grid-cols-2 gap-8">
          <Card 
            title="Cymatic Hub" 
            category="Infrastructure" 
            description="Core backend infrastructure and high-performance web services." 
          />
          <Card 
            title="PDF Engine" 
            category="Tooling" 
            description="Automated curriculum document generation for scaled learning." 
          />
          <Card 
            title="Sci-Matic" 
            category="STEM" 
            description="Integrated learning and tutoring platform architecture." 
          />
        </section>
      </div>
    </CymaticLayout>
  );
};
