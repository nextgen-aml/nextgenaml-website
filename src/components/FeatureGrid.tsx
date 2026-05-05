import { motion } from 'motion/react';
import { 
  Briefcase, 
  ClipboardList, 
  Files, 
  ShieldCheck, 
  BarChart3,
  UserPlus,
  FileText,
  RotateCcw,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    id: "01",
    icon: Briefcase,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Case Management",
    body: "A structured workflow that tracks, investigates and report suspicious financial activities."
  },
  {
    id: "02",
    icon: Files,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Document Collection",
    body: "Guided checklists for staff and secure upload links for your customers."
  },
  {
    id: "03",
    icon: ClipboardList,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Know Your Business",
    body: "Capture identity, entity, beneficial ownership, and business information through guided workflows."
  },
  {
    id: "04",
    icon: ShieldCheck,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "ID Verification & Screening",
    body: "Connect to KYC, sanctions, PEP, and watchlist providers, all orchestrated within the platform."
  },
  {
    id: "05",
    icon: BarChart3,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Risk Scoring",
    body: "Configurable rule-based scoring that classifies cases and drives review decisions."
  },
  {
    id: "06",
    icon: UserPlus,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Compliance Review",
    body: "Route higher-risk cases to the Compliance Officer for EDD, decisioning, and final action."
  },
  {
    id: "07",
    icon: FileText,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Reporting Support",
    body: "Reporting-ready draft outputs prepared for officer review and AUSTRAC submission."
  },
  {
    id: "08",
    icon: RotateCcw,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    title: "Ongoing Monitoring",
    body: "Periodic re-screening, alerts, and monitoring across active customer records."
  }
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-16 border-b border-slate-100 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] block">
              THE PLATFORM
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              One platform for the complete <br className="hidden md:block" />
              AML Compliance lifecycle
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              The NextGen AML platform is designed with vast experience in digital innovation where every AUSTRAC obligation is fulfilled through the one operating environment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-emerald-500/30 hover:shadow-xl transition-all h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${feature.bgColor} ${feature.iconColor} group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300`}>
                  <feature.icon className="w-6 h-6 stroke-[2.5px]" />
                </div>
                <span className="text-xl font-bold text-slate-100 group-hover:text-emerald-500/10 transition-colors">
                  {feature.id}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-navy-950 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-4 bg-navy-950 text-white text-sm font-bold rounded-xl hover:bg-navy-900 transition-all hover:shadow-xl group cursor-pointer"
          >
            Explore the Platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
