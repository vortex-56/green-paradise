import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const policySubtitles = [
    "Horarios",
    "Reservas y Pagos",
    "Cancelaciones y/o modificaciones",
    "Interacción en Redes Sociales",
    "Check-in y Check-out",
    "Huéspedes y Visitantes",
    "Normas de Comportamiento",
    "Fotografía y Privacidad",
    "Comportamiento en Comunicaciones",
    "Uso de Espacios Comunes",
    "Política de No Discriminación",
    "Servicio de lavandería",
    "Visitantes",
    "Objetos de valor y equipaje",
    "Daños y Pérdidas",
    "Uso de Instalaciones y Áreas Comunes",
    "Mascotas",
    "Fumar",
    "Políticas de venta de alcohol",
    "Horario de servicio de limpieza",
    "Reglas de Check Out",
    "Piscina:",
    "Daños a la propiedad mueble:",
];

const FormattedPolicyText: React.FC<{ text: string }> = ({ text }) => {
    // Create a regex to match any of the subtitles on a line by itself
    // The split method with a capturing group will keep the delimiters in the result array
    const subtitlesRegex = new RegExp(
      `^(${policySubtitles.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})$`,
      'gm'
    );
    
    const parts = text.split(subtitlesRegex).filter(part => part);

    return (
        <>
            {parts.map((part, index) => {
                if (policySubtitles.includes(part)) {
                    return <strong key={index} className="block font-bold text-gray-800 mt-6 mb-2 text-xl">{part}</strong>;
                } else {
                    return <span key={index}>{part}</span>;
                }
            })}
        </>
    );
};


const PoliciesPage: React.FC = () => {
    const { content } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const hash = location.state?.hash || location.hash.substring(1);

        const timer = setTimeout(() => {
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                window.scrollTo(0, 0);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [location.state, location.hash]);


    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    {content.policiesTitle}
                </h1>
            </div>
            <div className="mt-12 space-y-12">
                <div id="politicas-hotel" className="p-8 bg-gray-50 rounded-xl shadow-sm scroll-mt-24">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">{content.policiesHotelTitle}</h2>
                    <div className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                        <FormattedPolicyText text={content.policiesHotelText} />
                    </div>
                </div>
                <div id="politicas-bungalows" className="p-8 bg-gray-50 rounded-xl shadow-sm scroll-mt-24">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">{content.policiesBungalowsTitle}</h2>
                    <div className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                        <FormattedPolicyText text={content.policiesBungalowsText} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoliciesPage;