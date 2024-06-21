import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SymptomModel from './components/SymptomModel';
import About from './components/Team';
import { FaGithub } from 'react-icons/fa';
import CnnModel from './components/CNNModel';

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #f0f8ff;
  padding: 2rem;
  color: #5e3a87;
`;

const AppTitle = styled.h1`
  font-size: 3.7rem;
`;

const AppTagline = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
`;

const Footer = styled.footer`
  background-color: #93B9ED;
  color: #5e3a87;
  padding: 0.5rem 2rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
`;

const FooterText = styled.span`
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const FooterLink = styled.a`
  color: #5e3a87;
  align-items: center;
  &:hover {
    color: #E8C1CA;
  }
`;

const AppDesc = styled.p`
  font-size: 1.5rem;
  color: #5e3a87;
`;

const BoldAppDesc = styled.p`
  font-size: 1.5rem;
  color: #5e3a87;
  font-weight: bold
`;

const Project = () => (
  <AppContainer>
    <div style={{ textAlign: 'center' }}>
      <AppHeader>
        <AppTitle>Welcome to OvaTech AI</AppTitle>
        <AppTagline>Your PCOS diagnostic and monitoring tool.</AppTagline>
      </AppHeader>
    </div>
    <div style={{ marginTop: '10px', display: 'flex' }}>
      <div style={{ flex: '1 1 auto' }}>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width= "500"
          height= "750"
          src= "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fik5hU8F2rmyUMe4ZKssabz%2FOvaTech-AI-Interface%3Fnode-id%3D1-2%26t%3DZDd2h0yoyi9eqJrR-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ flex: '1 1 auto', marginLeft: '10px', textAlign: 'center' }}>
        <div style={{ display: 'table', height: '100%' }}>
          <div style={{ display: 'table-cell', verticalAlign: 'text-top' }}>
            <AppDesc>Empowering women with predictive insights, our application leverages Machine Learning models</AppDesc> 
            <AppDesc>to predict the likelihood of PCOS by analyzing patient symtoms & ultrasound images.</AppDesc>
            <AppDesc>By doing this we offer personalized health tracking and seamless interaction between</AppDesc>
            <AppDesc>our patients and healthcare providers.</AppDesc>
            <p> ------- </p>
            <BoldAppDesc>The Models: </BoldAppDesc>
            <AppDesc>1. Our Convolutional Neural Network model analyzes ultrasound images to determine </AppDesc>
            <AppDesc>   the presence of cysts in the ovaries.</AppDesc>
            <AppDesc>2. Our Random Forest model analyzes patient symptoms to determine the likelihood of PCOS .</AppDesc>
          </div>
        </div>
      </div>
    </div>
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
        <Route path="/team" element={<About />} />
      </Routes>
      <Footer>
        <FooterText>OvaTech AI</FooterText>
        <FooterLink href="https://github.com/OvaTech-AI" target="_blank">
          <FaGithub size={30} />
        </FooterLink>
      </Footer>
    </Router>
  );
}

export default App;
