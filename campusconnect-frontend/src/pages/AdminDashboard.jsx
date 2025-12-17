import { useEffect, useState } from "react";
import api from "../api/axios";
import AdminSidebar from "../components/AdminSidebar";

const statusColor = {
  OPEN: "bg-yellow-100 text-yellow-800",
  IN_PROGRESS: "bg-blue-100 text-blue-800",
  RESOLVED: "bg-green-100 text-green-800",
  CLOSED: "bg-gray-200 text-gray-700",
};

const AdminDashboard = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIssues = async () => {
    try {
      const res = await api.get("/admin/issues");
      setIssues(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const updateStatus = async (id, status) => {
    await api.put(`/admin/issues/${id}/status`, null, {
      params: { status },
    });
    fetchIssues();
  };

  const count = (s) => issues.filter((i) => i.status === s).length;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* STATUS CARDS */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card title="Pending" value={count("OPEN")} color="bg-yellow-100" />
          <Card title="In Progress" value={count("IN_PROGRESS")} color="bg-blue-100" />
          <Card title="Resolved" value={count("RESOLVED")} color="bg-green-100" />
          <Card title="Closed" value={count("CLOSED")} color="bg-gray-200" />
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {issues.map((issue) => (
              <div key={issue.id} className="bg-white p-5 rounded shadow">
                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{issue.title}</h2>
                    <p className="text-gray-600">{issue.description}</p>

                    <p className="text-sm mt-1">
                      <b>Student:</b>{" "}
                      {issue.createdBy?.name} ({issue.createdBy?.email})
                    </p>

                    {issue.imagePath && (
                      <button
                        onClick={() =>
                          window.open(
                            `http://localhost:8080/uploads/${issue.imagePath}`,
                            "_blank"
                          )
                        }
                        className="text-blue-600 text-sm mt-2 underline"
                      >
                        View Image
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[issue.status]}`}
                    >
                      {issue.status}
                    </span>

                    <select
                      value={issue.status}
                      onChange={(e) =>
                        updateStatus(issue.id, e.target.value)
                      }
                      className="border px-3 py-1 rounded"
                    >
                      <option value="OPEN">OPEN</option>
                      <option value="IN_PROGRESS">IN_PROGRESS</option>
                      <option value="RESOLVED">RESOLVED</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className={`${color} p-4 rounded shadow text-center`}>
    <p className="text-sm">{title}</p>
    <h2 className="text-2xl font-bold">{value}</h2>
  </div>
);

export default AdminDashboard;
