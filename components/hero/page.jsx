import { ArrowRight, FileText, Box, PieChart, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-[rgb(83,154,248)] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[rgb(83,154,248)]"></span>
            Personal Income Tax Specialist
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Keep More of <br />
            <span className="text-[rgb(83,154,248)]">
              What You Earn.
            </span>
          </h1>
          
          <p className="text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
            Strategic tax planning for high-growth professionals. We maximize your take-home pay through legal, optimized structures and precise compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Start Analysis <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Our Solutions
            </button>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-8">
             <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                Trusted by professionals
             </div>
          </div>
        </div>

        {/* CSS-Only Animated Graphic */}
        <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center">
            <HeroGraphic />
        </div>
      </div>
    </section>
  );
};

// Replaced JS-reactive component with stable CSS-animated component
const HeroGraphic = () => {
  return (
    <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
      {/* Abstract Composition */}
      <div className="relative w-64 h-80 group">
        
        {/* Back Card Layer */}
        <div className="absolute inset-0 bg-blue-50 rounded-2xl transform translate-x-4 translate-y-4 rotate-3 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-6"></div>
        
        {/* Main Card Layer */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col justify-between transform transition-transform duration-500 group-hover:-translate-y-2">
            
            {/* Header Icon */}
            <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-[rgb(83,154,248)]/10 flex items-center justify-center text-[rgb(83,154,248)]">
                    <FileText size={24} />
                </div>
                <div className="px-2 py-1 rounded-md bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider">
                    Verified
                </div>
            </div>

            {/* Abstract Lines */}
            <div className="space-y-3">
                <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                <div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
            </div>

            {/* Bottom Section */}
            <div className="pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        <Box size={16} />
                    </div>
                    <div>
                        <div className="h-1.5 w-16 bg-slate-200 rounded-full mb-1"></div>
                        <div className="h-1.5 w-10 bg-slate-100 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Floating Elements - Animated with CSS */}
        <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-lg border border-slate-50 animate-float">
            <PieChart className="text-[rgb(83,154,248)]" size={28} />
        </div>

        <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-2xl shadow-lg border border-slate-50 animate-float-delayed">
            <ShieldCheck className="text-emerald-500" size={28} />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;