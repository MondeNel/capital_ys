import { useState } from 'react';
// Import icons from react-icons (using only valid exports)
import { 
  FiMail, FiZap, FiEye, FiTarget, FiFileText, FiTrendingUp, FiBook, 
  FiBarChart2, FiUsers, FiDollarSign, FiBriefcase, FiAward, FiTool, 
  FiUpload, FiHeadphones, FiMessageCircle, FiFacebook, FiTwitter, 
  FiStar, FiSend, FiCheck, FiX, FiGrid, FiMapPin, FiShoppingBag, 
  FiScissors, FiTruck, FiPackage, FiUser, FiUserCheck, FiSlack, 
  FiHelpCircle, FiPhone
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineSchool, MdOutlinePhotoCamera, MdOutlineStorefront, MdOutlineBusinessCenter } from 'react-icons/md';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { HiOutlineDocumentText, HiOutlineChartBar, HiOutlineClipboardList, HiOutlineOfficeBuilding } from 'react-icons/hi';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [ecosystemFilter, setEcosystemFilter] = useState('all');
  const [reviews, setReviews] = useState([
    { id: 1, avatar: 'TM', name: 'Thabo M.', stars: 5, text: 'Capital Ys helped us with company registration and business plan. Excellent service, very professional team.', visible: true },
    { id: 2, avatar: 'NM', name: 'Naledi M.', stars: 4, text: 'The ecosystem feature connected me to a reliable wholesaler within a week. Great concept and execution.', visible: true },
    { id: 3, avatar: 'SN', name: 'Sipho N.', stars: 5, text: 'Premium subscription was worth every rand. Got funding sourced within two months. Highly recommended!', visible: true }
  ]);
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewText, setNewReviewText] = useState('');

  // Ecosystem data
  const ecosystemItems = [
    { id: 1, name: "Makro bulk buyer", sub: "Spaza · Soweto", cat: "spaza", role: "Wholesaler", roleClass: "wholesale" },
    { id: 2, name: "Rapid Runners", sub: "Spaza · Johannesburg", cat: "spaza", role: "Delivery", roleClass: "delivery" },
    { id: 3, name: "Corner Spaza", sub: "Spaza · Soweto", cat: "spaza", role: "Retailer", roleClass: "retail" },
    { id: 4, name: "Meat Depot SA", sub: "Chesa · Pretoria", cat: "chesa", role: "Wholesaler", roleClass: "wholesale" },
    { id: 5, name: "FastFreight", sub: "Chesa · Pretoria", cat: "chesa", role: "Delivery", roleClass: "delivery" },
    { id: 6, name: "Braai King", sub: "Chesa · Mamelodi", cat: "chesa", role: "Retailer", roleClass: "retail" },
    { id: 7, name: "Beauty Trade", sub: "Salon · Sandton", cat: "salon", role: "Wholesaler", roleClass: "wholesale" },
    { id: 8, name: "Clicks & Curls", sub: "Salon · Randburg", cat: "salon", role: "Photographer", roleClass: "photo" },
    { id: 9, name: "Glam Studio", sub: "Salon · Fourways", cat: "salon", role: "Retailer", roleClass: "retail" },
    { id: 10, name: "Clean Pro Supplies", sub: "Car wash · Roodepoort", cat: "carwash", role: "Wholesaler", roleClass: "wholesale" },
    { id: 11, name: "AutoDeliver", sub: "Car wash · Krugersdorp", cat: "carwash", role: "Delivery", roleClass: "delivery" },
    { id: 12, name: "Shine & Shine", sub: "Car wash · Roodepoort", cat: "carwash", role: "Retailer", roleClass: "retail" }
  ];

  const filteredEcosystem = ecosystemFilter === 'all' ? ecosystemItems : ecosystemItems.filter(item => item.cat === ecosystemFilter);

  const handleHideReview = (id) => {
    setReviews(prev => prev.map(rev => rev.id === id ? { ...rev, visible: false } : rev));
  };

  const handleAddReview = () => {
    if (newReviewText.trim() === "") {
      alert("Please write a review.");
      return;
    }
    if (newReviewRating === 0) {
      alert("Please rate using stars.");
      return;
    }
    const newReview = {
      id: Date.now(),
      avatar: "U",
      name: "User",
      stars: newReviewRating,
      text: newReviewText,
      visible: true
    };
    setReviews(prev => [newReview, ...prev]);
    setNewReviewText("");
    setNewReviewRating(0);
    const stars = document.querySelectorAll('#stars span');
    stars.forEach(s => s.style.color = '#D3D1C7');
  };

  const setRating = (rating) => {
    setNewReviewRating(rating);
    const stars = document.querySelectorAll('#stars span');
    stars.forEach((s, i) => {
      s.style.color = i < rating ? '#EF9F27' : '#D3D1C7';
    });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const changePage = (page) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-8 h-14 flex items-center justify-between">
        <span className="text-[#185FA5] text-lg font-medium tracking-tight">Capital Ys</span>
        <div className="hidden md:flex gap-6">
          {['home','about','services','subscribe','ecosystem','funding','contact','reviews'].map(page => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium capitalize"
            >
              {page === 'home' ? 'Home' : page === 'about' ? 'About' : page === 'services' ? 'Services' : page === 'subscribe' ? 'Subscribe' : page === 'ecosystem' ? 'Ecosystem' : page === 'funding' ? 'Funding' : page === 'contact' ? 'Contact' : 'Reviews'}
            </button>
          ))}
        </div>
        <button onClick={() => changePage('subscribe')} className="bg-[#185FA5] text-white text-sm px-4 py-1.5 rounded-md">Get started</button>
      </nav>

      {/* Page Content */}
      <div className="animate-fadeIn">
        {activePage === 'home' && <HomePage changePage={changePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'services' && <ServicesPage />}
        {activePage === 'subscribe' && <SubscribePage />}
        {activePage === 'ecosystem' && <EcosystemPage ecosystemFilter={ecosystemFilter} setEcosystemFilter={setEcosystemFilter} filteredEcosystem={filteredEcosystem} />}
        {activePage === 'funding' && <FundingPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'reviews' && <ReviewsPage reviews={reviews} onHideReview={handleHideReview} newReviewText={newReviewText} setNewReviewText={setNewReviewText} newReviewRating={newReviewRating} setRating={setRating} onAddReview={handleAddReview} />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6 px-4 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-gray-500 text-xs">© 2025 Capital Ys. All rights reserved.</span>
        <div className="flex gap-4 text-xs text-gray-500">
          <button onClick={() => changePage('about')}>About</button>
          <button onClick={() => alert('Terms & conditions')}>Terms & conditions</button>
          <button onClick={() => alert('Privacy policy')}>Privacy policy</button>
          <button onClick={() => changePage('contact')}>Contact</button>
        </div>
      </footer>
    </div>
  );
}

