"use client";

import Image from "next/image";
import { Github, Send, Linkedin, Phone } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Split title
      const split = new SplitText(".hero-title", {
        type: "chars,words",
      });

      // Main timeline
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
      });

      tl.from(".hero-sub", {
        y: 30,
        opacity: 0,
        duration: 0.3,
      })
        .from(
          ".hero-name",
          {
            y: 30,
            opacity: 0,
            duration: 0.3,
          },
          "-=0.3",
        )
        .from(
          split.chars,
          {
            y: 80,
            opacity: 0,
            duration: 0.3,
            stagger: 0.04,
          },
          "-=0.2",
        )
        .from(
          ".hero-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(".hero-btn", {
          opacity: 100,
          duration: 0.5,
        })
        .from(
          ".hero-image",
          {
            scale: 0.85,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=1",
        )
        .from(
          ".hero-social",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
          },
          "-=0.4",
        );

      gsap.to(".hero-image", {
        y: -40,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container },
  );

  return (
    <section ref={container} className="mt-24" id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left">
          <h4 className="hero-sub text-sm tracking-wide text-gray-400 mb-2">
            Hi I am
          </h4>

          <h3 className="hero-name text-lg sm:text-xl font-semibold text-electro-blue mb-4">
            amirhossein
          </h3>

          <h2 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Frontend <br /> Developer
          </h2>

          <p className="hero-desc text-gray-400 max-w-md mb-8">
            I build modern, responsive, and high-quality web interfaces with
            clean code and great user experience.
          </p>

            <a
            href="https://t.me/Aa_alfa"
            target="_blank"
            className="mt-4 px-7 py-3 rounded-lg bg-electro-blue hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex flex-col items-center">
          <div className="hero-image relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-4 border-electro-blue/80" />
            <Image
              src="/img/test.jpg"
              alt="amirhossein"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>

          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/amir-hossein13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://t.me/Aa_alfa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a
              href="https://linkedin.com/in/amirhossein-attarnia-2043002bb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/+989934904062"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-electro-blue hover:text-white transition"
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
