// src/pages/Admin.jsx
import React, { useState } from 'react';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [status, setStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin_demo' && password === 'FlashStrike2025') {
      setLoggedIn(true);
    } else {
      setStatus('❌ Invalid credentials');
    }
  };

  return (
    <div style={{ padding: 30 }}>
      {!loggedIn ? (
        <>
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            /><br /><br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            /><br /><br />
            <button type="submit">Login</button>
            <p>{status}</p>
          </form>
        </>
      ) : (
        <div>
          <h2>✅ Admin Panel</h2>
          <p>This is a simulated dashboard showing how fake dApps track wallet connections.</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
