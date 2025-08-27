import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { bookableHotelServices, bookableBungalowServices } from '../constants';
import { ServiceItem } from '../types';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    dates: {
        checkIn: string;
        checkOut: string;
    };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, dates }) => {
    const { content, language } = useLanguage();
    const [venue, setVenue] = useState<'hotel' | 'bungalows' | ''>('');
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setSelectedRooms([]);
    }, [venue]);

    if (!isOpen) return null;

    const handleRoomSelection = (roomName: string) => {
        setSelectedRooms(prev => 
            prev.includes(roomName) 
                ? prev.filter(r => r !== roomName)
                : [...prev, roomName]
        );
    };

    const handleSubmit = () => {
        if (!fullName || !phone || !venue) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        const phoneNumber = venue === 'hotel' ? content.whatsappHotelNumber : content.whatsappBungalowNumber;
        let message = `*Solicitud de Reserva - Green Paradise*\n\n`;
        message += `*Sede:* ${venue === 'hotel' ? content.venueHotel : content.venueBungalow}\n`;
        message += `*Nombre:* ${fullName}\n`;
        message += `*Teléfono:* ${phone}\n`;
        if (dates.checkIn) message += `*Llegada:* ${dates.checkIn}\n`;
        if (dates.checkOut) message += `*Salida:* ${dates.checkOut}\n`;
        if (selectedRooms.length > 0) {
            message += `*Interesado en:*\n- ${selectedRooms.join('\n- ')}\n`;
        }
        message += `\nGracias.`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    const options: ServiceItem[] = venue === 'hotel' ? bookableHotelServices : (venue === 'bungalows' ? bookableBungalowServices : []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">{content.modalTitle}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="p-6 space-y-6 overflow-y-auto">
                    <div>
                        <label className="block text-lg font-semibold text-gray-700">{content.venue} *</label>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${venue === 'hotel' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                <input type="radio" name="venue" value="hotel" onChange={(e) => setVenue(e.target.value as any)} className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 form-accent-green" />
                                <span className="ml-3 font-medium text-gray-800">{content.venueHotel}</span>
                            </label>
                            <label className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${venue === 'bungalows' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                                <input type="radio" name="venue" value="bungalows" onChange={(e) => setVenue(e.target.value as any)} className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 form-accent-green" />
                                <span className="ml-3 font-medium text-gray-800">{content.venueBungalow}</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-lg font-semibold text-gray-700">{content.selectRooms}</label>
                        <div className="mt-2 p-4 border border-gray-200 rounded-lg max-h-60 overflow-y-auto">
                            {venue ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {options.map(item => (
                                        <label key={item.id} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" checked={selectedRooms.includes(item.name[language])} onChange={() => handleRoomSelection(item.name[language])} className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 form-accent-green" />
                                            <span className="text-gray-700 text-sm">{item.name[language]}</span>
                                        </label>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 text-center">{content.noOptions}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700">{content.fullName} *</label>
                        <input type="text" id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} className="mt-1 block w-full bg-white text-gray-900 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-3" />
                    </div>
                     <div>
                        <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">{content.phone} *</label>
                        <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 block w-full bg-white text-gray-900 border border-gray-400 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-3" />
                    </div>
                </div>
                <div className="p-4 bg-gray-50 border-t flex justify-end space-x-3">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">{content.close}</button>
                    <button onClick={handleSubmit} className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">{content.submitBooking}</button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;