import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-indigo-700 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        CampusConnect
      </h2>

      <ul className="space-y-4">
        <li className="cursor-pointer hover:text-gray-200">
          All Issues
        </li>

        <li
          onClick={logout}
          className="cursor-pointer hover:text-gray-200 mt-10"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
