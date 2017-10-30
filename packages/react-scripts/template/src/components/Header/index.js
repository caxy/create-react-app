import React from 'react';
import logo from './logo.svg';

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title">Welcome to React</h1>
    </header>
  );
}

export default Header;
