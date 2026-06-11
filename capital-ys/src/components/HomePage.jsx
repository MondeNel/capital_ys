// src/components/HomePage.jsx
import { useState, useEffect, useRef } from 'react';
import { FiZap, FiGrid, FiScissors, FiPackage, FiMail, FiSend, FiUser } from 'react-icons/fi';

const HomePage = ({ changePage }) => {
  // Count-up animation for stats
  const [counts, setCounts] = useState({ funded: 0, capital: 0, satisfaction: 0, support: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const stepTime = 20;
          const targetFunded = 500;
          const targetCapital = 50;
          const targetSatisfaction = 98;
          const targetSupport = 24;
          const steps = duration / stepTime;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            setCounts({
              funded: Math.min(Math.floor((targetFunded * step) / steps), targetFunded),
              capital: Math.min(Math.floor((targetCapital * step) / steps), targetCapital),
              satisfaction: Math.min(Math.floor((targetSatisfaction * step) / steps), targetSatisfaction),
              support: Math.min(Math.floor((targetSupport * step) / steps), targetSupport),
            });
            if (step >= steps) clearInterval(interval);
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      {/* Hero Section with animated gradient and abstract shapes */}
      <div className="relative bg-gradient-to-br from-[#E6F1FB] via-white to-white pt-12 pb-10 px-4 border-b border-gray-200 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#185FA5]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#185FA5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-5 animate-fadeIn">
            <FiZap size={12} /> Business growth, simplified
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-3xl leading-tight mb-4 animate-slideUp">
            Do you want funds to grow your <span className="text-[#185FA5]">business?</span>
          </h1>
          <p className="text-base text-gray-600 max-w-lg mb-6 animate-fadeIn delay-100">
            If you do not qualify, we help you qualify.{' '}
            <button onClick={() => changePage('services')} className="text-[#185FA5] underline font-medium hover:no-underline transition">Click here</button> to explore our services.<br />
            <button onClick={() => changePage('ecosystem')} className="text-[#185FA5] underline inline-flex items-center gap-1 mt-1 font-medium hover:no-underline transition">
              Connect to local suppliers nearby →
            </button>
          </p>
          <div className="flex flex-wrap gap-3 items-center animate-fadeIn delay-200">
            <button onClick={() => changePage('funding')} className="group bg-[#185FA5] text-white px-6 py-2.5 rounded-md text-sm font-medium flex items-center gap-1 shadow-md hover:shadow-lg transition-all hover:bg-[#0C447C] transform hover:-translate-y-0.5">
              <FiZap size={14} /> Get funding
            </button>
            <button onClick={() => changePage('subscribe')} className="border border-[#185FA5] text-[#185FA5] px-6 py-2.5 rounded-md text-sm font-medium bg-transparent hover:bg-[#185FA5]/5 transition-colors transform hover:-translate-y-0.5">
              View plans
            </button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-500 animate-fadeIn delay-300">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-[#185FA5]/20 border border-white flex items-center justify-center text-[10px] font-bold text-[#185FA5]"><FiUser size={12} /></div>
              <div className="w-6 h-6 rounded-full bg-[#185FA5]/20 border border-white flex items-center justify-center text-[10px] font-bold text-[#185FA5]"><FiUser size={12} /></div>
              <div className="w-6 h-6 rounded-full bg-[#185FA5]/20 border border-white flex items-center justify-center text-[10px] font-bold text-[#185FA5]"><FiUser size={12} /></div>
            </div>
            <span className="font-medium">Trusted by 500+ South African SMEs</span>
          </div>
        </div>
      </div>

      {/* Stats Section with count-up */}
      <div ref={statsRef} className="bg-white border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group p-4 rounded-xl transition-all hover:bg-gray-50">
              <div className="text-3xl md:text-4xl font-bold text-[#185FA5] group-hover:scale-110 transition-transform inline-block">{counts.funded}+</div>
              <div className="text-sm text-gray-500 mt-1">Businesses Funded</div>
            </div>
            <div className="group p-4 rounded-xl transition-all hover:bg-gray-50">
              <div className="text-3xl md:text-4xl font-bold text-[#185FA5] group-hover:scale-110 transition-transform inline-block">R{counts.capital}M+</div>
              <div className="text-sm text-gray-500 mt-1">Capital Accessed</div>
            </div>
            <div className="group p-4 rounded-xl transition-all hover:bg-gray-50">
              <div className="text-3xl md:text-4xl font-bold text-[#185FA5] group-hover:scale-110 transition-transform inline-block">{counts.satisfaction}%</div>
              <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
            </div>
            <div className="group p-4 rounded-xl transition-all hover:bg-gray-50">
              <div className="text-3xl md:text-4xl font-bold text-[#185FA5] group-hover:scale-110 transition-transform inline-block">{counts.support}/7</div>
              <div className="text-sm text-gray-500 mt-1">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Simple process</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">How Capital Ys works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-[#185FA5]/10 rounded-full flex items-center justify-center text-[#185FA5] text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Apply online</h3>
              <p className="text-gray-500 text-sm">Complete our simple application form in minutes.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-[#185FA5]/10 rounded-full flex items-center justify-center text-[#185FA5] text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Get matched</h3>
              <p className="text-gray-500 text-sm">We connect you with the right funding and services.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-[#185FA5]/10 rounded-full flex items-center justify-center text-[#185FA5] text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Grow your business</h3>
              <p className="text-gray-500 text-sm">Access capital and watch your business thrive.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings - Enhanced Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Featured listings</div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Advertised products & services</h2>
        <p className="text-gray-600 text-sm mb-5">Click any listing to view seller contact details</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "Chesa Nyama Supplies", cat: "Meat wholesale · Johannesburg", alert: "Seller contact: Thabo Dlamini · 071 234 5678 · thabo@example.com", icon: <FiGrid size={28} /> },
            { name: "Hair & Beauty Tools", cat: "Salon equipment · Soweto", alert: "Seller contact: Naledi Mokoena · 082 345 6789 · naledi@example.com", icon: <FiScissors size={28} /> },
            { name: "Spaza Bulk Goods", cat: "Grocery wholesale · Soweto", alert: "Seller contact: Sipho Ndlovu · 073 456 7890 · sipho@example.com", icon: <FiPackage size={28} /> }
          ].map((ad, idx) => (
            <div key={idx} onClick={() => alert(ad.alert)} className="border border-gray-200 rounded-xl p-4 hover:border-[#185FA5] hover:shadow-lg cursor-pointer transition-all transform hover:-translate-y-1 bg-white">
              <div className="h-16 bg-gradient-to-br from-[#B5D4F4] to-[#E6F1FB] rounded-md flex items-center justify-center text-[#185FA5] mb-3">{ad.icon}</div>
              <div className="font-semibold text-gray-900 text-sm">{ad.name}</div>
              <div className="text-gray-500 text-xs">{ad.cat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Section (partner strip) */}
      <div className="bg-white py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Trusted by innovative businesses across South Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-60">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map((partner, i) => (
              <span key={i} className="text-gray-400 font-semibold text-sm">{partner}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter - Enhanced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-[#185FA5]/5 to-[#E6F1FB] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#185FA5]/20 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#185FA5]/10 rounded-full">
              <FiMail className="text-[#185FA5]" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Stay in the loop</h3>
              <p className="text-xs text-gray-500">Get the latest updates about Capital Ys activities</p>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            <button className="bg-[#185FA5] text-white px-4 py-2 rounded-md text-sm whitespace-nowrap flex items-center gap-1 hover:bg-[#0C447C] transition shadow-sm hover:shadow">
              <FiSend size={14} /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;