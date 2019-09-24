import React from "react"
import PropTypes from "prop-types"
import { Header, Footer, Menu } from "./index"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, LayoutWrapper, PageBody, Main } from "./layout/styles"

import theme from "../themes/mars-dark"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          nav {
            value
            label
            external
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: {
        title,
        nav,
      }
    }
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <LayoutWrapper>
          <Header title={title} nav={nav}/>
          <Menu nav={nav}/>
          <PageBody>
            <Main>{children}</Main>
            <Footer />
          </PageBody>
        </LayoutWrapper>
      </React.Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
