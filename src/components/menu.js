import React from "react";
import Scrollspy from 'react-scrollspy'

import './menu.scss'

const Menu = () => (
  <div className="menu">
    <div className="menu-links">
      <Scrollspy items={ ['home', 'about', 'services', 'contact'] } currentClassName="active">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Get In Touch</a></li>
      </Scrollspy>
    </div>
  </div>
);

export default Menu;