import styled from 'styled-components'

const Info = () => {

  const Container = styled.div`
    width: 344px;
    margin: 0 auto;
  `

  const CheckReadme = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    color: white;
  `

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    gap: 30px;
  `

  const Button = styled.button`
    width: 150px;
    height: 75px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  `

  const Exchange = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `

  return (
    <Container>
      <CheckReadme>JettonJPTRGpuMiner-main      Важно! Перед майнингом создать файл config.txt (Смотри README) / Important! Create a file config.txt before mining (Check README)</CheckReadme>
      <ButtonContainer>
      <a href='https://github.com/JupiterTokenTon/JettonJPTRGpuMiner-main/tree/main'><Button>link JettonJPTRGpuMiner-main</Button></a>
      </ButtonContainer>

      <ButtonContainer>
        <a href='https://dedust.io/swap/TON/EQANkF9lhHjhF2BtOzoltCDumGc6KDwDW11TMaowWoVkUl9e'><Button>Обменять JPTR</Button></a>
        <a href='https://dedust.io/swap/TON/EQCl7vl-orJxEiUCRItEimz2C0hBMnEIU3fbMJ5h1r5rE-X3'><Button>Обменять ASTRD</Button></a>
      </ButtonContainer>

      <ButtonContainer>
        <a href='https://github.com/JupiterTokenTon/JettonJPTRGpuMiner-main/tree/main'><Button>Miner</Button></a>
      </ButtonContainer>

      <ButtonContainer>
        <a href='https://t.me/jupiter_jptr_token'><Button>TG Community</Button></a>
      </ButtonContainer>
      
    </Container>
    
  );
};

export default Info;
