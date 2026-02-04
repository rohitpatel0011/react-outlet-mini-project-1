/** @format */

import { useAuth } from "../../app/AuthProvider";

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login("admin")}>Login as Admin</button>
    </div>
  );
};

export default Login;
