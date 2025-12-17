import { useEffect, useState } from "react";
import api from "../api/axios";

const statusLabel = {
  OPEN: "Submitted",
  IN_PROGRESS: "Action Taken",
  RESOLVED: "Solved",
  CLOSED: "Closed",
};

const statusColor = {
  OPEN: "bg-yellow-100 text-yellow-800",
  IN_PROGRESS: "bg-blue-100 text-blue-800",
  RESOLVED: "bg-green-100 text-green-800",
  CLOSED: "bg-gray-200 text-gray-700",
};

const MyIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    api.get("/issues/my").then((res) => setIssues(res.data));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        My Issues
      </h2>

      {issues.length === 0 && (
        <p className="text-gray-500">No issues raised yet.</p>
      )}

      <div className="space-y-5">
        {issues.map((i) => (
          <div
            key={i.id}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{i.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {i.description}
                </p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${statusColor[i.status]}`}
              >
                {statusLabel[i.status]}
              </span>
            </div>

            {i.imagePath && (
              <button
                onClick={() =>
                  window.open(
                    `http://localhost:8080/uploads/${i.imagePath}`,
                    "_blank"
                  )
                }
                className="text-indigo-600 text-sm mt-3 underline hover:text-indigo-800"
              >
                View Attached Image
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyIssues;
