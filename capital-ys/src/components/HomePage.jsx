// src/components/HomePage.jsx
import { useState, useEffect, useRef } from 'react';
import { FiZap, FiGrid, FiScissors, FiPackage, FiMail, FiSend, FiUser, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

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
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="bg-white text-slate-900 antialiased selection:bg-[#185FA5]/10 selection:text-[#185FA5]">
      
      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center bg-[#ffffff] pt-20 pb-16 px-4 overflow-hidden">
        {/* Modern Ambient Gowns instead of standard sharp circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#185FA5]/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-bl from-[#185FA5]/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto z-10 text-center flex flex-col items-center">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 text-[#185FA5] text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur-md animate-fadeIn">
            <FiZap className="fill-[#185FA5]/10" size={12} /> 
            <span className="text-slate-500 font-normal">Introducing</span> Business growth, simplified
          </div>

          {/* Typography scale up with tighter tracking */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight max-w-4xl leading-[1.1] mb-6 animate-slideUp">
            Do you want funds to grow your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#185FA5] to-[#257cd4]">business?</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl font-light leading-relaxed mb-10 animate-fadeIn delay-100">
            If you do not qualify for traditional lines, we help you align. Explore our tailored micro-capital models or match directly with verified ecosystems.
          </p>

          {/* High Sophistication CTA Stack */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md animate-fadeIn delay-200">
            <button 
              onClick={() => changePage('funding')} 
              className="w-full sm:w-auto bg-[#185FA5] text-white px-8 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(24,95,165,0.2)] hover:shadow-[0_15px_35px_rgba(24,95,165,0.3)] transition-all hover:bg-[#124b83] transform hover:-translate-y-0.5"
            >
              Get funding <FiArrowRight size={16} />
            </button>
            <button 
              onClick={() => changePage('subscribe')} 
              className="w-full sm:w-auto border border-slate-200 bg-white text-slate-700 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm transform hover:-translate-y-0.5"
            >
              View plans
            </button>
          </div>

          {/* Contextual Secondary Micro Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <button onClick={() => changePage('services')} className="hover:text-[#185FA5] transition flex items-center gap-1">
              <FiCheckCircle size={13} className="text-[#185FA5]" /> Alternative qualifying structures
            </button>
            <span className="hidden sm:inline text-slate-200">|</span>
            <button onClick={() => changePage('ecosystem')} className="hover:text-[#185FA5] transition group flex items-center gap-0.5">
              Connect to local suppliers nearby <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>

          {/* Social Proof Avatars */}
          <div className="mt-12 flex items-center gap-3 bg-slate-50/60 border border-slate-100 px-4 py-2 rounded-full shadow-sm animate-fadeIn delay-300">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-[#185FA5] border-2 border-white flex items-center justify-center text-white"><FiUser size={12} /></div>
              <div className="w-7 h-7 rounded-full bg-[#257cd4] border-2 border-white flex items-center justify-center text-white"><FiUser size={12} /></div>
              <div className="w-7 h-7 rounded-full bg-[#4ba3ff] border-2 border-white flex items-center justify-center text-white"><FiUser size={12} /></div>
            </div>
            <span className="text-xs font-semibold text-slate-600 tracking-wide">Trusted by 500+ South African SMEs</span>
          </div>
        </div>
      </div>

      {/* Stats Dashboard Layout */}
      <div ref={statsRef} className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-slate-100">
            <div className="text-center md:px-4">
              <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{counts.funded}+</div>
              <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mt-2">Businesses Funded</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-3xl md:text-4xl font-black text-[#185FA5] tracking-tight">R{counts.capital}M+</div>
              <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mt-2">Capital Accessed</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{counts.satisfaction}%</div>
              <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mt-2">Client Satisfaction</div>
            </div>
            <div className="text-center md:px-4">
              <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{counts.support}/7</div>
              <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mt-2">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#185FA5] text-xs font-bold tracking-widest uppercase bg-[#185FA5]/5 px-3 py-1 rounded-md">Simple framework</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-4">How Capital Ys works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(24,95,165,0.04)] transition-all transform hover:-translate-y-1 group">
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#185FA5] group-hover:text-white group-hover:border-[#185FA5] transition-all">01</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Apply online</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Complete our hyper-simplified digitized structural application form within minutes.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(24,95,165,0.04)] transition-all transform hover:-translate-y-1 group">
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#185FA5] group-hover:text-white group-hover:border-[#185FA5] transition-all">02</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Get matched</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Algorithmic routing hooks your business structure directly into active institutional nodes.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(24,95,165,0.04)] transition-all transform hover:-translate-y-1 group">
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#185FA5] group-hover:text-white group-hover:border-[#185FA5] transition-all">03</div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Grow your business</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Deploy deployed capital straight into supply ecosystems and scale operations seamlessly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#185FA5] text-xs font-bold tracking-widest uppercase">Ecosystem network</span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-2">Advertised products & services</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs sm:text-right">Click any listing securely to reveal wholesale vendor details.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "Chesa Nyama Supplies", cat: "Meat wholesale · Johannesburg", alert: "Seller contact: Thabo Dlamini · 071 234 5678 · thabo@example.com", icon: <FiGrid size={22} /> },
            { name: "Hair & Beauty Tools", cat: "Salon equipment · Soweto", alert: "Seller contact: Naledi Mokoena · 082 345 6789 · naledi@example.com", icon: <FiScissors size={22} /> },
            { name: "Spaza Bulk Goods", cat: "Grocery wholesale · Soweto", alert: "Seller contact: Sipho Ndlovu · 073 456 7890 · sipho@example.com", icon: <FiPackage size={22} /> }
          ].map((ad, idx) => (
            <div 
              key={idx} 
              onClick={() => alert(ad.alert)} 
              className="group border border-slate-100 rounded-2xl p-5 hover:border-[#185FA5]/30 hover:shadow-[0_15px_30px_rgba(24,95,165,0.05)] cursor-pointer transition-all bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-slate-50 group-hover:bg-[#185FA5]/5 rounded-xl flex items-center justify-center text-slate-600 group-hover:text-[#185FA5] mb-5 transition-colors">
                  {ad.icon}
                </div>
                <div className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#185FA5] transition-colors">{ad.name}</div>
                <div className="text-slate-400 text-xs font-medium">{ad.cat}</div>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] font-semibold text-[#185FA5] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Network Node</span>
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Horizontal Partner Strip */}
      <div className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by vetted operational partners across South Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:opacity-60 transition-opacity">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map((partner, i) => (
              <span key={i} className="text-slate-900 font-extrabold text-sm tracking-tight">{partner.toUpperCase()}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Block */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          {/* Accent light element inside dark container */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#185FA5]/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex items-start gap-4 relative z-10 max-w-md">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md text-white mt-1">
              <FiMail size={20} />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white tracking-tight">Stay in the loop</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Get systemic updates, micro-funding releases, and marketplace alerts directly.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto relative z-10 max-w-md">
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="w-full lg:w-64 px-4 py-3.5 border border-white/10 rounded-xl text-sm bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#185FA5] focus:bg-slate-900 transition" 
            />
            <button className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap flex items-center justify-center gap-1.5 transition shadow-sm">
              <FiSend size={14} /> Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;