import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
export default SiteTitleLink