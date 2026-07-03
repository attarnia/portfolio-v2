"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type Props = {
  onClick?: () => void;
};

export default function NavItem({ onClick }: Props) {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex flex-col gap-6 md:flex-row md:items-center">
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={onClick}
            className={`relative text-sm font-medium transition ${
              active === item.href
                ? "text-foreground"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.label}

            <span
              className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                active === item.href ? "w-full" : "w-0"
              }`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
