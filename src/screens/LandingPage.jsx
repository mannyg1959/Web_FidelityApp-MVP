import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import ProblemSolutionScreen from './ProblemSolutionScreen';
import HowItWorksScreen from './HowItWorksScreen';
import BenefitsScreen from './BenefitsScreen';
import DashboardScreen from './DashboardScreen';
import PricingScreen from './PricingScreen';

const LandingPage = () => {
    return (
        <div className="flex flex-col bg-background-light text-text-main mesh-gradient">
            <section id="inicio">
                <HomeScreen />
            </section>
            <section id="solucion">
                <ProblemSolutionScreen />
            </section>
            <section id="como-funciona">
                <HowItWorksScreen />
            </section>
            <section id="beneficios">
                <BenefitsScreen />
            </section>
            <section id="dashboard">
                <DashboardScreen />
            </section>
            <section id="precios">
                <PricingScreen />
            </section>
        </div>
    );
};

export default LandingPage;
