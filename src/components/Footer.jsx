import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 pt-10 pb-6 text-white bg-green-950 md:px-16">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-4">

        {/* Logo & Description */}
        <div>
          <h2 className="mb-2 text-2xl font-bold text-lime-400">🌿 PlantCare</h2>
          <p className="text-sm text-gray-300">
            Your digital assistant for healthy, happy plants. Track watering, fertilizing, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-lime-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/all-plants" 
                className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400"}>
                All Plants
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/add-plant" 
                className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400"}>
                Add Plant
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/my-plants" 
                className={({ isActive }) => isActive ? "text-lime-400" : "hover:text-lime-400"}>
                My Plants
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-lime-300">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email: <a href="mailto:monirmdnayemsaju42@gmail.com" className="hover:text-lime-400">support@monirsaju.com</a>
            </li>
            <li>Phone: +880 1645323387</li>
            <li>Sylhet, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-lime-300">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="https://www.facebook.com/monirmdnayemsaju42" target="_blank" rel="noopener noreferrer" className="transition hover:text-lime-400"><FaFacebookF /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-lime-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/monirmdnayemsaju42/" target="_blank" rel="noopener noreferrer" className="transition hover:text-lime-400"><FaInstagram /></a>
            <a href="https://github.com/MonirMohammed1995" target="_blank" rel="noopener noreferrer" className="transition hover:text-lime-400"><FaGithub /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-4 mt-10 text-sm text-center text-gray-500 border-t border-green-800">
        &copy; 2025 PlantCare — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
