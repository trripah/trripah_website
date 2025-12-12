import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { Packages } from "./pages/Packages";
import { PackageDetail } from "./pages/PackageDetail";
import { CustomTrip } from "./pages/CustomTrip";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { Reviews } from "./pages/Reviews";
import { Toaster } from "./components/ui/sonner";
import { LoginScreen } from "./admin/LoginScreen";
import DashboardScreen from "./admin/DashbodeScreen";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function AppLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin/login" || location.pathname === "/admin/dashboard";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminPage && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/custom-trip" element={<CustomTrip />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/admin/login" element={<LoginScreen />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <DashboardScreen />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <WhatsAppButton />}
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}
