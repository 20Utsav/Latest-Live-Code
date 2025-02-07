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
    <nav className="shadow-lg fixed bg-[#121212] w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between h-16">
          
          {/* ✅ LOGO wrapped in Link to go to Home */}
          <div className="flex items-center">
            <Link to="/" onClick={handleLinkClick}>
              <img src={LOGO} className="h-11 cursor-pointer" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#D0DFEA] hover:text-[#5794F9]">Home</Link>
            <Link to="/about" className="text-[#D0DFEA] hover:text-[#5794F9]">About</Link>
            <Link to="/services" className="text-[#D0DFEA] hover:text-[#5794F9]">Services</Link>
            <Link to="/portfolio" className="text-[#D0DFEA] hover:text-[#5794F9]">Portfolio</Link>
            <Link to="/blog" className="text-[#D0DFEA] hover:text-[#5794F9]">Blog</Link>
            <Link
              to="/contact"
              className="bg-[#D0DFEA] text-black px-4 py-2 rounded-md hover:bg-[#5794F9]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
