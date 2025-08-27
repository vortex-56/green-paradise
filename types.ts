export type Language = 'es' | 'en';

export interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    content: any; 
}

export interface NavItem {
    id: string;
    es: string;
    en: string;
    href: string;
    subItems?: NavItem[];
}

export interface ServiceItem {
    id: string;
    name: {
        es: string;
        en: string;
    };
    image: string;
    description?: {
        es: string;
        en: string;
    };
}

export interface HotelRoom {
    id: string;
    name: {
        es: string;
        en: string;
    };
    image: string;
    features: {
        es: string[];
        en: string[];
    };
}

export interface Bungalow {
    id: string;
    name: {
        es: string;
        en: string;
    };
    image: string;
    features: {
        es: string[];
        en: string[];
    };
}
