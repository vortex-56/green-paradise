import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface DateInputButtonProps {
    id: string;
    label: string;
    value: string;
    min?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    placeholder: string;
}

// Helper function to safely format the date string for display
const formatDisplayDate = (dateString: string, language: 'es' | 'en', placeholder: string): string => {
    // 1. Validate input: ensure it's a non-empty string
    if (typeof dateString !== 'string' || !dateString.trim()) {
        return placeholder;
    }

    try {
        // 2. Parse date: Appending T00:00:00 to parse as local time and avoid timezone issues.
        const date = new Date(`${dateString}T00:00:00`);
        
        // 3. Validate parsed date: Check if the result is a valid date object.
        if (isNaN(date.getTime())) {
            console.warn(`Could not parse invalid date value: "${dateString}"`);
            return placeholder;
        }

        // 4. Format date: Use Intl.DateTimeFormat for robust, localized formatting.
        return new Intl.DateTimeFormat(language === 'es' ? 'es-ES' : 'en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);

    } catch (error) {
        console.error("An unexpected error occurred while formatting date:", dateString, error);
        return placeholder;
    }
};

const DateInputButton: React.FC<DateInputButtonProps> = ({ id, label, value, min, onChange, disabled, placeholder }) => {
    const { language } = useLanguage();
    const formattedDate = formatDisplayDate(value, language, placeholder);

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="mt-1 relative">
                {/* Visual display element, made to look like the original button */}
                <div
                    className={`w-full bg-white border border-gray-400 rounded-md shadow-sm h-11 px-3 text-left flex items-center justify-between transition-colors duration-200 ${disabled ? 'bg-gray-100' : ''}`}
                    aria-hidden="true"
                >
                    <span className={value ? 'text-gray-900' : 'text-gray-400'}>
                        {formattedDate}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>

                {/* The actual date input, an invisible layer on top, now using custom styles */}
                <input
                    type="date"
                    id={id}
                    value={value}
                    min={min}
                    onChange={onChange}
                    disabled={disabled}
                    className="custom-date-input absolute inset-0 w-full h-full cursor-pointer disabled:cursor-not-allowed"
                    style={{ colorScheme: 'light' }}
                    aria-label={label}
                />
            </div>
        </div>
    );
};

export default DateInputButton;
