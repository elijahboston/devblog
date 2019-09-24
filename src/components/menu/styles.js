import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { animated } from "react-spring"

// Displays links to pages within site, and external links
export const Nav = styled(animated.nav)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.45rem 1.0875rem 1.45rem;
    z-index: 999;
    align-self: flex-end;

    width: 100%;
    top: 0;
    right: 0;
    padding: 3rem 0 0 0;
    width: 14rem;
    transform-origin: top right;
    position: absolute;

    transition: top .5s;
`

// Common styling for links in menu
export const navLinkCommon = `
    margin: 0 .5rem 0 0;
    text-decoration: none;
    font-size: 1.3rem;

    padding: .2rem .6rem;

    margin: 0;
    padding: 1rem 2rem;
    text-align: right;
    width: 100%;

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

export const MenuContainer = styled.div`
    position: fixed;
    justify-content: center;
    width: 100%;
    display: flex;
    height: 6rem;
`

export const AlignMenu = styled.div`
    width: 70%;
    max-width: 960px;
    justify-content: flex-end;
    display: flex;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`

// Lets us position the button within the header space
// without impacting animations
export const ToggleButtonWrap = styled.div`
    position: relative;
    align-self: center;
    margin-right: 1rem;
    width: 4.5rem;
    height: 4rem;
    background-color: #fff;
`

export const MenuToggleButton = styled.button`
    font-size: 2rem;
    background: transparent;
    outline-style: none;
    border: none;
    z-index: 999;
    padding: 1rem;

    display: block;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;

    transition: top .5s;

    color:${props => props.theme.linkColor};

    .material-icons {
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text!important;
        transform-origin: center center;
        font-size: 2.5rem;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        position: absolute;
    }

    @media
    (-webkit-max-device-pixel-ratio: 1) {
        top: .6rem;
    }
`