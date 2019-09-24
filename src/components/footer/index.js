import React from "react"
import { GithubIcon, LinkedInIcon } from '../svg-icons'
import { FooterStyle, CopyrightNotice, ExternalSites, IconLink } from './styles';

const Footer = () => {
    return (
        <FooterStyle>
            <CopyrightNotice>
                © {new Date().getFullYear()} Elijah Boston. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
            </CopyrightNotice>
            <ExternalSites>
                <IconLink href="http://www.github.com/elijahboston" style={{ marginRight: "1rem" }}>
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