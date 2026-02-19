import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layout';
import LandingPage from './screens/LandingPage';
import ProblemSolutionScreen from './screens/ProblemSolutionScreen';
import HowItWorksScreen from './screens/HowItWorksScreen';
import BenefitsScreen from './screens/BenefitsScreen';
import DashboardScreen from './screens/DashboardScreen';
import PricingScreen from './screens/PricingScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/problem-solution" element={<ProblemSolutionScreen />} />
          <Route path="/how-it-works" element={<HowItWorksScreen />} />
          <Route path="/benefits" element={<BenefitsScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/pricing" element={<PricingScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
