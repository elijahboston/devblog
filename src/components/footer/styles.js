import styled from "styled-components"

export const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    font-size: .7rem;
`;

export const CopyrightNotice = styled.div``

export const ExternalSites = styled.div`
    display: flex;
    flex-direction: row;
`

export const IconLink = styled.a`
    display: block;
    width: 2rem;
    height: 2rem;
    color: ${props => props.theme.linkColor};

    svg {
        fill: ${props => props.theme.linkColor};
    }

    &:hover svg {
        fill: ${props => props.theme.linkHoverColor};
    }
`