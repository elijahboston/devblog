import React from "react"
import SiteTitleLink from "./site-title-link"
import { HeaderStyle, HeaderWrap } from "./style"

const Header = ({ title }) => {
    return (
        <HeaderStyle>
            <HeaderWrap>
                <SiteTitleLink to='/'>
                    {title}
                </SiteTitleLink>
            </HeaderWrap>
        </HeaderStyle>
    )
}

export default Header;