import { motion } from 'motion/react';
import { Monitor, Users, Check, Plus } from 'lucide-react';

export default function WhatWeOffer() {
  const softwareBullets = [
    "Digital KYC/KYB verification",
    "Automated risk scoring",
    "Ongoing customer monitoring",
    "Case management & audit trails",
    "AUSTRAC-ready reporting",
    "Staff training modules"
  ];

  const servicesBullets = [
    "Risk assessment design & validation",
    "AML program drafting",
    "AUSTRAC registration support",
    "Staff training workshops",
    "Outsourced client checks for complex cases"
  ];

  return (
    <section className="bg-white border-y border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 sm:py-20">
        <div className="relative">
          {/* Central Divider Decor */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center group pointer-events-none z-20">
            <div className="w-[1px] h-full bg-navy-900/10" />
            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-white border border-navy-900/10 p-3 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <Plus className="h-6 w-6 text-navy-900" strokeWidth={3} />
              </div>
              <span className="mt-4 text-[10px] font-black uppercase tracking-widest text-navy-900/40 bg-white px-3 py-1">
                Stronger Together
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
            {/* Left Column: Software */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-24 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="h-16 w-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-8 shadow-sm">
                <Monitor className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-black text-navy-900 mb-6 tracking-tight">
                Compliance Software
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                A purpose-built digital platform that automates your AML/CTF obligations from onboarding through to reporting.
              </p>
              
              <ul className="space-y-4 w-full">
                {softwareBullets.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium group">
                    <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Services */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-24 flex flex-col items-center lg:items-start text-center lg:text-left border-t lg:border-t-0 border-slate-100 pt-16 lg:pt-0"
            >
              <div className="h-16 w-16 rounded-2xl bg-navy-50 text-navy-900 flex items-center justify-center mb-8 shadow-sm">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-black text-navy-900 mb-6 tracking-tight">
                Expert Services
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                A specialist team that helps you design, implement, and maintain your AML program — so you're never alone in this.
              </p>
              
              <ul className="space-y-4 w-full">
                {servicesBullets.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium group">
                    <div className="h-5 w-5 rounded-full bg-navy-900 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Check className="h-3 w-3" strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
