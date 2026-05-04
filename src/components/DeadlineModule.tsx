import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';

export default function DeadlineModule() {
  const targetDate = new Date('2026-07-01T00:00:00+10:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-navy-950/5 border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 text-white text-[10px] font-bold uppercase tracking-widest">
                <Clock className="w-3 h-3" />
                THE TRANCHE 2 CLOCK
              </div>
              
              <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight">
                Compliance obligations begin <span className="text-emerald-500">1 July 2026</span>.
              </h2>
              
              <h1 className="text-xl md:text-2xl font-semibold text-slate-600 leading-relaxed">
                Are You Ready Yet? 
              </h1>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-950 text-white font-bold rounded-xl hover:bg-navy-900 transition-colors group cursor-pointer"
              >
                Start your readiness review
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.mins },
                  { label: 'Secs', value: timeLeft.secs }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-navy-900 text-white rounded-2xl shadow-xl shadow-navy-900/20 font-bold text-xl sm:text-2xl mb-2">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
