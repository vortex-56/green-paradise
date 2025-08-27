import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
);


const WhatsAppButton: React.FC = () => {
    const { content } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const hotelMessage = "Hola, quisiera más información sobre el Hotel Green Paradise.";
    const bungalowMessage = "Hola, quisiera más información sobre los Bungalows Green Paradise.";

    const hotelWhatsappUrl = `https://api.whatsapp.com/send?phone=${content.whatsappHotelNumber}&text=${encodeURIComponent(hotelMessage)}`;
    const bungalowWhatsappUrl = `https://api.whatsapp.com/send?phone=${content.whatsappBungalowNumber}&text=${encodeURIComponent(bungalowMessage)}`;

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
            {/* Menu Options */}
            <div 
                className={`flex flex-col items-end space-y-3 mb-3 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                {/* Bungalows Button */}
                <a
                    href={bungalowWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-end w-full bg-white rounded-full py-2 pl-5 pr-2 shadow-lg hover:scale-105 transition-transform gap-3"
                    aria-label={content.whatsappBungalowLabel}
                >
                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{content.whatsappBungalowLabel}</span>
                     <div className="bg-green-500 rounded-full p-2.5 text-white">
                        <WhatsAppIcon className="w-7 h-7 relative left-[1px] bottom-[1px]" />
                    </div>
                </a>

                {/* Hotel Button */}
                <a
                    href={hotelWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-end w-full bg-white rounded-full py-2 pl-5 pr-2 shadow-lg hover:scale-105 transition-transform gap-3"
                    aria-label={content.whatsappHotelLabel}
                >
                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{content.whatsappHotelLabel}</span>
                    <div className="bg-green-500 rounded-full p-2.5 text-white">
                         <WhatsAppIcon className="w-7 h-7 relative left-[1px] bottom-[1px]" />
                    </div>
                </a>
            </div>
             {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Contactar por WhatsApp"
                aria-expanded={isOpen}
            >
                <div className="relative w-8 h-8 flex items-center justify-center">
                    {/* WhatsApp Icon */}
                    <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 transform -rotate-45 scale-50' : 'opacity-100 transform rotate-0 scale-100'}`}>
                        <WhatsAppIcon className="w-8 h-8" />
                    </div>
                    {/* Close (X) Icon */}
                    <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 transform rotate-0 scale-100' : 'opacity-0 transform rotate-45 scale-50'}`}>
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default WhatsAppButton;