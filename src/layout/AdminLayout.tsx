/** @format */

import { Outlet, Link } from "react-router-dom";
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../app/AuthProvider";


const AdminLayout = () => {

  const { logout } = useAuth();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Drawer variant="permanent">
        <List>
          <ListItemButton component={Link} to="/dashboard">
            Dashboard
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/users">
            Users
          </ListItemButton>
          <ListItemButton component={Link} to="/dashboard/settings">
            Settings
          </ListItemButton>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
