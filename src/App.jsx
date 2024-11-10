import { createGlobalStyle, styled } from 'styled-components'
import bg from './img/retro-pixel-planet-pd.jpg'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Info from './Components/Info/Info'

function App() {

  const GlobalStyle = createGlobalStyle`
    body {
      background-image: url(${bg});
      background-color: black;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 0;
      padding: 0;
      font-family: "Pixelify Sans", sans-serif;
    }

    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-image: url(${bg});
      background-size: cover;
      background-repeat: no-repeat;
      filter: blur(8px); /* Настройка степени размытия */
      z-index: -1; /* Помещаем фон под основной контент */
    }
    `

  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <Info />
    </>
  )
}

export default App
