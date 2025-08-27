
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import AboutUs from './AboutUs';
import HotelServices from './HotelServices';
import BungalowServices from './BungalowServices';
import Contact from './Contact';

const HomePage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                // Timeout to ensure the page has rendered before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            // Scroll to top if navigating to the home page without a specific target anchor
            // This fixes the issue where clicking the logo from another page doesn't scroll up.
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <AboutUs />
            <HotelServices />
            <BungalowServices />
            <Contact />
        </>
    );
};

export default HomePage;