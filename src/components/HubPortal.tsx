import React, { useState } from 'react';
import { useHubService } from '../hooks/useHubService';

export const HubPortal: React.FC = () => {
  const { projects, chatMessages, sendMessage } = useHubService();
  const [input, setInput] = useState('');

  return (
    <div className="grid grid-cols-12 gap-8 text-[var(--color-text-primary)]">
      
      {/* PBL TRACKER */}
      <section className="col-span-12 lg:col-span-7 p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/10 backdrop-blur-md">
        <h2 className="text-2xl font-black uppercase tracking-widest mb-6">// ACTIVE_PROJECTS</h2>
        <div className="space-y-4">
          {projects.map(p => (
            <div key={p.id} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{p.description}</p>
              <button className="mt-4 px-4 py-2 bg-[var(--color-accent)] text-black font-bold uppercase text-xs rounded-lg hover:brightness-110">
                Submit Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AI CHAT MONITOR */}
      <section className="col-span-12 lg:col-span-5 p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-primary)]/10 backdrop-blur-md flex flex-col h-[500px]">
        <h2 className="text-2xl font-black uppercase tracking-widest mb-6">// AI_TUTOR_MONITOR</h2>
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {chatMessages.map(m => (
            <div key={m.id} className={`p-3 rounded-lg text-sm ${m.sender === 'student' ? 'bg-[var(--color-accent)]/20 ml-auto' : 'bg-white/10'}`}>
              {m.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 bg-white/5 border border-[var(--color-border)] rounded-lg text-sm"
            placeholder="Ask about your project..."
          />
          <button onClick={() => { sendMessage(input); setInput(''); }} className="px-4 bg-[var(--color-accent)] text-black font-bold rounded-lg">Send</button>
        </div>
      </section>
    </div>
  );
};
