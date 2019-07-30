import { Link } from "gatsby"
import React from "react"
import "./nav.css";

const Nav = ({ siteTitle }) => (
  <nav>
    <div className="site-title">
      <h2>{siteTitle}</h2>
    </div>
    <div className="nav-items">
      <Link to="/">posts</Link>
      <Link to="/about-me">about-me</Link>
      <Link to="/projects">projects</Link>
    </div>
  </nav>
)

export default Nav
