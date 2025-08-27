
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
    const { content } = useLanguage();

    const socialLinks = [
        { name: 'Facebook', href: 'https://www.facebook.com/Greenparadisehotel', icon: <img src="/0L/0L01.webp" alt="Facebook" className="w-8 h-8" /> },
        { name: 'Instagram', href: 'https://www.instagram.com/greenparadise.hotel', icon: <img src="/0L/0L02.webp" alt="Instagram" className="w-8 h-8" /> },
        { name: 'TikTok', href: 'https://www.tiktok.com/@greenparadisehotel', icon: <img src="/0L/0L03.webp" alt="TikTok" className="w-8 h-8" /> },
    ];

    return (
        <section id="contacto" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 tracking-tight">
                        {content.contactTitle}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Hotel Info */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.contactHotelAddress}</h3>
                        <p className="text-gray-600 mb-4">Raymondi, Rupa Rupa 10131</p>
                        <div className="flex-grow rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.373292437525!2d-76.004245!3d-9.293421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6104085429875%3A0x8e8a715de35c8e3!2sRaymondi%2C%20Rupa%20Rupa%2010131!5e0!3m2!1sen!2spe!4v1678886655444!5m2!1sen!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Bungalows Info */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.contactBungalowAddress}</h3>
                         <p className="text-gray-600 mb-4">J26F+JR, Las Palmas 10120</p>
                        <div className="flex-grow rounded-lg overflow-hidden shadow-lg">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5566.8919312230055!2d-75.98209679901383!3d-9.38738751206924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a645621b3f0a29%3A0x238ca5e7b9abae4e!2sGreen%20Paradise%20bungalows!5e0!3m2!1ses-419!2spe!4v1755990208863!5m2!1ses-419!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                           ></iframe>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.contactSocials}</h3>
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map(link => (
                             <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-75 transition-opacity">
                                <span className="sr-only">{link.name}</span>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;