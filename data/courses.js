// Course content is condensed from the original course pages. Durations in
// days, batch dates and promotional offers are omitted because the published
// figures contradict each other; tuition is shown only where the homepage and
// detail page agree.

const residentialDay = [
  { time: '05:45', activity: 'Ashtanga practice' },
  { time: '07:00', activity: 'Self practice' },
  { time: '07:30', activity: 'Pranayama & meditation' },
  { time: '08:45', activity: 'Fruit & tea' },
  { time: '09:30', activity: 'Anatomy & alignment' },
  { time: '10:45', activity: 'Brunch' },
  { time: '12:00', activity: 'Self study' },
  { time: '13:00', activity: 'Teaching methodology (Mon, Wed, Fri)' },
  { time: '14:30', activity: 'Philosophy' },
  { time: '16:00', activity: 'Hatha yoga' },
  { time: '17:15', activity: 'Hatha self practice' },
  { time: '17:45', activity: 'Yoga sadhana (Mon–Wed)' },
  { time: '18:30', activity: 'Dinner' },
];

const advancedDay = residentialDay.map((s) => {
  const upgrades = {
    '07:30': 'Advanced pranayama & meditation',
    '09:30': 'Advanced anatomy & alignment',
    '14:30': 'Yoga philosophy & Ayurveda',
    '16:00': 'Advanced Hatha yoga',
  };
  return upgrades[s.time] ? { ...s, activity: upgrades[s.time] } : s;
});

const rooms = {
  200: [
    ['6-bed shared', 'IDR 2,890,000', '$160'],
    ['4-bed shared', 'IDR 3,161,000', '$175'],
    ['Twin shared', 'IDR 6,322,000', '$350'],
    ['Private room', 'IDR 10,838,000', '$600'],
  ],
  300: [
    ['6-bed shared', 'IDR 3,595,000', '$199'],
    ['4-bed shared', 'IDR 4,155,000', '$230'],
    ['Twin shared', 'IDR 8,309,000', '$460'],
    ['Private room', 'IDR 14,451,000', '$800'],
  ],
  500: [
    ['6-bed shared', 'IDR 6,304,000', '$349'],
    ['4-bed shared', 'IDR 6,684,000', '$370'],
    ['Twin shared', 'IDR 13,367,000', '$740'],
    ['Private room', 'IDR 25,290,000', '$1,400'],
  ],
};

const ttcIncluded = [
  'Comprehensive training manual',
  'Unlimited use of studio props and facilities',
  'Beach yoga session and a traditional purification bath',
  'Certificate on successful completion',
];
const ttcBring = [
  'Breathable, comfortable yoga clothing',
  'A reusable water bottle',
  'A journal for daily reflection',
  'Eco-friendly sunscreen and insect repellent',
];

