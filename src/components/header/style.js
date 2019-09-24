import styled from "styled-components"

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    width 100%;

    background-size: 100%;
    margin-bottom: 1.45rem;
    display: flex;
    justify-content: center;

    transition: background-color .5s;
`



export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    max-width: 960px;
    align-items: center;
    height: 8rem;
    padding: 0 0 0 1.0875rem;

    transition: height .5s;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }

    @media
    (-webkit-max-device-pixel-ratio: 1) {
        height: 4rem;
    }
`
