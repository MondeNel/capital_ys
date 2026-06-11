import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';  // import the Logo component

const Navbar = ({ changePage, activePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handlePageChange = (page) => {
    changePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`sticky top-0 z-20 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-white border-b border-gray-200'
      } px-4 sm:px-8 h-14 flex items-center justify-between`}>
        {/* Logo */}
        <Logo size="md" onClick={() => handlePageChange('home')} />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`text-[15px] font-medium transition-colors ${
                activePage === page ? 'text-[#185FA5]' : 'text-gray-700 hover:text-[#185FA5]'
              }`}
            >
              {displayNames[page]}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={() => handlePageChange('subscribe')} className="bg-[#185FA5] text-white text-sm px-4 py-1.5 rounded-md hover:bg-[#0C447C] transition-colors shadow-sm">
            Get started
          </button>
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-10 py-4 px-4 flex flex-col gap-3 animate-fadeIn">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`text-left text-base font-medium py-2 px-3 rounded-md transition-colors ${
                activePage === page ? 'bg-[#185FA5]/10 text-[#185FA5]' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {displayNames[page]}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;