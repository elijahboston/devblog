import React, { useRef, useState, useContext } from "react"
import { navigate } from "gatsby"
import { ThemeContext } from "styled-components"
import { GithubIcon, LinkedInIcon } from "../svg-icons"
import { useTransition, config, animated, useChain } from "react-spring"
import { Nav, NavLink, ExternalNavLink, ToggleButtonWrap, MenuToggleButton, MenuContainer, AlignMenu } from "./styles"

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
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)',
            background: themeContext.navMenuBgColor,
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

const MobileMenu = ({ nav }) => {
    const [open, set] = useState(false);
    const menuRef = useRef();
    const toggleRef = useRef();

    const toggleMenu = () => set(!open);

    //const handleMouseEnter = () => set(true);

    // const handleMouseLeave = () => set(false);

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
        <MenuContainer>
            <AlignMenu>
                <ToggleButtonWrap>
                    <ResponsiveNav nav={nav} isOpen={open} ref={menuRef} handleClick={navToPage}/>
                    <MenuToggle isOpen={open}
                        handleClick={toggleMenu}
                        ref={toggleRef}/>
                </ToggleButtonWrap>
            </AlignMenu>
        </MenuContainer>
    )
}

export default MobileMenu;