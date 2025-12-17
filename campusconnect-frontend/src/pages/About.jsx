const About = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-50 flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          About <span className="text-indigo-600">CampusCare</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          CampusCare is a digital platform designed to improve communication
          between students and campus administration.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Students can raise issues related to infrastructure, academics,
          safety, or facilities, while administrators can track, manage,
          and resolve them efficiently.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-600 mb-2">Transparency</h3>
            <p className="text-sm text-gray-600">
              Real-time status updates for every issue.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-600 mb-2">Efficiency</h3>
            <p className="text-sm text-gray-600">
              Faster response and resolution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-600 mb-2">Accountability</h3>
            <p className="text-sm text-gray-600">
              Clear ownership of campus issues.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
