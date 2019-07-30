import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>/about-me</h1>
    <p>
      Polyglot developer, ocassional DJ. I made my first site at 13, hosted on Geocities. I can't remember what it looked like, but I'm sure it was attrocious and had lots of blinking text. In the ensuing 27 years I like to believe my skills have improved somewhat ;)
    </p>
    <p>
      This is where I dump info on whatever weird challenging problems/processes I've had to deal with so future developers (and myself) are spared the hardship of starting from scratch. There might also be some ranting.
    </p>
  </Layout>
)

export default IndexPage
