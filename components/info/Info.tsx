// components/Info.tsx (Skills)
"use client";
import Image from "next/image";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const skills = [
  { name: "JavaScript", icon: "/icon/js.png" },
  { name: "React", icon: "/icon/react.png" },
  { name: "Next.js", icon: "/icon/next.png" },
  { name: "Tailwind", icon: "/icon/tailwind.png" },
  { name: "TypeScript", icon: "/icon/ts.png" },
  { name: "Git & GitHub", icon: "/icon/github.png" },
];

export default function Info() {
  const scope = useSectionReveal();

  return (
    <section  className="mt-24" id="skills">
      <div className="section-heading text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
          Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base opacity-70">
          Technologies I work with regularly
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="reveal-item group flex flex-col bg-[#262626] items-center justify-center rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={skill.icon}
                fill
                alt={skill.name}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium tracking-wide opacity-90">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
