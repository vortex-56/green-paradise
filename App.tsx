
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import PoliciesPage from './components/PoliciesPage';

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="politicas" element={<PoliciesPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </LanguageProvider>
    );
};

export default App;
