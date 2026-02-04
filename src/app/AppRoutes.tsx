/** @format */

import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../routes/ProtectedRoutes";

import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import AdminLayout from "../layout/AdminLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Services from "../pages/public/Services";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Settings from "../pages/admin/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC WEBSITE */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Route>

      {/* AUTH PAGES */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* ADMIN (PROTECTED) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <AdminLayout />
          </ProtectedRoutes>
        }>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route
          path="settings"
          element={
            <ProtectedRoutes allowedRoles={["admin"]}>
              <Settings />
            </ProtectedRoutes>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
