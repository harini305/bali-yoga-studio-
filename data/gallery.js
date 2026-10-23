export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'yoga', label: 'Yoga' },
  { id: 'events', label: 'Events' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'food', label: 'Food' },
  { id: 'stay', label: 'Stay' },
];

const alts = {
  yoga: [
    'A student in a seated twist in the studio',
    'A teacher guiding students in a standing stretch',
    'Students resting in savasana beneath the studio mural',
    'A class seated in meditation on purple mats',
    'Students in standing poses in the bright main shala',
    'A guided practice among tropical plants',
    'Teacher trainees in white raising their arms together',
    'Students practising in the shala with the studio logo behind',
    'Students folding forward in child’s pose on the terrace',
    'A group of trainees in white with marigold garlands',
  ],
  events: [
    'Guests gathered for a kirtan evening',
    'A large group celebrating International Yoga Day',
    'Dancers moving freely during ecstatic dance',
    'A workshop with a teacher seated at the front of the room',
    'Students sharing a moment outdoors after breathwork',
  ],
  food: [
    'A plate of fruit, salad and fresh juice',
    'A colourful vegetarian buffet with salads',
    'Glasses of fresh watermelon juice at the buffet',
    'A rice dish served with raita and juice',
    'A vegetarian plate with salad, rice and curry',
  ],
  stay: [
    'A twin room with wooden furnishings',
    'The garden entrance to the accommodation',
    'A bright private room with a double bed',
    'A four-poster bed in a private room',
    'A balcony table looking out over the garden',
  ],
  wellness: [
    'A student resting during a singing bowl session',
    'Students lying in the shala for a full moon sound bath',
    'A gentle facial massage',
    'A relaxing back massage with warm oil',
  ],
};

export const galleryImages = Object.entries(alts).flatMap(([cat, list]) =>
  list.map((alt, i) => ({ id: `${cat}-${i + 1}`, category: cat, src: `/img/gallery/${cat}-${i + 1}`, alt }))
);
