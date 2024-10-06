import React from 'react';

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Matrix Inverse Calculator</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={onLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-success" onClick={onLogin}>
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
