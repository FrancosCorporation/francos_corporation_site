import styled from 'styled-components';
import fundo from '../assets/images/mexico.jpg';

export const BackgroundImage = styled.div`
background-image: url(${fundo});
height: 100vh;
padding-left:0;
width:100vw;
overflow:hidden;
background-repeat: round;
`;

export const Display = styled.nav`
  background: #515151;
  align-self: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: 100vh;
  justify-content:center;
  display: flex;
`;

export const LogoStyled = styled.nav`
  width:350px;
  cursor: pointer;
  background-color: #ffffff;
  border-radius:100px;
`;