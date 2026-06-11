// src/components/MobileBottomNav.jsx
import { FiHome, FiBriefcase, FiCreditCard, FiGlobe, FiDollarSign } from 'react-icons/fi';

const MobileBottomNav = ({ changePage, activePage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <FiHome size={20} /> },
    { id: 'services', label: 'Services', icon: <FiBriefcase size={20} /> },
    { id: 'subscribe', label: 'Subscribe', icon: <FiCreditCard size={20} /> },
    { id: 'ecosystem', label: 'Ecosystem', icon: <FiGlobe size={20} /> },
    { id: 'funding', label: 'Funding', icon: <FiDollarSign size={20} /> }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-30">
      <div className="flex justify-around items-center px-2 py-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => changePage(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors ${
              activePage === item.id
                ? 'text-[#185FA5]'
                : 'text-gray-500 hover:text-[#185FA5]'
            }`}
          >
            {item.icon}
            <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;