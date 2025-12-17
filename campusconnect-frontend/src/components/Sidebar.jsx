import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ active, setActive }) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-indigo-600 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Student Panel</h2>

      <button
        onClick={() => setActive("create")}
        className={`block w-full text-left px-4 py-2 rounded mb-2 ${
          active === "create" ? "bg-indigo-800" : ""
        }`}
      >
        ➕ Create Issue
      </button>

      <button
        onClick={() => setActive("myissues")}
        className={`block w-full text-left px-4 py-2 rounded mb-2 ${
          active === "myissues" ? "bg-indigo-800" : ""
        }`}
      >
        📄 My Issues
      </button>

      <button
        onClick={() => setActive("profile")}
        className={`block w-full text-left px-4 py-2 rounded mb-6 ${
          active === "profile" ? "bg-indigo-800" : ""
        }`}
      >
        👤 Profile
      </button>

      <button
        onClick={() => logout(navigate)}
        className="block w-full text-left px-4 py-2 rounded bg-red-500"
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default Sidebar;
