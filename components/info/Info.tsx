"use client";
import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "/icon/js.png" },
  { name: "React", icon: "/icon/react.png" },
  { name: "Next.js", icon: "/icon/next.png" },
  { name: "Tailwind", icon: "/icon/tailwind.png" },
  { name: "TypeScript", icon: "/icon/ts.png" },
  { name: "Git & GitHub", icon: "/icon/github.png" },
];

export default function Info() {
  return (
    <section className="mt-24" id="skills">
      <div className="section-heading text-center mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Core stack
        </p>
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Skills & Tools
        </h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          I focus on modern frontend tooling that keeps products fast, scalable,
          and easy to maintain.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="reveal-item group flex flex-col items-center justify-center rounded-[1.4rem] border border-border/70 bg-surface/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative mb-4 h-16 w-16 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={skill.icon}
                fill
                alt={skill.name}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium tracking-wide text-foreground">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
