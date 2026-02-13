"use client";

import { useState, useEffect } from 'react';

const TaxCalculatorSection = () => {
  const [income, setIncome] = useState(1800000);
  const [result, setResult] = useState({
    deductions: 947400,
    taxable: 852600,
    tax: 83020
  });

  useEffect(() => {
    let estimatedDeductions = 50000 + 150000 + 25000 + (income * 0.25) + (income * 0.05);
    if (estimatedDeductions > income * 0.6) estimatedDeductions = income * 0.6;
    const taxable = Math.max(0, income - estimatedDeductions);
    let tax = 0;
    if (taxable > 300000) tax += (Math.min(taxable, 600000) - 300000) * 0.05;
    if (taxable > 600000) tax += (Math.min(taxable, 900000) - 600000) * 0.10;
    if (taxable > 900000) tax += (Math.min(taxable, 1200000) - 900000) * 0.15;
    if (taxable > 1200000) tax += (Math.min(taxable, 1500000) - 1200000) * 0.20;
    if (taxable > 1500000) tax += (taxable - 1500000) * 0.30;
    tax = tax * 1.04;

    setResult({
        deductions: Math.round(estimatedDeductions),
        taxable: Math.round(taxable),
        tax: Math.round(tax)
    });
  }, [income]);

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  
  return (
    <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Savings Estimator</h2>
                <p className="text-gray-500 text-sm">Estimate potential tax liability under an optimized structure.</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row overflow-hidden">
                {/* Left: Input */}
                <div className="flex-1 p-8 md:p-12 space-y-8 bg-white">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Annual Income</label>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-xl font-medium">₹</span>
                            <input 
                                type="number" 
                                value={income}
                                onChange={(e) => setIncome(Number(e.target.value))}
                                className="w-full text-gray-900 text-3xl font-bold outline-none border-b border-gray-200 focus:border-[rgb(83,154,248)] transition-colors py-2"
                            />
                        </div>
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
                         <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                             <span>₹5L</span>
                             <span>₹1.5Cr</span>
                         </div>
                    </div>
                </div>

                {/* Right: Results */}
                <div className="flex-1 bg-gray-50 p-8 md:p-12 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col justify-center">
                    <div className="text-center mb-8">
                        <div className="text-gray-500 text-xs font-bold uppercase mb-2 tracking-wider">Estimated Tax Payable</div>
                        <div className="text-3xl font-bold text-[rgb(83,154,248)]" suppressHydrationWarning>{formatCurrency(result.tax)}*</div>
                    </div>

                    <div className="space-y-0 divide-y divide-gray-200 border-y border-gray-200 mb-8">
                        <div className="flex justify-between items-center py-3">
                            <span className="text-gray-500 text-sm font-medium">Total Deductions</span>
                            <span className="font-bold text-gray-700" suppressHydrationWarning>{formatCurrency(result.deductions)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                            <span className="text-gray-500 text-sm font-medium">Taxable Income</span>
                            <span className="font-bold text-gray-700" suppressHydrationWarning>{formatCurrency(result.taxable)}</span>
                        </div>
                    </div>
                    
                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors">
                        Request Detailed Breakdown
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-4">* Estimates based on maximum eligible deductions.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TaxCalculatorSection;