export const courses = [
  {
    slug: '200-hour-yoga',
    group: 'multi',
    hours: 200,
    title: '200 Hour Yoga Teacher Training',
    cardTitle: '200 Hour Yoga TTC',
    summary:
      'The foundation course: traditional Hatha, Ashtanga, pranayama, meditation, anatomy and philosophy, for new and developing teachers.',
    lead: 'A residential foundation in traditional yoga — for practitioners who want to teach, and for anyone ready to take their own practice deeper.',
    image: '/img/courses/200-hour-yoga',
    imageAlt: 'A large graduating group of teacher trainees in white seated together in the Bali Yoga Studio shala',
    image2: '/img/courses/200-hour-yoga-2',
    image2Alt: 'Trainees in white with marigold garlands during a fire ceremony',
    facts: [
      { label: 'Hours', value: '200' },
      { label: 'Level', value: 'Beginner to intermediate' },
      { label: 'Styles', value: 'Hatha & Ashtanga Vinyasa' },
      { label: 'Format', value: 'Residential, in Ubud' },
    ],
    overview: [
      'The course is rooted in authentic tradition and paced to your level as a practitioner. Alongside daily asana, you study yoga philosophy — including sacred texts such as the Bhagavad Gita — human anatomy, teaching methodology and the therapeutic side of yoga.',
      'Whether you plan to teach or simply want to understand yoga on and off the mat, the training combines theory, practice and community: small groups, live kirtan and satsang, vegetarian food and time to explore the island.',
    ],
    modules: [
      {
        title: 'Hatha Yoga',
        text: 'The traditional Hatha practised by Himalayan masters, adapted to your strength and flexibility — about 140 practices across the classic series.',
        topics: ['Pavanmuktasana series 1–3', 'Surya & Chandra Namaskar', 'Standing, seated and kneeling series', 'Backbends, inversions and twists', 'Philosophy and scriptures of Hatha yoga', 'Chakras, nadis and the subtle body'],
      },
      {
        title: 'Ashtanga Vinyasa',
        text: 'The Primary Series taught systematically, with a manual to keep.',
        topics: ['History of Ashtanga', 'Sun Salutation A & B', 'Standing, seated and finishing sequences', 'Breath and drishti'],
      },
      {
        title: 'Pranayama',
        text: 'How breath leads to health, calm and the awakening of energy.',
        topics: ['Prana and the gunas', 'Nadi Shodhana', 'Bhastrika & Kapalbhati', 'Bhramari & Ujjayi', 'Sheetali & Sheetkari', 'Surya and Chandra Bhedi'],
      },
      {
        title: 'Meditation & Yoga Nidra',
        text: 'Concentration practices building towards meditation, plus guided Yoga Nidra for deep psychic relaxation.',
        topics: ['Sitting and breathing correctly', 'Tratak and mantra meditation', 'Chakra and Kundalini meditation', 'Walking and active meditation', 'Vipassana and breath awareness', 'States of consciousness in Yoga Nidra'],
      },
      {
        title: 'Philosophy',
        text: 'An introduction to the Himalayan tradition and the classical texts.',
        topics: ['History and types of yoga', 'Patanjali’s Yoga Sutras and the eight limbs', 'Yamas & niyamas', 'Bhagavad Gita & Upanishads', 'Panchakosha, trigunas and the elements'],
      },
      {
        title: 'Anatomy & Physiology',
        text: 'Physical anatomy for safe teaching, alongside the spiritual anatomy of yoga.',
        topics: ['Body planes and movements', 'Spine, shoulder girdle and pelvis', 'Muscular, nervous and respiratory systems', 'Nadis, chakras and koshas'],
      },
      {
        title: 'Mantra, Mudra & Bandha',
        text: 'Sound, gesture and energy locks — the subtler tools of practice.',
        topics: ['Om and Vedic mantras', 'Gayatri and Surya Namaskar mantras', 'Gyan, Prana and Dhyana mudras', 'Mula, Uddiyana and Jalandhara bandha'],
      },
      {
        title: 'Cleansing & Ayurveda',
        text: 'Shatkarma purification and an introduction to yoga’s sister science.',
        topics: ['Jal Neti & Rubber Neti', 'Kapalbhati & Agnisara', 'The three doshas', 'Knowing your constitution (Prakriti)'],
      },
      {
        title: 'Teaching, Alignment & Adjustment',
        text: 'How to demonstrate, instruct, sequence and adjust safely — with and without props.',
        topics: ['Demonstration and instruction', 'Alignment by body region', 'Hands-on and prop-based adjustment', 'Safety and injury prevention'],
      },
    ],
    forWho: [
      'Practitioners preparing to teach yoga',
      'Wellness seekers looking for personal transformation',
      'Students who want a structured, traditional grounding',
    ],
    assessment: ['Performance during the course', 'Attendance', 'Practical asana demonstration', 'Written test', 'Conduct'],
    schedule: residentialDay,
    fees: { tuition: 'IDR 16,240,000', usd: '$899', rooms: rooms[200] },
    included: ttcIncluded,
    bring: ttcBring,
    teachers: ['ashutosh', 'naveen', 'hari-dharma', 'akshant'],
    faqs: [
      { q: 'Do I need to be an experienced yogi?', a: 'No. The course is designed for beginners and intermediate practitioners, and teachers adapt the practice to your strength and flexibility.' },
      { q: 'Is accommodation included in the tuition?', a: 'Accommodation is booked separately. Shared and private rooms are available — see the room options on this page.' },
      { q: 'How is the course assessed?', a: 'Through your performance and attendance across the course, a practical asana demonstration, a written test and your conduct.' },
    ],
    meta: {
      title: '200 Hour Yoga Teacher Training in Bali',
      description: 'Residential 200 hour yoga teacher training in Ubud: Hatha, Ashtanga, pranayama, meditation, anatomy and philosophy with Bali Yoga Studio.',
    },
  },
  {
    slug: '300-hour-yoga',
    group: 'multi',
    hours: 300,
    title: '300 Hour Yoga Teacher Training',
    cardTitle: '300 Hour Yoga TTC',
    summary: 'Advanced training for 200-hour graduates: deeper asana, pranayama, meditation, therapy and teaching skills.',
    lead: 'For teachers who have completed a 200 hour training and want to go further — into advanced practice, yoga therapy and the finer points of teaching.',
    image: '/img/courses/300-hour-yoga',
    imageAlt: 'Students practising partner acro yoga on a black-sand beach in Bali',
    image2: '/img/courses/300-hour-yoga-2',
    image2Alt: 'An advanced class practising in the studio',
    facts: [
      { label: 'Hours', value: '300' },
      { label: 'Level', value: 'Advanced' },
      { label: 'Prerequisite', value: '200 hour TTC' },
      { label: 'Format', value: 'Residential, in Ubud' },
    ],
    overview: [
      'Building on the foundation course, the 300 hour training delves into the intricacies of asana, meditation and pranayama, with a strong base in theory and a clear focus on practical application.',
      'It suits teachers who want to advance their careers, and practitioners who still have questions after their first training and want to keep learning in depth.',
    ],
    modules: [
      { title: 'Advanced Asana', text: 'Refining and extending your practice and your ability to teach it.', topics: ['Advanced postures and variations', 'Alignment and modifications', 'Sequencing for different levels'] },
      { title: 'Advanced Pranayama & Meditation', text: 'Longer and subtler practices for experienced students.', topics: ['Advanced breathing techniques', 'Advanced meditation methods', 'Bandhas and mudras', 'Mantra chanting'] },
      { title: 'Shatkarma Kriya', text: 'Yogic cleansing techniques in theory and practice.', topics: ['Purification practices', 'Preparation and safety'] },
      { title: 'Advanced Anatomy & Yoga Therapy', text: 'Applying anatomy to therapeutic teaching.', topics: ['Advanced anatomy and physiology', 'Yoga as therapy', 'Working with limitations'] },
      { title: 'Philosophy & Ayurveda', text: 'A deeper study of the classical texts and yoga’s sister science.', topics: ['Yoga philosophy', 'Ayurveda'] },
      { title: 'Teaching Skills', text: 'Developing a confident, safe and individual teaching voice.', topics: ['Teaching methodology', 'Adjustments and modifications'] },
    ],
    forWho: [
      'Graduates of a 200 hour yoga teacher training',
      'Teachers who want to deepen their skills and opportunities',
      'Practitioners seeking personal transformation through advanced study',
    ],
    eligibility: [
      'Completion of a 200 hour yoga teacher training',
      'Able to hold Sarvangasana (shoulder stand) or Kakasana (crow) for at least a minute',
      'A regular pranayama practice',
    ],
    schedule: advancedDay,
    fees: { tuition: 'IDR 23,465,000', usd: '$1,299', rooms: rooms[300] },
    included: ttcIncluded,
    bring: ttcBring,
    teachers: ['ashutosh', 'naveen', 'sunil', 'rohit'],
    faqs: [
      { q: 'Is prior yoga experience required?', a: 'Yes — you need to have completed a 200 hour yoga teacher training before joining.' },
      { q: 'Do I have to attend every class?', a: 'Yes. All classes and assignments must be completed to finish the course.' },
      { q: 'What is the accommodation like?', a: 'Dormitory, shared and private rooms are available.' },
    ],
    meta: {
      title: '300 Hour Yoga Teacher Training in Bali',
      description: 'Advanced 300 hour yoga teacher training in Ubud for 200-hour graduates: advanced asana, pranayama, meditation, yoga therapy and teaching skills.',
    },
  },
  {
    slug: '500-hour-yoga',
    group: 'multi',
    hours: 500,
    title: '500 Hour Yoga Teacher Training',
    cardTitle: '500 Hour Yoga TTC',
    summary: 'The complete journey from foundations to mastery in one extended residential immersion.',
    lead: 'One immersive training that takes you from foundational concepts to advanced practice — for those ready to commit to the teacher’s path.',
    image: '/img/courses/500-hour-yoga',
    imageAlt: 'Students seated in a circle with a teacher beside a Buddha statue in the studio',
    image2: '/img/courses/500-hour-yoga-2',
    image2Alt: 'Students learning together during a training session',
    facts: [
      { label: 'Hours', value: '500' },
      { label: 'Level', value: 'Open to beginners' },
      { label: 'Styles', value: 'Hatha & Ashtanga Vinyasa' },
      { label: 'Format', value: 'Extended residential' },
    ],
    overview: [
      'Created for those who want to walk the teacher path, the 500 hour training covers asana, pranayama, meditation and theory in full detail — beginning with the foundations, so committed beginners and intermediate students can both join.',
      'The extended format leaves time for practice to mature, away from the noise of the city and in the company of a close community.',
    ],
    modules: [
      { title: 'Classical Hatha Yoga', text: 'More than 80 classical Hatha postures, practised and taught.', topics: ['Posture series', 'Alignments and modifications'] },
      { title: 'Ashtanga Vinyasa', text: 'An introduction to the different series of Ashtanga Vinyasa yoga.', topics: ['Primary series', 'Breath and movement'] },
      { title: 'Pranayama & Meditation', text: 'Breath control and mindfulness as daily disciplines.', topics: ['Breath control techniques', 'Meditation and mindfulness practices'] },
      { title: 'Philosophy & Ancient Texts', text: 'The ideas behind the practice.', topics: ['Yoga philosophy', 'Classical texts'] },
      { title: 'Anatomy & Teaching', text: 'Everything you need to teach with confidence and care.', topics: ['Yoga anatomy and physiology', 'Teaching methodology and skills'] },
      { title: 'Shatkarma & Mantra', text: 'Cleansing practices and the vibration of sound.', topics: ['Shatkarma kriya', 'Mantra chanting and sound'] },
    ],
    forWho: [
      'Anyone wanting to learn more than 80 classical Hatha postures',
      'Students ready to dedicate around two months to training',
      'Those who want to build strength, flexibility and balance',
      'Travellers who love meeting people and making lifelong connections',
    ],
    eligibility: [
      'Open to beginners with an open heart and a willingness to learn',
      'Able to understand and speak English',
      'Able to commit to an extended residential stay',
    ],
    schedule: advancedDay,
    fees: { tuition: 'IDR 36,110,000', usd: '$1,999', rooms: rooms[500] },
    included: ttcIncluded,
    bring: ttcBring,
    teachers: ['ashutosh', 'naveen', 'sunil', 'hari-dharma'],
    faqs: [
      { q: 'Can a beginner join?', a: 'Yes. You need an open heart and a willingness to learn in an immersive environment.' },
      { q: 'Is it mandatory to attend all classes?', a: 'Yes, along with completing assignments, to receive the certificate.' },
      { q: 'What should I bring?', a: 'Your medicines, toiletries, clothes and books. Studio props and materials are provided.' },
    ],
    meta: {
      title: '500 Hour Yoga Teacher Training in Bali',
      description: 'An extended 500 hour residential yoga teacher training in Ubud, from foundations to advanced Hatha, Ashtanga, pranayama, meditation and teaching.',
    },
  },
  {
    slug: '200-hour-kundalini',
    group: 'kundalini',
    hours: 200,
    title: '200 Hour Kundalini Yoga Teacher Training',
    cardTitle: '200 Hour Kundalini TTC',
    summary: 'Kundalini-style asana with chakras, kriyas, bandhas, mudras and meditation, built on a grounding in Hatha.',
    lead: 'Awaken the spiritual energy within — a structured Kundalini training for seekers and aspiring teachers, beginners included.',
    image: '/img/courses/200-hour-kundalini',
    imageAlt: 'A teacher guiding blindfolded students through a Kundalini practice',
    image2: '/img/courses/200-hour-kundalini-2',
    image2Alt: 'Students practising Kundalini meditation together',
    facts: [
      { label: 'Hours', value: '200' },
      { label: 'Level', value: 'Beginners welcome' },
      { label: 'Focus', value: 'Kundalini & Hatha' },
      { label: 'Format', value: 'Residential, in Ubud' },
    ],
    overview: [
      'Anyone drawn to a spiritual practice, or wanting to broaden beyond other styles, can join. If you are new, the course includes the Hatha foundations you need alongside Kundalini-style asana.',
      'Beyond the postures, you study chakras, kundalini, bandhas, mudras, drishti, pranayama, the nadis, shatkarma kriya and Kundalini meditation — together with philosophy, anatomy and mantra chanting.',
    ],
    modules: [
      { title: 'Kundalini & Hatha Asana', text: 'Postures in the Kundalini style, with Hatha foundations for beginners.', topics: ['Kundalini asana', 'Hatha yoga basics'] },
      { title: 'Energy & Subtle Body', text: 'The map of energy that Kundalini works with.', topics: ['Chakras and kundalini', 'Nadis', 'Bandhas, mudras and drishti'] },
      { title: 'Breath, Kriya & Meditation', text: 'The practices that move and settle energy.', topics: ['Pranayama', 'Shatkarma kriya', 'Kundalini meditation'] },
      { title: 'Philosophy, Anatomy & Mantra', text: 'The theory behind the practice, and the sound that carries it.', topics: ['Kundalini philosophy', 'Anatomy and physiology', 'Mantra chanting'] },
    ],
    forWho: [
      'Beginners, or students with some Hatha experience',
      'Aspiring yoga teachers',
      'Spiritual seekers who want a structured path',
    ],
    benefits: [
      'Greater self-awareness and steadier habits',
      'Understanding of chakras and how energy is unblocked',
      'Advanced pranayama and kriyas',
      'A career-oriented foundation for teaching',
    ],
    schedule: residentialDay,
    fees: null,
    included: ttcIncluded,
    bring: ttcBring,
    teachers: ['mandeep', 'hari-dharma', 'sunil'],
    faqs: [
      { q: 'Can beginners join?', a: 'Yes. The course includes the Hatha foundations a beginner needs alongside Kundalini practice.' },
      { q: 'Is there preparatory reading?', a: 'You are welcome to read some preparatory material before you arrive; the essentials are covered in class.' },
    ],
    meta: {
      title: '200 Hour Kundalini Yoga Teacher Training in Bali',
      description: 'A 200 hour Kundalini yoga teacher training in Ubud covering chakras, kriyas, pranayama, bandhas, mudras, meditation and mantra.',
    },
  },
  {
    slug: 'yin-yoga',
    group: 'specialty',
    hours: 50,
    title: '50 Hour Yin Yoga Teacher Training',
    cardTitle: 'Yin Yoga TTC',
    summary: 'The art and science of stillness: long-held postures, sequencing, breath and Yoga Nidra.',
    lead: 'A meditative training in the art of stillness — long, quiet holds that reach the deeper layers of the body and calm the mind.',
    image: '/img/courses/yin-yoga',
    imageAlt: 'Students holding a supported Yin posture in the bright studio',
    image2: '/img/courses/yin-yoga-2',
    image2Alt: 'A calm Yin yoga class with bolsters and blankets',
    facts: [
      { label: 'Hours', value: '50' },
      { label: 'Level', value: 'Beginner friendly' },
      { label: 'Focus', value: 'Yin & restorative' },
      { label: 'Certificate', value: 'Of completion' },
    ],
    overview: [
      'In Yin yoga each pose is held for anywhere from a minute to twenty, depending on your experience. Deep stretching and stillness target the connective tissue, calm the nervous system and improve the flow of energy through the body.',
      'This short course is a subtle introduction to the method: how to practise it, sequence it and teach it, with daily practice, mindfulness and Yoga Nidra.',
    ],
    modules: [
      { title: 'Philosophy & Practice', text: 'Where Yin comes from and how it feels from the inside.', topics: ['Yin yoga philosophy', 'Daily Yin practice', 'Mindfulness'] },
      { title: 'Asana & Sequencing', text: 'Postures, variations and how to build a class.', topics: ['Asana and variations', 'Yin sequencing', 'Anatomy and physiology'] },
      { title: 'Breath, Meditation & Nidra', text: 'The quiet practices that complete a Yin class.', topics: ['Breathing techniques', 'Meditation', 'Yoga Nidra'] },
      { title: 'Teaching', text: 'Holding space for long, still practice.', topics: ['Teaching methodology', 'Evaluation'] },
    ],
    forWho: [
      'Anyone wanting to learn a restorative form of yoga',
      'Teachers adding Yin to their classes',
      'Practitioners seeking more focus, patience and calm',
    ],
    schedule: null,
    fees: null,
    included: ['Daily Yin practice', 'Training materials', 'Use of studio props and facilities', 'Certificate of completion'],
    bring: ['Warm, comfortable layers', 'A reusable water bottle', 'A journal'],
    teachers: ['akshant', 'hari-dharma', 'sujata'],
    faqs: [
      { q: 'Can I enrol as a complete beginner?', a: 'Yes, complete beginners are welcome.' },
      { q: 'What certificate will I receive?', a: 'The 50 hour course carries a certificate of completion.' },
    ],
    meta: {
      title: '50 Hour Yin Yoga Teacher Training in Bali',
      description: 'Learn to practise, sequence and teach Yin yoga in a 50 hour course in Ubud, with meditation, breathwork and Yoga Nidra.',
    },
  },
  {
    slug: 'aerial-yoga',
    group: 'specialty',
    hours: 50,
    title: '50 Hour Aerial Yoga Teacher Training',
    cardTitle: 'Aerial Yoga TTC',
    summary: 'Hatha and Vinyasa aerial flows, sequencing, restorative work and hammock set-up, in small groups.',
    lead: 'Experience freedom of movement in the silks — learn aerial yoga for your own practice or to teach it with confidence.',
    image: '/img/courses/aerial-yoga',
    imageAlt: 'Students sitting beneath aerial silks during an aerial yoga session',
    image2: '/img/courses/aerial-yoga-2',
    image2Alt: 'An aerial yoga class in progress',
    facts: [
      { label: 'Hours', value: '50' },
      { label: 'Level', value: 'All levels' },
      { label: 'Group size', value: '10–12 students' },
      { label: 'Certificate', value: 'Of completion' },
    ],
    overview: [
      'The aerial course blends traditional yoga with the support of the hammock. You learn the theory and practice of aerial yoga in a structured way — from basic poses and restorative flows to sequencing a class and installing a hammock safely.',
      'Classes are taught in Hatha and Vinyasa aerial styles, in small groups so every student gets attention in the silks.',
    ],
    modules: [
      { title: 'Aerial Foundations', text: 'Getting comfortable and safe in the hammock.', topics: ['Basic poses and techniques', 'Surya Namaskar and alignment', 'Installing a hammock for practice'] },
      { title: 'Flows & Restorative Work', text: 'Building and softening an aerial practice.', topics: ['Hatha and Vinyasa aerial flows', 'Restorative flows', 'Mindfulness and pranayama'] },
      { title: 'Teaching Aerial Yoga', text: 'Structuring and leading a class.', topics: ['Class sequencing and structure', 'Observation techniques', 'Teaching ethics and practice', 'Anatomy and physiology'] },
    ],
    forWho: [
      'Yoga teachers adding a new dimension to their classes',
      'Dancers and fitness instructors looking to diversify',
      'Practitioners learning aerial yoga for themselves',
    ],
    schedule: null,
    fees: null,
    included: ['Daily aerial practice', 'Training materials', 'Use of hammocks, props and facilities', 'Certificate of completion'],
    bring: ['Comfortable, fitted yoga clothing', 'A reusable water bottle', 'A journal'],
    teachers: ['akshant', 'guna', 'sujata'],
    faqs: [
      { q: 'Can I join if I don’t want to teach?', a: 'Yes. You can join simply to learn and deepen your own practice.' },
      { q: 'What style is taught?', a: 'Hatha and Vinyasa aerial flows.' },
      { q: 'How big are the groups?', a: 'Between 10 and 12 students.' },
    ],
    meta: {
      title: '50 Hour Aerial Yoga Teacher Training in Bali',
      description: 'A 50 hour aerial yoga teacher training in Ubud: Hatha and Vinyasa aerial flows, restorative work, sequencing and hammock set-up in small groups.',
    },
  },
  {
    slug: 'sound-healing',
    group: 'specialty',
    hours: 50,
    title: 'Sound Healing Course, Level 1 & 2',
    cardTitle: 'Sound Healing Course',
    summary: 'Singing bowls, frequencies and chakra work across two levels, for practitioners and facilitators.',
    lead: 'Learn to work with singing bowls and sound — for your own practice, or to offer sessions to others.',
    image: '/img/courses/sound-healing',
    imageAlt: 'A student resting on a mat beside a singing bowl during a sound healing session',
    image2: '/img/courses/sound-healing-2',
    image2Alt: 'A sound healing session with singing bowls',
    facts: [
      { label: 'Hours', value: '50' },
      { label: 'Levels', value: '1 & 2' },
      { label: 'Level', value: 'No experience needed' },
      { label: 'Certificate', value: 'Of completion' },
    ],
    overview: [
      'Taught across two levels, the course moves from the tools and physics of sound to working with the chakras and identifying blockages — the skills you need to facilitate a professional session.',
      'It suits solo practitioners and anyone who teaches yoga, meditation or another holistic practice and wants to add sound to their work.',
    ],
    modules: [
      { title: 'Level 1 — Foundations', text: 'The instruments, the science and the craft of a session.', topics: ['Introduction to sound healing tools', 'Physics and anatomy of sound', 'Types of singing bowls', 'Techniques and frequencies', 'Aura and protection', 'Facilitation and class safety'] },
      { title: 'Level 2 — Deeper Practice', text: 'Working with the chakras and the individual.', topics: ['The chakras in detail', 'Identifying blockages', 'Using sound to clear blockages', 'Chakra balancing', 'Professional ethics'] },
    ],
    forWho: [
      'Beginners with no background in healing',
      'Yoga and meditation teachers adding sound to their offering',
      'Holistic practitioners expanding their skills',
    ],
    schedule: null,
    fees: null,
    included: ['Practice with a range of singing bowls', 'Training materials', 'Use of studio facilities', 'Certificate of completion'],
    bring: ['Comfortable clothing', 'A reusable water bottle', 'A journal'],
    teachers: ['hari-dharma', 'mandeep', 'guna'],
    faqs: [
      { q: 'Do I need a background in healing?', a: 'No, previous healing experience is not required.' },
      { q: 'How will this help my career?', a: 'If you teach yoga, meditation or another holistic practice, sound healing lets you broaden what you offer.' },
    ],
    meta: {
      title: 'Sound Healing Course Level 1 & 2 in Bali',
      description: 'A two-level sound healing course in Ubud: singing bowls, the physics of sound, frequencies, chakra balancing and professional facilitation.',
    },
  },
];

