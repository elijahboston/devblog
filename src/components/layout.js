import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../themes/mars-dark"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }

  html * {
    color-profile: sRGB;
    rendering-intent: auto;
  }

  a {
    color: ${props => props.theme.linkColor};
    transition: filter .5s ease;
  }

  a:visited {
    color: ${props => props.theme.linkColor};
  }

  a:hover, a:active {
    color: ${props => props.theme.linkHoverColor};
  }

  nav a {
    color: ${props => props.theme.navMenuLinkColor};
  }

  nav a:visited {
    color: ${props => props.theme.navMenuLinkColor};
  }

  nav a:hover, nav a.active {
      color: ${props => props.theme.linkHoverColor};
  }

  nav a:hover svg {
    fill: ${props => props.theme.linkHoverColor};
  }

  h1, h2, h3, h4, h5 {
    color: ${props => props.theme.headerColor};
  }

  .sticky-header {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgba(${props => props.theme.bgColor2RGB}, .8);
  }

  .sticky-header-active {
    margin-top: 100px;
  }

  html, body, p {
    font-family: ${props => props.theme.primaryFont || 'sans-serif'};
  }

  h1, h2, h3, h4 {
    font-weight: 300;
    font-family: ${props => props.theme.headerFont || 'sans-serif'};
  }

  a.active {
    color: ${props => props.theme.linkHoverColor};
  }
`

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PageBody = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  width: 70%;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`



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
          <PageBody>
            <main>{children}</main>
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
