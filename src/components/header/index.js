import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SiteTitleLink from "./site-title-link"
import { HeaderStyle, HeaderWrap } from "./style"

const Nav = styled.nav`
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

// Common styling for links in menu
export const navLinkCommon = `
    margin: 0 .5rem 0 0;
    text-decoration: none;
    font-size: 1rem;
    margin-right: 1rem;
    text-align: right;
    width: 100%;

    color: white;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 3rem;
    }
`
// Used inside of Nav
export const NavLink = styled(props => <Link partiallyActive={true} activeClassName='active' { ...props } />)`
    ${navLinkCommon}
`

// Link to external URL
export const ExternalNavLink = styled.a`
    ${navLinkCommon}
`

const DesktopMenu = ({ nav }) => {
    return (
        <Nav>
            {nav.map(item => {
                if (item.external) {
                    return <ExternalNavLink key={item.label} href={item.value}>{item.label}</ExternalNavLink>;
                } else {
                    return <NavLink key={item.label} to={item.value}>{item.label}</NavLink>;
                }
            })}
        </Nav>
    )
}

const Header = ({ title, nav }) => {
    return (
        <HeaderStyle>
            <HeaderWrap>
                <SiteTitleLink to='/'>
                    {title}
                </SiteTitleLink>
                <DesktopMenu nav={nav} />
            </HeaderWrap>
        </HeaderStyle>
    )
}

export default Header;