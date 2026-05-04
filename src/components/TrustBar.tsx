import { CheckCircle2, Scale, Lock, Cpu, Shield } from 'lucide-react';

const badges = [
  { icon: CheckCircle2, label: "AUSTRAC Aligned", color: "text-emerald-500" },
  { icon: Scale, label: "AML/CTF Act 2006 Compliant", color: "text-navy-900" },
  { icon: Lock, label: "Bank-Grade Data Security", color: "text-navy-900" },
  { icon: Cpu, label: "Automated Risk Assessment", color: "text-emerald-500" },
  { icon: Shield, label: "Australian-Built Platform", color: "text-navy-900" },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-100 py-10 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-8">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
            Built on the frameworks that matter
          </p>
        </div>
        
        <div className="flex flex-nowrap items-center justify-center gap-2 overflow-x-auto pb-4 lg:pb-0 lg:gap-0 lg:divide-x lg:divide-slate-300 scrollbar-hide">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center shrink-0 lg:px-4"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-navy-900/10 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-md">
                <badge.icon className={`h-3.5 w-3.5 ${badge.color}`} />
                <span className="text-[10px] font-bold text-navy-900 whitespace-nowrap uppercase tracking-tight">
                  {badge.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
