import { FiZap, FiUpload, FiSend, FiFileText } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';

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

export default FundingPage;