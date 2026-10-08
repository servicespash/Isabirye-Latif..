import React from 'react';
import { useCymaticTheme } from '../context/ThemeContext';
import { Settings, Monitor, Palette, GitBranch, Cloud, Check, Copy } from 'lucide-react';

export const ProjectSettingsPanel: React.FC = () => {
  const { contrast, setContrast, aspectRatio, setAspectRatio, theme, toggleTheme, highContrast, toggleHighContrast } = useCymaticTheme();
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const githubWorkflow = `name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist`;

  const cloudflareConfig = `name = "isabirye-latif"
main = "workers-site/index.js"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = "dist"
not_found_handling = "single-page-application"

routes = ["cymatichub.xyz/*"]`;

  return (
    <div className="space-y-12">
      {/* Visual Identity Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
          <Palette className="w-5 h-5 text-[var(--color-accent)]" />
          <h2 className="text-xl font-black uppercase tracking-tight text-[var(--color-text-primary)]">
            Visual_Identity_Config
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contrast Control */}
          <div className="glass-card p-6 space-y-4">
            <label className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)] block">
              System_Contrast: {contrast}%
            </label>
            <input 
              type="range" 
              min="50" 
              max="150" 
              value={contrast}
              onChange={(e) => setContrast(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[var(--color-border)] rounded-full appearance-none cursor-pointer accent-[var(--color-accent)]"
            />
            <p className="text-[10px] text-gray-500 font-mono">
              Adjusts global luminosity and perceptual depth across all nodes.
            </p>
          </div>

          {/* Theme Toggle Overlay */}
          <div className="glass-card p-6 space-y-4">
            <label className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)] block">
              Luminosity_Mode
            </label>
            <button 
              onClick={toggleTheme}
              className="w-full py-2.5 rounded-xl border border-[var(--color-border)] font-mono text-xs uppercase tracking-widest hover:border-[var(--color-accent)] transition-all"
            >
              Current: {theme === 'dark' ? 'Nocturnal_Dark' : 'Luminous_Light'}
            </button>
          </div>

          {/* High Contrast Toggle */}
          <div className="glass-card p-6 space-y-4">
            <label className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)] block">
              Accessibility_Override
            </label>
            <button 
              onClick={toggleHighContrast}
              className={`w-full py-2.5 rounded-xl border font-mono text-xs uppercase tracking-widest transition-all ${
                highContrast 
                ? 'bg-yellow-400 text-black border-yellow-500 font-black' 
                : 'border-[var(--color-border)] hover:border-[var(--color-accent)]'
              }`}
            >
              High_Contrast: {highContrast ? 'ACTIVE' : 'OFF'}
            </button>
            <p className="text-[10px] text-gray-500 font-mono">
              Maximum readability override for visually impaired users.
            </p>
          </div>
        </div>
      </section>

      {/* Surface Orchestration Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
          <Monitor className="w-5 h-5 text-[var(--color-accent)]" />
          <h2 className="text-xl font-black uppercase tracking-tight text-[var(--color-text-primary)]">
            Surface_Orchestration
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['16:9', '4:3', '1:1'].map((ratio) => (
            <button
              key={ratio}
              onClick={() => setAspectRatio(ratio)}
              className={`p-6 rounded-2xl border transition-all space-y-3 text-left ${
                aspectRatio === ratio 
                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5' 
                : 'border-[var(--color-border)] hover:border-gray-400'
              }`}
            >
              <div className={`w-12 h-8 border-2 rounded-sm ${aspectRatio === ratio ? 'border-[var(--color-accent)]' : 'border-gray-400'} ${
                ratio === '4:3' ? 'w-10' : ratio === '1:1' ? 'w-8' : ''
              }`} />
              <div className="font-mono text-xs uppercase tracking-widest font-bold">{ratio}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-tighter">
                {ratio === '16:9' ? 'Cinematic_Wide' : ratio === '4:3' ? 'Classic_Node' : 'Sovereign_Square'}
              </div>
            </button>
          ))}
        </div>

        {/* Live Preview Area */}
        <div className="glass-card p-8 flex items-center justify-center bg-black/20 overflow-hidden">
          <div 
            className="bg-[var(--color-accent)]/20 border-2 border-[var(--color-accent)] rounded-xl transition-all duration-700 ease-in-out flex items-center justify-center relative shadow-[0_0_50px_rgba(var(--color-accent-rgb),0.1)]"
            style={{ 
              aspectRatio: aspectRatio.replace(':', '/'),
              width: '100%',
              maxWidth: '400px'
            }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold">
              SURFACE_PREVIEW: {aspectRatio}
            </div>
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40" />
          </div>
        </div>
      </section>

      {/* Deployment Integrity Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
          <Settings className="w-5 h-5 text-[var(--color-accent)]" />
          <h2 className="text-xl font-black uppercase tracking-tight text-[var(--color-text-primary)]">
            Deployment_Integrity
          </h2>
        </div>

        <div className="space-y-6">
          {/* GitHub Config */}
          <div className="glass-card overflow-hidden">
            <div className="p-4 bg-black/5 border-b border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                <GitBranch className="w-4 h-4" /> .github/workflows/deploy.yml
              </div>
              <button 
                onClick={() => copyToClipboard(githubWorkflow, 'gh')}
                className="p-1.5 hover:bg-black/10 rounded-lg transition-colors"
              >
                {copied === 'gh' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <pre className="p-4 text-[10px] font-mono text-gray-500 overflow-x-auto">
              {githubWorkflow}
            </pre>
          </div>

          {/* Cloudflare Config */}
          <div className="glass-card overflow-hidden">
            <div className="p-4 bg-black/5 border-b border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                <Cloud className="w-4 h-4" /> wrangler.toml (Cloudflare)
              </div>
              <button 
                onClick={() => copyToClipboard(cloudflareConfig, 'cf')}
                className="p-1.5 hover:bg-black/10 rounded-lg transition-colors"
              >
                {copied === 'cf' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <pre className="p-4 text-[10px] font-mono text-gray-500 overflow-x-auto">
              {cloudflareConfig}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};
