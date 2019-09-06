import React from "react"

import './header.scss';
import logo from '../images/daysheets_logo_light.svg';
import Menu from './menu';

const Header = () => (
  <div className="header">
    <img src={logo} alt="Day Sheets" className="logo" />
    <div className="header-links">
      <Menu />
    </div>
  </div>
);

export default Header;
