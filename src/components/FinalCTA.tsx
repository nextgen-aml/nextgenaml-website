import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-navy-950 py-16 lg:py-20 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Be ready before AML <br className="hidden md:block" />
              compliance becomes urgent.
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              The businesses that prepare early will have cleaner workflows, trained teams, better records, and stronger confidence the day Tranche 2 obligations begin. NextGenAML helps you get there with a platform and support model built for modern Australian SMEs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Primary Action */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 px-10 py-5 bg-emerald-500 text-white text-lg font-bold rounded-2xl hover:bg-emerald-600 transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:-translate-y-1 group cursor-pointer w-full sm:w-auto justify-center">
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
