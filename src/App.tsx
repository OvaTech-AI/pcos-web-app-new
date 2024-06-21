import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SymptomModel from './components/SymptomModel';
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
  font-size: 3.2rem;
`;

const AppDescription = styled.p`
  font-size: 1.5rem;
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
        <Route path="/cnn-model" element={<CnnModel />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
