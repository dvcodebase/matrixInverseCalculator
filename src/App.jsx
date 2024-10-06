import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MatrixCalculator from './components/MatrixCalculator';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <div className="container mt-5">
        {isLoggedIn ? (
          <MatrixCalculator />
        ) : (
          <h2 className="text-center">Please log in to use the matrix calculator</h2>
        )}
      </div>
    </div>
  );
}

export default App;