// ------------------- Home Page Component -------------------
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

// ------------------- About Page -------------------
const AboutPage = () => (
  <>
    <div className="bg-gradient-to-br from-[#E6F1FB] to-white py-12 px-4 border-b">
      <div className="max-w-6xl mx-auto">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Who we are</div>
        <h1 className="text-2xl font-medium text-gray-900 max-w-md">Empowering small businesses to grow and thrive</h1>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <div className="border border-gray-200 rounded-lg p-5">
          <div className="text-2xl text-[#185FA5] mb-2"><FiEye size={24} /></div>
          <div className="font-medium text-gray-900 mb-1">Vision</div>
          <div className="text-gray-600 text-sm">To be the leading business support platform empowering small businesses across South Africa to access funding, compliance, and growth opportunities.</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-5">
          <div className="text-2xl text-[#185FA5] mb-2"><FiTarget size={24} /></div>
          <div className="font-medium text-gray-900 mb-1">Mission</div>
          <div className="text-gray-600 text-sm">To simplify business administration and connect entrepreneurs with the tools, experts, and capital they need to grow and compete sustainably.</div>
        </div>
      </div>
    </div>
  </>
);

// ------------------- Services Page -------------------
const ServicesPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">What we offer</div>
    <h2 className="text-xl font-medium text-gray-900 max-w-md leading-tight">Running a small business can be very tedious. Let us take care of the admin while you focus on what matters.</h2>
    <p className="text-[#185FA5] text-sm mt-4 mb-5">Services marked * are free for Premium subscribers.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
      <div>
        <div className="font-medium text-gray-900 text-sm mb-3">Business services</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiFileText size={14} /> Business profile</span><span className="text-[#185FA5] font-medium">R ___</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><HiOutlineDocumentText size={14} /> Business plan</span><span className="text-[#185FA5] font-medium">R ___</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><HiOutlineChartBar size={14} /> Market research</span><span className="text-[#185FA5] font-medium">R ___</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiTrendingUp size={14} /> Financial projections</span><span className="text-[#185FA5] font-medium">R ___</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiBook size={14} /> Bookkeeping</span><span className="text-[#185FA5] font-medium">R ___</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiBarChart2 size={14} /> Financial statements</span><span className="text-[#185FA5] font-medium">R ___</span></div>
        </div>
      </div>
      <div>
        <div className="font-medium text-gray-900 text-sm mb-3">Compliance & HR</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiUsers size={14} /> General HR services</span><span className="text-xs bg-[#EAF3DE] text-[#27500A] px-2 py-0.5 rounded">*Free</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiDollarSign size={14} /> Payroll management</span><span className="text-[#185FA5] font-medium">R ___</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><HiOutlineOfficeBuilding size={14} /> Company registration</span><span className="text-xs bg-[#EAF3DE] text-[#27500A] px-2 py-0.5 rounded">*Free</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiAward size={14} /> BBEEE</span><span className="text-xs bg-[#EAF3DE] text-[#27500A] px-2 py-0.5 rounded">*Free</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><HiOutlineClipboardList size={14} /> Annual returns</span><span className="text-xs bg-[#EAF3DE] text-[#27500A] px-2 py-0.5 rounded">*Free</span></div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm text-gray-600"><span className="flex items-center gap-2"><FiTool size={14} /> E-Filing</span><span className="text-xs bg-[#EAF3DE] text-[#27500A] px-2 py-0.5 rounded">*Free</span></div>
        </div>
      </div>
    </div>
    <div className="mt-8 bg-gray-50 rounded-lg p-5 max-w-md">
      <div className="font-medium text-gray-900 text-sm mb-2 flex items-center gap-2">
        <MdOutlineSchool className="text-[#185FA5]" size={20} /> Business training
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">
        Basic HR · Computer literacy · Basic business management<br />
        <span className="text-xs text-[#1D9E75]">Certificate of completion awarded after each training.</span>
      </div>
    </div>
  </div>
);

