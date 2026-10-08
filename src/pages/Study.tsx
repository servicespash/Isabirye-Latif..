import { CymaticLayout } from '../components/CymaticLayout';
import { Link } from 'react-router-dom';
import { StudyNexusDashboard } from '../components/StudyNexusDashboard';
import { CymaticInfrastructureMonitor } from '../components/CymaticInfrastructureMonitor';
import { SubdomainSeoAuditor } from '../components/SubdomainSeoAuditor';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { JSONLD } from '../components/JSONLD';

export const Study = () => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Cymatic Study Infrastructure",
    "description": "Streamlined project-based learning and coordination.",
    "provider": {
      "@type": "Organization",
      "name": "Cymatic Engines Evolution"
    }
  };

  return (
    <CymaticLayout>
      <JSONLD schema={courseSchema} />
      <div className="py-4 space-y-16">
        <StudyNexusDashboard />
        
        {/* INFRASTRUCTURE MONITOR */}
        <section className="grid md:grid-cols-2 gap-8">
            <CymaticInfrastructureMonitor subdomain="study.cymatichub.xyz" />
        </section>

        {/* PRODUCT DETAILS */}
        <section className="grid md:grid-cols-2 gap-12 border-t border-[var(--color-border)]/30 pt-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter">Why Cymatic Study?</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Modern education is fragmented. Students and teachers struggle to maintain context across disparate tools. Cymatic Study solves this by acting as the single source of truth for all academic and coordination activities.
            </p>
            <ul className="space-y-4 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--color-accent)]" />
                <span><strong>Unified PBL Tracking:</strong> See the full lifecycle of student projects, from ideation to submission, in one interface.</span>
              </li>
              <li className="flex gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--color-accent)]" />
                <span><strong>AI Study Guidance:</strong> Intelligent, context-aware study guides tailored to individual learning paths and project milestones.</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter">Workflow Optimized</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Streamline institutional operations by reducing administrative overhead and increasing focus on project-based learning outcomes.
            </p>
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
              // See_Full_Workflow <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <SubdomainSeoAuditor subdomain="study.cymatichub.xyz" />
      </div>
    </CymaticLayout>
  );
};

export default Study;
