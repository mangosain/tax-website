"use client";
import React from "react";
import { Wallet, FileText, BellRing, PieChart } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Wallet size={24} />,
      title: "FBP Optimization",
      desc: "Restructure your salary components (LTA, HRA, Meal Coupons) to legally reduce taxable income and increase monthly in-hand salary.",
    },
    {
      icon: <FileText size={24} />,
      title: "ITR Filing & Compliance",
      desc: "Accurate, timely Income Tax Return filing for individuals and freelancers. Eliminate errors and ensure faster refunds.",
    },
    {
      icon: <BellRing size={24} />,
      title: "Notice Management",
      desc: "Received a notice from the IT Department? I handle scrutiny assessments and draft expert responses to resolve issues quickly.",
    },
    {
      icon: <PieChart size={24} />,
      title: "Investment Planning",
      desc: "Strategic guidance on Section 80C, 80D, and beyond. Invest efficiently to grow wealth while cutting tax liabilities.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-zinc-950 border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Tax Solutions
            </h2>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Most Indian professionals overpay taxes simply because they don't
              utilize the provisions available to them. I bridge that gap.
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm mt-4">
              My services are comparable to top-tier fintech products but
              delivered with personalized, human expertise.
            </p>
            <div className="mt-8 h-px w-20 bg-white"></div>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((s, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 mb-6 border border-zinc-800 text-white flex items-center justify-center font-mono text-xs rounded-sm group-hover:bg-white group-hover:text-black transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
