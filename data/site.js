export const site = {
  name: 'Bali Yoga Studio',
  tagline: 'Your sanctuary for authentic yoga and holistic healing in the heart of Ubud, Bali.',
  email: 'info@baliyogastudio.org',
  phoneDisplay: '+62 813 5904 695',
  whatsapp: 'https://wa.me/628135904695',
  address: 'Jl. Bisma No.78, Ubud, Gianyar, Bali 80571, Indonesia',
  addressShort: 'Jl. Bisma No.78, Ubud, Bali',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bali+Yoga+Studio+Jl.+Bisma+No.78+Ubud',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.883372125485!2d115.2584491!3d-8.510703599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d62fc92f2e3%3A0x8c1377c1c5267974!2sBali%20Yoga%20Studio!5e0!3m2!1sen!2sid',
  instagram: 'https://www.instagram.com/bali.yogastudio',
  youtube: 'https://www.youtube.com/@BaliYogaStudio-bali',
  cafeUrl: 'https://prasadamhealingcafe.com',
};

export const nav = [
  {
    label: 'Teacher Training',
    href: '/teacher-training',
    children: [
      { label: '200 Hour Yoga TTC', href: '/teacher-training/200-hour-yoga' },
      { label: '300 Hour Yoga TTC', href: '/teacher-training/300-hour-yoga' },
      { label: '500 Hour Yoga TTC', href: '/teacher-training/500-hour-yoga' },
      { label: '200 Hour Kundalini TTC', href: '/teacher-training/200-hour-kundalini' },
      { label: 'Yin Yoga TTC', href: '/teacher-training/yin-yoga' },
      { label: 'Aerial Yoga TTC', href: '/teacher-training/aerial-yoga' },
      { label: 'Sound Healing Course', href: '/teacher-training/sound-healing' },
      { label: 'All courses', href: '/teacher-training' },
    ],
  },
  { label: 'Daily Classes', href: '/daily-classes' },
  {
    label: 'Retreats',
    href: '/retreats',
    children: [
      { label: 'One Day Wellness Retreat', href: '/retreats/one-day-wellness' },
      { label: 'Half-Day Yoga & Massage', href: '/retreats/half-day-healing' },
      { label: "Women's Wellness Retreat", href: '/retreats/women-wellness' },
      { label: 'Senior Wellness Retreat', href: '/retreats/senior-wellness' },
      { label: 'Panchakarma Detox', href: '/retreats/panchakarma-detox' },
    ],
  },
  {
    label: 'Workshops',
    href: '/workshops',
    children: [
      { label: 'Kirtan Evening', href: '/workshops/kirtan-evening' },
      { label: 'Yin Yoga & Deep Relaxation', href: '/workshops/yin-yoga-relaxation' },
      { label: 'Breathwork & Pranayama', href: '/workshops/breathwork-pranayama' },
      { label: 'Ayurveda Workshop', href: '/workshops/ayurveda' },
      { label: 'Teacher Training Intro', href: '/workshops/teacher-training-intro' },
    ],
  },
  { label: 'Wellness', href: '/wellness' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Teachers', href: '/teachers' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];
