import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Check, ArrowRight, Download, Phone } from 'lucide-react';

const steps = [
  {
    month: "JAN",
    title: "Audit Your Exposure",
    body: "Identify which of your daily activities qualify as \"designated services\" and define the scope of the AML/CTF obligations your specific business faces."
  },
  {
    month: "FEB",
    title: "Complete a Risk Assessment",
    body: "The cornerstone of compliance. You must identify, document, and quantify the specific money laundering and terrorism financing risks inherent to your industry and client base."
  },
  {
    month: "MARCH",
    title: "Register with AUSTRAC",
    body: "Officially register as a reporting entity. This establishes your business within the regulatory ecosystem and ensures you are correctly identified by the regulator."
  },
  {
    month: "APRIL",
    title: "Develop a Compliance Program",
    body: "Formalise your written AML/CTF Program. This is the mandatory \"rulebook\" that outlines exactly how your business will meet its legal obligations, manage risk, and handle reporting."
  },
  {
    month: "MAY",
    title: "Set up a Smart System",
    body: "Manual spreadsheets won't survive an audit. You need a reliable, automated workflow to collect, verify, screen, and store client information securely and transparently."
  },
  {
    month: "JUNE",
    title: "Train Your Team",
    body: "The final hurdle. Everyone in your business, from front-of-house to management, must understand exactly what AML obligations mean for their role."
  },
  {
    month: "JULY 1",
    title: "Operation Live",
    body: "The obligations begin. Your program is active, your team is trained, and your digital workflows are prepared to capture, evidence, and report as required by AUSTRAC from day one.",
    isFinal: true
  }
];

export default function ComplianceJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-16 border-b border-slate-200 overflow-hidden" id="timeline">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] block">
              THE ROAD TO 1 JULY 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              Months of preparation, <br className="hidden md:block" />
              One definitive deadline
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              AUSTRAC compliance is a journey. Whether you are catching up on previous milestones or finalizing your setup, this is the path to being audit-ready by 1 July.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[31px] sm:left-[39px] top-4 bottom-4 w-0.5 bg-slate-100 z-0" />
          
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-5 sm:gap-8 relative z-10"
              >
                {/* Node and Month */}
                <div className="flex flex-col items-center shrink-0 w-16 sm:w-20">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm outline outline-1 ${step.isFinal ? 'bg-emerald-500 text-white outline-emerald-500 shadow-emerald-500/20' : 'bg-navy-950 text-white outline-navy-950 shadow-navy-950/20'}`}>
                    {step.isFinal ? <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" /> : <span className="text-xs sm:text-sm font-bold">{idx + 1}</span>}
                  </div>
                  <span className={`mt-3 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${step.isFinal ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-navy-950 border-slate-200'}`}>
                    {step.month}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 p-5 rounded-2xl border ${step.isFinal ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-slate-100'}`}>
                  <h4 className="text-lg font-bold text-navy-950 mb-3 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-center text-center space-y-6"
          >
            <div className="space-y-2">
              <p className="text-navy-950 font-bold text-xl tracking-tight">Need to fast track urgently?</p>
              <p className="text-slate-500 text-sm">Our specialists can help you navigate the 1 July deadline with confidence.</p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 px-8 py-4 bg-navy-950 text-white text-sm font-bold rounded-xl hover:bg-navy-900 transition-all hover:shadow-xl hover:-translate-y-1 group cursor-pointer">
              <Phone className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
              Book a Strategy Call
            </button>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
