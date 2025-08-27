import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { navMenu } from '../constants';
import { NavItem } from '../types';
import GreenParadiseLogo from './GreenParadiseLogo';

const NavLink: React.FC<{ item: NavItem; onClick: () => void, className?: string }> = ({ item, onClick, className = '' }) => {
    const { language, content } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        onClick();

        if (targetId.startsWith('/')) {
            navigate(targetId.split('#')[0], { state: { hash: targetId.split('#')[1] } });
            if (!targetId.includes('#')) {
                window.scrollTo({ top: 0, behavior: 'auto' });
            }
            return;
        }

        const cleanTargetId = targetId.replace('#', '');
        
        if(location.pathname === '/' && cleanTargetId === 'contacto') {
             document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
             return;
        }

        const element = document.getElementById(cleanTargetId);

        if (location.pathname === '/') {
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate('/', { state: { targetId: cleanTargetId } });
        }
    };
    
    // Special handling for the black Contact button
    if (item.id === 'contacto-btn') {
        return (
             <a
                href={item.href}
                onClick={(e) => handleNavigate(e, item.href)}
                className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
            >
                {content.nav_contacto}
            </a>
        )
    }

    return (
        <a
            href={item.href}
            onClick={(e) => handleNavigate(e, item.href)}
            className={`text-sm text-gray-700 hover:text-black transition-colors duration-200 ${className}`}
        >
            {item[language]}
        </a>
    );
};


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const { language, content } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // When on other pages, the default Link behavior will navigate to '/'.
    };

    const contactItem: NavItem = { id: 'contacto-btn', es: 'Contacto', en: 'Contact', href: '#contacto' };

    const MobileMenuPanel = () => (
        <div className={`
            lg:hidden absolute top-full left-0 right-0 mt-3 z-50 
            origin-top transform transition-all duration-[400ms] ease-in-out
            ${isMenuOpen 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }
        `}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 ring-1 ring-black ring-opacity-5">
                <div className="space-y-2">
                    {[...navMenu, {id: 'contacto', es: 'Contacto', en: 'Contact', href: '#contacto'}].map((item) => (
                         <NavLink key={item.id} item={item} onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg text-center font-semibold"/>
                    ))}
                </div>
            </div>
        </div>
    );

    const DesktopNavContent = () => (
        <>
            {navMenu.map((item) => (
                item.subItems ? (
                    <div 
                        key={item.id} 
                        className="relative"
                        onMouseEnter={() => setOpenSubMenu(item.id)}
                        onMouseLeave={() => setOpenSubMenu(null)}
                    >
                        <a
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenSubMenu(null);
                                const targetId = item.href;

                                if (targetId.startsWith('/')) {
                                    navigate(targetId.split('#')[0], { state: { hash: targetId.split('#')[1] } });
                                    if (!targetId.includes('#')) {
                                        window.scrollTo({ top: 0, behavior: 'auto' });
                                    }
                                    return;
                                }

                                const cleanTargetId = targetId.replace('#', '');
                                if (location.pathname === '/') {
                                    document.getElementById(cleanTargetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                } else {
                                    navigate('/', { state: { targetId: cleanTargetId } });
                                }
                            }}
                            className={`font-semibold text-sm text-gray-700 hover:text-black transition-colors duration-200 flex items-center gap-1`}
                        >
                            {item[language]}
                             <svg className={`w-4 h-4 transition-transform duration-200 ${openSubMenu === item.id ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <div className={`
                            absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50
                            origin-top transform transition-all ease-in-out
                            ${openSubMenu === item.id 
                                ? 'opacity-100 scale-100 duration-[400ms]' 
                                : 'opacity-0 scale-95 pointer-events-none duration-[300ms]'
                            }
                        `}>
                            <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-3 ring-1 ring-black ring-opacity-5 ${item.id === 'bungalows' ? 'min-w-[328px]' : 'min-w-[200px]'}`}>
                                <div className="space-y-0.5">
                                    {item.subItems.map(subItem => (
                                        <NavLink 
                                            key={subItem.id} 
                                            item={subItem} 
                                            onClick={() => setOpenSubMenu(null)} 
                                            className="block py-1 px-3 text-sm whitespace-nowrap rounded-md hover:bg-gray-100 font-medium"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <NavLink key={item.id} item={item} onClick={() => {}} className="font-semibold" />
                )
            ))}
            <NavLink item={contactItem} onClick={() => {}} />
        </>
    );
    

    if (isHomePage) {
        return (
            <header className="absolute top-0 left-0 right-0 z-40 pt-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-[4.75rem] sm:px-[5.25rem] lg:px-[5.75rem]">
                    <div id="MenuHero" className="relative w-full bg-white/95 backdrop-blur-sm rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1),_0_0_20px_rgba(0,0,0,0.1),_0_0_30px_rgba(0,0,0,0.1)] pl-8 pr-1 sm:pl-10 sm:pr-3 py-2 flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2 text-gray-800 hover:text-black transition-colors">
                                <GreenParadiseLogo type="main" />
                            </Link>
                        </div>
                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex items-center space-x-6">
                           <DesktopNavContent />
                        </nav>
                         {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                 <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                        {/* Mobile Menu Panel */}
                        <MobileMenuPanel />
                    </div>
                </div>
            </header>
        );
    }

    // Default header for other pages
    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2 text-gray-800 hover:text-black transition-colors">
                           <GreenParadiseLogo type="main" />
                        </Link>
                    </div>
                    <nav className="hidden lg:flex items-center space-x-8">
                         <DesktopNavContent />
                    </nav>
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                    {/* Mobile Menu Panel */}
                    <MobileMenuPanel />
                </div>
            </div>
        </header>
    );
};

export default Header;