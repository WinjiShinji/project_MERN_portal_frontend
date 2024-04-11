import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Account from "./pages/Account";
import { SiteProvider } from "./context/SiteContext";
import { AuthProvider } from "./context/AuthContext";
import Admin from "./pages/Admin";
import { AdminProvider } from "./context/AdminContext";

function App() {
  return (
    <div className="app">
      <SiteProvider>
        <Navbar />
        {/* Public Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Private Routes */}
        <AuthProvider>
        <Routes>
          <Route exact path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
        {/* Admin Routes */}
        <AdminProvider>
        <Routes>
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
        </AdminProvider>
        </AuthProvider>
        <Footer />
      </SiteProvider>
    </div>
  );
}

export default App;
