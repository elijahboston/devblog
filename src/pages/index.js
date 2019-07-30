import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Posts" />
    <h1>/posts</h1>
    <Link to="/deploying-selenium-grid-on-aws"><h2>Deploying Selenium Grid on AWS</h2></Link>
  </Layout>
)

export default IndexPage
