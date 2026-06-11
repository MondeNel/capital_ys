const Navbar = ({ changePage, activePage }) => {
  const pages = ['home', 'about', 'services', 'subscribe', 'ecosystem', 'funding', 'contact', 'reviews'];
  const displayNames = {
    home: 'Home', about: 'About', services: 'Services', subscribe: 'Subscribe',
    ecosystem: 'Ecosystem', funding: 'Funding', contact: 'Contact', reviews: 'Reviews'
  };

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-8 h-14 flex items-center justify-between">
      <span className="text-[#185FA5] text-lg font-medium tracking-tight">Capital Ys</span>
      <div className="hidden md:flex gap-6">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium capitalize"
          >
            {displayNames[page]}
          </button>
        ))}
      </div>
      <button onClick={() => changePage('subscribe')} className="bg-[#185FA5] text-white text-sm px-4 py-1.5 rounded-md">
        Get started
      </button>
    </nav>
  );
};

export default Navbar;