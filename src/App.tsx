import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SymptomModel from './components/SymptomModel';
import CNNModel from './components/CnnModel';
import About from './components/About';

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
    </Router>
  );
}

export default App;
