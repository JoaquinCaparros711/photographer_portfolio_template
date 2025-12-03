import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const usePortfolioAnimations = (isReady) => {
  useEffect(() => {
    if (!isReady) return undefined;

    const sections = gsap.utils.toArray('section[data-scroll]');
    const animations = sections.map((section, index) => {
      const wrapper = section.querySelector('[data-wrapper]');
      if (!wrapper) return undefined;

      const hasOverflow = wrapper.scrollWidth > section.offsetWidth;
      if (!hasOverflow) return undefined;

      const isEven = index % 2 === 0;
      const [fromX, toX] = isEven
        ? [wrapper.scrollWidth * -1, 0]
        : ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1];

      return gsap.fromTo(
        wrapper,
        { x: fromX },
        {
          x: toX,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom+=90%',
            scrub: 0.8
          }
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      animations.forEach((animation) => {
        animation?.scrollTrigger?.kill();
        animation?.kill();
      });
    };
  }, [isReady]);
};
