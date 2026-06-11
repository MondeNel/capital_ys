// src/components/EcosystemPage.jsx
import { useState } from 'react';import { FiPackage, FiTruck, FiUser, FiMapPin, FiSend, FiUserCheck, FiFilter, FiSearch, FiScissors, FiTool, FiMail } from 'react-icons/fi';
import { MdOutlineStorefront, MdOutlinePhotoCamera, MdOutlineLocalGroceryStore, MdLocalCarWash } from 'react-icons/md';


const EcosystemPage = ({ ecosystemFilter, setEcosystemFilter, filteredEcosystem }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterButtons = [
    { label: 'All', value: 'all', icon: <FiFilter size={12} /> },
    { label: 'Spaza shop', value: 'spaza', icon: <MdOutlineLocalGroceryStore size={12} /> },
    { label: 'Chesa nyama', value: 'chesa', icon: <FiTool size={12} /> },
    { label: 'Hair salon', value: 'salon', icon: <FiScissors size={12} /> },
    { label: 'Car wash', value: 'carwash', icon: <MdLocalCarWash size={12} /> }
  ];

  // Role configurations for better visual distinction
  const roleConfig = {
    wholesale: { icon: <FiPackage size={14} />, label: 'Wholesaler', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    delivery: { icon: <FiTruck size={14} />, label: 'Delivery', color: 'bg-green-50 text-green-700 border-green-200' },
    retail: { icon: <MdOutlineStorefront size={14} />, label: 'Retailer', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    photo: { icon: <MdOutlinePhotoCamera size={14} />, label: 'Photographer', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    default: { icon: <FiUser size={14} />, label: 'Partner', color: 'bg-gray-50 text-gray-700 border-gray-200' }
  };

  const getRoleStyle = (roleClass) => roleConfig[roleClass] || roleConfig.default;

  // Further filter by search term
  const displayedEcosystem = filteredEcosystem.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sub.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-2">Join ecosystem</div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Connect with local suppliers & partners</h1>
        <p className="text-gray-600 mt-2 max-w-lg mx-auto">
          Register your business to become part of the Capital Ys supplier network.
        </p>
      </div>

      {/* Filter and search row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {filterButtons.map(btn => (
            <button
              key={btn.value}
              onClick={() => setEcosystemFilter(btn.value)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                ecosystemFilter === btn.value
                  ? 'bg-[#185FA5] text-white border-[#185FA5] shadow-sm'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#185FA5] hover:text-[#185FA5]'
              }`}
            >
              {btn.icon}
              {btn.label}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search suppliers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50"
          />
        </div>
      </div>

      {/* Ecosystem Cards Grid - Enhanced Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
        {displayedEcosystem.length > 0 ? (
          displayedEcosystem.map(item => {
            const role = getRoleStyle(item.roleClass);
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Card header with gradient accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${role.color.split(' ')[1]} opacity-60`}></div>
                <div className="p-4">
                  {/* Role badge */}
                  <div className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${role.color} mb-3`}>
                    {role.icon}
                    <span>{role.label}</span>
                  </div>
                  
                  {/* Business name */}
                  <h3 className="font-bold text-gray-900 text-base group-hover:text-[#185FA5] transition line-clamp-1">
                    {item.name}
                  </h3>
                  
                  {/* Location with icon */}
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
                    <FiMapPin size={12} className="flex-shrink-0" />
                    <span>{item.sub}</span>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-gray-100 my-3"></div>
                  
                  {/* Action row (contact placeholder) */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wide">Partner since 2024</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Contact ${item.name} at example@${item.name.replace(/\s/g, '').toLowerCase()}.com`);
                      }}
                      className="text-[#185FA5] text-xs font-medium opacity-0 group-hover:opacity-100 transition flex items-center gap-1 hover:underline"
                    >
                      Contact <FiMail size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
            <FiPackage className="mx-auto text-gray-300 mb-2" size={32} />
            No suppliers match your criteria.
          </div>
        )}
      </div>

      {/* Registration Form - Modernized (same as before, but keep it) */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm max-w-2xl mx-auto p-6 md:p-8">
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-6">
          <div className="p-2 bg-[#185FA5]/10 rounded-full">
            <FiUserCheck className="text-[#185FA5]" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Register your business</h2>
            <p className="text-xs text-gray-500">Join our growing network of local suppliers</p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">First name</label>
              <input type="text" placeholder="e.g. Sipho" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Surname</label>
              <input type="text" placeholder="e.g. Ndlovu" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Cell number</label>
              <input type="tel" placeholder="07x xxx xxxx" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Company email</label>
              <input type="email" placeholder="you@company.co.za" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Company name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Type of company</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50">
                <option>Services</option>
                <option>Retail</option>
                <option>Manufacturing</option>
                <option>Distribution</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Role</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50">
                <option>Wholesaler</option>
                <option>Distributor</option>
                <option>Retailer</option>
                <option>Support</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Industry</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50">
                <option>Spaza shop</option>
                <option>Hair salon</option>
                <option>Chesa nyama</option>
                <option>Car wash</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Mechanic</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">City / Province</label>
              <input type="text" placeholder="e.g. Johannesburg, GP" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#185FA5]/50" />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full md:w-auto bg-[#185FA5] text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#0C447C] transition shadow-sm hover:shadow">
            <FiSend size={14} /> Join network
          </button>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Your data is secure. We will never share your information without consent.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EcosystemPage;