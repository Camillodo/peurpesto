import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/img/logo.png';
import one from 'src/assets/img/1.png';
import './styles.scss';

const Header = () => (
  <header className="menu">
    <nav>
      <NavLink to="/">
        <div className="link-container">
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <NavLink to="/">Homepage</NavLink>
    </nav>
  </header>
);

export default Header;
