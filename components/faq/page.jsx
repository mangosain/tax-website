import { ArrowRight, FileText, Box, PieChart, ShieldCheck } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the difference between Old vs New Tax Regime?",
      answer: "The Old Regime allows exemptions like HRA, LTA, and 80C deductions but has higher tax slab rates. The New Regime offers significantly lower tax rates but removes most exemptions."
    },
    {
      question: "Can I switch between tax regimes every year?",
      answer: "Salaried individuals can switch between the Old and New regimes every financial year. Business owners can only switch back once in their lifetime."
    },
    {
      question: "How does FBP Optimization increase my take-home pay?",
      answer: "Flexible Benefit Plans (FBP) allow you to restructure parts of your salary into tax-free components like meal coupons, fuel, and gadgets, reducing taxable income."
    },
    {
      question: "Is it mandatory to file ITR if my income is below 12 Lakhs?",
      answer: "While you may not have to pay tax due to Section 87A rebate, filing ITR is recommended for loan approvals, visa applications, and claiming refunds."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm">Common queries regarding tax compliance.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border-b border-gray-100 pb-4 last:border-0">
              <h3 className="text-sm font-bold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;