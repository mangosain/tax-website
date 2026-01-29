"use client";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const TaxCalculatorSection = () => {
  const [income, setIncome] = useState(1800000);
  const [result, setResult] = useState({
    deductions: 947400,
    taxable: 852600,
    tax: 83020,
  });

  // Simple reactive calculation on slider change
  useEffect(() => {
    // Logic simulating an "Optimized" Plan
    // Assumptions:
    // 1. Standard Deduction: 50k
    // 2. 80C: 1.5L
    // 3. 80D: 25k
    // 4. HRA/FBP: ~40% of Basic (Assumed Basic is 50% of Gross) -> 20% of Gross
    // 5. LTA/NPS/Gadgets: ~5% of Gross

    // Max Deductions Cap at ~50% for high earners in this "Super Saver" scenario
    let estimatedDeductions =
      50000 + 150000 + 25000 + income * 0.25 + income * 0.05;

    // Cap deductions reasonably so it's not negative
    if (estimatedDeductions > income * 0.6) estimatedDeductions = income * 0.6;

    const taxable = Math.max(0, income - estimatedDeductions); // Ensure not negative

    // Simplified New Regime Slabs for calculation (approx)
    let tax = 0;
    if (taxable > 300000) tax += (Math.min(taxable, 600000) - 300000) * 0.05;
    if (taxable > 600000) tax += (Math.min(taxable, 900000) - 600000) * 0.1;
    if (taxable > 900000) tax += (Math.min(taxable, 1200000) - 900000) * 0.15;
    if (taxable > 1200000) tax += (Math.min(taxable, 1500000) - 1200000) * 0.2;
    if (taxable > 1500000) tax += (taxable - 1500000) * 0.3;

    // Add Cess 4%
    tax = tax * 1.04;

    setResult({
      deductions: Math.round(estimatedDeductions),
      taxable: Math.round(taxable),
      tax: Math.round(tax),
    });
  }, [income]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Donut chart calculation
  const deductionPercentage =
    income > 0 ? (result.deductions / income) * 100 : 0;

  return (
    <section className="py-20 lg:py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Calculate Your Tax
          </h2>
          <p className="text-zinc-400">
            See how much legally optimized planning can save you.
          </p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Input */}
          <div className="flex-1 w-full space-y-8">
            {/* Increased space-y from 4 to 6 for better margin between label and input */}
            <div className="space-y-6">
              <label className="text-sm uppercase tracking-widest text-zinc-500 block">
                Yearly Income Amount
              </label>
              <div className="relative group">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-900 text-2xl font-bold pointer-events-none">
                  ₹
                </span>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full bg-white text-zinc-900 text-2xl font-bold py-4 pl-12 pr-6 rounded-lg shadow-inner outline-none focus:ring-2 focus:ring-zinc-400 transition-all"
                />
              </div>
              <p className="text-xs text-zinc-500">
                *Estimated calculation for optimized structure
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="range"
                min="500000"
                max="15000000"
                step="100000"
                value={income}
                onChange={(e) => setIncome(parseInt(e.target.value))}
                className="range-slider"
              />
              <div className="flex justify-between text-xs text-zinc-600 font-mono">
                <span>₹5L</span>
                <span>₹50L</span>
                <span>₹1Cr</span>
                <span>₹1.5Cr</span>
              </div>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Get Full Analysis <ChevronRight size={16} />
            </button>
          </div>

          {/* Right: Results */}
          <div className="flex-1 w-full bg-white rounded-xl p-8 text-zinc-900">
            <h3 className="text-lg font-bold mb-8 text-center">
              Projected Liability with Optimization
            </h3>

            <div className="flex flex-col items-center">
              {/* CSS Conic Gradient Donut Chart */}
              <div
                className="relative w-48 h-48 rounded-full mb-8 flex items-center justify-center"
                style={{
                  background: `conic-gradient(#22c55e ${deductionPercentage}%, #18181b 0)`,
                }}
              >
                <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center z-10">
                  <span className="text-xs text-zinc-500 uppercase">
                    Total Income
                  </span>
                  <span className="text-lg font-bold">
                    {formatCurrency(income)}
                  </span>
                </div>
              </div>

              <div className="w-full space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Potential Deductions</span>
                  </div>
                  <span className="font-bold">
                    {formatCurrency(result.deductions)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
                    <span>Taxable Income</span>
                  </div>
                  <span className="font-bold">
                    {formatCurrency(result.taxable)}
                  </span>
                </div>

                <div className="border-t border-zinc-200 my-4 pt-4 flex justify-between items-center">
                  <span className="font-bold text-lg">Tax Payable</span>
                  <span className="font-bold text-xl text-zinc-900">
                    {formatCurrency(result.tax)}*
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-zinc-400 mt-8 text-center">
                *Disclaimer: Figures are estimates based on maximum eligible
                deductions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxCalculatorSection;
