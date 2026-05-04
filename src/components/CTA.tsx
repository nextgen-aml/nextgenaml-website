import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-navy-900 py-16 sm:py-20 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Ready to automate your <span className="text-emerald-500">AML workflow?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Join 2,000+ businesses using NextGen AML to handle compliance with confidence.
              Get set up in less than 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
              >
                Book a Free Demo
              </motion.button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                View Pricing
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="text-sm font-bold text-white">Trust Center</div>
              </div>
              <ul className="space-y-4">
                {['SOC2 Type II Certified', 'ISO 27001 Registered', 'Full AUSTRAC Alignment', '99.9% Platform Uptime'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-between text-xs font-bold text-white uppercase tracking-widest hover:text-emerald-500 transition-colors"
                >
                  Compliance Roadmap
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
