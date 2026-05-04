import { motion } from 'motion/react';
import { Timer, ShieldAlert, TrendingDown, Rocket, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Timer,
    title: "Save Time on Every Case",
    desc: "Automated workflows replace hours of manual work. Your team handles compliance in minutes — not half a day."
  },
  {
    icon: ShieldAlert,
    title: "Always Audit-Ready",
    desc: "Every action, every check, every decision is logged and timestamped automatically. When AUSTRAC reviews your business — you're ready."
  },
  {
    icon: TrendingDown,
    title: "Reduce Your Risk Exposure",
    desc: "Automated screening catches what human review misses. Fewer gaps, fewer flags, stronger protection against financial crime risk."
  },
  {
    icon: Rocket,
    title: "Ready from Day One",
    desc: "NextGen AML is purpose-built for Tranche 2. Get your business fully compliant — without the stress, the confusion, or the last-minute scramble."
  }
];

export default function Benefits() {
  return (
    <section className="bg-white py-14 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">
            Why NextGen AML
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Built for Businesses. Not Just Compliance Teams.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)"
              }}
              className="p-6 rounded-[28px] bg-slate-50 border border-slate-100 hover:border-emerald-400 group transition-all duration-300 flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="h-12 w-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-navy-900 shadow-sm transition-colors group-hover:bg-navy-900 group-hover:text-white">
                <benefit.icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all inline-flex items-center justify-center gap-2 group"
          >
            Start your compliance journey today 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}
