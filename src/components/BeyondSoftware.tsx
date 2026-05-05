import { motion } from 'motion/react';
import { Monitor, Handshake, ArrowRight } from 'lucide-react';

const platformFeatures = [
  "Role-based access for Admin, Staff, Compliance Officer, and Auditor",
  "Configurable risk rules and case routing logic",
  "Verification and screening integrations",
  "Subscription and credit-based usage model",
  "Full audit logs and exportable case records"
];

const serviceFeatures = [
  "AML readiness assessment and gap analysis",
  "AML/CTF program design and documentation",
  "Platform configuration to your risk profile",
  "Staff training tailored to your requirement",
  "Ongoing monitoring, audit prep, and improvement support"
];

export default function BeyondSoftware() {
  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.3em] block">
              BEYOND SOFTWARE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              A full-service compliance partner,<br className="hidden md:block" />
              not just a platform login.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Tools alone do not produce compliant outcomes. NextGen AML pairs the platform with hands-on advisory services so your team adopts the right workflows, asks the right questions, and stays prepared for audit and regulatory scrutiny.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Platform Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-navy-950 text-white group-hover:bg-emerald-500 transition-colors">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 tracking-tight uppercase">Platform</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl font-bold text-navy-950">
                  The operating system for AML compliance.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  A role driven platform that automates AUSTRAC compliance by integrating KYC/KYB, screening, risk scoring, EDD, monitoring and auditing into your daily workflows.
                </p>
              </div>

              <ul className="space-y-4 border-t border-slate-100 pt-8">
                {platformFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-950 rounded-3xl p-8 md:p-10 border border-white/5 shadow-sm hover:shadow-2xl transition-all group"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500 text-white">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Advisory Services</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl font-bold text-white">
                  The expertise that gets compliance right.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  A team of compliance practitioners help you interpret obligations, configure the platform to your business model, train your people, and operate the program once it is live.
                </p>
              </div>

              <ul className="space-y-4 border-t border-white/10 pt-8">
                {serviceFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
