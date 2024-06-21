import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SymptomModel from './components/SymptomModel';
import About from './components/About';
import { FaGithub } from 'react-icons/fa';
import CnnModel from './components/CnnModel';

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

const Project = () => (
  <AppContainer>
    <AppHeader>
      <AppTitle>Welcome to OvaTech AI</AppTitle>
      <AppDescription>Your PCOS diagnostic and monitoring tool.</AppDescription>
    </AppHeader>
    <iframe
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fik5hU8F2rmyUMe4ZKssabz%2FOvaTech-AI-Interface%3Fnode-id%3D1-2%26t%3DZDd2h0yoyi9eqJrR-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
      allowFullScreen
    ></iframe>
  </AppContainer>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/pcos-web-app-new" element={<Project />} />
        <Route path="/symptom-model" element={<SymptomModel />} />
        <Route path="/cnn-model" element={<CnnModel />} />
        <Route path="/about" element={<About />} />
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
