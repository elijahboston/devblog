import styled from "styled-components"

export const HeaderStyle = styled.header`
    top: 0;
    width 100%;

    background-size: 100%;
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
    height: 6rem;
    padding: 0 0 0 1rem;

    transition: height .5s;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }


`
