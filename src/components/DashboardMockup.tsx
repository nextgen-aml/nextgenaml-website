import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  AlertCircle, 
  User, 
  ShieldCheck, 
  FileText, 
  Activity,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto lg:mx-0 scale-90 sm:scale-100">
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 h-64 w-64 bg-emerald-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-navy-900/10 blur-3xl" />

      {/* Main Dashboard Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative glass-card rounded-[24px] shadow-2xl p-6 flex flex-col gap-6 transform rotate-1"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200"></div>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Live Monitoring System</div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="text-xs text-slate-500 font-medium">Verified KYB</div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-navy-900">248</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-navy-900 text-white flex flex-col justify-between">
            <div className="text-xs opacity-60 uppercase font-bold tracking-tighter">Verified KYC</div>
            <div className="text-3xl font-bold">1,284</div>

          </div>
        </div>

        {/* Verification Table Mockup */}
        <div className="flex-1 space-y-3 pt-2">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-tighter">Recent Entity Verifications</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs font-mono">ST</div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Solaris Tech Ltd</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-tighter">ID: #49202-AU</div>
                </div>
              </div>
              <div className="px-2 py-1 bg-emerald-100 text-emerald-500 text-[10px] font-bold rounded uppercase tracking-wider">Verified</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs font-mono">RM</div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Riley & Mackenzie</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-tighter">ID: #11029-AU</div>
                </div>
              </div>
              <div className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">In Progress</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-auto w-full py-3 bg-navy-900 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
          <FileText className="h-4 w-4" />
          Generate AUSTRAC Report
        </button>
      </motion.div>

      {/* Floating Status Badge */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -top-4 -left-4 flex items-center gap-2 rounded-full glass-card py-2 px-3 shadow-xl"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">Live System</span>
      </motion.div>

      {/* Floating Detail Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -bottom-6 -left-8 glass-card p-4 rounded-xl shadow-xl w-48 hidden sm:block"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white overflow-hidden flex items-center justify-center text-[10px] font-bold text-emerald-700">
            JD
          </div>
          <div>
            <div className="text-[10px] font-bold text-navy-900">John Doe</div>
            <div className="text-[8px] text-slate-400 uppercase tracking-tighter">High Net Worth</div>
          </div>
        </div>
        <div className="px-2 py-1 bg-emerald-50 text-emerald-500 text-[8px] font-extrabold rounded text-center border border-emerald-100">
          PEP SCREENED & CLEARED
        </div>
      </motion.div>
    </div>
  );
}
