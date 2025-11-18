import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import Settings from './pages/Dashboard/Settings';
import Notifications from './pages/Dashboard/Notifications';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
        <nav>
          <Link to="/" style={{ marginRight: 8 }}>Home</Link>
          <Link to="/dashboard" style={{ marginRight: 8 }}>Dashboard</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* Nested routes are defined inside Dashboard via Outlet,
                but we add shortcuts here so direct /dashboard/profile works */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>

          {/* catch-all fallback (optional) */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
