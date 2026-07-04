// components/Services.tsx
"use client";
import ServicesCard from "./ServicesCard";
import { useSectionReveal } from "@/hooks/useSectionReveal";

function Services() {
  const scope = useSectionReveal();

  return (
    <section ref={scope} className="my-24" id="services">
      <div className="flex flex-col items-center justify-center">
        <div className="section-heading text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A1A1AA]">
            The services I can provide for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div className="reveal-item">
            <ServicesCard
              icon="/icon/pc-icon-blue.png"
              title="Web development"
              description="Designing clean, modern, and responsive user interfaces with attention to usability, performance, and visual consistency."
            />
          </div>
          <div className="reveal-item">
            <ServicesCard
              icon="/icon/pc-icon-blue.png"
              title="SEO"
              description="Designing clean, modern, and responsive user interfaces with attention to usability, performance, and visual consistency."
            />
          </div>
          <div className="reveal-item">
            <ServicesCard
              icon="/icon/pc-icon-blue.png"
              title="Ai Integrated"
              description="Designing clean, modern, and responsive user interfaces with attention to usability, performance, and visual consistency."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
