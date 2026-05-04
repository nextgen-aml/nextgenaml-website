import { motion } from 'motion/react';
import { ShieldAlert, Users, Repeat, ClipboardCheck, Timer } from 'lucide-react';

const problems = [
  {
    id: "01",
    label: "Risk",
    title: "Complex rules",
    description: "AUSTRAC obligations can feel technical, unfamiliar and difficult to interpret without a compliance background.",
    icon: ShieldAlert
  },
  {
    id: "02",
    label: "People",
    title: "No internal resource",
    description: "Most businesses do not have dedicated AML officers, analysts or in-house legal counsel to build a program from scratch.",
    icon: Users
  },
  {
    id: "03",
    label: "Process",
    title: "Manual workflows",
    description: "Documents, identity checks, customer notes and reviews sit fragmented across email, folders, and spreadsheets.",
    icon: Repeat
  },
  {
    id: "04",
    label: "Audit",
    title: "Audit exposure",
    description: "Without clear logs, controls, evidence and case history, proving compliance to AUSTRAC becomes near impossible.",
    icon: ClipboardCheck
  },
  {
    id: "05",
    label: "Time",
    title: "Time pressure",
    description: "Businesses must prepare before the 2026 deadline without disrupting daily commercial operations.",
    icon: Timer
  }
];

export default function ProblemSolution() {
  return (
    <section className="bg-white py-16 overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] block">
              THE OPERATIONAL REALITY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              AML compliance is coming. <br className="hidden md:block" />
              Most businesses are not operationally ready.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              For many real estate agencies, accountants, and professional service providers, AML/CTF is new territory. The challenge is not only understanding the law but also turning obligations into daily operating discipline, before the regulator asks for evidence.

            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-500/30 hover:bg-white hover:shadow-xl transition-all w-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.3333%-16px)] flex flex-col h-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white text-navy-900 group-hover:bg-emerald-500 group-hover:text-white shadow-sm transition-colors">
                  <problem.icon className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-slate-200 group-hover:text-emerald-500/20 transition-colors uppercase tracking-widest">
                  {problem.label}
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-navy-950 tracking-tight">{problem.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
