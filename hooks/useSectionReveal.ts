// hooks/useSectionReveal.ts
"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionRevealOptions {
  headingSelector?: string;
  itemSelector?: string;
  itemStagger?: number;
}

export function useSectionReveal({
  headingSelector = ".section-heading > *",
  itemSelector = ".reveal-item",
  itemStagger = 0.08,
}: SectionRevealOptions = {}) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const headingEls = gsap.utils.toArray<HTMLElement>(
        headingSelector,
        scope.current,
      );
      const itemEls = gsap.utils.toArray<HTMLElement>(
        itemSelector,
        scope.current,
      );

      if (reduceMotion) {
        gsap.set([...headingEls, ...itemEls], { opacity: 1, y: 0 });
        return;
      }

      if (headingEls.length) {
        gsap.from(headingEls, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: scope.current, start: "top 80%" },
        });
      }

      if (itemEls.length) {
        ScrollTrigger.batch(itemEls, {
          start: "top 85%",
          once: true,
          onEnter: (batch) =>
            gsap.from(batch, {
              y: 30,
              opacity: 0,
              duration: 0.5,
              stagger: itemStagger,
              ease: "power3.out",
              overwrite: true,
            }),
        });
      }
    },
    { scope },
  );

  return scope;
}
