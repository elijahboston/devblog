import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
  }

  a:visited {
    color: ${props => props.theme.linkColor};
  }

  a:hover, a:active {
    color: ${props => props.theme.linkHoverColor};
  }

  h1, h2, h3, h4, h5 {
    color: ${props => props.theme.headerColor};
  }

  .normal-header {
  }

  .sticky-header {
    position: fixed;
    width: 100%;
    top: 0;
  }

  .sticky-header-active {
    margin-top: 100px;
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

const Header = styled.header`
  background-size: 100%;
  margin-bottom: 1.45rem;
`

const HeaderLink = styled(props => <Link activeStyle={{ color: theme.activeLinkColor }} { ...props } />)`
  color: white;
  text-decoration: none;
  font-family: 'Unica One', cursive;

  &:visited {
    color: white;
  }

  &:hover, &:active {
    color: ${props => props.theme.linkHoverColor};
  }
`

const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 1.45rem 1.0875rem 1.45rem;
  width: 70%;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`

const SiteTitle = styled.div`
  margin-right: 1.45rem;
`

const SiteTitleText = styled.h2`
  margin: 0;
`;

const StylishHorizontalRule = styled.div`
  &:before,
  &:after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    height: 2px;
  }

  &:before {
    background: linear-gradient( 90deg, ${props => props.theme.bgColor} 0%, ${props => props.theme.bgColor} 50%, transparent 50%, transparent 100% );
    background-size: 10px;
    background-position: center;
    z-index: 1;
  }

  &:after {
    background: linear-gradient(to right,
      rgba(0,0,0,0) 0%,
      rgba(220,50,47,0.77) 53%,
      rgba(220,50,47,1) 69%); 

    background-size: 200%;
    background-position: 0%;
  }
`;

const NavLink = styled(props => <Link partiallyActive={true} activeStyle={{ color: theme.activeLinkColor }} { ...props } />)`
  margin: 0 .5rem 0 0;
  text-transform: lowercase;
  text-decoration: none;
  font-weight: bold;
  color: white;

  &:visited {
    color: white;
  }

  &:hover, &:active {
    color: ${props => props.theme.linkHoverColor};
  }

  &::before {
    content: '/';
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
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: {
        title,
        nav
      }
    }
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <LayoutWrapper>
          <Header>
            <Nav>
              <SiteTitle>
                <SiteTitleText>
                  <HeaderLink to='/'>
                    {title}
                  </HeaderLink>
                </SiteTitleText>
              </SiteTitle>
              <div>
                {nav.map(item => <NavLink key={item.label} to={item.value}>{item.label}</NavLink>)}
              </div>
            </Nav>
            <StylishHorizontalRule />
          </Header>
          <PageBody>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
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
