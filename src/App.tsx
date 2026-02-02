/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<MainLayout />}>
          {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services/>}/>
        </Route>
        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
     </Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
