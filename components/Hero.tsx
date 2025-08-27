import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import BookingModal from './BookingModal';
import DateInputButton from './DateInputButton';
import ImageCarousel from './ImageCarousel';
import { allBungalowServices } from '../constants';
import GreenParadiseLogo from './GreenParadiseLogo';
import { ServiceItem } from '../types';

// Array of background images for the hero carousel
const heroBgImages = [
    '/0L/FH/FH01.webp',
    '/0L/FH/FH02.webp',
    '/0L/FH/FH03.webp',
];

// New array for hotel carousel images
const hotelCarouselImages: ServiceItem[] = [
    { id: 'ch01', name: { es: 'Habitación de Hotel 1', en: 'Hotel Room 1' }, image: '/1CH/CH01.webp' },
    { id: 'ch02', name: { es: 'Habitación de Hotel 2', en: 'Hotel Room 2' }, image: '/1CH/CH02.webp' },
    { id: 'ch03', name: { es: 'Habitación de Hotel 3', en: 'Hotel Room 3' }, image: '/1CH/CH03.webp' },
    { id: 'ch04', name: { es: 'Habitación de Hotel 4', en: 'Hotel Room 4' }, image: '/1CH/CH04.webp' },
    { id: 'ch05', name: { es: 'Habitación de Hotel 5', en: 'Hotel Room 5' }, image: '/1CH/CH05.webp' },
    { id: 'ch06', name: { es: 'Habitación de Hotel 6', en: 'Hotel Room 6' }, image: '/1CH/CH06.webp' },
];


const getTodayDateString = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const Hero: React.FC = () => {
    const { content } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    
    const today = useMemo(() => getTodayDateString(), []);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    // Effect to handle the background image rotation
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBgIndex(prevIndex => (prevIndex + 1) % heroBgImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const checkOutMinDate = useMemo(() => {
        if (!checkIn) return today;
        const checkInDate = new Date(`${checkIn}T00:00:00`);
        checkInDate.setDate(checkInDate.getDate() + 1);
        const year = checkInDate.getFullYear();
        const month = String(checkInDate.getMonth() + 1).padStart(2, '0');
        const day = String(checkInDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }, [checkIn, today]);
    
    const handleRequestBooking = () => {
        setIsModalOpen(true);
    };

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckInDate = e.target.value;
        setCheckIn(newCheckInDate);
        if (checkOut && newCheckInDate && checkOut <= newCheckInDate) {
            setCheckOut('');
        }
    };

    return (
        <>
            <div className="relative bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div 
                    id="FondoHero"
                    className="-mt-16 relative max-w-7xl mx-auto rounded-3xl bg-gray-800 overflow-hidden pt-20 pb-0 sm:pt-20 sm:pb-2 lg:pt-24 lg:pb-4 px-16 sm:px-[4.5rem] lg:px-20" 
                >
                    {/* Background Image Carousel */}
                    {heroBgImages.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{ backgroundImage: `url(${img})` }}
                            aria-hidden={index !== currentBgIndex}
                        />
                    ))}

                    <div className="absolute inset-0 bg-black/50 rounded-3xl z-10"></div>
                    <div className="relative z-20 flex flex-col space-y-4">
                        {/* Top Section */}
                        <div id="CajasSuperiores" className="-mt-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
                                    <div className="p-4 flex items-center space-x-4 flex-grow">
                                        <div className="flex-1">
                                            <GreenParadiseLogo type="hotel" />
                                        </div>
                                        <div className="flex-1">
                                            <ImageCarousel services={hotelCarouselImages} />
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleScrollTo('hotel')}
                                        className="w-full bg-green-600 text-white font-bold text-sm uppercase py-4 px-6 hover:bg-green-700 transition-colors"
                                    >
                                        {content.heroButtonViewAllHotel}
                                    </button>
                                </div>
                                <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
                                     <div className="p-4 flex items-center space-x-4 flex-grow">
                                        <div className="flex-1">
                                            <GreenParadiseLogo type="bungalow" />
                                        </div>
                                        <div className="flex-1">
                                            <ImageCarousel services={allBungalowServices.slice(0, 8)} initialDelay={300} />
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleScrollTo('bungalows')}
                                        className="w-full bg-green-600 text-white font-bold text-sm uppercase py-4 px-6 hover:bg-green-700 transition-colors"
                                    >
                                        {content.heroButtonViewAllBungalow}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div id="CajasInferiores" className="-mt-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-0">
                                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
                                <h3 className="text-lg font-bold text-gray-800 text-center mb-4">
                                    {content.bookingTitle}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                                    <DateInputButton
                                        id="checkin-date"
                                        label={content.checkIn}
                                        value={checkIn}
                                        min={today}
                                        onChange={handleCheckInChange}
                                        placeholder="dd/mm/aaaa"
                                    />
                                    <DateInputButton
                                        id="checkout-date"
                                        label={content.checkOut}
                                        value={checkOut}
                                        min={checkOutMinDate}
                                        onChange={e => setCheckOut(e.target.value)}
                                        disabled={!checkIn}
                                        placeholder="dd/mm/aaaa"
                                    />
                                    <div className="sm:col-span-2">
                                        <button 
                                            onClick={handleRequestBooking} 
                                            className="w-full bg-green-600 text-white font-bold h-11 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300"
                                        >
                                            {content.bookingButton}
                                        </button>
                                    </div>
                                </div>
                                </div>
                                <div className="text-white text-center lg:text-left lg:pl-6">
                                    <h1 className="text-3xl lg:text-[2rem] lg:leading-[2.25rem] font-extrabold font-montserrat tracking-tight whitespace-pre-line" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
                                        {content.heroTitle}
                                    </h1>
                                    <p className="mt-4 text-base lg:text-lg font-semibold whitespace-pre-line" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>
                                        {content.heroSubtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} dates={{ checkIn, checkOut }} />
        </>
    );
};

export default Hero;