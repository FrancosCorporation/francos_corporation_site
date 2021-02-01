import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #000000;
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  z-index: 10;
  font-size: 25px;
  font-family: 'Lobster';
  font-weight: bold;
  opacity:85%;
  /* Third Nav */
  /* justify-content: flex-start; */
  
  @media screen and (max-width: 768px){
    padding-left:30px;
    padding-top:5px;
    justify-content:space-between;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;
  &:hover{
    color: white;
    text-decoration:underline;
    
  }
  @media screen and (max-width: 808px){
    padding: 0 1rem;
    padding-right:10px;
  }
  &.active {
    padding-bottom:20px;
    text-decoration:underline;
    
  }
`;

export const Envolv = styled(Link)`
  border-radius: 30px;
  border: 2px  #fff solid;
  display: flex;
  cursor: pointer;
  &:hover{
    opacity:40%;
  }
  `;

export const Logo = styled.div`
  display: flex;
  justify-content:center;
  padding-top:3px;
  width: 110px;
  height:98px;
  h1{
    transform:rotate(270deg);
    position:absolute;
    color:#000;
    font-size:1.4rem;
    padding-left:15px;
    padding-top:80px;
    text-indent:20px;
    font-weight: normal;
    pointer-events:none;
  }
  &:hover{
    h1{
      color:#fff;
    }
  }
  @media screen and (max-width: 768px) {
    display:block;
    padding-top: 3px;
    width:90px;
    h1{
    font-size:1.1rem;
    padding-left:130px;
    padding-top:0px;
    text-indent:-9px;
    }
  }
  .active{
    h1{
      color:#0000ff;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2.5rem;
    cursor: pointer;
  }

`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 25px;
  border: 3px solid #fff;
  font-size:25px;
  padding: 5px 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00ffff;
    color: #010606;
    border: 3px solid #00ffff;
  }
  &.active {
    background: #0080ff;
    color: #fff;
    border: 3px solid #0080ff;
  }
`;