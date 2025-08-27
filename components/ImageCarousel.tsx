import React, { useState, useEffect, useCallback } from 'react';
import { ServiceItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ImageCarouselProps {
    services: ServiceItem[];
    initialDelay?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ services, initialDelay = 0 }) => {
    const { language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const step = 2; // Show 2 images at a time

    const totalSteps = Math.ceil(services.length / step);

    const transitionDuration = 600; // 0.6 seconds
    const staggerDelay = 300; // 0.3 seconds
    const totalAnimationTime = transitionDuration + staggerDelay;

    const changeSlide = useCallback((direction: 'next' | 'prev') => {
        if (totalSteps <= 1 || isFading) return; // Prevent multiple clicks during transition
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex(prev => {
                const newIndex = direction === 'next' ? prev + 1 : prev - 1;
                // Correctly handles positive and negative looping
                return (newIndex + totalSteps) % totalSteps;
            });
            setIsFading(false);
        }, totalAnimationTime);
    }, [totalSteps, isFading, totalAnimationTime]);

    const nextSlide = useCallback(() => changeSlide('next'), [changeSlide]);
    const prevSlide = useCallback(() => changeSlide('prev'), [changeSlide]);
    
    useEffect(() => {
        if (services.length <= step) return;

        let interval: ReturnType<typeof setInterval>;
        const timeoutId = setTimeout(() => {
            interval = setInterval(nextSlide, 3000);
        }, initialDelay);
        
        return () => {
            clearTimeout(timeoutId);
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [services.length, step, nextSlide, initialDelay]);

    const startIndex = currentIndex * step;
    const service1 = services[startIndex];
    const service2 = services[startIndex + 1];

    // Use arbitrary values for Tailwind JIT compiler to get specific timings
    const durationClass = `duration-[${transitionDuration}ms]`;
    const delayClass = `delay-[${staggerDelay}ms]`;

    return (
        <div className="w-full h-full relative flex items-center justify-center gap-2 p-4">
            {/* Left Arrow */}
            <button 
                onClick={prevSlide} 
                className="absolute -left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md z-10 hover:bg-white disabled:opacity-50"
                aria-label="Previous image"
                disabled={services.length <= step}
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            <div className={`flex-1 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-gray-200 transition-opacity ${durationClass} ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {service1 && <img src={service1.image} alt={service1.name[language]} className="w-full h-full object-cover" />}
            </div>
            <div className={`flex-1 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-gray-200 transition-opacity ${durationClass} ease-in-out ${delayClass} ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {service2 && <img src={service2.image} alt={service2.name[language]} className="w-full h-full object-cover" />}
            </div>

            {/* Right Arrow */}
            <button 
                onClick={nextSlide} 
                className="absolute -right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md z-10 hover:bg-white disabled:opacity-50"
                aria-label="Next image"
                disabled={services.length <= step}
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>
    );
};

export default ImageCarousel;