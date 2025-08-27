import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { useLanguage } from '../contexts/LanguageContext';

const Layout: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const location = useLocation();

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <div className="flex flex-col min-h-screen">
             {/* Language switcher is now global */}
            <div className="absolute top-2 right-2 lg:top-4 lg:right-6 z-50">
                <button 
                    onClick={toggleLanguage} 
                    className="font-semibold text-sm text-gray-800 hover:text-green-700 transition-colors bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full"
                    aria-label="Change language"
                >
                    <span className={language === 'es' ? 'text-green-700 font-bold' : ''}>ES</span> 
                    <span className="text-gray-400 mx-1">/</span> 
                    <span className={language === 'en' ? 'text-green-700 font-bold' : ''}>EN</span>
                </button>
            </div>

            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;