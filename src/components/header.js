import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Menu from "./menu"

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
    z-index: 998;
    height: 2rem;

    background: linear-gradient(-135deg, rgb(0, 243, 255) 0%, rgb(100, 113, 111) 41%, rgb(255, 71, 0) 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    &.active {
        background: linear-gradient(135deg, rgb(0, 243, 255) 0%, rgb(100, 113, 111) 41%, rgb(255, 71, 0) 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    max-width: 960px;
    align-items: center;
    height: 4rem;
    padding: 0 0 0 1.0875rem;
    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`

const Header = ({ title, nav }) => {
    return (
        <HeaderStyle>
            <HeaderWrap>
                <SiteTitleLink to='/'>
                    {title}
                </SiteTitleLink>
                <Menu nav={nav}/>
            </HeaderWrap>
        </HeaderStyle>
    )
}

export default Header;