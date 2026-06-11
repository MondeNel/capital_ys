import { FiMail, FiHeadphones } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';

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
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-600"><span className="text-[#185FA5]">📘</span> Facebook</button>
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-xs text-gray-600"><span>𝕏</span> X / Twitter</button>
    </div>
  </div>
);

export default ContactPage;