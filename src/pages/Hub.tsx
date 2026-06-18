import { CymaticLayout } from '../components/CymaticLayout';
import { HubPortal } from '../components/HubPortal';

export const Hub = () => {
  return (
    <CymaticLayout>
      <div className="w-full">
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-8">// CYMATIC_HUB: OPERATIONAL_DASHBOARD</h1>
        <HubPortal />
      </div>
    </CymaticLayout>
  );
};

export default Hub;
