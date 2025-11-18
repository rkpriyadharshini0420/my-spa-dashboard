import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // very simple "auth" for demo
    localStorage.setItem('loggedIn', 'true');
    navigate('/dashboard', { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Click the button to "log in" (demo only).</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;
