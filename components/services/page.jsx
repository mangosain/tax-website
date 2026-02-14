import { Wallet, FileText, BellRing, PieChart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
        icon: <Wallet size={20} />,
        title: "FBP Optimization",
        desc: "Restructure salary components like LTA and Meal Coupons to legally reduce taxable income."
    },
    {
        icon: <FileText size={20} />,
        title: "ITR Filing",
        desc: "Accurate, timely Income Tax Return filing for individuals. Eliminate errors and get faster refunds."
    },
    {
        icon: <BellRing size={20} />,
        title: "Notice Handling",
        desc: "Expert drafting of responses for scrutiny assessments to resolve issues quickly without penalties."
    },
     {
        icon: <PieChart size={20} />,
        title: "Smart Investing",
        desc: "Strategic guidance on Section 80C, 80D, and beyond to grow wealth while cutting tax liabilities."
    },{
        icon: <PieChart size={20} />,
        title: "Smart Investing",
        desc: "Strategic guidance on Section 80C, 80D, and beyond to grow wealth while cutting tax liabilities."
    },{
        icon: <PieChart size={20} />,
        title: "Smart Investing",
        desc: "Strategic guidance on Section 80C, 80D, and beyond to grow wealth while cutting tax liabilities."
    },{
        icon: <PieChart size={20} />,
        title: "Smart Investing",
        desc: "Strategic guidance on Section 80C, 80D, and beyond to grow wealth while cutting tax liabilities."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <p className="text-base text-gray-500">
                Professional tax services designed for compliance and efficiency.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
                <div key={i} className="group p-6 rounded-lg bg-white border border-gray-200 hover:border-[rgb(83,154,248)] transition-colors duration-200">
                    <div className="w-10 h-10 mb-5 bg-blue-50 rounded-md flex items-center justify-center text-[rgb(83,154,248)]">
                        {s.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;