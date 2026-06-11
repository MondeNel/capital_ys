// src/components/ContactPage.jsx
import { FiMail, FiPhone, FiMapPin, FiSend, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiClock, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdOutlineSupportAgent } from 'react-icons/md';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Get in touch</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Contact us</h1>
        <p className="text-gray-600 mt-2 max-w-lg mx-auto">
          Have questions? We're here to help. Reach out to us through any channel below.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* General Enquiries */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="w-12 h-12 bg-[#185FA5]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#185FA5] transition-colors">
            <FiMail className="text-[#185FA5] text-xl group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">General Enquiries</h3>
          <p className="text-sm text-gray-500 mb-1">Questions about our services</p>
          <a href="mailto:info@capitalys.com" className="text-[#185FA5] text-sm font-medium hover:underline">info@capitalys.com</a>
        </div>

        {/* Legal */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="w-12 h-12 bg-[#185FA5]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#185FA5] transition-colors">
            <MdOutlineBusinessCenter className="text-[#185FA5] text-xl group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Legal</h3>
          <p className="text-sm text-gray-500 mb-1">Contracts, compliance, and legal matters</p>
          <a href="mailto:legal@capitalys.com" className="text-[#185FA5] text-sm font-medium hover:underline">legal@capitalys.com</a>
        </div>

        {/* Technical Support */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div className="w-12 h-12 bg-[#185FA5]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#185FA5] transition-colors">
            <MdOutlineSupportAgent className="text-[#185FA5] text-xl group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Technical Support</h3>
          <p className="text-sm text-gray-500 mb-1">Help with the platform</p>
          <a href="mailto:support@capitalys.com" className="text-[#185FA5] text-sm font-medium hover:underline">support@capitalys.com</a>
        </div>
      </div>

      {/* Two-column layout: Contact Form + Map/Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FiMessageCircle className="text-[#185FA5]" size={20} />
            <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your name" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
              <input type="email" placeholder="Email address" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            <textarea rows="4" placeholder="Your message..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50"></textarea>
            <button type="submit" className="bg-[#185FA5] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#0C447C] transition shadow-sm">
              <FiSend size={14} /> Send Message
            </button>
          </form>
        </div>

        {/* Map & Info */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FiMapPin className="text-[#185FA5]" size={20} />
            <h2 className="text-xl font-bold text-gray-900">Visit us</h2>
          </div>
          {/* Static map placeholder */}
          <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center text-gray-500">
            <FiMapPin size={32} /> Map preview – Johannesburg, SA
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <FiMapPin size={14} /> Johannesburg, South Africa
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FiClock size={14} /> Mon–Fri: 9am – 5pm (SAST)
            </div>
          </div>

          {/* Social Links (enlarged) */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Follow us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#185FA5] hover:text-white transition group">
                <FiFacebook size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#185FA5] hover:text-white transition group">
                <FiTwitter size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#185FA5] hover:text-white transition group">
                <FiLinkedin size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#185FA5] hover:text-white transition group">
                <FiInstagram size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#1D9E75] hover:text-white transition group">
                <FaWhatsapp size={18} className="group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;