import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PostLink = styled(props => <Link { ...props } />)`
  color: ${props => props.theme.linkColor};

  &:visited {
    color: ${props => props.theme.linkColor};
  }

  &:hover, &:active {
    color: ${props => props.theme.linkHoverColor};
  }
`

export default PostLink