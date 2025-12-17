import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC PAGES ================= */}

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        }
      />

      <Route
        path="/register"
        element={
          <>
            <Navbar />
            <Register />
            <Footer />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* ================= STUDENT DASHBOARD ================= */}
      {/* ❌ NO Navbar / Footer */}
      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />

      {/* ================= ADMIN DASHBOARD ================= */}
      {/* ❌ NO Navbar / Footer */}
      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

    </Routes>
  );
}

export default App;
