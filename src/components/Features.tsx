import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, BarChart3, Globe, Lock } from 'lucide-react';

const features = [
  {
    title: "AUSTRAC Aligned",
    desc: "Purpose-built for Australian regulatory requirements and Tranche 2 obligations.",
    icon: ShieldCheck,
  },
  {
    title: "Instant KYC",
    desc: "Verify individuals and entities in seconds with global data source integration.",
    icon: Users,
  },
  {
    title: "Real-time Monitoring",
    desc: "Continuous scanning against sanctions, PEPs, and adverse media lists.",
    icon: Zap,
  },
  {
    title: "Advanced Reporting",
    desc: "Automated generation of SMRs and TTRs ready for direct submission.",
    icon: BarChart3,
  },
  {
    title: "Global Reach",
    desc: "Cross-border compliance covering over 200 jurisdictions and territories.",
    icon: Globe,
  },
  {
    title: "Enterprise Security",
    desc: "Military-grade encryption and SOC2 Type II certified data handling.",
    icon: Lock,
  }
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Features</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">Everything you need to stay compliant. Nothing more.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-2xl transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-slate-50 text-navy-900 flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">{f.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
