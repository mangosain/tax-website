import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-zinc-900 border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Why Choose An Independent Analyst?
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            Don't let software <br />
            <span className="text-zinc-500">miss the details.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed font-light">
            Automated platforms are great for simple cases, but they often miss
            the nuanced deductions that a human expert catches. I provide the
            same efficiency as a "Super Saver" app but with the strategic depth
            of a personal consultant.
          </p>
          <p className="text-zinc-400 leading-relaxed font-light">
            Whether it's optimizing your Flexible Benefit Plan (FBP) or handling
            complex capital gains, I ensure every rupee is accounted for.
          </p>
        </div>

        <div className="order-1 md:order-2 relative min-h-[400px] w-full bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-4">
            <FileText className="text-zinc-700" size={32} />
          </div>
          <div className="text-zinc-600 font-mono text-xs">// DASHBOARD</div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-sm">Compliance</span>
              <span className="text-white text-sm">100%</span>
            </div>
            <div className="h-px w-full bg-zinc-800"></div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-sm">Clients</span>
              <span className="text-white text-sm">500+</span>
            </div>
            <div className="h-px w-full bg-zinc-800"></div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-sm">Experience</span>
              <span className="text-white text-sm">5+ Years</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold font-serif text-xl">
              &lt;Name&gt;
            </div>
            <div className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
              Your Personal Tax Partner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
