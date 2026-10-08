import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }
    // Simple mock collection state as requested
    console.log('Newsletter signup:', email);
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="bg-[#111625] p-6 rounded-2xl border border-gray-800">
      <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest mb-2">Join the Ecosystem</h3>
      <p className="text-[11px] text-gray-400 mb-4 font-mono">Receive architectural insights and template updates.</p>
      
      {status === 'success' ? (
        <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs">
          <CheckCircle className="w-4 h-4" />
          <span>SUBSCRIBED</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="archetype@domain.xyz"
              className={`flex-grow bg-[#090D1A] border rounded-lg px-3 py-2 text-xs font-mono text-slate-300 focus:outline-none ${status === 'error' ? 'border-red-500' : 'border-gray-800 focus:border-blue-500'}`}
              required
            />
            <button 
              type="submit"
              className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
          {status === 'error' && (
            <p className="text-[10px] text-red-500 font-mono">Please enter a valid email address.</p>
          )}
        </form>
      )}
    </div>
  );
};
