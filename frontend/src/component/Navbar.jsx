import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="logo">Portofolio</Link>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hobby">Hobby</Link>
        <Link to="/myskill">Skill</Link>
      </nav>
    </header>
  );
}

export default Navbar