import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Campus<span className="text-indigo-500">Care</span>
          </h2>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            CampusCare is a smart campus issue management system that helps
            students report problems and track resolutions transparently.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">📍 College Campus, India</p>
          <p className="text-sm mt-2">📧 support@campuscare.in</p>
          <p className="text-sm mt-2">📞 +91 9XXXXXXXXX</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm text-gray-400 py-4">
        © {new Date().getFullYear()} CampusCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
