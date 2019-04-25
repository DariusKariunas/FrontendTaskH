/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Content from 'components/Content';
import './style.scss';

export default function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
