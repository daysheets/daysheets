/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'font-awesome/css/font-awesome.min.css';

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
