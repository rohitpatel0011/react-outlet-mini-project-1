/** @format */

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const Users = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Rohit</TableCell>
              <TableCell>rohit@gmail.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aman</TableCell>
              <TableCell>aman@gmail.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
