/**
 *
 * Navbar
 *
 */

import React from 'react';
import Logo from 'images/logo.png';
import './style.scss';

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items');

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.addEventListener('click', classToggle);

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__Link Navbar__Link-brand">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Navbar__Link Navbar__Link-toggle">
        <i className="fas fa-bars" />
      </div>
      <nav className="Navbar__Items Navbar__Items--right">
        <a href="https://www.hostinger.lt/hostingas">Web Hosting</a>
        <a href="https://www.google.com">Cloud Hosting</a>
        <a href="https://www.hostinger.lt/vps-serveriai">VPS Hosting</a>
        <a href="https://www.hostinger.lt/domenai">Domain checker</a>
        <a href="https://www.hostinger.lt/svetaines-kurimas">Website builder</a>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
