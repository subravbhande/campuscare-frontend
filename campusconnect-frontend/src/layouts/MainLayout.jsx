import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
