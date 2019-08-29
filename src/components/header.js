import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyle = styled.header`
    background-size: 100%;
    margin-bottom: 1.45rem;
    display: flex;
    justify-content: center;

    transition: background-color .5s;
    backdrop-filter: blur(2px);
`

const SiteTitleLink = styled(props => <Link activeClassName='active' { ...props } />)`
    text-decoration: none;
    font-family: ${props => props.theme.headerFont};
    font-size: 2rem;
    z-index: 999;

    background: ${props => props.theme.linkGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    padding: 1.45rem 1.0875rem 1.45rem;

    &:hover {
        filter: brightness(1.5);
    }
`
//text-shadow: 1px 1px 0px #DB63DB, -1px -1px 0px #0BEFFF;
const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 1.45rem 1.0875rem 1.45rem;

    align-self: flex-end;

    @media only screen and (max-width: 900px) {
        position: absolute;
        padding: 2rem 4rem 2rem 4rem;
        width: 100%;
        flex-direction: column;
        transition: opacity .2s linear, top .2s linear;

        top: ${props => props.isOpen ? 0 : '-75px'};
        background: ${props => props.theme.bgColor2};
        pointer-events:${props => props.isOpen ? 'auto' : 'none'};
        opacity:${props => props.isOpen ? 1 : 0};
        border-bottom:1px solid ${props => props.theme.linkColor};
    }
`

const NavLink = styled(props => <Link partiallyActive={true} activeClassName='active' { ...props } />)`
    margin: 0 .5rem 0 0;
    text-decoration: none;
    font-family: ${props => props.theme.headerFont || 'sans-serif'};
    font-size: 1.3rem;

    padding: .2rem .6rem;

    @media only screen and (max-width: 900px) {
        margin: .8rem 0 0 0;
        text-align: right;
        width: 100%;
    }
`

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`
const MenuToggleButton = styled.button`
    font-size: 2rem;
    display: none;
    background: none;
    outline-style: none;
    border: none;
    z-index: 999;
    padding: 1rem;
    color:${props => props.theme.linkColor};

    @media only screen and (max-width: 900px) {
        display: block;
    }

    .material-icons {
        font-size: 2rem;
    }
`

const MenuToggle = ({ isOpen, handleClick }) => {
    const iconName = isOpen ? 'menu_open' : 'menu';

    return (
        <MenuToggleButton onClick={handleClick}>
            <i className="material-icons">
                {iconName}
            </i>
        </MenuToggleButton>
    )
}

const ResponsiveNav = ({ nav, isOpen }) => {
    return (
        <Nav isOpen={isOpen}>
            {nav.map(item =><NavLink key={item.label} to={item.value}>{item.label}</NavLink>)}
        </Nav>
    )
}

const Header = ({ title, nav }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <HeaderStyle>
            <HeaderWrap>
                <SiteTitleLink to='/'>
                    {title}
                </SiteTitleLink>
                <ResponsiveNav nav={nav} isOpen={isMenuOpen} />
                <MenuToggle isOpen={isMenuOpen} handleClick={handleClick}/>
            </HeaderWrap>
        </HeaderStyle>
    )
}

export default Header;