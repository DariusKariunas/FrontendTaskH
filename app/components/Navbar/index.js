/**
 *
 * Navbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Logo from 'images/logo.png';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
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
        <a href="home">Web Hosting</a>
        <a href="home">Cloud Hosting</a>
        <a href="home">VPS Hosting</a>
        <a href="home">Domain checker</a>
        <a href="home">Website builder</a>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
