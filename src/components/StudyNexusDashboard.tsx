import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  LineChart as ChartIcon, 
  ShieldCheck, 
  Calendar,
  ArrowRight,
  UserPlus,
  RefreshCcw,
  GraduationCap
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Line
} from 'recharts';

const PBL_DATA = [
  { name: 'Week 1', completion: 45, engagement: 60 },
  { name: 'Week 2', completion: 52, engagement: 65 },
  { name: 'Week 3', completion: 61, engagement: 72 },
  { name: 'Week 4', completion: 58, engagement: 80 },
  { name: 'Week 5', completion: 75, engagement: 85 },
  { name: 'Week 6', completion: 88, engagement: 92 },
];

export const StudyNexusDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'study' | 'attendance' | 'sync'>('study');

  return (
    <div className="space-y-12">
      {/* HERO SECTION */}
      <div className="border-b border-[var(--color-border)]/30 pb-12 pt-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic">
            Cymatic Study
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
            The institutional register and synchronization engine. Cymatic Study orchestrates educational ecosystems by tracking project-based learning (PBL) progress, automating attendance registries, and aligning student cohorts through AI-enhanced study guidance—all within a single, resilient architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[var(--color-accent)] text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.3)]">
              // Request_Institutional_Demo
            </button>
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-white/5 border border-[var(--color-border)] rounded-xl font-bold uppercase tracking-widest text-xs hover:border-[var(--color-accent)] transition-all"
            >
              // Explore_Architecture
            </Link>
          </div>
        </div>
      </div>

      {/* PRIMARY NAVIGATION */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'study', label: 'Study Tools (PBL)', icon: BookOpen },
          { id: 'attendance', label: 'Attendance Registry', icon: Calendar },
          { id: 'sync', label: 'Teacher-Student Sync', icon: RefreshCcw }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              const targetTab = tab.id as 'study' | 'attendance' | 'sync';
              setActiveTab(targetTab);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest border transition-all ${
              activeTab === tab.id 
                ? 'bg-[var(--color-accent)] text-black border-[var(--color-accent)] shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.3)]' 
                : 'bg-white/5 text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]/50'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {activeTab === 'study' && (
          <>
            {/* LEFT COLUMN: STATUS & CHARTS */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-6 rounded-2xl bg-black/20 border border-[var(--color-border)]/50 backdrop-blur-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-bold font-mono uppercase tracking-widest flex items-center gap-2">
                    <ChartIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    Performance_Analytics_Stream
                  </h3>
                  <div className="px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-[9px] font-bold">
                    LIVE_FEED
                  </div>
                </div>
                
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PBL_DATA}>
                      <defs>
                        <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        stroke="var(--color-text-secondary)" 
                        fontSize={10} 
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="var(--color-text-secondary)" 
                        fontSize={10} 
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#000', 
                          border: '1px solid var(--color-border)',
                          fontSize: '10px',
                          fontFamily: 'monospace'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="engagement" 
                        stroke="var(--color-accent)" 
                        fillOpacity={1} 
                        fill="url(#colorEngagement)" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="completion" 
                        stroke="#fff" 
                        strokeDasharray="5 5" 
                        strokeWidth={1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-[var(--color-border)]/30 bg-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                    <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Institutional_Security</h4>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Encrypted sign-in protocols for institutional-grade data protection. Your learning trajectory is synchronized across all nodes.
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-[var(--color-accent)] font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    AUTHENTICATION_SYSTEM_ONLINE
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-[var(--color-border)]/30 bg-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-[var(--color-accent)]" />
                    <h4 className="text-xs font-bold uppercase tracking-widest font-mono">Collaborative_Sync</h4>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Real-time synchronization between teachers and student cohorts. Direct PBL feedback loops and peer-monitoring engines.
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-white/50">
                    ACTIVE_NODES: 128 / CLOUD_SYNC: ACTIVE
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MODULES & QUICK ACCESS */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                <h3 className="text-xs font-bold font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Institutional_Status
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono border-b border-[var(--color-border)]/10 pb-2">
                    <span className="text-white/50">Current_User</span>
                    <span className="font-bold">ADMIN_LATIF_01</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono border-b border-[var(--color-border)]/10 pb-2">
                    <span className="text-white/50">Node_ID</span>
                    <span className="font-bold">CYM_88C4_NEXUS</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-white/50">Sync_Status</span>
                    <span className="font-bold text-[var(--color-accent)]">SYNCHRONIZED</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--color-border)]/30 bg-black/40 backdrop-blur-xl">
                <h3 className="text-xs font-bold font-mono uppercase tracking-widest mb-6">Quick_Actions</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Register Attendance', icon: UserPlus },
                    { label: 'Upload PBL Chart', icon: ChartIcon },
                    { label: 'Open Study Tool', icon: BookOpen },
                    { label: 'Sync with Cohort', icon: RefreshCcw }
                  ].map((item, idx) => (
                    <button 
                      key={idx}
                      className="w-full group flex items-center justify-between p-3 rounded-lg bg-white/5 border border-transparent hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        <span className="text-[10px] font-bold font-mono uppercase tracking-wider">{item.label}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-dashed border-[var(--color-border)]/30 text-center">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-2">
                  Waiting for Instructor Command
                </p>
                <div className="inline-block w-8 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: [-32, 32] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-4 h-full bg-[var(--color-accent)]"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== TAB 2: ATTENDANCE REGISTRY ==================== */}
        {activeTab === 'attendance' && (
          <div className="lg:col-span-3 space-y-6">
            <div className="p-6 rounded-2xl bg-black/20 border border-[var(--color-border)]/50 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold font-mono uppercase tracking-widest flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[var(--color-accent)]" />
                  S3 Cohort registry console
                </h3>
                <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-[9px] font-bold font-mono border border-emerald-500/20">
                  98.4% ATTENDANCE RATE
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]/20 text-white/50 text-[10px] uppercase">
                      <th className="py-3 px-4">Student Name</th>
                      <th className="py-3 px-4">Syllabus Node</th>
                      <th className="py-3 px-4">Last Check-in</th>
                      <th className="py-3 px-4">Streak</th>
                      <th className="py-3 px-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Adams Latty", node: "NEXUS_S3_BIO_01", checkin: "08:12 AM UTC", streak: "18 Days", status: "Present", color: "text-emerald-400" },
                      { name: "Ssekabira David", node: "NEXUS_S3_BIO_02", checkin: "08:15 AM UTC", streak: "12 Days", status: "Present", color: "text-emerald-400" },
                      { name: "Mugisha Trevor", node: "NEXUS_S3_BIO_03", checkin: "08:19 AM UTC", streak: "15 Days", status: "Present", color: "text-emerald-400" },
                      { name: "Nsubuga Joel", node: "NEXUS_S3_BIO_04", checkin: "08:24 AM UTC", streak: "5 Days", status: "Late", color: "text-amber-400" },
                      { name: "Atwine Maria", node: "NEXUS_S3_BIO_05", checkin: "08:08 AM UTC", streak: "24 Days", status: "Present", color: "text-emerald-400" }
                    ].map((student, idx) => (
                      <tr key={idx} className="border-b border-[var(--color-border)]/10 hover:bg-white/5 transition-all">
                        <td className="py-3 px-4 font-bold">{student.name}</td>
                        <td className="py-3 px-4 text-white/50">{student.node}</td>
                        <td className="py-3 px-4 text-white/50">{student.checkin}</td>
                        <td className="py-3 px-4 text-[var(--color-accent)]">{student.streak}</td>
                        <td className={`py-3 px-4 text-right font-bold ${student.color}`}>// {student.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: TEACHER SYNC ==================== */}
        {activeTab === 'sync' && (
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 p-6 rounded-2xl bg-black/20 border border-[var(--color-border)]/50 backdrop-blur-md space-y-6">
                <div className="flex justify-between items-center border-b border-[var(--color-border)]/20 pb-4">
                  <h3 className="text-sm font-bold font-mono uppercase tracking-widest flex items-center gap-2">
                    <RefreshCcw className="w-4 h-4 text-[var(--color-accent)]" />
                    COHORT_SYNCHRONIZATION_MODULE
                  </h3>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-[var(--color-border)]/30 bg-white/5 font-mono text-xs space-y-3">
                    <div className="text-[var(--color-accent)] uppercase font-bold">// COMMAND STREAM ACTIVE</div>
                    <div className="text-white/40 text-[10px]">TIMESTAMP: {new Date().toISOString()}</div>
                    <div className="p-3 bg-black/60 rounded border border-white/5 font-sans leading-relaxed text-slate-300">
                      "Attention S3 Biology Cohort. Active syllabus node changed to CELLULAR RESPIRATION. Align your local PBL charts and submit energy vectors by Friday 18:00 UTC."
                    </div>
                    <div className="flex justify-between text-[10px] text-white/50">
                      <span>ISSUER: ARCHITECT_LATIF</span>
                      <span>DESTINATION: CELL_NEXUS_S3</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="Broadcast new synchronization command to cohort..."
                      className="flex-1 bg-black/40 border border-[var(--color-border)]/50 rounded-lg px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[var(--color-accent)] transition-all"
                    />
                    <button className="px-5 py-2.5 bg-[var(--color-accent)] text-black font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg hover:opacity-90 transition-all shrink-0">
                      // BROADCAST
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--color-border)]/30 bg-black/40 backdrop-blur-xl space-y-6">
                <h4 className="text-xs font-bold font-mono uppercase tracking-widest border-b border-[var(--color-border)]/20 pb-2">Node Sync Logs</h4>
                <div className="space-y-3.5 font-mono text-[9px] leading-relaxed text-white/60">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">[OK]</span>
                    <span>Node CYM_88C4_NEXUS connected successfully to cloud sync cluster.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400">[OK]</span>
                    <span>Synchronized 18 local attendance records to cloud registry.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">[INFO]</span>
                    <span>Broadcasting PBL Energy Vector data to 5 active student terminals.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400">[SYNC]</span>
                    <span>S3 Biology Syllabus node updated to 100% completion in local cache.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
