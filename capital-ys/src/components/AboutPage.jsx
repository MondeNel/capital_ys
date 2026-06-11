import { FiEye, FiTarget } from 'react-icons/fi';

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

export default AboutPage;