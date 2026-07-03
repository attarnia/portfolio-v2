"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

type ProjectCard2Props = {
  img: string;
  title: string;
  description: string;
  demo: string;
  tech?: string[];
};

export default function ProjectCard2({
  img,
  title,
  description,
  demo,
  tech = [],}: ProjectCard2Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      className="group h-full w-full rounded-[1.6rem] border border-border/70 bg-surface/80 p-5 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-65 w-full overflow-hidden rounded-[1.2rem] bg-black/5">
 

        <Image
          src={img}
          fill
          alt={title}
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>

      <h3 className="mt-5 text-center text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-center text-sm leading-relaxed text-muted">
        {description}
      </p>

      {Array.isArray(tech) && tech.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-background transition hover:opacity-90"
        >
          Live Demo
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
