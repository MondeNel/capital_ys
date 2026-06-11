import { FiEye, FiTarget, FiHeart, FiTrendingUp, FiUsers, FiAward, FiShield, FiMail, FiMapPin } from 'react-icons/fi';
import { MdOutlineEmojiPeople, MdOutlineBusinessCenter } from 'react-icons/md';

const AboutPage = () => {
  const stats = [
    { value: "500+", label: "Businesses Funded", icon: <FiUsers size={24} /> },
    { value: "R50M+", label: "Capital Accessed", icon: <FiTrendingUp size={24} /> },
    { value: "98%", label: "Client Satisfaction", icon: <FiAward size={24} /> },
    { value: "24/7", label: "Expert Support", icon: <FiShield size={24} /> }
  ];

  const values = [
    { title: "Integrity", description: "We operate with complete transparency and honesty in all our dealings.", icon: <FiShield size={28} /> },
    { title: "Empowerment", description: "We equip entrepreneurs with the tools and knowledge to succeed.", icon: <FiTrendingUp size={28} /> },
    { title: "Innovation", description: "We constantly evolve to meet the changing needs of small businesses.", icon: <FiEye size={28} /> },
    { title: "Community", description: "We build networks that connect local businesses for mutual growth.", icon: <FiUsers size={28} /> }
  ];

  // Single team member
  const team = [
    { name: "Sibusiso Mhlongo", role: "Founder & CEO", avatar: "SM", bio: "Passionate about empowering South African SMEs with access to capital and business tools." }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E6F1FB] to-white py-16 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Who we are</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight">
            Empowering small businesses to grow and thrive
          </h1>
          <p className="text-base text-gray-600 max-w-xl mx-auto mt-4">
            Capital Ys is a purpose-driven financial platform dedicated to solving the funding and administrative challenges faced by South African SMEs.
          </p>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl text-[#185FA5] mb-3"><FiEye /></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading business support platform empowering small businesses across South Africa to access funding, compliance, and growth opportunities.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl text-[#185FA5] mb-3"><FiTarget /></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To simplify business administration and connect entrepreneurs with the tools, experts, and capital they need to grow and compete sustainably.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#185FA5]/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Impact in Numbers</h2>
            <p className="text-gray-600 mt-2">Real results from real businesses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <div className="text-[#185FA5] flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-[#185FA5]">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Why choose us</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">The principles that guide everything we do.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-all">
              <div className="text-[#185FA5] flex justify-center mb-3">{value.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{value.title}</h3>
              <p className="text-gray-500 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section - Single Member */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Meet the founder</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Dedicated expert behind Capital Ys</h2>
            <p className="text-gray-600 max-w-xl mx-auto mt-2">Passionate about helping your business succeed.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all max-w-sm w-full">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#185FA5]/10 flex items-center justify-center text-[#185FA5] text-2xl font-bold mb-4">
                {team[0].avatar}
              </div>
              <h3 className="font-bold text-gray-900 text-xl">{team[0].name}</h3>
              <p className="text-[#185FA5] text-sm font-medium">{team[0].role}</p>
              <p className="text-gray-500 text-sm mt-2">{team[0].bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#185FA5] to-[#0C447C] rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Ready to grow your business?</h3>
          <p className="text-white/80 mb-5">Join hundreds of South African entrepreneurs who trust Capital Ys.</p>
          <button className="bg-white text-[#185FA5] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-md">
            Get started today
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;