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
  tech = [],
}: ProjectCard2Props) {
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
        }
      );
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="w-full rounded-2xl bg-[#262626] text-foreground shadow-md hover:shadow-xl transition-shadow p-5"
    >
      {/* Image */}
      <div className="relative w-full h-65 rounded-xl overflow-hidden bg-black/5">
        <Image src={img} fill alt={title} className="object-contain" priority />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mt-5 text-center">{title}</h3>

      {/* Description */}
      <p className="text-center text-sm mt-2 leading-relaxed opacity-80">
        {description}
      </p>

      {/* Tech Stack */}
      {Array.isArray(tech) && tech.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs rounded-full border border-electro-blue text-electro-blue"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-center mt-6">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-electro-blue text-black text-md font-bold hover:opacity-90 transition"
        >
          Live Demo
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
