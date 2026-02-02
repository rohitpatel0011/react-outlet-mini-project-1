/** @format */

import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Header */}
      <header style={{ padding: "10px", background: "#eee" }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/services">Services</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      {/* Dynamic Content */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: "10px", background: "#eee" }}>
        <p>© 2026 My App</p>
      </footer>
    </div>
  );
};

export default MainLayout;
