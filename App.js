import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <div className="logo-icon" />
          Exchange Game
        </div>
        <nav className="nav-menu">
          <a className="nav-item" href="#">Home</a>
          <a className="nav-item" href="#">Features</a>
          <a className="nav-item" href="#">Download</a>
        </nav>
      </header>

      <main className="knowledge-grid">
        <div className="knowledge-card">
          <h3 className="card-title">Real-Time Power</h3>
          <p className="card-description">Experience real-time transfers and strategy play.</p>
        </div>
        <div className="knowledge-card">
          <h3 className="card-title">Multiplayer Mode</h3>
          <p className="card-description">Compete and collaborate with players worldwide.</p>
        </div>
      </main>

      <section className="power-indicator">
        <div className="power-bar">
          <div className="power-level" style={{ width: '70%' }}></div>
        </div>
        <div className="power-text">Power: 70%</div>
      </section>

      <section style={{ padding: '2rem' }}>
        <input className="input-field" placeholder="Enter your code..." />
        <button className="btn" style={{ marginLeft: '1rem' }}>Submit</button>
      </section>

      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className="modal-title">Age Verification</h2>
          <p className="modal-text">You must be 13+ to play Exchange Game.</p>
          <button className="btn">I Agree</button>
        </div>
      </div>
    </div>
  );
}