/** @format */

import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div
        style={{ width: "300px", padding: "20px", border: "1px solid #ccc" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
