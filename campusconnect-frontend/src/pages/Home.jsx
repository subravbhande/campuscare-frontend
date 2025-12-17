import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {}
        <div className="space-y-6 animate-fadeIn">

          {}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl  flex items-center justify-center text-white text-2xl shadow-lg">
              🎓
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Campus<span className="text-indigo-600">Care</span>
            </h1>
          </div>

          <p className="text-lg text-gray-600">
            A smart platform where students raise campus issues and
            administrators take quick, transparent action.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span> Raise issues with image proof
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">✔</span> Track real-time status updates
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-500">✔</span> Faster resolution & accountability
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            <Link
              to="/register"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold
                         hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold
                         hover:bg-indigo-50 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        {}
        <div className="relative h-[360px]">

          {}
          <div className="absolute top-0 left-10 w-64 p-4 bg-white rounded-xl shadow-lg
                          hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-indigo-600 mb-1">📢 Issue Raised</h3>
            <p className="text-sm text-gray-600">
              Student submits issue with image & details
            </p>
          </div>

          {/* CARD 2 */}
          <div className="absolute top-28 right-10 w-64 p-4 bg-white rounded-xl shadow-lg
                          hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-yellow-600 mb-1">🛠 Action Taken</h3>
            <p className="text-sm text-gray-600">
              Admin reviews & updates status
            </p>
          </div>

          {/* CARD 3 */}
          <div className="absolute bottom-0 left-20 w-64 p-4 bg-white rounded-xl shadow-lg
                          hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-green-600 mb-1">✅ Resolved</h3>
            <p className="text-sm text-gray-600">
              Issue solved & confirmed
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
