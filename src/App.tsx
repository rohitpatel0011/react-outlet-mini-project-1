/** @format */

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./app/AuthProvider";
import AppRoutes from "./app/AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
