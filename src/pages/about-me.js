import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>/about-me</h1>
    <p>
      I made my first website at 13 and I've been writing code every since. I specialize in building web apps and automation, utilizing cloud services and containerization.
    </p>

    <h3>Languages</h3>
    <ul>
      <li>Javascript (ES5 + ES6)</li>
      <li>Python</li>
    </ul>

    <h3>Frameworks & Libraries</h3>
    <ul>
      <li>Node.js</li>
      <li>React</li>
      <li>GraphQL</li>
    </ul>

    <h3>CI/CD + Testing</h3>
    <ul>
      <li>Jenkins</li>
      <li>Mocha</li>
      <li>Selenium</li>
      <li>AVA</li>
    </ul>

    <h3>Container Orchestration</h3>
    <ul>
      <li>Docker Swarm</li>
      <li>Kubernetes</li>
    </ul>

    <h3>AWS Cloud Services</h3>
    <ul>
      <li>S3</li>
      <li>ECS</li>
      <li>EC2</li>
    </ul>
  </Layout>
)

export default IndexPage
