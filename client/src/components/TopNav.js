import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logoDrip from '../assets/LOGODRIP.png'
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext } from "react";

const TopNav = () => {
  const { loginWithPopup, logout, isAuthenticated } = useContext(CurrentUserContext)

  return (
    <>
    <Wrapper>
        <TopNavNavLink to='/downloads' >download</TopNavNavLink>
        <TopNavNavLink to='/serversList' >servers list</TopNavNavLink>
        <TopNavNavLink to='/cars' >cars</TopNavNavLink>
        <NavLinkHome to='/' >
          <SRPLogoImg 
            src={logoDrip}
            alt='SRP drip logo'
          />
        </NavLinkHome>
        <TopNavNavLink to='/projectInfo' >project info</TopNavNavLink>
        <TopNavNavLink to='/leaderboard' >leaderboard</TopNavNavLink>
        {
          !isAuthenticated
          ? <LoginButton onClick={loginWithPopup} >login</LoginButton>
          : <LoginButton onClick={logout} >logout</LoginButton>
        }
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  width: 99.1vw;
  max-height: 110px;
  text-transform: uppercase;
  z-index: 999;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-left: 10px;
    margin-top: 30px;
  }
`;
const NavLinkHome = styled(NavLink)`
  width: 20vw;
  display: flex;
  justify-content: center;
`;
const TopNavNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 12vw;
  text-decoration: none;
  color: #d2d3c7;
  font-size: 25px;
  font-family: 'Faster One', cursive;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #b9955b;
  }
  &.active {
    color: #b9955b;
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 5px;
    justify-content: flex-start;
  }
  @media (max-width: 1300px) {
    font-size: 15px;
  }
`;
const SRPLogoImg = styled.img`
  margin-top: -60px;
  width: 250px;
  height: 250px;
  transition: margin-top 250ms;

  &:hover {
    margin-top: 0;
  }

  @media (max-width: 600px) { 
    display: none;
  }
  @media (max-width: 1300px) {
    width: 80px;
    height: 80px;
    margin-top: 15px;
    font-size: 15px;
    transition: 0.2s;
    &:hover {
    margin-top: 15px;
    transform: scale(1.2);
  }
  }
`;
const LoginButton = styled.button`
  font-family: 'Faster One', cursive;
  width: 12vw;
  height: 30px;
  background-color: transparent;
  color: #d2d3c7;
  border-style: none;
  font-size: 25px;
  margin-top: 38px;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #b9955b;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    justify-content: flex-start;
    margin-top: 0px;
  }
  @media (max-width: 1300px) {
    font-size: 15px;
  }
`;

export default TopNav;