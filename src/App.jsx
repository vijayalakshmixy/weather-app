

// src/App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      {showLogin && <LoginForm setShowLogin={setShowLogin} />}
    </div>
  );
}

export default App;

