import React, { useRef, useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import { GithubIcon, LinkedInIcon } from './svg-icons'
import { useTransition, config, animated, useChain } from 'react-spring'

// Displays links to pages within site, and external links
const Nav = styled(animated.nav)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.45rem 1.0875rem 1.45rem;
    z-index: 999;
    align-self: flex-end;

    width: 100%;
    top: .8rem;
    right: 1rem;
    padding: 3rem 0 0 0;
    width: 14rem;
    transform-origin: top right;
    position: absolute;
    border-radius: 1rem;
    box-shadow: black 2px 2px 0, rgba(0,0,0,.5) 0 0 2px;
`

// Common styling for links in menu
const navLinkCommon = `
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
const NavLink = styled(props => <Link partiallyActive={true} activeClassName='active' { ...props } />)`
    ${navLinkCommon}
`

// Link to external URL
const ExternalNavLink = styled.a`
    ${navLinkCommon}
`

// Lets us position the button within the header space
// without impacting animations
const ToggleButtonWrap = styled.div`
    position: relative;
    align-self: flex-end;
    width: 4.5rem;
    height: 100%;
`

const MenuToggleButton = styled.button`
    font-size: 2rem;
    background: transparent;
    outline-style: none;
    border: none;
    z-index: 999;
    padding: 1rem;

    display: block;
    position: absolute;
    top: .8rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    
    color:${props => props.theme.linkColor};

    @media only screen and (max-width: 900px) {
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
    }

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
`

const MenuToggle = ({ isOpen, handleClick, ref }) => {
    const iconTransitions = useTransition(isOpen, null, {
            ref,
            from: {
                opacity: 0,
                transform: 'rotate(180deg)',
                backgound: 'linear-gradient(135deg, rgb(255, 101, 0) 0%, rgb(100, 113, 111) 41%, rgb(0, 255, 222) 100%)'
            },
            enter: {
                opacity: 1,
                transform: 'rotate(0)',
                background: 'linear-gradient(-135deg, rgb(0, 243, 255) 0%, rgb(100, 113, 111) 41%, rgb(255, 71, 0) 100%)'
            },
            leave: {
                opacity: 0,
                transform: 'rotate(180deg)',
                backgound: 'linear-gradient(135deg, rgb(255, 101, 0) 0%, rgb(100, 113, 111) 41%, rgb(0, 255, 222) 100%)'
            },
        })

    return (
        <MenuToggleButton onClick={handleClick}>
            {iconTransitions.map(({ item, key, props }) => item
            ? <animated.i style={props} className="material-icons">
                    close
            </animated.i>
            : <animated.i style={props} className="material-icons">
                    menu
            </animated.i>)}
        </MenuToggleButton>
    )
}

const ResponsiveNav = ({ nav, isOpen, handleClick, ref }) => {
    const themeContext = useContext(ThemeContext);

    const transition = useTransition(isOpen, null, {
        ref,
        config: config.stiff,
        from: {
            opacity: 0,
            transform: 'scale(0)',
            color: 'red'
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)',
            background: themeContext.navMenuBgColor,
            color: 'green'
        },
        leave: {
            opacity: 0,
            transform: 'scale(0)',
        }
    })

    return (
        transition.map(({ item, key, props }) =>
            item && <Nav style={props}>
                {nav.map(item => {
                    if (item.external) {
                        const icon = item.label === 'Github' ? <GithubIcon fill={themeContext.navMenuLinkColor}/> : <LinkedInIcon fill={themeContext.navMenuLinkColor} />;
                        return <ExternalNavLink key={item.label} href={item.value}>{icon} {item.label}</ExternalNavLink>;
                    } else {
                        return <NavLink key={item.label} to={item.value} onClick={handleClick}>{item.label}</NavLink>;
                    }
                })}
            </Nav>)
    )
}

const Menu = ({ nav }) => {
    const [open, set] = useState(false);
    const menuRef = useRef();
    const toggleRef = useRef();

    const toggleMenu = () => {
        console.debug('Handled click!');
        set(!open);
    };

    const navToPage = (e) => {
        const a = document.createElement('a');
        a.href = e.target.href;
        console.debug(e.target.href);
        e.preventDefault();
        set(false);
        navigate(a.pathname);
    };

    useChain(open ? [toggleRef, menuRef] : [menuRef, toggleRef], [0, open ? 0.1 : 0.6])

    return (
        <ToggleButtonWrap>
            <ResponsiveNav nav={nav} isOpen={open} ref={menuRef} handleClick={navToPage} />
            <MenuToggle isOpen={open} handleClick={toggleMenu} ref={toggleRef} />
        </ToggleButtonWrap>
    )
}

export default Menu;