// ------------------- Subscribe Page -------------------
const SubscribePage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Plans</div>
    <h2 className="text-xl font-medium text-gray-900 mb-1">Choose how you access Capital Ys</h2>
    <p className="text-gray-600 text-sm mb-6">All subscriptions are subject to terms and conditions.</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Basic */}
      <div className="border border-gray-200 rounded-lg p-5">
        <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#E6F1FB] text-[#0C447C]">Basic</div>
        <div className="font-medium text-gray-900 mt-1">Free</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">R0 <span className="text-xs text-gray-500 font-normal">/ month</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Newsletter access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> View home page</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Ask questions</li>
          <li className="flex items-center gap-1"><FiX className="text-[#E24B4A]" /> No funding page</li>
          <li className="flex items-center gap-1"><FiX className="text-[#E24B4A]" /> No commenting</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium border border-[#185FA5] text-[#185FA5] bg-transparent">Get started</button>
      </div>
      {/* Advanced */}
      <div className="border-2 border-[#185FA5] rounded-lg p-5">
        <div className="flex items-center gap-2">
          <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#EAF3DE] text-[#27500A]">Advanced</div>
          <span className="text-xs bg-[#E6F1FB] text-[#0C447C] px-2 py-1 rounded-md mb-3">Most popular</span>
        </div>
        <div className="font-medium text-gray-900 mt-1">Advanced</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">Contact us <span className="text-xs text-gray-500 font-normal">for pricing</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> All basic features</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Funding page access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Comment on reviews</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Advertise products</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Limited expert access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Business trainings</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium bg-[#185FA5] text-white">Upgrade</button>
      </div>
      {/* Premium */}
      <div className="border border-gray-200 rounded-lg p-5">
        <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#EEEDFE] text-[#3C3489]">Premium</div>
        <div className="font-medium text-gray-900 mt-1">Premium</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">Contact us <span className="text-xs text-gray-500 font-normal">for pricing</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> All advanced features</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Auto-qualify for funding</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Unlimited expert access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Free business training</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Unlimited all services</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium bg-[#534AB7] text-white">Go premium</button>
      </div>
      {/* Once-off */}
      <div className="border border-gray-200 rounded-lg p-5">
        <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#F1EFE8] text-[#444441]">Once-off</div>
        <div className="font-medium text-gray-900 mt-1">Once-off</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">Per service <span className="text-xs text-gray-500 font-normal">pricing</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> All basic services</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Pay per service used</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> No commitment</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium border border-[#185FA5] text-[#185FA5] bg-transparent">Buy service</button>
      </div>
    </div>
    <p className="text-xs text-gray-500 mt-4"><button className="text-[#185FA5]" onClick={() => alert("Terms and conditions would appear here.")}>Terms and conditions</button> apply to all subscriptions.</p>
  </div>
);

