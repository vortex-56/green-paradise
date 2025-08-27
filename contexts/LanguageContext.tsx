
import React, { createContext, useState, useContext, useMemo, ReactNode } from 'react';
import { Language, LanguageContextType } from '../types';
import { translations } from '../constants';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');

    const contextValue = useMemo(() => ({
        language,
        setLanguage,
        content: translations[language],
    }), [language]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
