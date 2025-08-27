import { NavItem, ServiceItem, HotelRoom, Bungalow } from './types';

export const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};

export const hotelRooms: HotelRoom[] = [
    {
        id: slugify("Habitación individual"),
        name: { es: "Habitación individual", en: "Single Room" },
        image: 'https://picsum.photos/seed/h-individual/400/300',
        features: {
            es: ["cama de 2 plazas", "Desayuno incluido para una persona", "TV Led", "Ventilador", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["Full-size bed", "Breakfast included for one person", "LED TV", "Fan", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Habitación individual comfort"),
        name: { es: "Habitación individual comfort", en: "Single Comfort Room" },
        image: 'https://picsum.photos/seed/h-individual-comfort/400/300',
        features: {
            es: ["cama de 2 plazas", "Desayuno incluido para una persona", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["Full-size bed", "Breakfast included for one person", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Habitación matrimonial"),
        name: { es: "Habitación matrimonial", en: "Matrimonial Room" },
        image: 'https://picsum.photos/seed/h-matrimonial/400/300',
        features: {
            es: ["cama de 2 plazas", "Desayuno incluido para dos personas", "TV Led", "Ventilador", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["Full-size bed", "Breakfast included for two people", "LED TV", "Fan", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Habitación matrimonial comfort"),
        name: { es: "Habitación matrimonial comfort", en: "Matrimonial Comfort Room" },
        image: 'https://picsum.photos/seed/h-matrimonial-comfort/400/300',
        features: {
            es: ["cama de 2 plazas", "Desayuno incluido para dos personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["Full-size bed", "Breakfast included for two people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Habitación ejecutiva individual"),
        name: { es: "Habitación ejecutiva individual", en: "Executive Single Room" },
        image: 'https://picsum.photos/seed/h-ejecutiva-individual/400/300',
        features: {
            es: ["cama de 2 plazas", "Vista a la calle", "Desayuno incluido para una persona", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["Full-size bed", "Street view", "Breakfast included for one person", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Habitación ejecutiva matrimonial"),
        name: { es: "Habitación ejecutiva matrimonial", en: "Executive Matrimonial Room" },
        image: 'https://picsum.photos/seed/h-ejecutiva-matrimonial/400/300',
        features: {
            es: ["cama de 2 plazas", "Vista a la calle", "Desayuno incluido para dos personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["Full-size bed", "Street view", "Breakfast included for two people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Suite"),
        name: { es: "Suite", en: "Suite" },
        image: 'https://picsum.photos/seed/h-suite/400/300',
        features: {
            es: ["Cama queen", "Habitación interna", "Desayuno incluido para dos personas", "TV Led", "Aire acondicionado", "Tina hidromasajes", "Baño propio", "Amenities", "2da planta (Sin ascensor)"],
            en: ["Queen bed", "Internal room", "Breakfast included for two people", "LED TV", "Air conditioning", "Whirlpool tub", "Private bathroom", "Amenities", "2nd floor (No elevator)"]
        }
    },
    {
        id: slugify("Suite comfort"),
        name: { es: "Suite comfort", en: "Suite Comfort" },
        image: 'https://picsum.photos/seed/h-suite-comfort/400/300',
        features: {
            es: ["Cama queen", "Habitación interna", "Desayuno incluido para dos personas", "TV Led", "Aire acondicionado", "Jacuzzi hidromasajes", "Baño propio", "Amenities", "4ta planta (Sin ascensor)"],
            en: ["Queen bed", "Internal room", "Breakfast included for two people", "LED TV", "Air conditioning", "Jacuzzi whirlpool", "Private bathroom", "Amenities", "4th floor (No elevator)"]
        }
    },
    {
        id: slugify("Doble Simple - 2 personas"),
        name: { es: "Doble Simple - 2 personas", en: "Simple Double - 2 people" },
        image: 'https://picsum.photos/seed/h-doble-simple-2/400/300',
        features: {
            es: ["2 camas de 2 plazas", "Desayuno incluido para dos personas", "TV Led", "Ventilador", "Baño propio", "Amenities", "Habitación interna", "5ta planta (Sin ascensor)"],
            en: ["2 full-size beds", "Breakfast included for two people", "LED TV", "Fan", "Private bathroom", "Amenities", "Internal room", "5th floor (No elevator)"]
        }
    },
    {
        id: slugify("Doble Simple - 3 personas"),
        name: { es: "Doble Simple - 3 personas", en: "Simple Double - 3 people" },
        image: 'https://picsum.photos/seed/h-doble-simple-3/400/300',
        features: {
            es: ["2 camas de 2 plazas", "Desayuno incluido para tres personas", "TV Led", "Ventilador", "Baño propio", "Amenities", "Habitación interna", "5ta planta (Sin ascensor)"],
            en: ["2 full-size beds", "Breakfast included for three people", "LED TV", "Fan", "Private bathroom", "Amenities", "Internal room", "5th floor (No elevator)"]
        }
    },
    {
        id: slugify("Doble Simple - 4 personas"),
        name: { es: "Doble Simple - 4 personas", en: "Simple Double - 4 people" },
        image: 'https://picsum.photos/seed/h-doble-simple-4/400/300',
        features: {
            es: ["2 camas de 2 plazas", "Desayuno incluido para cuatro personas", "TV Led", "Ventilador", "Baño propio", "Amenities", "Habitación interna", "5ta planta (Sin ascensor)"],
            en: ["2 full-size beds", "Breakfast included for four people", "LED TV", "Fan", "Private bathroom", "Amenities", "Internal room", "5th floor (No elevator)"]
        }
    },
    {
        id: slugify("Doble Comfort - 2 personas"),
        name: { es: "Doble Comfort - 2 personas", en: "Comfort Double - 2 people" },
        image: 'https://picsum.photos/seed/h-doble-comfort-2/400/300',
        features: {
            es: ["1 cama de 2 plazas + 1 cama de 1 plaza y media", "Desayuno incluido para dos personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["1 full-size bed + 1 twin bed", "Breakfast included for two people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Doble comfort - 3 personas"),
        name: { es: "Doble comfort - 3 personas", en: "Comfort Double - 3 people" },
        image: 'https://picsum.photos/seed/h-doble-comfort-3/400/300',
        features: {
            es: ["1 cama de 2 plazas + 1 cama de 1 plaza y media", "Desayuno incluido para tres personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["1 full-size bed + 1 twin bed", "Breakfast included for three people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Doble comfort - 4 personas"),
        name: { es: "Doble comfort - 4 personas", en: "Comfort Double - 4 people" },
        image: 'https://picsum.photos/seed/h-doble-comfort-4/400/300',
        features: {
            es: ["1 cama de 2 plazas + 1 cama de 1 plaza y media", "Desayuno incluido para cuatro personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["1 full-size bed + 1 twin bed", "Breakfast included for four people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Doble Especial - 2 Personas"),
        name: { es: "Doble Especial - 2 Personas", en: "Special Double - 2 People" },
        image: 'https://picsum.photos/seed/h-doble-especial-2/400/300',
        features: {
            es: ["2 camas de 2 plazas", "Desayuno incluido para dos personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["2 full-size beds", "Breakfast included for two people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Doble especial - 3 personas"),
        name: { es: "Doble especial - 3 personas", en: "Special Double - 3 people" },
        image: 'https://picsum.photos/seed/h-doble-especial-3/400/300',
        features: {
            es: ["2 camas de 2 plazas", "Desayuno incluido para tres personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["2 full-size beds", "Breakfast included for three people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Doble especial - 4 personas"),
        name: { es: "Doble especial - 4 personas", en: "Special Double - 4 people" },
        image: 'https://picsum.photos/seed/h-doble-especial-4/400/300',
        features: {
            es: ["2 camas de 2 plazas", "Desayuno incluido para cuatro personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "Diferentes niveles disponibles por plantas (Sin ascensor)"],
            en: ["2 full-size beds", "Breakfast included for four people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "Different floors available (No elevator)"]
        }
    },
    {
        id: slugify("Triple comfort - 3 personas"),
        name: { es: "Triple comfort - 3 personas", en: "Triple Comfort - 3 people" },
        image: 'https://picsum.photos/seed/h-triple-comfort-3/400/300',
        features: {
            es: ["3 camas (1 de 2 plazas y 2 de 1 plaza y media)", "Desayuno incluido para tres personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "3ra planta (Sin ascensor)"],
            en: ["3 beds (1 full-size and 2 twin)", "Breakfast included for three people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "3rd floor (No elevator)"]
        }
    },
    {
        id: slugify("Triple comfort - 4 personas"),
        name: { es: "Triple comfort - 4 personas", en: "Triple Comfort - 4 people" },
        image: 'https://picsum.photos/seed/h-triple-comfort-4/400/300',
        features: {
            es: ["3 camas (1 de 2 plazas y 2 de 1.5 plazas)", "Desayuno incluido para cuatro personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "3ra planta (Sin ascensor)"],
            en: ["3 beds (1 full-size and 2 twin)", "Breakfast included for four people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "3rd floor (No elevator)"]
        }
    },
    {
        id: slugify("Triple Familiar - 3 personas"),
        name: { es: "Triple Familiar - 3 personas", en: "Family Triple - 3 people" },
        image: 'https://picsum.photos/seed/h-triple-familiar-3/400/300',
        features: {
            es: ["3 camas (1 de 2 plazas y 2 de 1.5 plazas)", "Desayuno incluido para tres personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "4ta planta (Sin ascensor)"],
            en: ["3 beds (1 full-size and 2 twin)", "Breakfast included for three people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "4th floor (No elevator)"]
        }
    },
    {
        id: slugify("Triple Familiar - 4 personas"),
        name: { es: "Triple Familiar - 4 personas", en: "Family Triple - 4 people" },
        image: 'https://picsum.photos/seed/h-triple-familiar-4/400/300',
        features: {
            es: ["3 camas (1 de 2 plazas y 2 de 1.5 plazas)", "Desayuno incluido para cuatro personas", "TV Led", "Aire acondicionado", "Baño propio", "Amenities", "Habitación interna", "4ta planta (Sin ascensor)"],
            en: ["3 beds (1 full-size and 2 twin)", "Breakfast included for four people", "LED TV", "Air conditioning", "Private bathroom", "Amenities", "Internal room", "4th floor (No elevator)"]
        }
    },
];

export const bungalows: Bungalow[] = [
    {
        id: slugify("CABAÑA ALPINA GUANÁBANO"),
        name: { es: "CABAÑA ALPINA GUANÁBANO", en: "ALPINE CABIN GUANABANO" },
        image: '2CB/CB01.webp',
        features: {
            es: ["Capacidad para 2 personas", "Cama de dos plazas", "Desayuno para dos personas", "No cuenta con TV", "Ventilador", "Baño propio", "1 Mesita de noche"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for two people", "No TV", "Fan", "Private bathroom", "1 bedside table"]
        }
    },
    {
        id: slugify("CABAÑA ALPINA BUGANVILLA"),
        name: { es: "CABAÑA ALPINA BUGANVILLA", en: "ALPINE CABIN BUGANVILLA" },
        image: '2CB/CB02.webp',
        features: {
            es: ["Capacidad para 2 personas", "Cama de 2 plazas", "Ventilador y aire acondicionado", "Baño externo para la habitación"],
            en: ["Capacity for 2 people", "Full-size bed", "Fan and air conditioning", "External bathroom for the room"]
        }
    },
    {
        id: slugify("CABAÑA ALPINA NARANJO"),
        name: { es: "CABAÑA ALPINA NARANJO", en: "ALPINE CABIN NARANJO" },
        image: '2CB/CB03.webp',
        features: {
            es: ["Capacidad para 2 personas", "Cama de 2 plazas", "Desayuno para 2", "Ventilador", "Baño propio", "Aire acondicionado"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for 2", "Fan", "Private bathroom", "Air conditioning"]
        }
    },
    {
        id: slugify("HABITACIÓN CIPRÉS 1"),
        name: { es: "HABITACIÓN CIPRÉS 1", en: "CIPRES ROOM 1" },
        image: '2CB/CB04.webp',
        features: {
            es: ["Capacidad para 2 personas", "1 cama de dos plazas", "Desayuno para dos", "Ventilador", "1 Frigobar", "Baño propio", "Amenities de baño", "No incluye TV", "No incluye Aire acondicionado"],
            en: ["Capacity for 2 people", "1 full-size bed", "Breakfast for two", "Fan", "1 Minibar", "Private bathroom", "Bath amenities", "Does not include TV", "Does not include Air conditioning"]
        }
    },
    {
        id: slugify("HABITACIÓN CIPRÉS 2"),
        name: { es: "HABITACIÓN CIPRÉS 2", en: "CIPRES ROOM 2" },
        image: '2CB/CB05.webp',
        features: {
            es: ["Capacidad para 2 personas", "Cama de 2 plazas", "Desayuno para 2 personas", "Aire acondicionado", "Baño propio", "Sala amueblada y Frigobar", "Agua caliente", "No incluye TV"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for 2 people", "Air conditioning", "Private bathroom", "Furnished living area and Minibar", "Hot water", "Does not include TV"]
        }
    },
    {
        id: slugify("HABITACIÓN CIPRÉS 3"),
        name: { es: "HABITACIÓN CIPRÉS 3", en: "CIPRES ROOM 3" },
        image: '2CB/CB06.webp',
        features: {
            es: ["Capacidad para 3 a 4 personas", "2 Camas de dos plazas", "Desayuno para cuatro personas", "Ventilador", "No cuenta con TV", "Aire acondicionado", "Ducha tina propia", "Baño propio"],
            en: ["Capacity for 3 to 4 people", "2 full-size beds", "Breakfast for four people", "Fan", "No TV", "Air conditioning", "Private bathtub", "Private bathroom"]
        }
    },
    {
        id: slugify("HABITACIÓN COCOS 1"),
        name: { es: "HABITACIÓN COCOS 1", en: "COCOS ROOM 1" },
        image: '2CB/CB07.webp',
        features: {
            es: ["Capacidad para 2 personas", "Cama Queen", "Desayuno para dos", "Aire acondicionado", "1 frigobar", "Terraza privada", "Baño propio con tina", "Amenities de baño", "Tina de Baño Externo", "No conta com TV"],
            en: ["Capacity for 2 people", "One Queen Bed", "Breakfast for two", "Air conditioning", "1 minibar", "Private terrace", "Private bathroom with tub", "Bath amenities", "External Bathtub", "No TV"]
        }
    },
    {
        id: slugify("HABITACIÓN COCOS 2"),
        name: { es: "HABITACIÓN COCOS 2", en: "COCOS ROOM 2" },
        image: '2CB/CB08.webp',
        features: {
            es: ["Capacidad para 4 personas", "Vista al Parque Nacional Tingo María", "2 camas de 2 plazas", "Desayuno para los integrantes", "Baño privado", "Aire acondicionado", "Closet"],
            en: ["Capacity for 4 people", "View of Tingo María National Park", "2 full-size beds", "Breakfast for guests", "Private bathroom", "Air conditioning", "Closet"]
        }
    },
    {
        id: slugify("HABITACIÓN LIMONERO 1"),
        name: { es: "HABITACIÓN LIMONERO 1", en: "LIMONERO ROOM 1" },
        image: 'https://picsum.photos/seed/limonero1/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama Queen", "Desayuno para 2", "Aire acondicionado", "Baño propio", "Frigobar", "Primer piso"],
            en: ["Capacity for 2 people", "Queen Bed", "Breakfast for 2", "Air conditioning", "Private bathroom", "Minibar", "First floor"]
        }
    },
    {
        id: slugify("HABITACIÓN LIMONERO 2"),
        name: { es: "HABITACIÓN LIMONERO 2", en: "LIMONERO ROOM 2" },
        image: 'https://picsum.photos/seed/limonero2/400/300',
        features: {
            es: ["Capacidad para 4 personas", "Vista al Parque Nacional Tingo María", "2 Camas de 2 plazas", "Desayuno para 4", "Ventilador", "Terraza acondicionada", "Baño propio", "Aire acondicionado", "Segundo piso"],
            en: ["Capacity for 4 people", "View of Tingo María National Park", "2 Full-size beds", "Breakfast for 4", "Fan", "Furnished terrace", "Private bathroom", "Air conditioning", "Second floor"]
        }
    },
    {
        id: slugify("HABITACIÓN BAMBÚ 1"),
        name: { es: "HABITACIÓN BAMBÚ 1", en: "BAMBU ROOM 1" },
        image: 'https://picsum.photos/seed/bambu1/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama de 2 plazas", "Desayuno para 2", "Frigobar", "Ventilador", "Baño propio"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for 2", "Minibar", "Fan", "Private bathroom"]
        }
    },
    {
        id: slugify("HABITACIÓN BAMBÚ 2"),
        name: { es: "HABITACIÓN BAMBÚ 2", en: "BAMBU ROOM 2" },
        image: 'https://picsum.photos/seed/bambu2/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama de dos plazas", "Desayuno para dos", "Ventilador", "No cuenta con TV"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for two", "Fan", "No TV"]
        }
    },
    {
        id: slugify("HABITACIÓN BAMBÚ 3"),
        name: { es: "HABITACIÓN BAMBÚ 3", en: "BAMBU ROOM 3" },
        image: 'https://picsum.photos/seed/bambu3/400/300',
        features: {
            es: ["Capacidad para 5 personas", "Vista al Parque Nacional Tingo María", "5 Camas de 1 1/2 plazas", "Desayuno para 5", "Ventilador", "Terraza acondicionada", "Baño propio"],
            en: ["Capacity for 5 people", "View of Tingo María National Park", "5 Twin beds", "Breakfast for 5", "Fan", "Furnished terrace", "Private bathroom"]
        }
    },
    {
        id: slugify("HABITACIÓN CEDRO 1"),
        name: { es: "HABITACIÓN CEDRO 1", en: "CEDRO ROOM 1" },
        image: 'https://picsum.photos/seed/cedro1/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama de 2 plazas", "Desayuno para 2 personas", "Aire acondicionado portátil", "Baño propio", "Primer piso"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for 2 people", "Portable air conditioning", "Private bathroom", "First floor"]
        }
    },
    {
        id: slugify("HABITACIÓN CEDRO 2"),
        name: { es: "HABITACIÓN CEDRO 2", en: "CEDRO ROOM 2" },
        image: 'https://picsum.photos/seed/cedro2/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama de 2 plazas", "Desayuno para dos", "Baño propio", "Ventilador", "Pequeña terraza", "Segundo piso"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for two", "Private bathroom", "Fan", "Small terrace", "Second floor"]
        }
    },
    {
        id: slugify("HABITACIÓN CHARAPITA 1"),
        name: { es: "HABITACIÓN CHARAPITA 1", en: "CHARAPITA ROOM 1" },
        image: 'https://picsum.photos/seed/charapita1/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama de dos plazas", "Desayuno para 2", "Ventilador", "1 Frigobar", "Terraza privada", "Baño propio con tina", "Amenities de baño", "No cuenta com TV"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for 2", "Fan", "1 Minibar", "Private terrace", "Private bathroom with tub", "Bath amenities", "No TV"]
        }
    },
    {
        id: slugify("HABITACIÓN CHARAPITA 2"),
        name: { es: "HABITACIÓN CHARAPITA 2", en: "CHARAPITA ROOM 2" },
        image: 'https://picsum.photos/seed/charapita2/400/300',
        features: {
            es: ["Capacidad para 5 personas", "1 cama de 2 plazas", "1 camarote (2plz y 1 1/2)", "Desayuno para 5 personas", "Ventilador", "Baño propio", "1 Frigobar", "Amenities de baño", "No cuenta con TV"],
            en: ["Capacity for 5 people", "1 full-size bed", "1 bunk bed (full and twin)", "Breakfast for 5 people", "Fan", "Private bathroom", "1 Minibar", "Bath amenities", "No TV"]
        }
    },
    {
        id: slugify("HABITACIÓN SHINBILLO 1"),
        name: { es: "HABITACIÓN SHINBILLO 1", en: "SHINBILLO ROOM 1" },
        image: 'https://picsum.photos/seed/shinbillo1/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama de dos plazas", "Desayuno para 2", "Ventilador", "Baño propio", "Amenities de baño", "No conta com TV"],
            en: ["Capacity for 2 people", "Full-size bed", "Breakfast for 2", "Fan", "Private bathroom", "Bath amenities", "No TV"]
        }
    },
    {
        id: slugify("HABITACIÓN SHINBILLO 2"),
        name: { es: "HABITACIÓN SHINBILLO 2", en: "SHINBILLO ROOM 2" },
        image: 'https://picsum.photos/seed/shinbillo2/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama Queen", "Desayuno para 2", "Ventilador", "1 Frigobar", "Terraza privada", "Baño propio con tina", "Amenities de baño", "No cuenta com TV"],
            en: ["Capacity for 2 people", "Queen Bed", "Breakfast for 2", "Fan", "1 Minibar", "Private terrace", "Private bathroom with tub", "Bath amenities", "No TV"]
        }
    },
    {
        id: slugify("HABITACIÓN SHINBILLO 3"),
        name: { es: "HABITACIÓN SHINBILLO 3", en: "SHINBILLO ROOM 3" },
        image: 'https://picsum.photos/seed/shinbillo3/400/300',
        features: {
            es: ["Capacidad para 2 personas", "Cama queen", "Desayuno para 2", "Ventilador", "1 Frigobar", "Terraza privada", "Baño propio", "No cuenta con TV", "Tercer piso"],
            en: ["Capacity for 2 people", "Queen bed", "Breakfast for 2", "Fan", "1 Minibar", "Private terrace", "Private bathroom", "No TV", "Third floor"]
        }
    },
];

export const bungalowActivities: ServiceItem[] = [
    { 
        id: slugify("RESTAURANTE"), 
        name: { es: 'RESTAURANTE', en: 'RESTAURANT' }, 
        image: 'https://picsum.photos/seed/restaurante/400/300',
        description: {
            es: "Atrévete a disfrutar de la mejor comida de la selva junto con los deliciosos cocteles y bebidas típicas de la Amazonía.",
            en: "Dare to enjoy the best food of the jungle along with delicious cocktails and typical Amazonian drinks."
        }
    },
    { 
        id: slugify("PISCINA Y BAR"), 
        name: { es: 'PISCINA Y BAR', en: 'POOL & BAR' }, 
        image: 'https://picsum.photos/seed/piscina/400/300',
        description: {
            es: "Hermosa piscina con pared de cristal para fotos increíbles y un bar para refrescarte.",
            en: "Beautiful pool with a glass wall for incredible photos and a bar to cool off."
        }
    },
    { 
        id: slugify("ZONA DE JUEGOS"), 
        name: { es: 'ZONA DE JUEGOS', en: 'PLAYGROUND' }, 
        image: 'https://picsum.photos/seed/juegos/400/300',
        description: {
            es: "Un espacio para compartir momentos memorables con toda la familia. Solicita los juegos en recepción.",
            en: "A space to share memorable moments with the whole family. Request games at the reception."
        }
    },
    { 
        id: slugify("CAMINATA AL CERRO RUNA MACHU"), 
        name: { es: 'CAMINATA AL CERRO RUNA MACHU', en: 'HIKE TO RUNA MACHU HILL' }, 
        image: 'https://picsum.photos/seed/caminata/400/300',
        description: {
            es: "Los fines de semana, únete a nuestras caminatas gratuitas y exclusivas para huéspedes para conectar con la naturaleza.",
            en: "On weekends, join our free and exclusive hikes for guests to connect with nature."
        }
    },
    { 
        id: slugify("NOCHES DE FOGATAS"), 
        name: { es: 'NOCHES DE FOGATAS', en: 'BONFIRE NIGHTS' }, 
        image: 'https://picsum.photos/seed/fogata/400/300',
        description: {
            es: "Disfruta de cuentos de la selva, malvaviscos y música alrededor de nuestras fogatas los fines de semana.",
            en: "Enjoy jungle stories, marshmallows, and music around our bonfires on weekends."
        }
    },
];

export const allBungalowServices: ServiceItem[] = [
    ...bungalows.map(b => ({ id: b.id, name: b.name, image: b.image })),
    ...bungalowActivities,
];

export const bookableHotelServices: ServiceItem[] = hotelRooms.map(room => ({
    id: room.id,
    name: room.name,
    image: room.image,
}));

export const bookableBungalowServices: ServiceItem[] = bungalows.map(b => ({
    id: b.id,
    name: b.name,
    image: b.image,
}));

export const getGroupedFooterLinks = (items: Array<{ id: string; name: { es: string; en: string } }>): NavItem[] => {
    const uniqueNames = new Map<string, NavItem>();

    items.forEach(item => {
        // Chain replacements to simplify names
        const baseNameEs = item.name.es
            .replace(/\s+-\s+\d+\s+Personas?/i, '') // For "Doble Simple - 2 Personas"
            .replace(/\s+\d+$/, '')                 // For "HABITACIÓN CIPRÉS 1"
            .trim();
        const baseNameEn = item.name.en
            .replace(/\s+-\s+\d+\s+People/i, '')    // For "Simple Double - 2 People"
            .replace(/\s+\d+$/, '')                 // For "CIPRES ROOM 1"
            .trim();

        if (!uniqueNames.has(baseNameEs)) {
            uniqueNames.set(baseNameEs, {
                id: item.id, // Use the ID of the first item in the group for the anchor link
                es: baseNameEs,
                en: baseNameEn,
                href: `#${item.id}`
            });
        }
    });
    return Array.from(uniqueNames.values());
};

export const groupedHotelLinks = getGroupedFooterLinks(hotelRooms);
export const groupedBungalowLinks = getGroupedFooterLinks(allBungalowServices);

export const translations = {
    es: {
        logo: 'Green Paradise',
        heroTitle: 'Green Paradise Hotel &\nBungalows: Tu Refugio\nen Tingo María',
        heroSubtitle: 'Vive la magia de la selva con el máximo\nconfort. Tu aventura en la naturaleza\nte espera.',
        heroButtonViewAllHotel: 'VER LOS SERVICIOS DE HOTEL',
        heroButtonViewAllBungalow: 'VER LOS SERVICIOS DE BUNGALOWS',
        bookingTitle: 'Consulta tu Reserva',
        checkIn: 'Llegada',
        checkOut: 'Salida',
        bookingButton: 'Solicitar Reserva',
        modalTitle: 'Solicitud de Reserva',
        venue: 'Sede',
        venueHotel: 'Green Paradise Hotel',
        venueBungalow: 'Green Paradise Bungalows',
        selectRooms: 'Selecciona Habitaciones/Cabañas',
        noOptions: 'Por favor, selecciona una sede primero.',
        fullName: 'Nombre Completo',
        phone: 'Teléfono',
        submitBooking: 'Enviar Solicitud por WhatsApp',
        close: 'Cerrar',
        aboutTitle: 'Sobre Nosotros',
        aboutText: 'En Green Paradise, te invitamos a sumergirte en un oasis de tranquilidad y belleza natural. Nuestro hotel y bungalows están diseñados para ofrecerte una experiencia inolvidable, combinando confort y aventura en el corazón de un paisaje exuberante. Somos tu escape perfecto de la rutina diaria.',
        hotelServicesTitle: 'Servicios del Hotel',
        bungalowServicesTitle: 'Servicios de los Bungalows',
        bungalowActivitiesTitle: 'Áreas Comunes y Actividades de los Bungalows',
        contactTitle: 'Contáctanos',
        contactHotelAddress: 'Dirección del Hotel',
        contactBungalowAddress: 'Dirección de los Bungalows',
        contactSocials: 'Síguenos',
        footerHotelTitle: 'Hotel',
        footerBungalowsTitle: 'Bungalows',
        footerPolicies: 'Políticas',
        footerPoliciesHotel: 'Políticas del Hotel',
        footerPoliciesBungalows: 'Políticas de los Bungalows',
        policiesTitle: 'Políticas de Green Paradise',
        policiesHotelTitle: 'GREEN PARADISE HOTEL',
        policiesHotelText: `En nombre de Green Paradise Hotel, nos complace ofrecerle una cordial bienvenida a la ciudad de Tingo María. Estamos encantados de tenerlo como huésped y deseamos que disfrute de una estadía placentera y relajante en nuestras instalaciones.
Este documento establece las normas de conducta para todos los huéspedes con el objetivo de asegurar una experiencia confortable y respetuosa. Estas normas se aplican sin distinción de raza, religión, país de origen, idioma o creencias.

Horarios
•	Check in : 13:00 hrs
•	Check out: 12:00 hrs
•	Desayuno: 7:00 am - 10 am

Reservas y Pagos
•	Todas las reservas deben ser pagadas al 50% previo a la llegada para confirmar la reserva.
•	El pago total de la estadía se realizará al momento del check-in.
•	Para mayor información sobre los precios, comunícate con el anfitrión de turno que estamos seguros de que sabrá brindarle toda la ayuda y apoyo necesario para tu grata estadía.

Cancelaciones y/o modificaciones
•	Cambios en la Reserva: Los cambios dentro de una reserva se pueden realizar, siempre y cuando haya disponibilidad. En caso de ser así, se debe abonar la diferencia de tarifa antes del ingreso para efectuar el cambio.
•	Extensión de noches: Se permite la extensión de noches en la reserva, la tarifa correspondiente a la extensión debe ser abonada con anticipación.
•	Aceptación de Políticas: Al realizar el pago de la reserva, el cliente acepta automáticamente todas las políticas de la propiedad.
•	Política de Reembolso: No se realizarán reembolsos por cancelaciones ni por cambios de fecha que se efectúen fuera del periodo de gracia. No se ofrecerán reembolsos por salidas anticipadas si las razones son externas a Green Paradise Hotel.
•	Los cambios y cancelaciones deberán ser informados antes de las 72 hrs previa a su llegada.

Interacción en Redes Sociales
Se anima a los huéspedes a compartir sus fotografías en redes sociales y etiquetar nuestras cuentas @greenparadise.bungalows y @greenparadise.hotel, usando los hashtags #GreenParadisebungalowsTM y #GreenParadisehotelTM

Check-in y Check-out
•	El horario de check-in es a partir de las 1:00 PM.
•	El horario de check-out es a las 12:00 PM.
•	El early check-in y el late check-out están sujetos a disponibilidad y pueden tener un costo adicional. Por favor, consulte con recepción para más información.

Huéspedes y Visitantes
•	Solo las personas registradas en la recepción al momento del check-in pueden alojarse en las habitaciones.
•	A partir de 5 años son considerados huéspedes, el hotel tiene una política de tarifa por personas y cama adicional
•	Por razones de seguridad, el acceso a las instalaciones de Green Paradise Hotel está restringido a los huéspedes e invitados registrados.
•	No podrán ingresar al hotel personas diferentes a las registradas o invitados registrados en la recepción.

Normas de Comportamiento
•	Se espera que todos los huéspedes mantengan un comportamiento respetuoso hacia otros huéspedes y el personal de Green Paradise Hotel.
•	El hotel se reserva el derecho de pedir a cualquier huésped que incumpla las normas que abandone las instalaciones sin derecho a reembolso.
•	Cada cliente es responsable por los daños y perjuicios que ocasione a sí mismo, a otros huéspedes, a trabajadores o a equipamiento e infraestructura del hotel, quedando obligado al pago o indemnización correspondiente.
•	Queda estrictamente prohibido usar artefactos de alto consumo eléctrico distintos de los instalados en la habitación.
•	Queda estrictamente prohibido sacar de las habitaciones y de los espacios comunes cualquier mobiliario o elemento al exterior de estas.
•	Queda estrictamente prohibido hacer ruidos molestos, realizar altercados y en general cualquier acto que perturben o incomoden a los demás huéspedes.
•	Queda estrictamente prohibido usar instrumentos, buffers o parlantes dentro y fuera de la habitación.
•	De acuerdo con lo establecido en la Ley Nº20.660 queda estrictamente prohibido fumar dentro de las habitaciones y espacios cerrados dentro del hotel.
•	Queda estrictamente prohibido el consumo de sustancias no permitidas.
•	Queda estrictamente prohibido portar armas de cualquier tipo.
•	Está estrictamente prohibido el ingreso de alimentos a la habitación.

Comportamiento en Comunicaciones
•	Está prohibido realizar comentarios ofensivos, denigratorios o insultantes contra otros huéspedes o trabajadores del establecimiento. No se permitirán acciones que dañen la imagen institucional de la empresa. El incumplimiento de estas normas puede resultar en acciones legales y la anulación de la reserva en curso.

Uso de Espacios Comunes
•	Está prohibido colgar ropa en los decks, ventanas exteriores o en áreas comunes.

Política de No Discriminación
•	Green Paradise Bungalows se compromete a no discriminar por motivos de sexo, credo político, religión, nacionalidad o condición social en la prestación de sus servicios.

Servicio de lavandería
•	Solicítalo en recepción, indicando cantidad de prendas y cuidados especiales. Consulta tarifa por kilo.

Objetos de valor y equipaje
•	No contamos con caja fuerte. Consulta en recepción si deseas resguardo o usar nuestro guarda equipaje (bajo responsabilidad del huésped).

Daños y Pérdidas
•	El huésped es responsable de cualquier daño o pérdida de los bienes del Green Paradise Hotel, incluyendo mobiliario, equipamiento e infraestructura, causados por él o por sus acompañantes.
•	El costo de reparación o reemplazo de los daños se cargará a la cuenta del huésped.
•	Green Paradise Hotel no se hace responsable por la pérdida, robo o daño de artículos de valor dejados en las habitaciones. Se recomienda avisar a recepción sobre los artículos de valor para mayor seguridad.
•	El cliente deberá reportar sus artículos de valor, la administración no se hace responsable por la pérdida.

Uso de Instalaciones y Áreas Comunes
•	Los menores de edad deben estar siempre bajo la supervisión de un adulto en todas las áreas públicas.

Mascotas
•	No se permiten mascotas en Green Paradise Hotel
•	Queda estrictamente prohibido ingresar animales a la propiedad.

Fumar
•	Fumar está estrictamente prohibido en todas las áreas interiores de Green Paradise Hotel, incluyendo habitaciones, restaurantes y piscina. Se han designado áreas específicas para fumadores.
•	En caso de infracción de la prohibición de fumar, se aplicará una multa de 350 soles .

Políticas de venta de alcohol
•	Se negará amablemente la venta de alcohol si se el personal de atención y bar identifican que el huésped se encuentra visiblemente intoxicado por el consumo de alcohol. Sin embargo, podrá seguir disfrutando de bebidas no alcohólicas. Al implementar estas medidas, se busca crear un ambiente más seguro y responsable, protegiendo tanto a los huéspedes de posibles accidentes, caídas a la piscina, eventos peligrosos tanto para el huésped como al personal encargado. Así mismo, La empresa Green Paradise Hotel no se responsabilizan por accidentes ocurridos durante la estancia de los huéspedes.

Horario de servicio de limpieza
•	El servicio de limpieza de habitaciones estará disponible durante la mañana y parte de la tarde hasta de las 13:00. Si quieres el huésped permanece por varios días, deberá entregar su llave a recepción durante el horario mencionado para realizar la limpieza, de lo contrario como “no requiere limpieza”.

Reglas de Check Out
•	El huésped deberá esperar unos minutos para confirmar que la habitación se encuentra en el estado que se entregó, agradecemos su amable disposición.
•	Todo cliente debe dejar en la recepción las llaves y control de aire acondicionado de su habitación al momento de realizar el check out o salida.
•	La pérdida o controles de las habitaciones por parte del huésped se recargará automáticamente en su cuenta.
•	Todos los daños ocasionados en la habitación se cargan automáticamente a su cuenta.
•	Durante el proceso de check out el huésped deberá esperar la confirmación de que la habitación se entregó en las mismas condiciones que recibidas.

Daños a la propiedad mueble:
•	Los muebles dañados por los huéspedes deberán ser repuestos o cubiertos por los mismos, según el artículo Artículo 205 a 207 del Código Penal del Perú: “El que daña, destruye o inutiliza un bien, mueble o inmueble, total o parcialmente ajeno, será reprimido con pena privativa de libertad no mayor de tres años y con treinta a sesenta días-multa.”
•	2 plazas, queen 1 plaza y media
•	Sábanas: S/100.00 - Lavado: S/20.00
•	Edredones: S/200.00 - Lavado: S/ 30.00
•	Protectores de colchón: S/200.00
•	Toallas
•	Almohadas
•	Protectores de almohadas: 50.00
•	Vidrios de ventanas 299.00
•	Mamparas 2000.00
•	Colchón: lavado s/280.00
•	Colchón: 1800.00
•	Control de AC:S/100.00
•	Llaves: S/20.00
•	Llavero de plático:S/10.00
•	Frigobar: 500.00
•	Espejos:100
•	Tachos de basura sanitaria:50.00
•	Vasos: 20.00
•	Copa:20.00
•	Puerta de ducha: 600
•	Televisor: 1700.00
•	Cafetera: 150.00
•	Cortinas 1000.00`,
        policiesBungalowsTitle: 'GREEN PARADISE BUNGALOWS',
        policiesBungalowsText: `En nombre Green Paradise Bungalows, nos complace ofrecerle una cordial bienvenida, estamos encantados de tenerlo como huésped y deseamos que disfrute de una estadía placentera y relajante en nuestras instalaciones.
Este documento establece las normas de conducta para todos los huéspedes con el objetivo de asegurar una experiencia confortable y respetuosa. Estas normas se aplican sin distinción de raza, religión, país de origen, idioma o creencias.

Horarios
•	Check in: 14:00 hrs
•	Check out: 12:00 hrs
•	Desayuno: 8:30 am - 10 am
•	Piscina 10 am - 10 pm
•	Bar: 10 am - 10 pm
•	Restaurante: 8:30 am - 8 pm

Reservas y Pagos
•	Todas las reservas deben ser pagadas al 50% previo a la llegada para confirmar la reserva.
•	El pago total de la estadía se realizará al momento del check-in.
•	Para mayor información sobre los precios, comunícate con el anfitrión de turno que estamos seguros de que sabrá brindarle toda la ayuda y apoyo necesario para tu grata estadía.

Cancelaciones y/o modificaciones
•	Cambios en la Reserva: Los cambios dentro de una reserva se pueden realizar, siempre y cuando haya disponibilidad. En caso de ser así, se debe abonar la diferencia de tarifa antes del ingreso para efectuar el cambio.
•	Extensión de noches: Se permite la extensión de noches en la reserva, la tarifa correspondiente a la extensión debe ser abonada con anticipación.
•	Aceptación de Políticas: Al realizar el pago de la reserva, el cliente acepta automáticamente todas las políticas de la propiedad.
•	Política de Reembolso: No se realizarán reembolsos por cancelaciones ni por cambios de fecha que se efectúen fuera del periodo de gracia. No se ofrecerán reembolsos por salidas anticipadas si las razones son externas a Green Paradise Bungalows.
•	Los cambios y cancelaciones deberán ser informados antes de las 72 hrs previa a su llegada.

Interacción en Redes Sociales
Se anima a los huéspedes a compartir sus fotografías en redes sociales y etiquetar nuestras cuentas @greenparadise.bungalows y @greenparadise.hotel, usando los hashtags #GreenParadisebungalowsTM y #GreenParadisehotelTM

Check-in y Check-out
•	El horario de check-in es a partir de las 2:00 PM.
•	El horario de check-out es a las 12:00 PM.
•	El early check-in y el late check-out están sujetos a disponibilidad y pueden tener un costo adicional. Por favor, consulte con recepción para más información.

Huéspedes y Visitantes
•	Solo las personas registradas en la recepción al momento del check-in pueden alojarse en las habitaciones.
•	A partir de 5 años son considerados huéspedes, el hotel tiene una política de tarifa por personas y cama adicional
•	Por razones de seguridad, el acceso a las instalaciones de Green Paradise Bungalows está restringido a los huéspedes e invitados registrados.
•	No podrán ingresar al hotel personas diferentes a las registradas o invitados registrados en la recepción.

Normas de Comportamiento
•	Se espera que todos los huéspedes mantengan un comportamiento respetuoso hacia otros huéspedes y el personal de Green Paradise Bungalows.
•	El resort se reserva el derecho de pedir a cualquier huésped que incumpla las normas que abandone las instalaciones sin derecho a reembolso.
•	Cada cliente es responsable por los daños y perjuicios que ocasione a sí mismo, a otros huéspedes, a trabajadores o a equipamiento e infraestructura del hotel, quedando obligado al pago o indemnización correspondiente.
•	Queda estrictamente prohibido cortar árboles, arbustos, ramas y/o flores
•	Queda estrictamente prohibido botar basura, lavar vehículos y hacer fogatas no autorizadas.
•	Queda estrictamente prohibido estacionar en lugares no asignado y transitar a más de 20 Km/h.
•	Queda estrictamente prohibido usar artefactos de alto consumo eléctrico distintos de los instalados en la habitación.
•	Queda estrictamente prohibido sacar de las habitaciones y de los espacios comunes cualquier mobiliario o elemento al exterior de estas.
•	No está permitido utilizar las toallas de las habitaciones en la piscina.
•	Queda estrictamente prohibido hacer ruidos molestos, realizar altercados y en general cualquier acto que perturben o incomoden a los demás huéspedes.
•	Queda estrictamente prohibido usar instrumentos, buffers o parlantes dentro y fuera de la habitación.
•	Está estrictamente prohibido el ingreso de alimentos y bebidas al establecimiento que no hayan sido adquiridos en la propiedad.
•	De acuerdo con lo establecido en la Ley N°20.660 queda estrictamente prohibido fumar dentro de las habitaciones y espacios cerrados dentro del hotel.
•	Queda estrictamente prohibido el consumo de sustancias no permitidas.
•	Queda estrictamente prohibido portar armas de cualquier tipo.
•	Está estrictamente prohibido el ingreso de alimentos a la habitación.
•	Para el ingreso a piscina es obligatorio el uso de traje de baño.

Fotografía y Privacidad
•	Los huéspedes pueden tomar fotos y videos en las áreas comunes, siempre con respeto y sin fines comerciales. Está prohibido utilizar estas imágenes para promover negocios similares o que puedan dañar la imagen de la empresa. Green Paradise Bungalows se reserva el derecho de solicitar la eliminación de cualquier contenido inapropiado que incluya actos irrespetuosos como capturar imágenes de otros huéspedes sin su consentimiento.

Comportamiento en Comunicaciones
•	Está prohibido realizar comentarios ofensivos, denigratorios o insultantes contra otros huéspedes o trabajadores del establecimiento. No se permitirán acciones que dañen la imagen institucional de la empresa. El incumplimiento de estas normas puede resultar en acciones legales y la anulación de la reserva en curso.

Uso de Espacios Comunes
•	Está prohibido colgar ropa en los decks, ventanas exteriores o en áreas comunes. Se proporciona un espacio específico dentro de la habitación y/o en la propiedad para colgar la ropa.

Política de No Discriminación
•	Green Paradise Bungalows se compromete a no discriminar por motivos de sexo, credo político, religión, nacionalidad o condición social en la prestación de sus servicios.

Servicio de lavandería
•	Solicítalo en recepción, indicando cantidad de prendas y cuidados especiales. Consulta tarifa por kilo.

Visitantes
•	Solo se permiten visitas en áreas comunes hasta las 6:00 p. m. No está permitido el ingreso de personas externas a las habitaciones.

Objetos de valor y equipaje
•	No contamos con caja fuerte. Consulta en recepción si deseas resguardo o usar nuestro guarda equipaje (bajo responsabilidad del huésped).

Daños y Pérdidas
•	El huésped es responsable de cualquier daño o pérdida de los bienes del Green Paradise Bungalows, incluyendo mobiliario, equipamiento e infraestructura, causados por él o por sus acompañantes.
•	El costo de reparación o reemplazo de los daños se cargará a la cuenta del huésped.
•	Green Paradise Bungalows no se hace responsable por la pérdida, robo o daño de artículos de valor dejados en las habitaciones. Se recomienda avisar a recepción sobre los artículos de valor para mayor seguridad.
•	El cliente deberá reportar sus artículos de valor, la administración no se hace responsable por la pérdida.

Uso de Instalaciones y Áreas Comunes
•	Los huéspedes deben respetar las normas de uso de las piscinas y otras áreas comunes, las cuales se encuentran publicadas en cada zona.
•	Se prohíbe el uso de toallas de las habitaciones en la piscina. Las toallas para la piscina pueden solicitar en la recepción, dejando un documento de identificación como garantía.
•	Los menores de edad deben estar siempre bajo la supervisión de un adulto en todas las áreas públicas.

Mascotas
•	No se permiten mascotas en Green Paradise Bungalows,
•	Queda estrictamente prohibido ingresar animales a la propiedad.

Fumar
•	Fumar está estrictamente prohibido en todas las áreas interiores de Green Paradise Bungalows, incluyendo habitaciones, restaurantes y piscina. Se han designado áreas específicas para fumadores.
•	En caso de infracción de la prohibición de fumar, se aplicará una multa de 350 soles .

Políticas de venta de alcohol
•	No se permite el ingreso de bebidas alcohólicas externas. Si deseas consumir una bebida que trajiste, puedes hacerlo pagando un descorche de S/ 30.00 por botella. Consulta en recepción.
Se negará amablemente la venta de alcohol si se el personal de atención y bar identifican que el huésped se encuentra visiblemente intoxicado por el consumo de alcohol. Sin embargo, podrá seguir disfrutando de bebidas no alcohólicas
Al implementar estas medidas, se busca crear un ambiente más seguro y responsable, protegiendo tanto a los huéspedes de posibles accidentes, caídas a la piscina, eventos peligrosos tanto para el huésped como al personal encargado. Así mismo, La empresa Green Paradise Bungalows no se responsabilizan por accidentes ocorridos durante la estancia de los huéspedes.

Horario de servicio de limpieza
•	El servicio de limpieza de habitaciones estará disponible durante la mañana y parte de la tarde hasta de las 14:00. Si quieres el huésped permanece por varios días, deberá entregar su llave a recepción durante el horario mencionado para realizar la limpieza, de lo contrario como “no requiere limpieza”.

Reglas de Check Out
•	El huésped deberá esperar unos minutos para confirmar que la habitación se encuentra en el estado que se entregó, agradecemos su amable disposición.
•	Todo cliente debe dejar en la recepción las llaves y control de aire acondicionado de su habitación al momento de realizar el check out o salida.
•	La pérdida o controles de las habitaciones por parte del huésped se recargará automáticamente en su cuenta.
•	Todos los daños ocasionados en la habitación se cargan automáticamente a su cuenta.
•	Durante el proceso de check out el huésped deberá esperar la confirmación de que la habitación se entregó en las mismas condiciones que recibidas.

Piscina:
•	Horario de Uso: Las piscinas privadas están disponibles del 10 am a 10 pm del día, excepto durante los periodos de mantenimiento.
•	El ingreso a la piscina debe ser con ropa de baño apropiada. Está prohibido entrar con zapatos, sandalias o cualquier calzado que pueda contaminar el agua.
•	No se permite el acceso a la piscina a personas en estado de ebriedad o bajo los efectos de otras sustancias.
•	Está prohibido consumir bebidas alcohólicas, bebidas no alcohólicas y alimentos fuera de la barra de la piscina.
•	Supervisión Infantil: Niños menores de 10 años deben estar acompañados por un adulto en todo momento dentro de la piscina.
•	Responsabilidad: La empresa Green Paradise Bungalows no se responsabilizan por accidentes o daños ocurridos en la piscina durante la estancia de los huéspedes

Daños a la propiedad mueble:
•	Los muebles dañados por los huéspedes deberán ser repuestos o cubiertos por los mismos, según el artículo Artículo 205 a 207 del Código Penal del Perú: “El que daña, destruye o inutiliza un bien, mueble o inmueble, total o parcialmente ajeno, será reprimido con pena privativa de libertad no mayor de tres años y con treinta a sesenta días-multa.”
•	2 plazas, queen 1 plaza y media
•	Sábanas: S/100.00 - Lavado: S/20.00
•	Edredones: S/200.00 - Lavado: S/ 30.00
•	Protectores de colchón: S/200.00
•	Toallas
•	Almohadas
•	Protectores de almohadas: 50.00
•	Vidrios de ventanas 299.00
•	Mamparas 2000.00
•	Colchón: lavado s/280.00
•	Colchón: 1800.00
•	Control de AC:S/100.00
•	Llaves: S/20.00
•	Llavero de madera:S/50.00
•	Llavero de plático:S/10.00
•	Frigobar: 500.00
•	Espejos:100
•	Tachos de basura sanitaria:50.00
•	Vasos: 20.00
•	Copa:20.00
•	Puerta de ducha: 600
•	Cafetera: 150.00
•	Cortinas 1000.00`,
        nav_contacto: 'Contacto',
        whatsappHotelNumber: '51979309553',
        whatsappBungalowNumber: '51960195080',
        whatsappHotelLabel: 'WhatsApp de Hotel',
        whatsappBungalowLabel: 'WhatsApp de Bungalows',
    },
    en: {
        logo: 'Green Paradise',
        heroTitle: 'Green Paradise Hotel &\nBungalows: Your Refuge\nin Tingo María',
        heroSubtitle: 'Experience the magic of the jungle with maximum\ncomfort. Your adventure in nature\nawaits.',
        heroButtonViewAllHotel: 'VIEW HOTEL SERVICES',
        heroButtonViewAllBungalow: 'VIEW BUNGALOWS SERVICES',
        bookingTitle: 'Check Your Reservation',
        checkIn: 'Check-in',
        checkOut: 'Check-out',
        bookingButton: 'Request Booking',
        modalTitle: 'Booking Request',
        venue: 'Venue',
        venueHotel: 'Green Paradise Hotel',
        venueBungalow: 'Green Paradise Bungalows',
        selectRooms: 'Select Rooms/Cabins',
        noOptions: 'Please select a venue first.',
        fullName: 'Full Name',
        phone: 'Phone',
        submitBooking: 'Send Request via WhatsApp',
        close: 'Close',
        aboutTitle: 'About Us',
        aboutText: 'At Green Paradise, we invite you to immerse yourself in an oasis of tranquility and natural beauty. Our hotel and bungalows are designed to offer you an unforgettable experience, combining comfort and adventure in the heart of a lush landscape. We are your perfect escape from the daily routine.',
        hotelServicesTitle: 'Hotel Services',
        bungalowServicesTitle: 'Bungalow Services',
        bungalowActivitiesTitle: 'Bungalow Common Areas & Activities',
        contactTitle: 'Contact Us',
        contactHotelAddress: 'Hotel Address',
        contactBungalowAddress: 'Bungalows Address',
        contactSocials: 'Follow Us',
        footerHotelTitle: 'Hotel',
        footerBungalowsTitle: 'Bungalows',
        footerPolicies: 'Policies',
        footerPoliciesHotel: 'Hotel Policies',
        footerPoliciesBungalows: 'Bungalows Policies',
        policiesTitle: 'Green Paradise Policies',
        policiesHotelTitle: 'GREEN PARADISE HOTEL POLICIES',
        policiesHotelText: `On behalf of Green Paradise Hotel, we are pleased to extend a warm welcome to the city of Tingo María. We are delighted to have you as our guest and wish you a pleasant and relaxing stay at our facilities.
This document establishes the code of conduct for all guests to ensure a comfortable and respectful experience. These rules apply regardless of race, religion, country of origin, language, or beliefs.

Schedules
•	Check-in: 1:00 PM
•	Check-out: 12:00 PM
•	Breakfast: 7:00 AM - 10:00 AM

Reservations and Payments
•	All reservations must be paid 50% prior to arrival to confirm the reservation.
•	The total payment for the stay will be made at check-in.
•	For more information on prices, please contact the host on duty. We are confident they will provide all the help and support needed for a pleasant stay.

Cancellations and/or Modifications
•	Changes to Reservation: Changes within a reservation can be made, subject to availability. If so, the rate difference must be paid before arrival to effect the change.
•	Extension of Nights: Extending nights in a reservation is allowed; the corresponding fee for the extension must be paid in advance.
•	Acceptance of Policies: By making the reservation payment, the client automatically accepts all property policies.
•	Refund Policy: No refunds will be issued for cancellations or date changes made outside the grace period. No refunds will be offered for early departures for reasons external to Green Paradise Hotel.
•	Changes and cancellations must be reported at least 72 hours prior to your arrival.

Social Media Interaction
Guests are encouraged to share their photos on social media and tag our accounts @greenparadise.bungalows and @greenparadise.hotel, using the hashtags #GreenParadisebungalowsTM and #GreenParadisehotelTM

Check-in and Check-out
•	Check-in time is from 1:00 PM.
•	Check-out time is at 12:00 PM.
•	Early check-in and late check-out are subject to availability and may incur an additional cost. Please check with reception for more information.

Guests and Visitors
•	Only persons registered at the reception at check-in may stay in the rooms.
•	Children aged 5 and over are considered guests; the hotel has a policy of charging per person and for additional beds.
•	For security reasons, access to Green Paradise Hotel facilities is restricted to registered guests and invitees.
•	Persons other than those registered or guests registered at reception will not be allowed to enter the hotel.

Rules of Conduct
•	All guests are expected to maintain respectful behavior towards other guests and the staff of Green Paradise Hotel.
•	The hotel reserves the right to ask any guest who violates the rules to leave the premises without a refund.
•	Each client is responsible for any damages they cause to themselves, other guests, staff, or hotel equipment and infrastructure, being obliged to pay the corresponding compensation.
•	The use of high-consumption electrical appliances other than those installed in the room is strictly prohibited.
•	It is strictly forbidden to remove any furniture or items from the rooms and common areas to the outside.
•	Making disruptive noises, causing disturbances, and any act that disturbs or inconveniences other guests is strictly prohibited.
•	The use of instruments, speakers, or sound systems inside and outside the room is strictly prohibited.
•	In accordance with Law No. 20.660, smoking is strictly prohibited inside the rooms and enclosed spaces within the hotel.
•	The consumption of illicit substances is strictly prohibited.
•	Carrying weapons of any kind is strictly prohibited.
•	Bringing food into the room is strictly prohibited.

Communication Behavior
•	Making offensive, derogatory, or insulting comments against other guests or staff is prohibited. Actions that damage the institutional image of the company will not be tolerated. Failure to comply with these rules may result in legal action and the cancellation of the current reservation.

Use of Common Areas
•	Hanging clothes on decks, exterior windows, or in common areas is prohibited.

Non-Discrimination Policy
•	Green Paradise Hotel is committed to not discriminating based on sex, political creed, religion, nationality, or social status in the provision of its services.

Laundry Service
•	Request it at reception, indicating the number of garments and any special care. Check the rate per kilo.

Valuables and Luggage
•	We do not have a safe. Please check with reception if you wish to secure items or use our luggage storage (at the guest's own risk).

Damages and Losses
•	The guest is responsible for any damage to or loss of Green Paradise Hotel property, including furniture, equipment, and infrastructure, caused by them or their companions.
•	The cost of repair or replacement will be charged to the guest's account.
•	Green Paradise Hotel is not responsible for the loss, theft, or damage of valuables left in the rooms. It is recommended to inform reception about valuable items for greater security.
•	The client must report their valuables; the administration is not responsible for their loss.

Use of Facilities and Common Areas
•	Minors must be supervised by an adult at all times in all public areas.

Pets
•	Pets are not allowed at Green Paradise Hotel.
•	Bringing animals onto the property is strictly prohibited.

Smoking
•	Smoking is strictly prohibited in all indoor areas of Green Paradise Hotel, including rooms, restaurants, and the pool area. Designated smoking areas have been provided.
•	A fine of 350 soles will be applied for violating the smoking ban.

Alcohol Sales Policy
•	The sale of alcohol will be kindly refused if the service and bar staff identify that a guest is visibly intoxicated. However, they may continue to enjoy non-alcoholic beverages. By implementing these measures, we aim to create a safer and more responsible environment, protecting both guests from potential accidents, falls into the pool, and dangerous events for both the guest and the staff. Furthermore, Green Paradise Hotel is not responsible for accidents that occur during the guests' stay.

Housekeeping Service Hours
•	Room cleaning service is available in the morning and early afternoon until 1:00 PM. If a guest is staying for several days, they must leave their key at reception during the mentioned hours for cleaning to be done. Otherwise, it will be considered as "no cleaning required".

Check-Out Rules
•	The guest must wait a few minutes to confirm that the room is in the same condition as it was delivered. We appreciate your kind cooperation.
•	All clients must leave their room keys and air conditioning remote control at the reception upon check-out.
•	The loss of room keys or remotes by the guest will be automatically charged to their account.
•	All damages caused in the room will be automatically charged to your account.
•	During the check-out process, the guest must wait for confirmation that the room has been returned in the same condition as received.

Damage to Movable Property:
•	Furniture damaged by guests must be replaced or paid for by them, according to Articles 205 to 207 of the Peruvian Penal Code: "Whoever damages, destroys, or renders useless a movable or immovable property, totally or partially belonging to another, will be punished with a prison sentence of no more than three years and with thirty to sixty days-fine."
•	Full, queen, twin beds
•	Sheets: S/100.00 - Washing: S/20.00
•	Duvets: S/200.00 - Washing: S/30.00
•	Mattress protectors: S/200.00
•	Towels
•	Pillows
•	Pillow protectors: S/50.00
•	Window glass: S/299.00
•	Glass doors: S/2000.00
•	Mattress: washing S/280.00
•	Mattress: S/1800.00
•	AC remote: S/100.00
•	Keys: S/20.00
•	Plastic keychain: S/10.00
•	Minibar: S/500.00
•	Mirrors: S/100.00
•	Sanitary waste bins: S/50.00
•	Glasses: S/20.00
•	Wine glass: S/20.00
•	Shower door: S/600.00
•	Television: S/1700.00
•	Coffee maker: S/150.00
•	Curtains: S/1000.00`,
        policiesBungalowsTitle: 'GREEN PARADISE BUNGALOWS POLICIES',
        policiesBungalowsText: `On behalf of Green Paradise Bungalows, we are pleased to extend a warm welcome. We are delighted to have you as our guest and wish you a pleasant and relaxing stay at our facilities.
This document establishes the code of conduct for all guests to ensure a comfortable and respectful experience. These rules apply regardless of race, religion, country of origin, language, or beliefs.

Schedules
•	Check-in: 2:00 PM
•	Check-out: 12:00 PM
•	Breakfast: 8:30 AM - 10:00 AM
•	Pool: 10:00 AM - 10:00 PM
•	Bar: 10:00 AM - 10:00 PM
•	Restaurant: 8:30 AM - 8:00 PM

Reservations and Payments
•	All reservations must be paid 50% prior to arrival to confirm the reservation.
•	The total payment for the stay will be made at check-in.
•	For more information on prices, please contact the host on duty. We are confident they will provide all the help and support needed for a pleasant stay.

Cancellations and/or Modifications
•	Changes to Reservation: Changes within a reservation can be made, subject to availability. If so, the rate difference must be paid before arrival to effect the change.
•	Extension of Nights: Extending nights in a reservation is allowed; the corresponding fee for the extension must be paid in advance.
•	Acceptance of Policies: By making the reservation payment, the client automatically accepts all property policies.
•	Refund Policy: No refunds will be issued for cancellations or date changes made outside the grace period. No refunds will be offered for early departures for reasons external to Green Paradise Bungalows.
•	Changes and cancellations must be reported at least 72 hours prior to your arrival.

Social Media Interaction
Guests are encouraged to share their photos on social media and tag our accounts @greenparadise.bungalows and @greenparadise.hotel, using the hashtags #GreenParadisebungalowsTM and #GreenParadisehotelTM

Check-in and Check-out
•	Check-in time is from 2:00 PM.
•	Check-out time is at 12:00 PM.
•	Early check-in and late check-out are subject to availability and may incur an additional cost. Please check with reception for more information.

Guests and Visitors
•	Only persons registered at the reception at check-in may stay in the rooms.
•	Children aged 5 and over are considered guests; the hotel has a policy of charging per person and for additional beds.
•	For security reasons, access to Green Paradise Bungalows facilities is restricted to registered guests and invitees.
•	Persons other than those registered or guests registered at reception will not be allowed to enter the hotel.

Rules of Conduct
•	All guests are expected to maintain respectful behavior towards other guests and the staff of Green Paradise Bungalows.
•	The resort reserves the right to ask any guest who violates the rules to leave the premises without a refund.
•	Each client is responsible for any damages they cause to themselves, other guests, staff, or hotel equipment and infrastructure, being obliged to pay the corresponding compensation.
•	It is strictly forbidden to cut trees, shrubs, branches, and/or flowers.
•	Littering, washing vehicles, and making unauthorized bonfires are strictly prohibited.
•	Parking in non-designated areas and driving over 20 km/h is strictly prohibited.
•	The use of high-consumption electrical appliances other than those installed in the room is strictly prohibited.
•	It is strictly forbidden to remove any furniture or items from the rooms and common areas to the outside.
•	Using room towels in the pool is not allowed.
•	Making disruptive noises, causing disturbances, and any act that disturbs or inconveniences other guests is strictly prohibited.
•	The use of instruments, speakers, or sound systems inside and outside the room is strictly prohibited.
•	Bringing food and drinks not purchased on the property into the establishment is strictly prohibited.
•	In accordance with Law No. 20.660, smoking is strictly prohibited inside the rooms and enclosed spaces within the hotel.
•	The consumption of illicit substances is strictly prohibited.
•	Carrying weapons of any kind is strictly prohibited.
•	Bringing food into the room is strictly prohibited.
•	Swimwear is mandatory for entering the pool.

Photography and Privacy
•	Guests may take photos and videos in common areas, always with respect and for non-commercial purposes. Using these images to promote similar businesses or in a way that could damage the company's image is prohibited. Green Paradise Bungalows reserves the right to request the removal of any inappropriate content, including disrespectful acts such as capturing images of other guests without their consent.

Communication Behavior
•	Making offensive, derogatory, or insulting comments against other guests or staff is prohibited. Actions that damage the institutional image of the company will not be tolerated. Failure to comply with these rules may result in legal action and the cancellation of the current reservation.

Use of Common Areas
•	Hanging clothes on decks, exterior windows, or in common areas is prohibited. A specific space is provided inside the room and/or on the property for hanging clothes.

Non-Discrimination Policy
•	Green Paradise Bungalows is committed to not discriminating based on sex, political creed, religion, nationality, or social status in the provision of its services.

Laundry Service
•	Request it at reception, indicating the number of garments and any special care. Check the rate per kilo.

Visitors
•	Visitors are only allowed in common areas until 6:00 PM. External individuals are not allowed in the rooms.

Valuables and Luggage
•	We do not have a safe. Please check with reception if you wish to secure items or use our luggage storage (at the guest's own risk).

Damages and Losses
•	The guest is responsible for any damage to or loss of Green Paradise Bungalows property, including furniture, equipment, and infrastructure, caused by them or their companions.
•	The cost of repair or replacement will be charged to the guest's account.
•	Green Paradise Bungalows is not responsible for the loss, theft, or damage of valuables left in the rooms. It is recommended to inform reception about valuable items for greater security.
•	The client must report their valuables; the administration is not responsible for their loss.

Use of Facilities and Common Areas
•	Guests must respect the rules for using the pools and other common areas, which are posted in each area.
•	Using room towels in the pool is prohibited. Pool towels can be requested at reception by leaving an ID as a deposit.
•	Minors must be supervised by an adult at all times in all public areas.

Pets
•	Pets are not allowed at Green Paradise Bungalows.
•	Bringing animals onto the property is strictly prohibited.

Smoking
•	Smoking is strictly prohibited in all indoor areas of Green Paradise Bungalows, including rooms, restaurants, and the pool area. Designated smoking areas have been provided.
•	A fine of 350 soles will be applied for violating the smoking ban.

Alcohol Sales Policy
•	Bringing in external alcoholic beverages is not allowed. If you wish to consume a beverage you brought, you may do so by paying a corkage fee of S/ 30.00 per bottle. Please inquire at reception.
•	The sale of alcohol will be kindly refused if the service and bar staff identify that a guest is visibly intoxicated. However, they may continue to enjoy non-alcoholic beverages. By implementing these measures, we aim to create a safer and more responsible environment, protecting both guests from potential accidents, falls into the pool, and dangerous events for both the guest and the staff. Furthermore, Green Paradise Bungalows is not responsible for accidents that occur during the guests' stay.

Housekeeping Service Hours
•	Room cleaning service is available in the morning and early afternoon until 2:00 PM. If a guest is staying for several days, they must leave their key at reception during the mentioned hours for cleaning to be done. Otherwise, it will be considered as "no cleaning required".

Check-Out Rules
•	The guest must wait a few minutes to confirm that the room is in the same condition as it was delivered. We appreciate your kind cooperation.
•	All clients must leave their room keys and air conditioning remote control at the reception upon check-out.
•	The loss of room keys or remotes by the guest will be automatically charged to their account.
•	All damages caused in the room will be automatically charged to your account.
•	During the check-out process, the guest must wait for confirmation that the room has been returned in the same condition as received.

Pool:
•	Hours of Use: The private pools are available from 10 AM to 10 PM, except during maintenance periods.
•	Appropriate swimwear is required to enter the pool. Entering with shoes, sandals, or any footwear that could contaminate the water is prohibited.
•	Access to the pool is not permitted for individuals under the influence of alcohol or other substances.
•	Consuming alcoholic beverages, non-alcoholic beverages, and food outside the pool bar area is prohibited.
•	Child Supervision: Children under 10 must be accompanied by an adult at all times in the pool.
•	Liability: Green Paradise Bungalows is not responsible for accidents or damages that occur in the pool during the guests' stay.

Damage to Movable Property:
•	Furniture damaged by guests must be replaced or paid for by them, according to Articles 205 to 207 of the Peruvian Penal Code: "Whoever damages, destroys, or renders useless a movable or immovable property, totally or partially belonging to another, will be punished with a prison sentence of no more than three years and with thirty to sixty days-fine."
•	Full, queen, twin beds
•	Sheets: S/100.00 - Washing: S/20.00
•	Duvets: S/200.00 - Washing: S/30.00
•	Mattress protectors: S/200.00
•	Towels
•	Pillows
•	Pillow protectors: S/50.00
•	Window glass: S/299.00
•	Glass doors: S/2000.00
•	Mattress: washing S/280.00
•	Mattress: S/1800.00
•	AC remote: S/100.00
•	Keys: S/20.00
•	Wooden keychain: S/50.00
•	Plastic keychain: S/10.00
•	Minibar: S/500.00
•	Mirrors: S/100.00
•	Sanitary waste bins: S/50.00
•	Glasses: S/20.00
•	Wine glass: S/20.00
•	Shower door: S/600.00
•	Coffee maker: S/150.00
•	Curtains: S/1000.00`,
        nav_contacto: 'Contact',
        whatsappHotelNumber: '51979309553',
        whatsappBungalowNumber: '51960195080',
        whatsappHotelLabel: 'Hotel WhatsApp',
        whatsappBungalowLabel: 'Bungalows WhatsApp',
    }
};

export const hotelPoliciesItem: NavItem = {
    id: 'politicas-hotel',
    es: translations.es.footerPoliciesHotel,
    en: translations.en.footerPoliciesHotel,
    href: '/politicas#politicas-hotel'
};

export const bungalowPoliciesItem: NavItem = {
    id: 'politicas-bungalows',
    es: translations.es.footerPoliciesBungalows,
    en: translations.en.footerPoliciesBungalows,
    href: '/politicas#politicas-bungalows'
};


export const navMenu: NavItem[] = [
    { id: 'nosotros', es: 'Nosotros', en: 'About Us', href: '#nosotros' },
    { 
        id: 'hotel', 
        es: 'Hotel', 
        en: 'Hotel', 
        href: '#hotel',
        subItems: groupedHotelLinks,
    },
    { 
        id: 'bungalows', 
        es: 'Bungalows', 
        en: 'Bungalows', 
        href: '#bungalows',
        subItems: groupedBungalowLinks
    },
    { 
        id: 'politicas', 
        es: 'Políticas', 
        en: 'Policies', 
        href: '/politicas',
        subItems: [hotelPoliciesItem, bungalowPoliciesItem]
    },
];