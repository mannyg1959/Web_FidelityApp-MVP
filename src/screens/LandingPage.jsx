import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import ProblemSolutionScreen from './ProblemSolutionScreen';
import HowItWorksScreen from './HowItWorksScreen';
import BenefitsScreen from './BenefitsScreen';
import DashboardScreen from './DashboardScreen';
import PricingScreen from './PricingScreen';

const LandingPage = () => {
    useEffect(() => {
        // Smooth scroll implementation for anchor links
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.hash && target.hash.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80, // Offset for sticky header
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="flex flex-col overflow-x-hidden bg-background-light text-text-main mesh-gradient">
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
