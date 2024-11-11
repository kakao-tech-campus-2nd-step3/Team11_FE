import styles from '@components/CounsultationSection/index.module.css';

import { MutableRefObject, useEffect } from 'react';

export const useIntersectionObserver = (
  imageRefs: MutableRefObject<(HTMLImageElement | HTMLButtonElement)[]>,
  threshold: number,
  rootMargin: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: threshold, rootMargin: rootMargin }
    );

    imageRefs.current.forEach((img: HTMLImageElement | HTMLButtonElement) => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach((img: HTMLImageElement | HTMLButtonElement) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);
};
