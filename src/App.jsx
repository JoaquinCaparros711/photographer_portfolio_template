import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
import Footer from './components/Footer.jsx';
import GalleryRow from './components/GalleryRow.jsx';
import Hero from './components/Hero.jsx';
import Loader from './components/Loader.jsx';
import TextBand from './components/TextBand.jsx';
import { usePortfolioAnimations } from './hooks/usePortfolioAnimations.js';

const BASE_WIDTH = 1240;
const BASE_HEIGHT = 874;

const galleryDefinitions = [
  {
    title: 'Retratos editoriales',
    blurb: 'Luz natural y composiciones limpias que capturan la esencia de cada rostro.',
    frames: [
      { src: '/images/52D9ED8B-D70A-40BF-8B6B-00AC63E35E36_1_201_a.jpeg', meta: 'Madrid · Golden Hour' },
      { src: '/images/552D137E-B649-41E4-9DB3-9FF59F8ED57C_1_201_a.jpeg', meta: 'Barcelona · Editorial urbana' },
      { src: '/images/6149B43B-A39C-4CCD-91CC-6CDCA31F3B2F_1_201_a.jpeg', meta: 'Estudio · Luz lateral' }
    ]
  },
  {
    title: 'Bodas minimalistas',
    blurb: 'Narrativas íntimas con énfasis en la conexión genuina y el detalle sutil.',
    frames: [
      { src: '/images/7CF37C9A-10B9-465D-9DA2-4238792C0AB3_1_201_a.jpeg', meta: 'Lisboa · Ceremonia civil' },
      { src: '/images/8E40AB30-EF88-40C1-8BF6-9C65293B4CA2_1_201_a.jpeg', meta: 'Mallorca · Atardecer' },
      { src: '/images/A6BABF14-45ED-4172-970F-A3E5CB5E1A16_1_201_a.jpeg', meta: 'Madrid · Azotea' }
    ]
  },
  {
    title: 'Exploración documental',
    blurb: 'Crónicas visuales de viajes que muestran el pulso de cada ciudad.',
    frames: [
      { src: '/images/AF4C9837-CDF8-4877-871B-7CF07B15261B_1_201_a.jpeg', meta: 'Tokio · Calle en movimiento' },
      { src: '/images/B30DC01E-D220-4C81-8D10-54C91D70221F_1_201_a.jpeg', meta: 'Nueva York · Lower East Side' }
    ]
  },
  {
    title: 'Arquitectura nocturna',
    blurb: 'Geometrías y contrastes que resaltan la armonía del espacio urbano.',
    frames: [
      { src: '/images/B702F7D7-A7C5-4240-9964-0792B3287375_1_201_a.jpeg', meta: 'Bilbao · Museo Guggenheim' },
      { src: '/images/E1DA09DA-37A6-47EE-BDE8-DFCB30C03A2E_1_201_a.jpeg', meta: 'Singapur · Marina Bay' }
    ]
  }
];

const marqueeTexts = [
  'ARTE · LUZ · MOVIMIENTO · HISTORIAS ·',
  'EXPERIENCIAS · RETRATOS · ESPACIOS · MEMORIAS ·'
];

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
        <Hero />
        {marqueeTexts.map((text) => (
          <TextBand key={text} text={text} />
        ))}
        {galleries.map((gallery) => (
          <GalleryRow key={gallery.title} {...gallery} />
        ))}
        <TextBand text="INSPIRACIÓN · CONFIANZA · CO-CREACIÓN ·" />
        <Footer />
      </main>
    </div>
  );
}

export default App;
