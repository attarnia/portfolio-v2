"use client";

import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="text-2xl font-bold tracking-wide text-foreground">
          Amir<span className="text-primary">.</span>
        </a>

        <div className="hidden md:block">
          <NavItem />
        </div>

        <a
          href="https://t.me/Aa_alfa"
          target="_blank"
          className="rounded-2xl bg-primary px-7 py-3 text-background transition hover:opacity-90"
        >
          Contact Me
        </a>

        <button
          onClick={toggle}
          className="rounded-lg p-2 transition hover:bg-surface-light md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-border bg-background/80 backdrop-blur-xl">
          <nav className="px-6 py-6">
            <NavItem onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      </div>
    </header>
  );
}
