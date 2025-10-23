import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import GalleryRow from './components/GalleryRow.jsx';
import Hero from './components/Hero.jsx';
import JournalSection from './components/JournalSection.jsx';
import Loader from './components/Loader.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import TextBand from './components/TextBand.jsx';
import { usePortfolioAnimations } from './hooks/usePortfolioAnimations.js';

const galleryDefinitions = [
  {
    title: 'Retratos editoriales',
    blurb: 'Luz natural y composiciones limpias que capturan la esencia de cada rostro.',
    frames: [
      { src: '/images/retrato1.jpg', meta: 'Madrid · Luz natural' },
      { src: '/images/retrato2.jpg', meta: 'Barcelona · Editorial urbana' },
      { src: '/images/retrato3.jpg', meta: 'Estudio · Contraluces' }
    ]
  },
  {
    title: 'Bodas minimalistas',
    blurb: 'Narrativas íntimas con énfasis en la conexión genuina y el detalle sutil.',
    frames: [
      { src: '/images/bodas1.jpg', meta: 'Lisboa · Ceremonia civil' },
      { src: '/images/bodas2.jpg', meta: 'Mallorca · Atardecer' },
      { src: '/images/bodas3.jpg', meta: 'Madrid · Azotea' }
    ]
  },
  {
    title: 'Exploración documental',
    blurb: 'Crónicas visuales de viajes que muestran el pulso de cada ciudad.',
    frames: [
      { src: '/images/ciudad1.jpg', meta: 'Tokio · Calle en movimiento' },
      { src: '/images/ciudad2.jpg', meta: 'Nueva York · Lower East Side' },
      { src: '/images/ciudad3.jpg', meta: 'Lima · Amanecer urbano' }
    ]
  },
  {
    title: 'Arquitectura nocturna',
    blurb: 'Geometrías y contrastes que resaltan la armonía del espacio urbano.',
    frames: [
      { src: '/images/noche1.jpg', meta: 'Bilbao · Museo Guggenheim' },
      { src: '/images/noche2.jpg', meta: 'Valencia · Ciudad de las Artes' },
      { src: '/images/noche3.jpg', meta: 'Singapur · Marina Bay' }
    ]
  }
];

const highlights = [
  'Dirección creativa completa para editoriales y marcas emergentes',
  'Procesos colaborativos con equipos de diseño, estilismo y música',
  'Edición minuciosa con textura cinematográfica y profundidad tonal'
];

const timeline = [
  {
    year: '2012',
    title: 'Primer editorial independiente',
    description: 'Serie “Luz líquida” publicada en revista local y premiada por Nikon Young Talents.'
  },
  {
    year: '2016',
    title: 'Residencia creativa en Berlín',
    description: 'Exploración documental de comunidades creativas; exposición colectiva en Soho House.'
  },
  {
    year: '2019',
    title: 'Fundación del estudio Joaquín Caparrós',
    description: 'Equipo multidisciplinar para producciones comerciales en Europa y LATAM.'
  },
  {
    year: '2024',
    title: 'Premio European Lens Awards',
    description: 'Reconocimiento a la serie “Metropolis at Night” en la categoría Arquitectura.'
  }
];

const services = [
  {
    title: 'Editorial Signature',
    price: 'desde 1.200 €',
    summary: 'Producciones narrativas para revistas, catálogos y campañas con enfoque minimalista.',
    features: ['Moodboard y dirección creativa', 'Equipo técnico + asistente de iluminación', 'Entrega en 7 días hábiles']
  },
  {
    title: 'Retrato Personal',
    price: 'desde 480 €',
    summary: 'Sesiones íntimas para artistas, emprendedores y storytellers que buscan identidad visual.',
    features: ['Sesión de 2 horas · 2 localizaciones', 'Styling y guía de poses', '20 fotografías retocadas']
  },
  {
    title: 'Wedding Minimal',
    price: 'desde 1.950 €',
    summary: 'Cobertura documental de bodas pequeñas con narrativa editorial y estética atemporal.',
    features: ['Cobertura hasta 10 horas', 'Galería online en 72 h', 'Álbum fine art opcional']
  }
];

