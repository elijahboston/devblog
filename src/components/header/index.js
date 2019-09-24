import React from "react"
import { Menu } from "../index"
import SiteTitleLink from "./site-title-link"
import { HeaderStyle, HeaderWrap } from "./style"

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