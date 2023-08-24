import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ps-3 pe-3 navigation">
      <a className="navbar-brand brand-text" href="#"><span className='main-brand'>Taiyo</span> Task</a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav}
        aria-expanded={isNavOpen}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className='nav-link'>Contacts</Link>
          </li>
          <li className="nav-item">
            <Link to="/charts" className='nav-link'>Charts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
