import * as Styled from './Header.styled'
import logo from '../../img/logo_jptr.png'

const Header = () => {
  return (
    <Styled.HeaderContainer>
        <Styled.Logo src={logo}></Styled.Logo>
        <Styled.HeaderText>Jupiter (JPTR) <br /> POW Token</Styled.HeaderText>
    </Styled.HeaderContainer>
  )
}

export default Header