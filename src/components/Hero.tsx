import heroImage from './HeroImage.png';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 lg:pt-12 pb-0 bg-[#000000] min-h-[500px] lg:min-h-[700px]">
      {/* Background Mesh/Grid */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1A1F3A] to-[#000000] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 grid-pattern opacity-[0.05] pointer-events-none"></div>
      
      <div className="relative min-h-[500px] lg:min-h-[700px] flex flex-col justify-center w-full">
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Improved spacing to prevent overlap */}
            <div className="lg:col-span-6 xl:col-span-5 space-y-8 text-center lg:text-left z-20 pb-12 lg:pb-0">
              {/* Pre-label badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                AUSTRAC TRANCHE 2 · 1 JULY 2026
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl">
                AML Compliance Simplified with <span className="text-emerald-400">Precision Intelligence</span>
              </h1>

              <p className="text-base md:text-lg text-slate-300/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                NextGen AML is purpose built for Australian businesses to address complex AML/CTF obligations through smart technology, informed training and expert advice.
              </p>

              <div className="pt-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all flex items-center justify-center cursor-pointer active:translate-y-0"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column / Corner Image - Adjusted width and translated further right */}
        <div className="relative lg:absolute lg:right-0 lg:bottom-0 lg:w-[48%] xl:w-[50%] 2xl:w-[52%] z-10 pointer-events-none select-none overflow-hidden lg:overflow-visible flex justify-end items-end mt-8 lg:mt-0">
          <img 
            src={heroImage} 
            alt="NextGenAML Dashboard" 
            className="w-full h-auto object-contain object-right-bottom translate-y-4 lg:translate-x-10 lg:translate-y-0 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
