import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #a0d8ef;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LogoImage = styled.img`
  height: 150px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  font-size: 2.4rem;
`;

const NavLink = styled.li`
  margin: 0 3rem;

  a {
    text-decoration: none;
    color: #5e3a87;
    font-weight: bold;

    &:hover {
      color: #ff94c2;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div>
        <LogoImage src={Logo} alt="OvaTech AI Logo" />
      </div>
      <NavLinks>
        <NavLink><Link to="/">Project</Link></NavLink>
        <NavLink><Link to="/symptom-model">Symptom Model</Link></NavLink>
        <NavLink><Link to="/cnn-model">CNN Model</Link></NavLink>
        <NavLink><Link to="/about">About</Link></NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
