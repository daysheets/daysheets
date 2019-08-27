import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import './header.scss'
import logo from '../images/daysheets_logo_light.svg'

const Header = () => (
  <div className="header">
    <img src={logo} alt="Day Sheets" className="logo" />
    <div className="header-links">
      <span>Coming Soon</span>
    </div>
  </div>
);

export default Header;
