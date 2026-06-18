import { CymaticLayout } from '../components/CymaticLayout';
import { HubPortal } from '../components/HubPortal';

export const Hub = () => {
  return (
    <CymaticLayout>
      <div className="py-8">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">// CYMATIC_HUB: OPERATIONAL_DASHBOARD</h1>
        <HubPortal />
      </div>
    </CymaticLayout>
  );
};

export default Hub;
