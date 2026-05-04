import { motion } from 'motion/react';
import { 
  Home, 
  BookOpen, 
  Scale, 
  ArrowRight
} from 'lucide-react';

const industries = [
  {
    icon: Home,
    name: "Real Estate Agents",
    description: "Simplify compliance for residential and commercial sales."
  },
  {
    icon: BookOpen,
    name: "Accountants & Bookkeepers",
    description: "Audit-ready internal controls for financial services providers."
  },
  {
    icon: Scale,
    name: "Lawyers & Conveyancers",
    description: "Streamlined KYC for clients and trust account reporting."
  }
];

export default function IndustryCards() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">
            Who We Serve
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
            Built for Every Tranche 2 Business.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            If your business is caught by the AML/CTF reforms, NextGen AML is built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group h-56 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 border border-slate-100 bg-white"
            >
              {/* Default State */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h4 className="text-base font-bold text-navy-900 leading-tight">
                  {industry.name}
                </h4>
              </div>

              {/* Hover State Backdrop Fill */}
              <div className="absolute inset-0 bg-navy-900 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" />

              {/* Hover State Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <industry.icon className="h-8 w-8 text-emerald-400 mb-4" />
                <h4 className="text-base font-bold text-white mb-2">
                  {industry.name}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{industry.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
