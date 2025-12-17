import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">

          {/* Logo Badge */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600
                          flex items-center justify-center text-white font-bold text-lg
                          shadow-md group-hover:scale-105 transition">
            CC
          </div>

          {/* Brand Name */}
          <span className="text-xl font-extrabold text-gray-800 tracking-wide
                           group-hover:text-indigo-600 transition">
            Campus<span className="text-indigo-600">Care</span>
          </span>
        </Link>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          {!token ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-sm px-4 py-2 rounded-md border border-indigo-600
                           text-indigo-600 hover:bg-indigo-50 transition font-medium"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="text-sm px-4 py-2 rounded-md bg-indigo-600 text-white
                           hover:bg-indigo-700 transition font-medium shadow"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
              className="text-sm px-4 py-2 rounded-md bg-red-500 text-white
                         hover:bg-red-600 transition font-medium shadow"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
