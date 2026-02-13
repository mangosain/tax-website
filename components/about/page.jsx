
import { ArrowRight, FileText, Box, PieChart, ShieldCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-6">
            <div className="text-xs font-bold text-[rgb(83,154,248)] uppercase tracking-widest">Why Go Independent?</div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                Personalized strategy, <br/>
                <span className="text-gray-500">not automated guesswork.</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                    Automated platforms are effective for simple filings, but they often miss nuanced deductions available to higher tax brackets. I provide the efficiency of digital tools with the strategic oversight of a personal consultant.
                </p>
                <p>
                    Whether maximizing your Flexible Benefit Plan (FBP) or navigating complex capital gains, every rupee is accounted for with precision.
                </p>
            </div>
            
            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-gray-200 mt-6">
                <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Audits Failed</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Data Privacy</div>
                </div>
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center font-bold text-lg text-gray-600">S</div>
                <div>
                    <div className="font-bold text-gray-900 text-base">SaHiTax</div>
                    <div className="text-gray-500 text-xs">Smart, Simple, Sahi Taxation</div>
                </div>
            </div>
            <div className="space-y-0 divide-y divide-gray-100">
                <div className="py-4 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Compliance Score</span>
                    <span className="font-mono text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">100%</span>
                </div>
                <div className="py-4 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Clients Served</span>
                    <span className="font-mono text-sm font-medium text-gray-900">500+</span>
                </div>
                <div className="py-4 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Experience</span>
                    <span className="font-mono text-sm font-medium text-gray-900">5+ Years</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;