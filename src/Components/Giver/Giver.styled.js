import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const TabList = styled.div`
  display: flex;
  gap: 5px;
  margin: 0 auto;
`;

export const Tab = styled.button`
  padding: 8px;
  text-align: left;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 18px;
  background-color: ${props => (props.isActive ? 'hsl(174 72% 40% / 1)' : '#f0f0f0')};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${props => (props.isActive ? 'white' : 'black')};
  text-align: center;
`

export const ContentArea = styled.div`
  margin: 0 auto;
`

export const GiverList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  gap: 5px;

  

  p {
    margin: 0;

    @media (max-width: 344px) {
      font-family: "Roboto", sans-serif;
      font-size: 11px;
      color: white;
    }

    @media (min-width: 345px) and (max-width: 360px) {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: white;
    }

    @media (min-width: 361px) and (max-width: 375px) {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: white;
    }

    @media (min-width: 376px) and (max-width: 390px) {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: white;
    }

    @media (min-width: 391px) and (max-width: 430px) {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      color: white;
    }

    @media (min-width: 431px) and (max-width: 820px) {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: white;
    }

    @media (min-width: 820px) and (max-width: 1024px) {
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      color: white;
    }

    @media (min-width: 1025px) {
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      color: white;
    }

  }

  a {

    @media (max-width: 344px) {
      font-family: "Roboto", sans-serif;
      font-size: 11px;
      color: turquoise;
    }

    @media (min-width: 345px) and (max-width: 360px) {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: turquoise;
    }

    @media (min-width: 361px) and (max-width: 375px) {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: turquoise;
    }

    @media (min-width: 376px) and (max-width: 390px) {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: turquoise;
    }

    @media (min-width: 391px) and (max-width: 430px) {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      color: turquoise;
    }

    @media (min-width: 431px) and (max-width: 820px) {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: turquoise;
    }

    @media (min-width: 820px) and (max-width: 1024px) {
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      color: turquoise;
    }

    @media (min-width: 1025px) {
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      color: turquoise;
    }

  }
`

export const GiverAddr = styled.p``

