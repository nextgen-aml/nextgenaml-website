import { motion } from 'motion/react';
import { 
  FileSearch, 
  Settings2, 
  Fingerprint, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  History 
} from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Assess Your AML Readiness",
    description: "Understand exactly where your business stands today and what must be in place before Tranche 2 obligations apply.",
    icon: FileSearch
  },
  {
    id: "02",
    title: "Build Your Operating Framework",
    description: "Set up your AML/CTF program, roles, controls, case workflows, risk rules, and reporting structure calibrated to your industry.",
    icon: Settings2
  },
  {
    id: "03",
    title: "Verify Customers & Entities",
    description: "Capture information, collect documents, and trigger KYC/KYB verification through structured workflows.",
    icon: Fingerprint
  },
  {
    id: "04",
    title: "Screen & Score Risk",
    description: "Run sanctions, PEP, watchlist, and risk checks. The platform classifies cases from Low, Medium to High risk.",
    icon: ShieldCheck
  },
  {
    id: "05",
    title: "Escalate Red Flags",
    description: "Higher-risk cases route to the Compliance Officer with all evidence already organised and contextualised.",
    icon: AlertTriangle
  },
  {
    id: "06",
    title: "Record Decisions",
    description: "Capture approvals, rejections, EDD notes, suspicious matter considerations, and reporting actions defensibly.",
    icon: CheckCircle2
  },
  {
    id: "07",
    title: "Stay Audit-Ready",
    description: "Maintain evidence, logs, case timelines, monitoring history, and exportable records, every action timestamped, every decision attributable.",
    icon: History
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-navy-950 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.3em] block">
              NextGen AML PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              From onboarding to audit readiness, <br className="hidden md:block" />
              in one guided workflow.
            </h2>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1 text-center md:text-left space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="text-xs font-black text-emerald-500/50 uppercase tracking-widest">STEP {step.id}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                </div>

                <div className="hidden md:block shrink-0 px-4">
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-colors">
                      <span className="text-sm font-bold">{step.id}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
