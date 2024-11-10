import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import * as Styled from './Nav.styled'
import Giver from '../Giver/Giver'
import TgApp from '../TgApp/TgApp'

const Nav = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Router>
    <Styled.ButtonsContainer>
      <Link to='/givers'>
        <Styled.GiverButton isActive={activeTab === 0} onClick={() => setActiveTab(0)}>GIVERS</Styled.GiverButton>
      </Link>
      <Link to='/tp-app'>
        <Styled.GiverButton isActive={activeTab === 1} onClick={() => setActiveTab(1)}>TG APP</Styled.GiverButton>
      </Link>
    </Styled.ButtonsContainer>

    <Routes>
      <Route path="/givers" element={<Giver />} />
      <Route path="/tp-app" element={<TgApp />} />
    </Routes>
    </Router>
  )
}

export default Nav