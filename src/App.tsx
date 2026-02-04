/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Services from "./pages/Services";
import DashboardLayout from "./layout/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import Settings from "./pages/Settings";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AuthLayout from "./layout/AuthLayout";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { lazy, Suspense } from "react";


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import("./pages/Register"));

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading... </h2>}>
        <Routes>
          {/* Layout Route */}
          <Route path="/" element={<MainLayout />}>
            {/* Child Routes */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
          </Route>

          {/* Auth Layout
           */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* Dashboard Layout */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DashboardLayout />
              </ProtectedRoutes>
            }>
            <Route index element={<Dashboard />} />
            <Route
              path="settings"
              element={
                <ProtectedRoutes allowedRoles={['admin']}>
                  <Settings />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
