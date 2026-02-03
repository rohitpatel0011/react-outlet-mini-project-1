import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;

};

const ProtectedRoutes = ({ children }: Props) => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Navigate to='/login'  replace/>
  }
  return (
    children
  )
};

export default ProtectedRoutes