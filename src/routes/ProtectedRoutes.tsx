/** @format */

import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
  allowedRoles?: string[];
};

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const isAuthenticated = true; // assume logged in
  const userRole = "user"; // admin | user

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
