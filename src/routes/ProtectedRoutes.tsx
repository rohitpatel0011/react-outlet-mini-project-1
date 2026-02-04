/** @format */

import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../app/AuthProvider";

type Props = {
  children: JSX.Element;
  allowedRoles?: string[];
};

const ProtectedRoute = ({ children, roles }: Props) => {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace/>
  }
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/admin" replace/>
  }

  return children;
};

export default ProtectedRoute;
