
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { bungalows, bungalowActivities } from '../constants';
import { Bungalow, ServiceItem } from '../types';

const getIconForFeature = (featureText: string): string => {
    const lowerFeature = featureText.toLowerCase();
    if (lowerFeature.includes('persona')) return '👤';
    if (lowerFeature.includes('cama')) return '🛏️';
    if (lowerFeature.includes('desayuno')) return '☕';
    if (lowerFeature.includes('tv')) return '📺';
    if (lowerFeature.includes('aire acondicionado')) return '❄️';
    if (lowerFeature.includes('ventilador')) return '💨';
    if (lowerFeature.includes('baño')) return '🚿';
    if (lowerFeature.includes('amenities')) return '✨';
    if (lowerFeature.includes('vista')) return '🏞️';
    if (lowerFeature.includes('tina')) return '🛀';
    if (lowerFeature.includes('terraza')) return '🌿';
    if (lowerFeature.includes('piso') || lowerFeature.includes('niveles')) return '🏢';
    if (lowerFeature.includes('frigobar')) return '🧊';
    return '✅';
};

const BungalowCard: React.FC<{ item: Bungalow }> = ({ item }) => {
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

const ActivityCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
    const { language } = useLanguage();
    return (
        <div id={item.id} className="group relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 flex flex-col bg-white w-full max-w-sm mx-auto">
            <img src={item.image} alt={item.name[language]} className="w-full h-48 object-cover" />
             <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-gray-900 text-xl font-bold mb-2">{item.name[language]}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.description?.[language]}</p>
            </div>
        </div>
    );
};


const BungalowServices: React.FC = () => {
    const { content } = useLanguage();

    return (
        <section id="bungalows" className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                     <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 tracking-tight">
                        {content.bungalowServicesTitle}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bungalows.map(item => (
                        <BungalowCard key={item.id} item={item} />
                    ))}
                </div>

                <div className="text-center mt-20 mb-12">
                     <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 tracking-tight">
                        {content.bungalowActivitiesTitle}
                    </h2>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bungalowActivities.map(item => (
                        <ActivityCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BungalowServices;