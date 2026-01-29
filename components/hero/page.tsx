"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950 border-b border-zinc-900"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <WaveCanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <div className="lg:col-span-12 space-y-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] tracking-tight">
            Stop Losing <br />
            <span className="text-zinc-500 italic">Your Salary.</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
            Optimise your taxes, maximize your take-home pay, and stay 100%
            compliant. I help salaried professionals and businesses in India
            structure their income to save what they earn.
          </p>

          <p className="hidden md:block text-base text-zinc-500 max-w-lg leading-relaxed">
            From Flexi Benefit Plans (FBP) to strategic investment declarations
            under 80C, I ensure you aren't paying a penny more than necessary.
            Audit-proof your finances today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6 w-full sm:w-auto">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white text-zinc-950 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 rounded-sm w-full sm:w-auto"
            >
              Reach out <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- UTILITIES: WAVE CANVAS ---
const WaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width, height;
    let frame = 0;
    const mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const lines = 40;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      frame += 0.01;

      // Dark blue/slate gradient stroke
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(100, 116, 139, 0.1)"); // Slate 500 low opacity
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.1)"); // Blue 500 low opacity
      gradient.addColorStop(1, "rgba(30, 58, 138, 0.1)"); // Dark blue

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = gradient;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const yOffset = (height / lines) * i;

        for (let x = 0; x <= width; x += 15) {
          // Base sine wave
          let y = yOffset + Math.sin(x * 0.008 + frame + i * 0.3) * 25;

          // Interaction ripple
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 250;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            // Push lines away vertically based on mouse proximity
            y += Math.sin(dist * 0.05 - frame * 4) * force * 40;
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default HeroSection;
