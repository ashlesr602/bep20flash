// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>🚨 Flashing USDT Scam Demo</h2>
      <p>This demo shows how scam dApps ask you to connect wallet and later drain your tokens.</p>
      <button onClick={() => alert('🔗 Wallet connection simulated')}>
        Connect Wallet
      </button>
    </div>
  );
};

export default Home;
