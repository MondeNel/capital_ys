import { FiFileText, FiTrendingUp, FiBook, FiBarChart2, FiUsers, FiDollarSign, FiAward, FiTool } from 'react-icons/fi';
import { HiOutlineDocumentText, HiOutlineChartBar, HiOutlineClipboardList, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineSchool } from 'react-icons/md';

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

export default ServicesPage;