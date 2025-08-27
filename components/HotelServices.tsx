
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { hotelRooms } from '../constants';
import { HotelRoom } from '../types';

const getIconForFeature = (featureText: string): string => {
    const lowerFeature = featureText.toLowerCase();
    if (lowerFeature.includes('cama')) return '🛏️';
    if (lowerFeature.includes('desayuno')) return '☕';
    if (lowerFeature.includes('tv')) return '📺';
    if (lowerFeature.includes('aire acondicionado')) return '❄️';
    if (lowerFeature.includes('ventilador')) return '💨';
    if (lowerFeature.includes('baño')) return '🚿';
    if (lowerFeature.includes('amenities')) return '✨';
    if (lowerFeature.includes('vista a la calle')) return '🏙️';
    if (lowerFeature.includes('tina') || lowerFeature.includes('jacuzzi')) return '🛀';
    if (lowerFeature.includes('planta') || lowerFeature.includes('niveles')) return '🏢';
    return '✅';
};


const HotelRoomCard: React.FC<{ item: HotelRoom }> = ({ item }) => {
    const { language } = useLanguage();
    return (
        <div id={item.id} className="bg-[#efefef] rounded-lg shadow-lg overflow-hidden flex flex-col w-full max-w-sm mx-auto transition-transform transform hover:-translate-y-2">
            <div className="relative">
                <img src={item.image} alt={item.name[language]} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-0 left-0 p-4 text-white text-xl font-bold w-full">{item.name[language]}</h3>
            </div>
            <div className="p-4 flex-grow">
                <ul className="space-y-2">
                    {item.features[language].map((feature, index) => {
                        // Always use the Spanish feature text to determine the icon for consistency
                        const spanishFeature = item.features['es'][index] || feature;
                        return (
                             <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 mr-2 w-5 text-center">{getIconForFeature(spanishFeature)}</span>
                                <span className="text-gray-700 text-sm font-semibold">{feature}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

const HotelServices: React.FC = () => {
    const { content } = useLanguage();

    return (
        <section id="hotel" className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 tracking-tight">
                        {content.hotelServicesTitle}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotelRooms.map(item => (
                        <HotelRoomCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelServices;