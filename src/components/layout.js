/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import solarizedDark from "../themes/solarized-dark";

import "./reset.css"
import "./theme.css"
import "./typography.css"

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
  margin-bottom: 1.45rem;
`

const HeaderLink = styled(props => <Link activeStyle={{ color: solarizedDark.activeLinkColor }} { ...props } />)`
  color: ${props => props.theme.linkColor};

  &:visited {
    color: ${props => props.theme.linkColor};
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

const isPartiallyActive = ({ isPartiallyCurrent, location }) => {
  const active = { style: {color: 'blue'} };
  const isIndex = location.pathname === '/';

  if (isIndex || (!isIndex && isPartiallyCurrent)) {
    return active;
  }
}

const NavLink = styled(props => <Link partiallyActive={true} activeStyle={{ color: solarizedDark.activeLinkColor }} { ...props } />)`
  margin: 0 .5rem 0 0;
  text-transform: lowercase;
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.linkColor};

  &:visited {
    color: ${props => props.theme.linkColor};
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
    <ThemeProvider theme={solarizedDark}>
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
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
