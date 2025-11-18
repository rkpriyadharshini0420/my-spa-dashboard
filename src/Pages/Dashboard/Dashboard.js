import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <nav style={{ marginBottom: 12 }}>
        <Link to="profile" style={{ marginRight: 8 }}>Profile</Link>
        <Link to="settings" style={{ marginRight: 8 }}>Settings</Link>
        <Link to="notifications" style={{ marginRight: 8 }}>Notifications</Link>
        <button onClick={handleLogout} style={{ marginLeft: 12 }}>Logout</button>
      </nav>

      <section style={{ padding: 8, border: '1px solid #eee' }}>
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
