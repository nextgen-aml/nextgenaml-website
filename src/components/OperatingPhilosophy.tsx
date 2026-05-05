import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function OperatingPhilosophy() {
  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden border-b border-slate-100">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative Quote Icon Background */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
            <Quote className="w-32 h-32 text-navy-950" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6 relative z-10"
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-[1.1]">
              "Technology drives control,<br />
              <span className="text-emerald-600 ">Strategy</span> delivers confidence."
            </blockquote>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-px w-8 bg-slate-200"></div>
              <p className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-[0.2em]">
                The NextGen AML operating philosophy
              </p>
              <div className="h-px w-8 bg-slate-200"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
