import { useState } from 'react';
import { FiPackage, FiTruck, FiUser, FiMapPin, FiSend, FiUserCheck } from 'react-icons/fi';
import { MdOutlineStorefront, MdOutlinePhotoCamera } from 'react-icons/md';

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

export default EcosystemPage;