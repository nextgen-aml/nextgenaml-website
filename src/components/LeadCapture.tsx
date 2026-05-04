import { motion } from 'motion/react';
import { Lock, CheckCircle2 } from 'lucide-react';

const inputClasses = "w-full rounded-lg bg-white border border-navy-900/10 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all";
const labelClasses = "block text-[11px] font-bold text-navy-900/60 uppercase tracking-widest mb-1.5 ml-1";

export default function LeadCapture() {
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
          {/* Main Card - Book a Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col"
          >
            <div className="mb-10 text-center">
              <h4 className="text-2xl font-black text-navy-900 mb-3 tracking-tight">
                Get in Touch
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Connect with our team to discuss your business requirements and find the perfect compliance setup.
              </p>
            </div>

            <form className="space-y-5 flex-grow" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Full Name*</label>
                  <input type="text" placeholder="Full Name" className={inputClasses} required />
                </div>
                <div>
                  <label className={labelClasses}>Business Name</label>
                  <input type="text" placeholder="Business Name" className={inputClasses} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Email Address*</label>
                  <input type="email" placeholder="Email address" className={inputClasses} required />
                </div>
                <div>
                  <label className={labelClasses}>Phone Number*</label>
                  <input type="tel" placeholder="Phone Number" className={inputClasses} required />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Message</label>
                <textarea 
                  placeholder="How can we help your business with compliance?" 
                  className={`${inputClasses} h-32 resize-none`}
                />
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Contact Us
              </button>
            </form>
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
