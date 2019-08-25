import styled from "styled-components"

const ExternalLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.linkColor};

  &:visited {
    color: ${props => props.theme.linkColor};
  }

  &:hover, &:active {
    color: ${props => props.theme.linkHoverColor};
  }
`

export default ExternalLink;