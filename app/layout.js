import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import FooterMeasure from '@/components/FooterMeasure';
import { site } from '@/data/site';
import './globals.css';

const manrope = localFont({
  src: './fonts/Manrope.woff2',
  weight: '200 800',
  variable: '--font-manrope',
  display: 'swap',
});

const melinda = localFont({
  src: './fonts/MelindaEvania.woff2',
  weight: '400',
  variable: '--font-melinda',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});

export const metadata = {
  metadataBase: new URL('https://baliyogastudio.org'),
  title: {
    default: 'Bali Yoga Studio — Yoga, Teacher Training & Retreats in Ubud',
    template: '%s | Bali Yoga Studio',
  },
  description:
    'Daily yoga classes, teacher training, retreats, workshops and Ayurvedic wellness at Bali Yoga Studio in Ubud, Bali.',
  openGraph: {
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
  },
  // Demo build: keep it out of search indexes until the business approves launch.
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#181818',
};

// Hides first-screen items until GSAP animates them. Skipped when the visitor
// prefers reduced motion, and undone after 2.5s if the animation never runs.
const motionScript = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('js-motion');setTimeout(function(){d.classList.remove('js-motion')},2500)}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${melinda.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
        <FooterMeasure />
      </body>
    </html>
  );
}
