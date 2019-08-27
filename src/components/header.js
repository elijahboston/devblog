import React from "react"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from "styled-components"

const HeaderStyle = styled.header`
    background-size: 100%;
    margin-bottom: 1.45rem;

    display: flex;
    justify-content: space-between;
`

const SiteTitleLink = styled(props => <Link activeClassName='active' { ...props } />)`
    color: white;
    text-decoration: none;
    font-family: 'Unica One', cursive;
    font-size: 2rem;

    padding: 1.45rem 1.0875rem 1.45rem;

    &:visited {
        color: white;
    }

    &:hover, &:active {
        color: ${props => props.theme.linkHoverColor};
    }

    &.active {
        color: ${props => props.theme.linkHoverColor};
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 1.45rem 1.0875rem 1.45rem;

    align-self: flex-end;

    @media only screen and (max-width: 900px) {

    }
`

const NavLink = styled(props => <Link partiallyActive={true} activeClassName='active' { ...props } />)`
    margin: 0 .5rem 0 0;
    text-decoration: none;
    font-family: 'Unica One', cursive;
    font-size: 1.3rem;
    color: white;

    padding: .2rem .6rem;

    &:visited {
        color: white;
    }

    &:hover, &:active {
        color: ${props => props.theme.linkHoverColor};
    }

    &.active {
        color: ${props => props.theme.linkHoverColor};
    }
`

const Header = ({ title, nav }) => {
    return (
        <HeaderStyle>
            <SiteTitleLink to='/'>
                {title}
            </SiteTitleLink>
            <Nav>
                {nav.map(item =><NavLink key={item.label} to={item.value}>{item.label}</NavLink>)}
            </Nav>
        </HeaderStyle>
    )
}

export default Header;