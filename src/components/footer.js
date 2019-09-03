import React from "react"
import styled from "styled-components"
import { GithubIcon, LinkedInIcon } from './svg-icons'

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    font-size: .7rem;
`;

const CopyrightNotice = styled.div``

const ExternalSites = styled.div`
    display: flex;
    flex-direction: row;
`

const IconLink = styled.a`
    display: block;
    width: 2rem;
    height: 2rem;
    color: ${props => props.theme.linkColor};

    svg {
        fill: ${props => props.theme.linkColor};
    }

    &:first {
        margin-right: 1rem;
    }

    &:hover svg {
        fill: ${props => props.theme.linkHoverColor};
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <CopyrightNotice>
                © {new Date().getFullYear()} Elijah Boston. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
            </CopyrightNotice>
            <ExternalSites>
                <IconLink href="http://www.github.com/elijahboston">
                    <GithubIcon/>
                </IconLink>
                <IconLink href="http://www.linkedin.com/in/elijah-boston-3725582b">
                    <LinkedInIcon/>
                </IconLink>
            </ExternalSites>
        </FooterStyle>
    )
}

export default Footer;