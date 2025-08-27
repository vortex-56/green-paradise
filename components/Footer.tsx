import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { hotelRooms, allBungalowServices, translations } from '../constants';
import { NavItem } from '../types';

const Footer: React.FC = () => {
    const { language, content } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        
        if (targetId.startsWith('/')) {
            navigate(targetId);
            if (!targetId.includes('#')) {
                window.scrollTo({ top: 0, behavior: 'auto' });
            }
            return;
        }

        const cleanTargetId = targetId.replace('#', '');
        const element = document.getElementById(cleanTargetId);

        if (location.pathname === '/') {
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate('/', { state: { targetId: cleanTargetId } });
        }
    };
    
    const FooterLink: React.FC<{item: NavItem}> = ({ item }) => (
        <a href={item.href} onClick={(e) => handleNavigate(e, item.href)} className="text-gray-500 hover:text-green-700 transition-colors duration-200">
            {item[language]}
        </a>
    );
    
    const getGroupedFooterLinks = (items: Array<{ id: string; name: { es: string; en: string } }>): NavItem[] => {
        const uniqueNames = new Map<string, NavItem>();

        items.forEach(item => {
            // Chain replacements to simplify names
            const baseNameEs = item.name.es
                .replace(/\s+-\s+\d+\s+Personas?/i, '') // For "Doble Simple - 2 Personas"
                .replace(/\s+\d+$/, '')                 // For "HABITACIÓN CIPRÉS 1"
                .trim();
            const baseNameEn = item.name.en
                .replace(/\s+-\s+\d+\s+People/i, '')    // For "Simple Double - 2 People"
                .replace(/\s+\d+$/, '')                 // For "CIPRES ROOM 1"
                .trim();

            if (!uniqueNames.has(baseNameEs)) {
                uniqueNames.set(baseNameEs, {
                    id: item.id, // Use the ID of the first item in the group for the anchor link
                    es: baseNameEs,
                    en: baseNameEn,
                    href: `#${item.id}`
                });
            }
        });
        return Array.from(uniqueNames.values());
    };

    const groupedHotelLinks = getGroupedFooterLinks(hotelRooms);
    const groupedBungalowLinks = getGroupedFooterLinks(allBungalowServices);


    const hotelPoliciesItem: NavItem = {
        id: 'politicas-hotel',
        es: translations.es.footerPoliciesHotel,
        en: translations.en.footerPoliciesHotel,
        href: '/politicas#politicas-hotel'
    };

    const bungalowPoliciesItem: NavItem = {
        id: 'politicas-bungalows',
        es: translations.es.footerPoliciesBungalows,
        en: translations.en.footerPoliciesBungalows,
        href: '/politicas#politicas-bungalows'
    };

    const contactoItem: NavItem = {
        id: 'contacto',
        es: translations.es.nav_contacto,
        en: translations.en.nav_contacto,
        href: '#contacto'
    };


    return (
        <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-4 col-span-2 md:col-span-1">
                        <Link to="/" onClick={(e) => handleNavigate(e, '#')} className="text-2xl font-bold text-green-800">
                            {content.logo}
                        </Link>
                        <p className="text-gray-500 text-sm max-w-xs">{content.aboutText.substring(0,100)}...</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{content.hotelServicesTitle}</h3>
                        <ul className="mt-4 space-y-2">
                            {groupedHotelLinks.map((item) => (
                                <li key={item.id}>
                                    <FooterLink item={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{content.bungalowServicesTitle}</h3>
                         <ul className="mt-4 space-y-2">
                            {groupedBungalowLinks.map((item) => (
                                <li key={item.id}>
                                    <FooterLink item={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{content.footerPolicies}</h3>
                         <ul className="mt-4 space-y-2">
                           <li><FooterLink item={hotelPoliciesItem} /></li>
                           <li><FooterLink item={bungalowPoliciesItem} /></li>
                        </ul>
                        <a 
                           href={contactoItem.href} 
                           onClick={(e) => handleNavigate(e, contactoItem.href)}
                           className="mt-6 block text-sm font-semibold text-gray-900 tracking-wider uppercase hover:text-green-700 transition-colors duration-200"
                        >
                           {contactoItem[language]}
                        </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 text-center">
                    <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Green Paradise. Todos los derechos reservados.</p>
                    <p className="text-xs text-gray-400 mt-2">
                        Desarrollado por <a href="https://be.net/vortex56" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline">Vortex56</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;