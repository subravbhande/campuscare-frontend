import { useState } from "react";
import api from "../api/axios";

const CreateIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();

      const issueData = { title, description, category };

      formData.append(
        "issue",
        new Blob([JSON.stringify(issueData)], {
          type: "application/json",
        })
      );

      if (image) formData.append("image", image);

      await api.post("/issues", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess("✅ Issue submitted successfully!");
      setTitle("");
      setDescription("");
      setCategory("");
      setImage(null);
    } catch {
      setError("❌ Failed to submit issue");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Raise a New Issue
      </h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-600 mb-3">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <textarea
          placeholder="Describe the issue clearly..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <input
          type="text"
          placeholder="Category (Hostel, Classroom, Network...)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <div className="border-2 border-dashed rounded-lg p-4 text-center hover:border-indigo-500 transition">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-2">
            Optional: Upload supporting image
          </p>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default CreateIssue;
