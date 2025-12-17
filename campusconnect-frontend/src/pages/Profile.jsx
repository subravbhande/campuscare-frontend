import { useState, useEffect } from "react";
import api from "../api/axios";

const Profile = () => {
  const [user, setUser] = useState({ email: "", role: "" });
  const [showChangePass, setShowChangePass] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const payload = JSON.parse(atob(token.split(".")[1]));
    setUser({ email: payload.sub, role: payload.role });
  }, []);

  const handleChangePassword = async () => {
    setMsg("");
    try {
      await api.put("/auth/change-password", { oldPassword, newPassword });
      setMsg("✅ Password updated successfully");
      setShowChangePass(false);
      setOldPassword("");
      setNewPassword("");
    } catch {
      setMsg("❌ Old password is incorrect");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        My Profile
      </h2>

      <div className="space-y-3 mb-6">
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {user.role}</p>
      </div>

      <button
        onClick={() => setShowChangePass(!showChangePass)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
      >
        Change Password
      </button>

      {showChangePass && (
        <div className="mt-5 space-y-3">
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={handleChangePassword}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Update Password
          </button>

          {msg && <p className="text-sm mt-2">{msg}</p>}
        </div>
      )}
    </div>
  );
};

export default Profile;
