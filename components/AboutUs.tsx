import React from 'react';
import { useLanguage }'../contexts/LanguageContext';

const AboutUs: React.FC = () => {
    const { content } = useLanguage();

    return (
        <section id="nosotros" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 tracking-tight">
                            {content.aboutTitle}
                        </h2>
                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            {content.aboutText}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="3NP/NP01.webp" alt="Vista del hotel" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square"/>
                        <img src="3NP/NP02.webp" alt="Interior de bungalow" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square mt-8"/>
                        <img src="3NP/NP03.webp" alt="Piscina natural" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square"/>
                        <img src="3NP/NP04.webp" alt="Detalle de decoración" className="rounded-lg shadow-lg object-cover w-full h-full aspect-square mt-8"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;