const FAQSection = () => {
  const faqs = [
    {
      question: "What is the difference between Old vs New Tax Regime?",
      answer:
        "The Old Regime allows exemptions like HRA, LTA, and 80C deductions but has higher tax slab rates. The New Regime offers significantly lower tax rates but removes most exemptions. We analyze your specific investment profile to recommend the option that maximizes your in-hand salary.",
    },
    {
      question: "Can I switch between tax regimes every year?",
      answer:
        "Salaried individuals can switch between the Old and New regimes every financial year based on what benefits them most. However, those with business or professional income (consultants/freelancers) can only switch back once in their lifetime.",
    },
    {
      question: "How does FBP Optimization increase my take-home pay?",
      answer:
        "Flexible Benefit Plans (FBP) allow you to restructure parts of your salary into tax-free components like meal coupons, fuel allowances, gadget purchasing schemes, and LTA. By maximizing these non-taxable components, you reduce your overall taxable income.",
    },
    {
      question: "Is it mandatory to file ITR if my income is below 7 Lakhs?",
      answer:
        "While you may not have to pay any tax due to the Section 87A rebate, filing an ITR is highly recommended. It serves as crucial proof of income for loan approvals, visa applications, and is necessary to claim refunds on any TDS deducted.",
    },
    {
      question:
        "What happens if I receive a notice from the Income Tax Department?",
      answer:
        "Do not panic. Notices are often generated due to minor mismatches in data. We handle scrutiny assessments, draft expert responses to explain discrepancies, and resolve issues quickly to prevent penalties.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400">
            Common queries about tax planning and compliance.
          </p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6 md:p-8 hover:border-zinc-700 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
