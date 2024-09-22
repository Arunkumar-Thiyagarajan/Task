// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Courses</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fullstack">Full Stack Development</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datascience">Data Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cybersecurity">Cyber Security</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
