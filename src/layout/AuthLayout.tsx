/** @format */

import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}>
        <Toolbar />
        <List>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton component={Link} to="/dashboard/users">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>

          <ListItemButton component={Link} to="/dashboard/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