const testimonials = [
  {
    name: 'Laura Méndez',
    role: 'Directora creativa, Studio Lumen',
    quote: 'Joaquín convirtió nuestro concepto en imágenes que respiran. Su cuidado por la luz es impecable.'
  },
  {
    name: 'Daniel Rivas',
    role: 'Editor jefe, Revista JUNO',
    quote: 'Una mirada única y un proceso muy profesional. Las entregas siempre superan la expectativa.'
  },
  {
    name: 'María & Hugo',
    role: 'Boda íntima en Mallorca',
    quote: 'Capturó cada emoción sin interrupciones. Tenemos un recuerdo elegante y sincero del día.'
  }
];

const journalEntries = [
  {
    slug: 'luz-y-textura',
    title: 'Luz y textura en espacios industriales',
    date: 'Abril 2025',
    excerpt: 'Un recorrido por localizaciones industriales en Bilbao, buscando geometrías y reflejos metálicos.',
    href: '#'
  },
  {
    slug: 'retratos-sin-posar',
    title: 'Retratos sin posar: guía para artistas en estudio',
    date: 'Marzo 2025',
    excerpt: 'Estrategias para generar confianza y movimiento auténtico en sesiones de retrato contemporáneo.',
    href: '#'
  },
  {
    slug: 'color-nightlife',
    title: 'Color grading para series nocturnas',
    date: 'Febrero 2025',
    excerpt: 'Cómo trabajo la gradación cromática para mantener detalle y contraste en escenas nocturnas.',
    href: '#'
  }
];

const backgroundVideo = '/images/2282013-uhd_3840_2024_24fps.mp4';

const buildGalleryImages = () =>
  galleryDefinitions.map((section) => ({
    ...section,
    images: section.frames.map((frame, index) => ({
      src: frame.src,
      meta: frame.meta,
      alt: `${section.title} - Imagen ${index + 1}`
    }))
  }));

function App() {
  const loaderRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const galleries = useMemo(() => buildGalleryImages(), []);

  usePortfolioAnimations(isReady);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const imageNodes = document.querySelectorAll('img[data-preload]');
    if (!imageNodes.length) {
      setProgress(100);
      setIsReady(true);
      document.body.style.overflow = 'auto';
      return undefined;
    }

    const watcher = imagesLoaded(imageNodes);
    const handleProgress = () => {
      const value = Math.round((watcher.progressedCount / watcher.images.length) * 100);
      setProgress(value);
    };
    const handleAlways = () => {
      setProgress(100);
      setIsReady(true);
      document.body.style.overflow = 'auto';
      document.scrollingElement?.scrollTo(0, 0);
    };

    watcher.on('progress', handleProgress);
    watcher.on('always', handleAlways);

    return () => {
      watcher.off('progress', handleProgress);
      watcher.off('always', handleAlways);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isReady || !loaderRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.to(loaderRef.current, {
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          loaderRef.current?.setAttribute('aria-hidden', 'true');
        }
      });
    });

    return () => ctx.revert();
  }, [isReady]);

  return (
    <div className="app">
      <Loader ref={loaderRef} progress={progress} />
      <main className="demo-wrapper">
        <Hero backgroundVideo={backgroundVideo} />
        <TextBand text="ARTE · LUZ · MOVIMIENTO · HISTORIAS ·" />
        <AboutSection highlights={highlights} timeline={timeline} />
        <ServicesSection services={services} />
        <TextBand text="EXPERIENCIAS · RETRATOS · ESPACIOS · MEMORIAS ·" />
        {galleries.map((gallery) => (
          <GalleryRow key={gallery.title} {...gallery} />
        ))}
        <TextBand text="INSPIRACIÓN · CONFIANZA · CO-CREACIÓN ·" />
        <TestimonialsSection testimonials={testimonials} />
        <JournalSection entries={journalEntries} />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
