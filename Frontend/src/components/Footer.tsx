import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/img/footer.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#611bdd] to-[#5e87eb] opacity-50 z-0"></div>

      {/* Footer Content */}
      <div className="relative z-10 py-24">
        {/* Container with max-width and centered */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div className="text-white">
              <h4 className="text-lg font-semibold relative pb-4">
                <span>About Us</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              </h4>
              <p className="mt-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-5">
                <ul className="flex space-x-4">
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white text-[#4f46e5] rounded-lg flex items-center justify-center text-lg"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white text-[#4f46e5] rounded-lg flex items-center justify-center text-lg"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white text-[#4f46e5] rounded-lg flex items-center justify-center text-lg"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white text-[#4f46e5] rounded-lg flex items-center justify-center text-lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="text-white">
              <h4 className="text-lg font-semibold relative pb-4">
                <span>Quick Links</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    IT Solution
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    Networking Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    App Optimization
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services Section */}
            <div className="text-white">
              <h4 className="text-lg font-semibold relative pb-4">
                <span>Our Services</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    IT Solution
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    Networking Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white hover:underline">
                    App Optimization
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information Section */}
            <div className="text-white">
              <h4 className="text-lg font-semibold relative pb-4">
                <span>Contact Information</span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:it.solution@techmax.com"
                    className="text-sm text-white hover:underline flex items-center"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    <span>it.solution@techmax.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+000313577111"
                    className="text-sm text-white hover:underline flex items-center"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    <span>+000 313 577 111</span>
                  </a>
                </li>
                <li className="text-sm text-white flex items-center">
                  <i className="fas fa-location-dot mr-2"></i>
                  <span>4035 Heavens, Los Angeles, California</span>
                </li>
              </ul>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-2/3 p-3 bg-white rounded-l-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-1/3 bg-white text-primary-color p-3 rounded-r-lg hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-primary-color-900 py-8">
        {/* Container with max-width and centered */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm text-center md:text-left">
              <i className="far fa-copyright mr-2"></i>
              2022 Techmax By Sujan Butani - All Rights Reserved.
            </p>
            <ul className="flex space-x-4 mt-4 md:mt-0">
              <li className="px-2.5 border-r border-white">
                <a href="#" className="text-white text-sm hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="px-2.5">
                <a href="#" className="text-white text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;