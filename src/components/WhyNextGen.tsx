import { motion } from 'motion/react';
import { Target, Users2, ShieldCheck, TrendingUp } from 'lucide-react';

const pillars = [
  {
    id: "01",
    title: "Precision by Design",
    keywords: ["Detail-oriented", "Professional"],
    description: "We navigate the granular complexities of the AML/CTF Act with surgical accuracy. Every case, check, document, decision and escalation is captured with discipline.",
    icon: Target
  },
  {
    id: "02",
    title: "Human-Centric Compliance",
    keywords: ["Approachable", "Supportive"],
    description: "We remove the regulatory fear factor. Complex AUSTRAC obligations become plain, practical, business-ready workflows under the guidance of a compliance expert.",
    icon: Users2
  },
  {
    id: "03",
    title: "Targeted Risk Strategy",
    keywords: ["Specialised", "Efficient"],
    description: 'We do not believe in "one size fits all". Our solutions are specifically calibrated to your industry\'s unique AUSTRAC risk profile, focusing effort where it matters most.',
    icon: ShieldCheck
  },
  {
    id: "04",
    title: "Integrity-Led Growth",
    keywords: ["Professional", "Forward-looking"],
    description: " We design compliance solutions that scale with your business and support long-term success. Our AML solutions protect your reputation, strengthen client trust and gives your business the confidence to grow.",
    icon: TrendingUp
  }
];

export default function WhyNextGen() {
  return (
    <section className="bg-slate-50 py-24 border-b border-slate-200 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] block">
              WHY NEXTGENAML
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
              Premium compliance capability, <br className="hidden md:block" />
              built for SMBs.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              NextGen AML is a modern AML/CTF compliance organisation supported by a RegTech platform designed to embed compliance into daily operations without enterprise overhead.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-3xl relative overflow-hidden bg-white border border-slate-100 hover:border-emerald-500/30 hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-6xl font-black text-slate-100 group-hover:text-emerald-500/10 transition-colors">
                  {pillar.id}
                </span>
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <pillar.icon className="w-6 h-6 stroke-[2.5px]" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-bold text-navy-950 tracking-tight">
                      {pillar.title}
                    </h3>
                    <div className="flex items-center gap-2">
                       {pillar.keywords.map((kw, kIdx) => (
                         <span key={kw} className="text-[13px] font-bold text-emerald-600 uppercase tracking-widest flex items-center">
                           {kw}
                           {kIdx < pillar.keywords.length - 1 && <span className="mx-2 opacity-30 text-navy-950">·</span>}
                         </span>
                       ))}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
