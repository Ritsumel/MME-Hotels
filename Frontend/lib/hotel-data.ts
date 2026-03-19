export interface Hotel {
  id: string;
  name: string;
  city: string;
  address: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  pricePerNight: number;
  amenities: string[];
  rooms: Room[];
}

export interface Room {
  id: string;
  type: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  size: number;
  amenities: string[];
}

export const hotels: Hotel[] = [
  {
    id: 'stockholm-central',
    name: 'MME Stockholm Central',
    city: 'Stockholm',
    address: 'Kungsgatan 44, 111 35 Stockholm',
    rating: 4.8,
    reviewCount: 1243,
    image: '/images/stockholm.jpg',
    description:
      'Our flagship hotel in the heart of Stockholm, steps from Sergels Torg and the Royal Palace. Featuring 124 rooms with stunning city views and our signature Nordic spa.',
    pricePerNight: 1890,
    amenities: ['Spa', 'Restaurant', 'Bar', 'Gym', 'Concierge', 'Wi-Fi'],
    rooms: [
      {
        id: 'stk-std',
        type: 'Standard Room',
        description:
          'Comfortable room with Nordic design, queen bed, and city views.',
        pricePerNight: 1890,
        capacity: 2,
        size: 24,
        amenities: ['Queen Bed', 'City View', 'Wi-Fi', 'Mini Bar'],
      },
      {
        id: 'stk-sup',
        type: 'Superior Room',
        description:
          'Spacious room with lounge area, king bed, and panoramic windows.',
        pricePerNight: 2490,
        capacity: 2,
        size: 32,
        amenities: ['King Bed', 'Lounge Area', 'Panoramic View', 'Nespresso'],
      },
      {
        id: 'stk-suite',
        type: 'Nordic Suite',
        description:
          'Luxury suite with separate living area, private balcony, and premium amenities.',
        pricePerNight: 4290,
        capacity: 3,
        size: 52,
        amenities: [
          'King Bed',
          'Living Room',
          'Balcony',
          'Premium Mini Bar',
          'Robes',
        ],
      },
    ],
  },
  {
    id: 'gothenburg-waterfront',
    name: 'MME Gothenburg Waterfront',
    city: 'Gothenburg',
    address: 'Packhusplatsen 2, 411 13 Gothenburg',
    rating: 4.7,
    reviewCount: 876,
    image: '/images/gothenburg.jpg',
    description:
      'A waterfront retreat overlooking the Gothenburg harbour. 86 rooms blending maritime heritage with contemporary Nordic luxury.',
    pricePerNight: 1590,
    amenities: ['Spa', 'Restaurant', 'Rooftop Bar', 'Gym', 'Wi-Fi'],
    rooms: [
      {
        id: 'gbg-std',
        type: 'Harbour View Room',
        description:
          'Elegant room with views over the harbour and minimalist interiors.',
        pricePerNight: 1590,
        capacity: 2,
        size: 22,
        amenities: ['Queen Bed', 'Harbour View', 'Wi-Fi', 'Rain Shower'],
      },
      {
        id: 'gbg-sup',
        type: 'Deluxe Room',
        description:
          'Upgraded room with waterfront views and premium furnishings.',
        pricePerNight: 2190,
        capacity: 2,
        size: 30,
        amenities: ['King Bed', 'Waterfront View', 'Sitting Area', 'Nespresso'],
      },
      {
        id: 'gbg-suite',
        type: "Captain's Suite",
        description:
          'Maritime-inspired suite with wrap-around windows and a private lounge.',
        pricePerNight: 3890,
        capacity: 4,
        size: 48,
        amenities: [
          'King Bed',
          'Lounge',
          'Wrap-around Windows',
          'Mini Kitchen',
        ],
      },
    ],
  },
  {
    id: 'malmo-modern',
    name: 'MME Malmo Modern',
    city: 'Malmo',
    address: 'Stortorget 17, 211 22 Malmo',
    rating: 4.6,
    reviewCount: 654,
    image: '/images/malmo.jpg',
    description:
      "Contemporary design hotel in Malmo's vibrant old town square. 72 rooms celebrating the city's creative energy and multicultural spirit.",
    pricePerNight: 1390,
    amenities: ['Restaurant', 'Bar', 'Bike Rental', 'Gym', 'Wi-Fi'],
    rooms: [
      {
        id: 'mmo-std',
        type: 'Design Room',
        description:
          'Modern room featuring local art and sustainable materials.',
        pricePerNight: 1390,
        capacity: 2,
        size: 20,
        amenities: ['Queen Bed', 'Local Art', 'Wi-Fi', 'Organic Toiletries'],
      },
      {
        id: 'mmo-sup',
        type: 'Loft Room',
        description:
          'Double-height room with mezzanine sleeping area and old-town views.',
        pricePerNight: 1890,
        capacity: 2,
        size: 28,
        amenities: ['King Bed', 'Mezzanine', 'Old Town View', 'Record Player'],
      },
      {
        id: 'mmo-suite',
        type: "Artist's Suite",
        description:
          'Eclectic suite designed by local artists with a private terrace.',
        pricePerNight: 3290,
        capacity: 3,
        size: 45,
        amenities: ['King Bed', 'Terrace', 'Art Collection', 'Premium Sound'],
      },
    ],
  },
  {
    id: 'uppsala-heritage',
    name: 'MME Uppsala Heritage',
    city: 'Uppsala',
    address: 'Fyristorg 8, 753 10 Uppsala',
    rating: 4.5,
    reviewCount: 432,
    image: '/images/uppsala.jpg',
    description:
      "A carefully restored heritage building near Uppsala Cathedral. 54 rooms that honor the city's academic legacy with warm Scandinavian hospitality.",
    pricePerNight: 1290,
    amenities: ['Restaurant', 'Library Lounge', 'Garden', 'Wi-Fi'],
    rooms: [
      {
        id: 'ups-std',
        type: 'Scholar Room',
        description:
          'Cozy room with period details and views of the cathedral or garden.',
        pricePerNight: 1290,
        capacity: 2,
        size: 20,
        amenities: ['Queen Bed', 'Heritage Details', 'Wi-Fi', 'Tea Set'],
      },
      {
        id: 'ups-sup',
        type: "Professor's Room",
        description:
          'Generous room with study desk, armchair, and cathedral views.',
        pricePerNight: 1790,
        capacity: 2,
        size: 28,
        amenities: [
          'King Bed',
          'Study Desk',
          'Cathedral View',
          'Book Collection',
        ],
      },
      {
        id: 'ups-suite',
        type: "Chancellor's Suite",
        description:
          'Grand suite with separate library, fireplace, and garden terrace.',
        pricePerNight: 2990,
        capacity: 4,
        size: 55,
        amenities: ['King Bed', 'Library', 'Fireplace', 'Garden Terrace'],
      },
    ],
  },
];
