'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function TasteMotion() {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.utils.toArray<HTMLElement>('[data-motion-image]').forEach((element) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 92%',
          end: 'bottom 12%',
          scrub: 0.7,
        },
      })
        .fromTo(element, { scale: 0.92, opacity: 0.72 }, { scale: 1, opacity: 1, ease: 'none', duration: 0.65 })
        .to(element, { opacity: 0.62, filter: 'brightness(0.82)', ease: 'none', duration: 0.35 });
    });

    gsap.utils.toArray<HTMLElement>('[data-motion-copy]').forEach((element) => {
      const text = element.textContent?.trim();
      if (!text) return;
      const fragment = document.createDocumentFragment();
      const accessibleCopy = document.createElement('span');
      accessibleCopy.className = 'sr-only';
      accessibleCopy.textContent = text;
      fragment.append(accessibleCopy);
      text.split(/\s+/).forEach((word, index) => {
        if (index) fragment.append(document.createTextNode(' '));
        const span = document.createElement('span');
        span.setAttribute('aria-hidden', 'true');
        span.textContent = word;
        fragment.append(span);
      });
      element.replaceChildren(fragment);
      gsap.fromTo(element.querySelectorAll('span'), { opacity: 0.16 }, {
        opacity: 1,
        stagger: 0.035,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
          end: 'bottom 48%',
          scrub: 0.7,
        },
      });
    });
  });

  return null;
}
