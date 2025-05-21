import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-lime-400 mb-2">🌿 PlantCare</h2>
          <p className="text-sm text-gray-300">
            Your digital assistant for healthy, happy plants. Track watering, fertilizing, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-lime-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-lime-400 transition">Home</a></li>
            <li><a href="/all-plants" className="hover:text-lime-400 transition">All Plants</a></li>
            <li><a href="/add-plant" className="hover:text-lime-400 transition">Add Plant</a></li>
            <li><a href="/my-plants" className="hover:text-lime-400 transition">My Plants</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-lime-300 mb-3">Contact</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: <a href="mailto:support@plantcare.app" className="hover:text-lime-400">support@plantcare.app</a></li>
            <li>Phone: +880 1234-567890</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold text-lime-300 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-lime-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-lime-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-lime-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-lime-400 transition"><FaGithub /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        &copy; 2025 PlantCare — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;