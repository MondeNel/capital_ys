import { useState, useEffect } from 'react';

const Navbar = ({ changePage, activePage }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = ['home', 'about', 'services', 'subscribe', 'ecosystem', 'funding', 'contact', 'reviews'];
  const displayNames = {
    home: 'Home', about: 'About', services: 'Services', subscribe: 'Subscribe',
    ecosystem: 'Ecosystem', funding: 'Funding', contact: 'Contact', reviews: 'Reviews'
  };

  return (
    <nav className={`sticky top-0 z-20 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-white border-b border-gray-200'
    } px-4 sm:px-8 h-14 flex items-center justify-between`}>
      <span className="text-[#185FA5] text-lg font-semibold tracking-tight cursor-pointer" onClick={() => changePage('home')}>
        Capital Ys
      </span>
      <div className="hidden md:flex gap-6">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`text-sm font-medium transition-colors ${
              activePage === page ? 'text-[#185FA5]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {displayNames[page]}
          </button>
        ))}
      </div>
      <button onClick={() => changePage('subscribe')} className="bg-[#185FA5] text-white text-sm px-4 py-1.5 rounded-md hover:bg-[#0C447C] transition-colors shadow-sm">
        Get started
      </button>
    </nav>
  );
};

export default Navbar;