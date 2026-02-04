/** @format */

import { Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Active Sessions</Typography>
            <Typography variant="h4">45</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Revenue</Typography>
            <Typography variant="h4">₹50,000</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
