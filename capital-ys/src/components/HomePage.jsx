import { FiZap, FiGrid, FiScissors, FiPackage, FiMail, FiSend, FiShield, FiUsers } from 'react-icons/fi';

const HomePage = ({ changePage }) => (
  <>
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-[#E6F1FB] via-white to-white pt-12 pb-10 px-4 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#185FA5]/10 text-[#185FA5] text-xs font-semibold tracking-wide px-3 py-1 rounded-full mb-5">
          <FiZap size={12} /> Business growth, simplified
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 max-w-3xl leading-tight mb-4">
          Do you want funds to grow your <span className="text-[#185FA5]">business?</span>
        </h1>
        <p className="text-base text-gray-600 max-w-lg mb-6">
          If you do not qualify, we help you qualify.{' '}
          <button onClick={() => changePage('services')} className="text-[#185FA5] underline font-medium">Click here</button> to explore our services.<br />
          <button onClick={() => changePage('ecosystem')} className="text-[#185FA5] underline inline-flex items-center gap-1 mt-1 font-medium">
            Connect to local suppliers nearby →
          </button>
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <button onClick={() => changePage('funding')} className="bg-[#185FA5] text-white px-6 py-2.5 rounded-md text-sm font-medium flex items-center gap-1 shadow-md hover:shadow-lg transition-all hover:bg-[#0C447C]">
            <FiZap size={14} /> Get funding
          </button>
          <button onClick={() => changePage('subscribe')} className="border border-[#185FA5] text-[#185FA5] px-6 py-2.5 rounded-md text-sm font-medium bg-transparent hover:bg-[#185FA5]/5 transition-colors">
            View plans
          </button>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
          <div className="flex -space-x-1">
            <div className="w-6 h-6 rounded-full bg-[#185FA5]/20 border border-white flex items-center justify-center text-[10px] font-bold text-[#185FA5]">👤</div>
            <div className="w-6 h-6 rounded-full bg-[#185FA5]/20 border border-white flex items-center justify-center text-[10px] font-bold text-[#185FA5]">👤</div>
            <div className="w-6 h-6 rounded-full bg-[#185FA5]/20 border border-white flex items-center justify-center text-[10px] font-bold text-[#185FA5]">👤</div>
          </div>
          <span className="font-medium">Trusted by 500+ South African SMEs</span>
        </div>
      </div>
    </div>

    {/* Stats Bar - New Section */}
    <div className="bg-white border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#185FA5]">500+</div>
            <div className="text-sm text-gray-500">Businesses Funded</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#185FA5]">R50M+</div>
            <div className="text-sm text-gray-500">Capital Accessed</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#185FA5]">98%</div>
            <div className="text-sm text-gray-500">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#185FA5]">24/7</div>
            <div className="text-sm text-gray-500">Expert Support</div>
          </div>
        </div>
      </div>
    </div>

    {/* Featured Listings */}
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
          <div key={idx} onClick={() => alert(ad.alert)} className="border border-gray-200 rounded-lg p-4 hover:border-[#185FA5] hover:shadow-md cursor-pointer transition-all">
            <div className="h-16 bg-[#B5D4F4] rounded-md flex items-center justify-center text-[#185FA5] mb-3">{ad.icon}</div>
            <div className="font-semibold text-gray-900 text-sm">{ad.name}</div>
            <div className="text-gray-500 text-xs">{ad.cat}</div>
          </div>
        ))}
      </div>
    </div>

    <hr className="border-gray-200 mx-4" />

    {/* Newsletter */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Newsletter</div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Stay in the loop</h2>
      <div className="bg-gradient-to-r from-[#E6F1FB] to-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#B5D4F4]">
        <span className="text-[#0C447C] text-sm font-medium flex items-center gap-2"><FiMail /> Get the latest updates about Capital Ys activities</span>
        <div className="flex gap-2">
          <input type="email" placeholder="Your email address" className="flex-1 px-3 py-2 border border-[#B5D4F4] rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#185FA5]" />
          <button className="bg-[#185FA5] text-white px-4 py-2 rounded-md text-sm whitespace-nowrap flex items-center gap-1 hover:bg-[#0C447C] transition-colors">
            <FiSend size={14} /> Subscribe
          </button>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;