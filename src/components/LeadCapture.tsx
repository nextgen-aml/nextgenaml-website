import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, CheckCircle2 } from 'lucide-react';

const HUBSPOT_SCRIPT_SRC = 'https://js-na2.hsforms.net/forms/embed/246111230.js';

export default function LeadCapture() {
  useEffect(() => {
    if (document.querySelector(`script[src="${HUBSPOT_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = HUBSPOT_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-[#0A1128] py-12 sm:py-16 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F3A] to-[#0A1128] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">
            Get Started
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Ready to Be Fully Compliant?
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto font-light">
            Get started with your compliance journey today. It only takes 2 minutes.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col"
          >
            <div className="mb-8 text-center">
              <h4 className="text-2xl font-black text-navy-900 mb-3 tracking-tight">
                Get in Touch
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Connect with our team to discuss your business requirements and find the perfect compliance setup.
              </p>
            </div>

            <div
              className="hs-form-frame min-h-[200px]"
              data-region="na2"
              data-form-id="4a68f8bf-abb4-4632-b9bc-85a1a8ac308d"
              data-portal-id="246111230"
            />
          </motion.div>
        </div>

        {/* Trust Signals */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <Lock className="h-4 w-4 text-emerald-500" /> 
              Your data is safe with us. We never share your information.
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> AUSTRAC-aligned platform
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Trusted by Australian businesses
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Built by compliance experts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
