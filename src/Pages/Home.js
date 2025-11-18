import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome — this is a simple SPA demo.</p>
    <p>
      Try the <Link to="/login">Login</Link> or go to the <Link to="/dashboard">Dashboard</Link>.
    </p>
  </div>
);

export default Home;