// ------------------- Ecosystem Page -------------------
const EcosystemPage = ({ ecosystemFilter, setEcosystemFilter, filteredEcosystem }) => {
  const filterButtons = [
    { label: 'All', value: 'all' },
    { label: 'Spaza shop', value: 'spaza' },
    { label: 'Chesa nyama', value: 'chesa' },
    { label: 'Hair salon', value: 'salon' },
    { label: 'Car wash', value: 'carwash' }
  ];

  const roleIcon = (roleClass) => {
    switch(roleClass) {
      case 'wholesale': return <FiPackage size={12} />;
      case 'delivery': return <FiTruck size={12} />;
      case 'retail': return <MdOutlineStorefront size={12} />;
      case 'photo': return <MdOutlinePhotoCamera size={12} />;
      default: return <FiUser size={12} />;
    }
  };

  const roleColor = (roleClass) => {
    switch(roleClass) {
      case 'wholesale': return 'bg-[#E6F1FB] text-[#0C447C]';
      case 'delivery': return 'bg-[#EAF3DE] text-[#27500A]';
      case 'retail': return 'bg-[#EEEDFE] text-[#3C3489]';
      case 'photo': return 'bg-[#FAEEDA] text-[#633806]';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Join ecosystem</div>
      <h2 className="text-xl font-medium text-gray-900 mb-1">Connect with local suppliers & partners</h2>
      <p className="text-gray-600 text-sm mb-6">Register your business to become part of the Capital Ys supplier network.</p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterButtons.map(btn => (
          <button
            key={btn.value}
            onClick={() => setEcosystemFilter(btn.value)}
            className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${ecosystemFilter === btn.value ? 'bg-[#185FA5] text-white border-[#185FA5]' : 'bg-white text-gray-600 border-gray-300'}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Ecosystem Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {filteredEcosystem.map(item => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-3">
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full mb-2 ${roleColor(item.roleClass)}`}>
              {roleIcon(item.roleClass)} {item.role}
            </span>
            <div className="font-medium text-gray-900 text-sm">{item.name}</div>
            <div className="text-gray-500 text-xs flex items-center gap-1"><FiMapPin size={10} /> {item.sub}</div>
          </div>
        ))}
      </div>

      {/* Registration Form */}
      <div className="bg-gray-50 rounded-lg p-6 max-w-lg">
        <div className="font-medium text-gray-900 mb-4 flex items-center gap-2"><FiUserCheck /> Register your business</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div><label className="block text-xs text-gray-500 mb-1">First name</label><input type="text" placeholder="e.g. Sipho" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">Surname</label><input type="text" placeholder="e.g. Ndlovu" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">Cell number</label><input type="tel" placeholder="07x xxx xxxx" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">Company email</label><input type="email" placeholder="you@company.co.za" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" /></div>
          <div className="sm:col-span-2"><label className="block text-xs text-gray-500 mb-1">Company name</label><input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" /></div>
          <div><label className="block text-xs text-gray-500 mb-1">Type of company</label><select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"><option>Services</option><option>Retail</option></select></div>
          <div><label className="block text-xs text-gray-500 mb-1">Role</label><select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"><option>Wholesaler</option><option>Distributor</option><option>Retailer</option><option>Support</option></select></div>
          <div><label className="block text-xs text-gray-500 mb-1">Industry</label><select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"><option>Spaza shop</option><option>Hair salon</option><option>Chesa nyama</option><option>Car wash</option><option>Plumber</option><option>Electrician</option><option>Mechanic</option></select></div>
          <div><label className="block text-xs text-gray-500 mb-1">City / Province</label><input type="text" placeholder="e.g. Johannesburg, GP" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" /></div>
        </div>
        <button className="bg-[#185FA5] text-white px-5 py-2 rounded-md text-sm font-medium mt-5 flex items-center gap-2"><FiSend size={14} /> Join network</button>
      </div>
    </div>
  );
};

// ------------------- Funding Page -------------------
const FundingPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="bg-[#E6F1FB] rounded-lg p-6 mb-6">
      <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Get funding</div>
      <div className="text-xl font-medium text-[#042C53] mb-2">Do you have what it takes to take your business to greater heights?</div>
      <p className="text-sm text-[#185FA5] flex items-center gap-1">
        <FiZap size={14} /> Let us source funding for you. Premium subscribers qualify automatically.
      </p>
    </div>
    <div className="max-w-md">
      <div className="border border-dashed border-[#B5D4F4] rounded-lg p-6 text-center cursor-pointer mb-4">
        <div className="text-3xl text-[#185FA5] mb-2 flex justify-center"><FiUpload size={32} /></div>
        <div className="font-medium text-gray-900 text-sm">Upload business profile</div>
        <div className="text-xs text-gray-500 mt-1">PDF, DOCX up to 10MB</div>
      </div>
      <div className="border border-dashed border-[#B5D4F4] rounded-lg p-6 text-center cursor-pointer mb-4">
        <div className="text-3xl text-[#185FA5] mb-2 flex justify-center"><HiOutlineDocumentText size={32} /></div>
        <div className="font-medium text-gray-900 text-sm">Upload business plan</div>
        <div className="text-xs text-gray-500 mt-1">PDF, DOCX up to 10MB</div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="text-sm text-gray-600">If we cannot source funding for you, we can help you raise your own funds within 3–9 months.</div>
        <button className="text-[#185FA5] text-sm inline-flex items-center gap-1 mt-2"><FiFileText size={14} /> Read the document to learn more →</button>
      </div>
      <button className="bg-[#185FA5] text-white w-full py-2 rounded-md text-sm font-medium mt-5 flex items-center justify-center gap-2"><FiSend size={14} /> Submit application</button>
    </div>
  </div>
);

// ------------------- Contact Page -------------------
const ContactPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Get in touch</div>
    <h2 className="text-xl font-medium text-gray-900 mb-4">Contact us</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="text-2xl text-[#185FA5] mb-2"><FiMail size={24} /></div>
        <div className="text-xs text-gray-500">General enquiries</div>
        <div className="text-sm text-[#185FA5] font-medium">Info@capitalys.com</div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="text-2xl text-[#185FA5] mb-2"><MdOutlineBusinessCenter size={24} /></div>
        <div className="text-xs text-gray-500">Legal</div>
        <div className="text-sm text-[#185FA5] font-medium">Legal@capitalys.com</div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="text-2xl text-[#185FA5] mb-2"><FiHeadphones size={24} /></div>
        <div className="text-xs text-gray-500">Technical support</div>
        <div className="text-sm text-[#185FA5] font-medium">Support@capital.co.za</div>
      </div>
    </div>
    <div className="flex gap-3 mt-5">
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-600"><FaWhatsapp className="text-[#1D9E75]" size={14} /> WhatsApp</button>
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-600"><FiFacebook size={14} className="text-[#185FA5]" /> Facebook</button>
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-600"><FiTwitter size={14} /> X / Twitter</button>
    </div>
  </div>
);

// ------------------- Reviews Page -------------------
const ReviewsPage = ({ reviews, onHideReview, newReviewText, setNewReviewText, newReviewRating, setRating, onAddReview }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Client feedback</div>
    <h2 className="text-xl font-medium text-gray-900 mb-1">Reviews</h2>
    <p className="text-gray-600 text-sm mb-6">Advanced and premium subscribers can comment. Admin can hide irrelevant reviews.</p>
    
    <div className="space-y-4 max-w-2xl">
      {reviews.filter(r => r.visible).map(review => (
        <div key={review.id} className="flex gap-3 pb-4 border-b border-gray-200">
          <div className="w-8 h-8 rounded-full bg-[#B5D4F4] flex items-center justify-center text-xs font-medium text-[#0C447C]">{review.avatar}</div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">{review.name} <span className="text-yellow-500 text-xs inline-flex gap-0.5">{Array(review.stars).fill().map((_, i) => <BsFillStarFill key={i} size={10} />)}{Array(5-review.stars).fill().map((_, i) => <BsStar key={i} size={10} />)}</span></div>
            <div className="text-sm text-gray-600 mt-1">{review.text}</div>
            <button onClick={() => onHideReview(review.id)} className="text-xs text-gray-400 underline mt-1">Hide review</button>
          </div>
        </div>
      ))}
    </div>

    {/* Leave a review */}
    <div className="mt-8 bg-gray-50 rounded-lg p-5 max-w-md">
      <div className="font-medium text-gray-900 text-sm mb-3 flex items-center gap-2"><FiMessageCircle size={14} /> Leave a review</div>
      <div className="flex gap-1 text-2xl text-[#D3D1C7] cursor-pointer mb-3" id="stars">
        {[1,2,3,4,5].map(star => (
          <span key={star} onClick={() => setRating(star)}>★</span>
        ))}
      </div>
      <textarea 
        value={newReviewText}
        onChange={(e) => setNewReviewText(e.target.value)}
        placeholder="Share your experience..." 
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-y min-h-[80px] bg-white"
      />
      <button onClick={onAddReview} className="bg-[#185FA5] text-white px-5 py-2 rounded-md text-sm font-medium mt-3 flex items-center gap-2"><FiSend size={14} /> Submit review</button>
    </div>
  </div>
);

export default App;