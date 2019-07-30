import PropTypes from "prop-types"
import React from "react"
import "./header.css";
import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header>
    <Nav siteTitle={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
