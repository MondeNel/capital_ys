import { FiZap, FiGrid, FiScissors, FiPackage, FiMail, FiSend } from 'react-icons/fi';

const HomePage = ({ changePage }) => (
  <>
    <div className="bg-gradient-to-br from-[#E6F1FB] to-white pt-12 pb-10 px-4 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2 flex items-center gap-1">
          <FiZap className="inline" size={12} /> Business growth, simplified
        </div>
        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 max-w-lg leading-tight mb-3">
          Do you want funds to grow your <span className="text-[#185FA5]">business?</span> See if you{' '}
          <button onClick={() => changePage('funding')} className="text-[#185FA5] underline inline">qualify</button>
        </h1>
        <p className="text-sm text-gray-600 max-w-md mb-6">
          If you do not qualify, we help you qualify.{' '}
          <button onClick={() => changePage('services')} className="text-[#185FA5] underline">Click here</button> to explore our services.<br />
          <button onClick={() => changePage('ecosystem')} className="text-[#185FA5] underline inline-flex items-center gap-1 mt-2">
            Connect to local suppliers nearby →
          </button>
        </p>
        <div className="flex gap-3">
          <button onClick={() => changePage('funding')} className="bg-[#185FA5] text-white px-5 py-2 rounded-md text-sm font-medium flex items-center gap-1">
            <FiZap size={14} /> Get funding
          </button>
          <button onClick={() => changePage('subscribe')} className="border border-[#185FA5] text-[#185FA5] px-5 py-2 rounded-md text-sm font-medium bg-transparent">
            View plans
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Featured listings</div>
      <h2 className="text-xl font-medium text-gray-900 mb-1">Advertised products & services</h2>
      <p className="text-gray-600 text-sm mb-5">Click any listing to view seller contact details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div onClick={() => alert('Seller contact: Thabo Dlamini · 071 234 5678 · thabo@example.com')} className="border border-gray-200 rounded-lg p-3 hover:border-[#185FA5] cursor-pointer transition-colors">
          <div className="h-16 bg-[#B5D4F4] rounded-md flex items-center justify-center text-2xl text-[#185FA5] mb-2"><FiGrid size={28} /></div>
          <div className="font-medium text-gray-900 text-sm">Chesa Nyama Supplies</div>
          <div className="text-gray-500 text-xs">Meat wholesale · Johannesburg</div>
        </div>
        <div onClick={() => alert('Seller contact: Naledi Mokoena · 082 345 6789 · naledi@example.com')} className="border border-gray-200 rounded-lg p-3 hover:border-[#185FA5] cursor-pointer transition-colors">
          <div className="h-16 bg-[#B5D4F4] rounded-md flex items-center justify-center text-2xl text-[#185FA5] mb-2"><FiScissors size={28} /></div>
          <div className="font-medium text-gray-900 text-sm">Hair & Beauty Tools</div>
          <div className="text-gray-500 text-xs">Salon equipment · Soweto</div>
        </div>
        <div onClick={() => alert('Seller contact: Sipho Ndlovu · 073 456 7890 · sipho@example.com')} className="border border-gray-200 rounded-lg p-3 hover:border-[#185FA5] cursor-pointer transition-colors">
          <div className="h-16 bg-[#B5D4F4] rounded-md flex items-center justify-center text-2xl text-[#185FA5] mb-2"><FiPackage size={28} /></div>
          <div className="font-medium text-gray-900 text-sm">Spaza Bulk Goods</div>
          <div className="text-gray-500 text-xs">Grocery wholesale · Soweto</div>
        </div>
      </div>
    </div>

    <hr className="border-gray-200 mx-4" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Newsletter</div>
      <h2 className="text-xl font-medium text-gray-900 mb-4">Stay in the loop</h2>
      <div className="bg-[#E6F1FB] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-[#0C447C] text-sm font-medium flex items-center gap-2"><FiMail /> Get the latest updates about Capital Ys activities</span>
        <div className="flex gap-2">
          <input type="email" placeholder="Your email address" className="flex-1 px-3 py-2 border border-[#B5D4F4] rounded-md text-sm bg-white" />
          <button className="bg-[#185FA5] text-white px-4 py-2 rounded-md text-sm whitespace-nowrap flex items-center gap-1"><FiSend size={14} /> Subscribe</button>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;