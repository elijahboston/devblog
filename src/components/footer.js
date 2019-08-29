import React from "react"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from "styled-components"

const FooterStyle = styled.footer`
    display: flex;
    font-size: .7rem;
`;

const Footer = () => {
    return (
        <FooterStyle>
            © {new Date().getFullYear()} Elijah Boston. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </FooterStyle>
    )
}

export default Footer;