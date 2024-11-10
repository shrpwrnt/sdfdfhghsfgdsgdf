import styled from "styled-components"

export const HeaderContainer = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 800px;

    @media (max-width: 344px) {
        max-width: 344px;
    }

    @media (min-width: 345px) and (max-width: 360px) {
        width: 345px;
    }

    @media (min-width: 361px) and (max-width: 375px) {
        width: 360px;
    }

    @media (min-width: 376px) and (max-width: 390px) {
        width: 390px;
    }

    @media (min-width: 391px) and (max-width: 412px) {
        width: 412px;
    }

    @media (min-width: 413px) and (max-width: 430px) {
        width: 413px;
    }

    @media (min-width: 431px) and (max-width: 540px) {
        width: 431px;
    }

    @media (min-width: 540px) {
        width: 540px;
    }

    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const Logo = styled.img`
    width: 80%;

    @media (max-width: 344px) {
        width: 20%;
    }

    @media (min-width: 345px) and (max-width: 360px) {
        width: 20%;
    }

    @media (min-width: 361px) and (max-width: 375px) {
        width: 20%;
    }

    @media (min-width: 376px) and (max-width: 390px) {
        width: 20%;
    }

    @media (min-width: 391px) and (max-width: 412px) {
        width: 20%;
    }

    @media (min-width: 413px) and (max-width: 430px) {
        width: 19%;
    }

    @media (min-width: 431px) and (max-width: 820px) {
        width: 15%;
    }

    @media (min-width: 821px) and (max-width: 1024px) {
        width: 13%;
    }

    @media (min-width: 1025px) {
        width: 13%;
    }

    height: auto;
`

export const HeaderText = styled.h1`
    font-family: "Pixelify Sans", sans-serif;
    font-size: 34px;

    @media (max-width: 344px) {
        font-size: 22px;
    }

    @media (min-width: 360px) and (max-width: 375px) {
        font-size: 28px;
    }

    @media (min-width: 376px) and (max-width: 390px) {
        font-size: 28px;
    }

    @media (min-width: 391px) and (max-width: 412px) {
        font-size: 32px;
    }

    color: white;
`