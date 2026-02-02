import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {

  return (
    <>
      <div>
        {/* sidebar */}
        <aside
          style={{
            width: "200px",
            background: "#222",
            color: "#fff",
            padding:'20px'
          }}>
          <h3>
            Admin
          </h3>
          <nav>
            <p>
              <Link to='/dashboard' style={{ color: "#fff", }}> Dashboard</Link>
              <Link to="/dashboard/settings" style={{color:"#ffff"}}>
              Settings</Link>
            </p>
          </nav>
        </aside>

        {/* Main content÷ */}
        <main style={{ padding: '20px', flex: 1 }}>
          <Outlet/>
        </main>
      </div>

    </>
  )
}

export default DashboardLayout;