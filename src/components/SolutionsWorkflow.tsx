import { motion } from 'motion/react';
import { Search, BarChart3, FileText, GraduationCap, Bell, Check } from 'lucide-react';

const stages = [
  {
    number: "01",
    icon: Search,
    title: "Preparation & Scoping",
    body: "We confirm whether your business is captured under Tranche 2 and what that means for your specific services. You get a clear compliance roadmap based on your industry and risk profile.",
    deliverables: ["Eligibility Check", "Compliance Roadmap", "Tranche 2 Checklist"]
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Smart, Guided Risk Assessment",
    body: "A digital risk assessment workflow walks you through customer types, services, delivery channels, geographies, and transaction patterns. The system calculates a risk score and generates a risk register.",
    deliverables: ["Risk Score", "Risk Register", "Specialist Review"]
  },
  {
    number: "03",
    icon: FileText,
    title: "AML Program Creation & Implementation",
    body: "The platform generates a regulator-ready AML/CTF program aligned to your risk profile — including policies, procedures, and control measures. Our team helps you implement it into your real-world workflows.",
    deliverables: ["AML Program Doc", "Policy Templates", "Gap Analysis"]
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Staff Training & Enablement",
    body: "Role-specific training modules explain AML/CTF for principals, agents, accountants, and admins. Progress tracking and certificates give you audit-ready evidence of completion.",
    deliverables: ["Training Modules", "Completion Logs", "Live Workshops"]
  },
  {
    number: "05",
    icon: Bell,
    title: "Monitoring, Case Management & Reporting",
    body: "Automated monitoring, smart alerts, case management workflows, and AUSTRAC-ready reporting keep your business protected and audit-ready every day — not just at setup.",
    deliverables: ["Ongoing Alerts", "AUSTRAC Reports", "Case Management"]
  }
];

export default function SolutionsWorkflow() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-12">
        <div className="text-center mb-20">
          <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">
            How Our Solution Works
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
            From First Risk Assessment to Ongoing Monitoring.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We structure your AML journey into clear stages — so you always know what's next.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-500/20 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-16 md:space-y-24">
            {stages.map((stage, idx) => {
              const isEven = (idx + 1) % 2 === 0;
              
              return (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-10 hidden sm:block">
                    <div className="h-10 w-10 rounded-full bg-white border-4 border-emerald-500 shadow-sm flex items-center justify-center text-navy-900 font-black text-xs">
                      {stage.number}
                    </div>
                  </div>

                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Spacer for horizontal layout */}
                    <div className="hidden md:block md:w-1/2" />
                    
                    {/* Card Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-full md:w-1/2"
                    >
                      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                        {/* Mobile Number Badge */}
                        <div className="sm:hidden inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase">
                          Stage {stage.number}
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                          <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy-900">
                            <stage.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-navy-900 tracking-tight">
                              {stage.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                                Platform <Check className="h-2.5 w-2.5" />
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-navy-50 text-navy-900 text-[10px] font-bold uppercase tracking-wider">
                                Services <Check className="h-2.5 w-2.5" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-8">
                          {stage.body}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                          {stage.deliverables.map((chip, cIdx) => (
                            <span 
                              key={cIdx} 
                              className="px-3 py-1.5 rounded-lg bg-slate-100 text-navy-900 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
