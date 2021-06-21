import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/img/logo.png';
import one from 'src/assets/img/1.png';
import two from 'src/assets/img/2.png';
import three from 'src/assets/img/3.png';
import four from 'src/assets/img/4.png';

import './styles.scss';

const Header = () => (
  <header className="menu">
    <div className="sign-container--right-top"><img src={one} alt="moon sign" /></div>
    <div className="sign-container--left-top"><img src={two} alt="moon sign" /></div>
    <div className="sign-container--right-bottom"><img src={three} alt="moon sign" /></div>
    <div className="sign-container--left-bottom"><img src={four} alt="moon sign" /></div>
    <nav>
      <NavLink to="/">
        <div className="link-container">
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <NavLink to="/">Homepage -</NavLink>
      <NavLink to="/about"> About</NavLink>
    </nav>
  </header>
);

export default Header;
