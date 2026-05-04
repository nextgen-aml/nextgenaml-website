import { motion } from 'motion/react';
import { Home, Calculator, Gavel } from 'lucide-react';

export default function IndustryStrip() {
  const industries = [
    { 
      name: 'Real Estate', 
      icon: Home 
    },
    { 
      name: 'Accounting', 
      icon: Calculator 
    },
    { 
      name: 'Conveyancing', 
      icon: Gavel 
    }
  ];

  return (
    <div className="bg-navy-950 py-8 relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] text-center opacity-70"
          >
            BUILT FOR new entrants to the Tranche 2 AML/CTF obligations
          </motion.span>
          
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <industry.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-white font-medium text-sm tracking-tight whitespace-nowrap">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
