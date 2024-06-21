import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_trans.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  background-color: #93B9ED;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LogoImage = styled.img`
  height: 170px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  font-size: 2.0rem;
`;

const NavLink = styled.li`
  margin: 0 2rem;

  a {
    text-decoration: none;
    color: #5e3a87;
    font-weight: bold;

    &:hover {
      color: #E8C1CA;
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
        <NavLink><Link to="/symptom-model">RF Model</Link></NavLink>
        <NavLink><Link to="/cnn-model">CNN Model</Link></NavLink>
        <NavLink><Link to="/about">About</Link></NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
