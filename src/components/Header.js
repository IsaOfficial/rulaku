import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../assets/logo_text.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><a href="/#layanan">Layanan</a></li>
          <li><a href="/#berita">Berita</a></li>
          <li><a href="/#kontak">Kontak</a></li>
          <li><Link to="/register" className="outline">Daftar</Link></li>
          <li><Link to="/login" className="outline">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