export const groups = {
  multi: {
    title: 'Multi-style yoga',
    text: 'Traditional Hatha and Ashtanga Vinyasa with philosophy, anatomy and teaching practice.',
  },
  kundalini: {
    title: 'Kundalini yoga',
    text: 'Chakras, kriyas, breath and meditation, from a first immersion to full mastery.',
  },
  specialty: {
    title: 'Specialty & healing',
    text: 'Focused trainings in a single style or healing practice.',
  },
};

// The wider catalogue from the original site. Entries without a slug have no
// redesigned page yet and lead to an enquiry instead.
export const catalogue = [
  { group: 'multi', hours: 50, title: '50 Hour Yoga Foundation TTC' },
  { group: 'multi', hours: 100, title: '100 Hour Yogic Living TTC' },
  { group: 'multi', hours: 200, title: '200 Hour Yoga TTC', slug: '200-hour-yoga' },
  { group: 'multi', hours: 300, title: '300 Hour Yoga TTC', slug: '300-hour-yoga' },
  { group: 'multi', hours: 500, title: '500 Hour Yoga TTC', slug: '500-hour-yoga' },
  { group: 'kundalini', hours: 50, title: '50 Hour Sacred Seeds of Kundalini' },
  { group: 'kundalini', hours: 100, title: '100 Hour Kundalini Immersion' },
  { group: 'kundalini', hours: 200, title: '200 Hour Kundalini TTC', slug: '200-hour-kundalini' },
  { group: 'kundalini', hours: 300, title: '300 Hour Mystic Kundalini Kriya' },
  { group: 'kundalini', hours: 500, title: '500 Hour Mastering Kundalini Kriya' },
  { group: 'specialty', hours: 50, title: 'Yin Yoga TTC', slug: 'yin-yoga' },
  { group: 'specialty', hours: 50, title: 'Aerial Yoga TTC', slug: 'aerial-yoga' },
  { group: 'specialty', hours: 50, title: 'Sound Healing Course', slug: 'sound-healing' },
  { group: 'specialty', hours: 50, title: 'Reiki Healing Course, Level 1 & 2' },
  { group: 'specialty', hours: 50, title: 'Art of Vinyasa' },
  { group: 'specialty', hours: 50, title: 'Bio Mechanics' },
  { group: 'specialty', hours: 50, title: 'Hands-on Adjustment' },
];

export const getCourse = (slug) => courses.find((c) => c.slug === slug);
