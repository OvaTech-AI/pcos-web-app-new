import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SymptomModel from './components/SymptomModel';
import CNNModel from './components/CnnModel';
import About from './components/About';
import { FaGithub } from 'react-icons/fa';

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #f0f8ff;
  padding: 2rem;
  color: #5e3a87;
`;

const AppTitle = styled.h1`
  font-size: 4rem;
`;

const AppDescription = styled.p`
  font-size: 2rem;
`;

const Footer = styled.footer`
  background-color: #5e3a87;
  color: #ffffff;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
`;

const FooterText = styled.span`
  margin-right: 1rem;
  font-size: 1.5rem;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => (
  <AppContainer>
    <AppHeader>
      <AppTitle>Welcome to OvaTech AI</AppTitle>
      <AppDescription>Your PCOS diagnostic and monitoring tool.</AppDescription>
    </AppHeader>
  </AppContainer>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/symptom-model" element={<SymptomModel />} />
        <Route path="/cnn-model" element={<CNNModel />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer>
        <FooterText>OvaTech AI</FooterText>
        <FooterLink href="https://github.com/OvaTech-AI" target="_blank">
          <FaGithub size={32} />
        </FooterLink>
      </Footer>
    </Router>
  );
}

export default App;
