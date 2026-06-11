// src/components/SubscribePage.jsx
import { FiCheck, FiX, FiStar, FiTrendingUp, FiUsers, FiBriefcase, FiCreditCard } from 'react-icons/fi';

const SubscribePage = () => {
  const plans = [
    {
      name: "Basic",
      tag: "basic",
      price: "R0",
      period: "/ month",
      featured: false,
      popular: false,
      features: [
        { text: "Newsletter access", included: true },
        { text: "View home page", included: true },
        { text: "Ask questions", included: true },
        { text: "Funding page access", included: false },
        { text: "Comment on reviews", included: false }
      ],
      buttonText: "Get started",
      buttonStyle: "outline"
    },
    {
      name: "Advanced",
      tag: "advance",
      price: "Contact us",
      period: "for pricing",
      featured: true,
      popular: true,
      features: [
        { text: "All basic features", included: true },
        { text: "Funding page access", included: true },
        { text: "Comment on reviews", included: true },
        { text: "Advertise products", included: true },
        { text: "Limited expert access", included: true },
        { text: "Business trainings", included: true }
      ],
      buttonText: "Upgrade",
      buttonStyle: "primary"
    },
    {
      name: "Premium",
      tag: "premium",
      price: "Contact us",
      period: "for pricing",
      featured: false,
      popular: false,
      features: [
        { text: "All advanced features", included: true },
        { text: "Auto-qualify for funding", included: true },
        { text: "Unlimited expert access", included: true },
        { text: "Free business training", included: true },
        { text: "Unlimited all services", included: true }
      ],
      buttonText: "Go premium",
      buttonStyle: "premium"
    },
    {
      name: "Once-off",
      tag: "once",
      price: "Per service",
      period: "pricing",
      featured: false,
      popular: false,
      features: [
        { text: "All basic services", included: true },
        { text: "Pay per service used", included: true },
        { text: "No commitment", included: true }
      ],
      buttonText: "Buy service",
      buttonStyle: "outline"
    }
  ];

  const tagColors = {
    basic: "bg-[#E6F1FB] text-[#0C447C]",
    advance: "bg-[#EAF3DE] text-[#27500A]",
    premium: "bg-[#EEEDFE] text-[#3C3489]",
    once: "bg-[#F1EFE8] text-[#444441]"
  };

  const buttonStyles = {
    outline: "border border-[#185FA5] text-[#185FA5] bg-transparent hover:bg-[#185FA5]/5",
    primary: "bg-[#185FA5] text-white hover:bg-[#0C447C]",
    premium: "bg-[#534AB7] text-white hover:bg-[#41378F]"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Plans</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Choose how you access Capital Ys</h1>
        <p className="text-gray-600 text-sm mt-2">All subscriptions are subject to terms and conditions.</p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative bg-white rounded-xl transition-all hover:shadow-lg ${
              plan.featured
                ? 'border-2 border-[#185FA5] shadow-md'
                : 'border border-gray-200 shadow-sm'
            } p-6 flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#185FA5] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <FiStar size={12} /> Most Popular
              </div>
            )}
            
            {/* Plan header */}
            <div className="mb-4">
              <div className={`inline-block text-xs px-3 py-1 rounded-full ${tagColors[plan.tag]}`}>
                {plan.name}
              </div>
              <div className="mt-3">
                <div className="text-2xl font-bold text-[#185FA5]">{plan.price}</div>
                <div className="text-xs text-gray-500">{plan.period}</div>
              </div>
            </div>

            {/* Features list */}
            <ul className="space-y-2 flex-grow mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  {feature.included ? (
                    <FiCheck className="text-[#1D9E75] flex-shrink-0 mt-0.5" size={16} />
                  ) : (
                    <FiX className="text-[#E24B4A] flex-shrink-0 mt-0.5" size={16} />
                  )}
                  <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${buttonStyles[plan.buttonStyle]}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Terms footnote */}
      <p className="text-center text-xs text-gray-500 mt-8">
        <button className="text-[#185FA5] hover:underline" onClick={() => alert("Terms and conditions would appear here.")}>
          Terms and conditions
        </button> apply to all subscriptions.
      </p>
    </div>
  );
};

export default SubscribePage;