import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./footer.scss";
import Menu from './menu';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (     
    <div className="footer">
      <span>© {new Date().getFullYear()}, {data.site.siteMetadata.title}</span>
      <div className="footer-links">
        <Menu />
      </div>
    </div>
  )
}

export default Footer;
