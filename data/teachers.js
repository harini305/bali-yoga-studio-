// Bios condensed from the published teacher profiles. References to other
// schools have been removed pending confirmation from the studio.
export const teachers = [
  {
    id: 'ashutosh',
    name: 'Yogi Ashutosh Mishra',
    role: 'Hatha & Therapeutic Yoga',
    image: '/img/teachers/yogi-ashutosh-mishra.webp',
    bio: 'Born and raised in Rishikesh, Ashutosh is rooted in Hatha and therapeutic yoga. He holds a bachelor’s degree in yogic science from the University of Patanjali and a master’s in yoga therapy from Uttarakhand Sanskrit University. His classes combine intelligent sequencing with alignment adapted to each student’s body and health.',
  },
  {
    id: 'naveen',
    name: 'Yogi Naveen',
    role: 'Hatha, Ashtanga & Prenatal Yoga',
    image: '/img/teachers/yogi-naveen.webp',
    bio: 'Naveen has led yoga teacher trainings since 2015 in India and abroad, including China and Vietnam. He holds a master’s in yogic science, is a certified prenatal and postnatal yoga teacher trainer, and has completed a 500-hour yoga teacher training.',
  },
  {
    id: 'hari-dharma',
    name: 'Hari Dharma',
    role: 'Meditation & Philosophy',
    image: '/img/teachers/teacher-img-hari-dharma.webp',
    bio: 'Born in Tabanan, Bali, Hari Dharma was introduced to Bhakti Yoga as a child by his father and grandfather. He studied Raja, Karma and Bhakti Yoga at Ashram Parama Dhama in Denpasar, where he served as a volunteer until 2014, and has taught philosophy and meditation in Bali since 2022.',
  },
  {
    id: 'akshant',
    name: 'Yogi Akshant Ji',
    role: 'Hatha & Vinyasa Flow',
    image: '/img/teachers/teacher-img-akshat.webp',
    bio: 'Akshant has taught across Bali and Rishikesh for more than five years, specialising in Hatha, Vinyasa Flow, pranayama and functional movement. He holds 200- and 300-hour teacher training certifications and further training in aerial yoga, anatomy and sports therapy.',
  },
  {
    id: 'sunil',
    name: 'Yogi Sunil',
    role: 'Hatha, Pranayama & Meditation',
    image: '/img/teachers/yogi-sunil.webp',
    bio: 'Sunil began learning karma and bhakti yoga from his father as a child. He was initiated into kriya yoga by Swami Shankarananda Giri, studied Sivananda yoga and classical texts at the Yoga Vedanta Forest Academy, and trained at Kaivalyadhama in Pune.',
  },
  {
    id: 'mandeep',
    name: 'Mandeep Bhatt',
    role: 'Pranayama, Mantra & Kundalini',
    image: '/img/teachers/mandeep-bhatt.webp',
    bio: 'A devoted student of Vedic study for some twenty years, Mandeep teaches pranayama, mantra and Kundalini yoga within teacher training programmes.',
  },
  {
    id: 'rohit',
    name: 'Yogi Rohit Kumar',
    role: 'Yoga Theory & Philosophy',
    image: '/img/teachers/yogi-rohit-kumar.webp',
    bio: 'Rohit holds an M.A. in English Language and Literature and an LL.B. Years of disciplined practice across the branches of yoga give him a clear grasp of both its theory and its practical side.',
  },
  {
    id: 'guna',
    name: 'Umakanta Sahoo (Guna)',
    role: 'Marma Therapy & Mallakhamb',
    image: '/img/teachers/guna-ji.webp',
    bio: 'From Puri in Odisha, Guna has practised Mallakhamb (pole yoga) alongside an Ayurvedic lifestyle for over a decade. After recovering from an injury through marma therapy with Dr. Madhusudan Ray, he trained in the therapy himself and now uses it to help students release physical and mental stress.',
  },
  {
    id: 'sujata',
    name: 'Sujata Ray (Mili)',
    role: 'Naturopathy, Acupressure & Yoga',
    image: '/img/teachers/sujata-ray.webp',
    bio: 'Sujata grew up with naturopathy, acupressure, yoga and pranayama as her family’s path to health. A former national-level gymnast and Mallakhamb athlete who also trained in Odissi dance, she brings that discipline and care to her teaching.',
  },
];

export const getTeachers = (ids) => ids.map((id) => teachers.find((t) => t.id === id)).filter(Boolean);
