// src/components/ServicesPage.jsx
import { FiFileText, FiTrendingUp, FiBook, FiBarChart2, FiUsers, FiDollarSign, FiAward, FiTool, FiCheckCircle, FiBriefcase, FiShield } from 'react-icons/fi';
import { HiOutlineDocumentText, HiOutlineChartBar, HiOutlineClipboardList, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineSchool } from 'react-icons/md';

const ServicesPage = () => {
  const businessServices = [
    { name: "Business profile", icon: <FiFileText size={16} />, freeForPremium: false },
    { name: "Business plan", icon: <HiOutlineDocumentText size={16} />, freeForPremium: false },
    { name: "Market research", icon: <HiOutlineChartBar size={16} />, freeForPremium: false },
    { name: "Financial projections", icon: <FiTrendingUp size={16} />, freeForPremium: false },
    { name: "Bookkeeping", icon: <FiBook size={16} />, freeForPremium: false },
    { name: "Financial statements", icon: <FiBarChart2 size={16} />, freeForPremium: false },
  ];

  const complianceServices = [
    { name: "General HR services", icon: <FiUsers size={16} />, freeForPremium: true },
    { name: "Payroll management", icon: <FiDollarSign size={16} />, freeForPremium: false },
    { name: "Company registration", icon: <HiOutlineOfficeBuilding size={16} />, freeForPremium: true },
    { name: "BBEEE", icon: <FiAward size={16} />, freeForPremium: true },
    { name: "Annual returns", icon: <HiOutlineClipboardList size={16} />, freeForPremium: true },
    { name: "E-Filing", icon: <FiTool size={16} />, freeForPremium: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">What we offer</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight">
          Running a small business can be very tedious.
        </h1>
        <p className="text-lg text-gray-600 mt-2 max-w-xl mx-auto">
          Let us take care of the admin while you focus on what matters.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 bg-[#EAF3DE] text-[#27500A] text-xs px-3 py-1 rounded-full">
          <FiCheckCircle size={12} /> Services marked * are free for Premium subscribers
        </div>
      </div>

      {/* Two‑column services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Business Services */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-200 pb-3">
            <FiBriefcase className="text-[#185FA5]" size={20} /> Business services
          </h2>
          <div className="space-y-3">
            {businessServices.map((service, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 text-sm">
                <span className="flex items-center gap-2 text-gray-700">
                  {service.icon}
                  {service.name}
                </span>
                <span className="text-[#185FA5] font-semibold">R ___</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance & HR */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-200 pb-3">
            <FiShield className="text-[#185FA5]" size={20} /> Compliance & HR
          </h2>
          <div className="space-y-3">
            {complianceServices.map((service, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 text-sm">
                <span className="flex items-center gap-2 text-gray-700">
                  {service.icon}
                  {service.name}
                </span>
                {service.freeForPremium ? (
                  <span className="text-xs bg-[#EAF3DE] text-[#27500A] px-2 py-0.5 rounded-full font-medium">*Free</span>
                ) : (
                  <span className="text-[#185FA5] font-semibold">R ___</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Training Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-[#E6F1FB] to-white border border-[#B5D4F4] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#185FA5]/10 rounded-full mb-4">
            <MdOutlineSchool className="text-[#185FA5]" size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Business training</h3>
          <p className="text-gray-600 text-sm mb-3">
            Basic HR · Computer literacy · Basic business management
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-[#1D9E75] bg-white/60 px-3 py-1 rounded-full">
            <FiCheckCircle size={12} /> Certificate of completion awarded after each training
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;