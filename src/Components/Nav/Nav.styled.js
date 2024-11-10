import styled from "styled-components"

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const GiverButton = styled.button`
  padding: 12px 24px;
  margin: 8px;
  border: none;
  background-color: ${props => props.isActive ? 'turquoise' : 'lightgray'}; /* Темный фон */
  color: black;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease; /* Плавные анимации */
  box-shadow: ${props => props.isActive ? '0 0 10px 4px rgba(255, 255, 255, 0.6)' : 'none'}; /* Светящийся эффект */
  transform: ${props => props.isActive ? 'scale(1.1)' : 'scale(1)'}; /* Увеличение кнопки при активации */

  &:hover {
    box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.8); /* Увеличение свечения при наведении */
    transform: scale(1.15); /* Увеличение кнопки при наведении */
  }

  &:focus {
    outline: none; /* Убираем фокусное кольцо */
  }
`