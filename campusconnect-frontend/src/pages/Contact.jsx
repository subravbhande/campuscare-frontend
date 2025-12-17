const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-50 flex items-center">
      <div className="max-w-3xl mx-auto px-6 w-full">

        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Contact <span className="text-indigo-600">Us</span>
        </h1>

        <div className="bg-white p-8 rounded-xl shadow space-y-4">
          <p className="text-gray-600">
            Have questions or suggestions? Reach out to us.
          </p>

          <div className="space-y-2 text-sm">
            <p>📍 maharashtra, India</p>
            <p>📧 subravbhande06@gmail.com</p>
            <p>📞 +91 9XXXXXXXXX</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
