import styled, { keyframes } from 'styled-components'
import tap from '../../img/tap.png'
import upgrade from '../../img/upgrade_gun.png'
import guns from '../../img/bg_img_blur.png'

const TgApp = () => {

  const Container = styled.div`
    /* background-color: red; */
    width: 344px;
    margin: 0 auto;
  `

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
  `

  const tiltAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(1deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `

  const Button = styled.button`
    width: 150px;
    height: 75px;
    margin-top: 20px;
    font-family: "Pixelify Sans", sans-serif;
    font-size: 30px;
    border: none;
    border-radius: 15px;
    background-color: #3f3f74;
    color: white;
    cursor: pointer;

    animation: ${tiltAnimation} 1s ease-in-out infinite;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `

  const Gif = styled.div`
    width: 344px;
  `

  const Image = styled.img`
    width: 344px;
    border-radius: 20px;
  `

  const Header = styled.h2`
    font-family: "Pixelify Sans", sans-serif;
    font-size: 25px;
    color: white;
    margin-top: 50px;
  `

  const FirstText = styled.p`
    color: white;
    font-size: 20px;
  `

  const LastText = styled.p`
    color: white;
    font-size: 20px;
    margin-bottom: 100px;
  `

  return (
    <>
      <Container>
        <ButtonContainer>
          <a href='https://t.me/jupiter_x_asteroid_bot'><Button>Play game!</Button></a>
        </ButtonContainer>

        <Header>✨Welcome to Jupiter!🚀</Header>
        <Gif>
          <Image src={tap} alt="" />
        </Gif>

        <FirstText>👆 Get close to Jupiter and mine asteroids!</FirstText>

        <Gif>
          <Image src={guns} />
        </Gif>

        <FirstText>🔫 Buy cool magnetic guns to collect asteroids even when you're not at the helm!</FirstText>

        <ButtonContainer>
          <a href='https://t.me/jupiter_x_asteroid_bot'><Button>Play game!</Button></a>
        </ButtonContainer>

        <LastText>🚀 Good luck, space ranger! And have a nice asteroid hunt!</LastText>
        
      </Container>
    </>
  )
};

export default TgApp;
