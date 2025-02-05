import React, { useEffect, useRef } from 'react'; 
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LOGO from "../../img/cc_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef(null);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="shadow-lg fixed bg-black w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={LOGO} className="h-11" alt="Logo" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-400 hover:text-[#112347]">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-[#112347]">About</Link>
            <Link to="/services" className="text-gray-400 hover:text-[#112347]">Services</Link>
            <Link to="/portfolio" className="text-gray-400 hover:text-[#112347]">Portfolio</Link>
            <Link to="/blog" className="text-gray-400 hover:text-[#112347]">Blog</Link>
            <Link
              to="/contact"
              className="bg-[#112347] text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-[#112347]" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-[#112347]" onClick={handleLinkClick}>About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-[#112347]" onClick={handleLinkClick}>Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-[#112347]" onClick={handleLinkClick}>Portfolio</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-[#112347]" onClick={handleLinkClick}>Blog</Link>
            <Link
              to="/contact"
              className="block px-3 py-2 bg-[#112347] text-white rounded-md"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
