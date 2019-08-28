import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>I graduated in 2010 with a <b>Bachelors of Science in Computer Engineering from the University of South Florida</b>, and a minor in Physics.</p>
    <p>For the better part of a decade I've worked in various aspects of web development from frontend design, to backend API development, to managing infrastructure and automated processes.</p>
    <p>My interest in technology and web development has been lifelong. I made my first website at 13 on Geocities, taught myself Python during college, and setup my first server on an old Dell Optiplex around the same time.</p>
    <p>In my free time I enjoy travel, DJ'ing, gaming, and binging Netflix.</p>
  </Layout>
)

export default IndexPage
