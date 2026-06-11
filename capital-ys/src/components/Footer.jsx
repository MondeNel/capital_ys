const Footer = ({ changePage }) => (
  <footer className="bg-gray-50 border-t border-gray-200 py-6 px-4 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
    <span className="text-gray-500 text-xs">© 2025 Capital Ys. All rights reserved.</span>
    <div className="flex gap-4 text-xs text-gray-500">
      <button onClick={() => changePage('about')}>About</button>
      <button onClick={() => alert('Terms & conditions')}>Terms & conditions</button>
      <button onClick={() => alert('Privacy policy')}>Privacy policy</button>
      <button onClick={() => changePage('contact')}>Contact</button>
    </div>
  </footer>
);

export default Footer;