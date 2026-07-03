"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SplitText from "../ui/TextSplit";
import DotGrid from "../ui/DotGrid";
import Container from "../ui/Container";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <DotGrid
          dotSize={3}
          gap={24}
          baseColor="#111827"
          activeColor="#3B82F6"
          proximity={150}
          shockRadius={280}
          shockStrength={4}
          resistance={900}
          returnDuration={1.8}
        />
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/30" />
      <Container>
        <div className="relative z-10 w-full">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="mb-8 inline-flex items-center rounded-full border border-primary/30 bg-black/20 backdrop-blur-md overflow-hidden">
                <div className="flex items-center gap-2 border-r border-primary/20 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Open
                  </span>
                </div>

                <span className="px-4 py-2 text-sm text-white/80">
                  Available for freelance work and new opportunities
                </span>
              </div>

              <div className="flex flex-col items-start justify-start gap-1">
                <SplitText
                  text="Hi, I’m"
                  className="mb-2 text-sm tracking-[0.28em] text-gray-400"
                  delay={40}
                  duration={0.8}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />

                <SplitText
                  text="amirhossein"
                  className="mb-4 text-lg font-semibold text-primary sm:text-xl"
                  delay={50}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 25 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                />
              </div>

              <SplitText
                text="Frontend Developer"
                className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                delay={70}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
              />

              <SplitText
                text="I craft fast, elegant, and user-centered interfaces that feel premium from the first click."
                className="mb-8 max-w-xl text-muted"
                delay={10}
                duration={0.6}
                ease="power2.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
              />

              <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-background transition hover:opacity-90"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 px-6 py-3 font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  Let’s Talk
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted lg:justify-start">
                <span className="rounded-full border border-border/60 px-3 py-1">
                  React & Next.js
                </span>
                <span className="rounded-full border border-border/60 px-3 py-1">
                  UI systems
                </span>
                <span className="rounded-full border border-border/60 px-3 py-1">
                  Performance-first
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-secondary/20 blur-3xl" />
                <div className="panel relative p-3">
                  <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/img/test.jpg"
                      alt="amirhossein"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-border/70 bg-background/70 p-3 text-center">
                      <div className="text-lg font-semibold text-foreground">
                        5+
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.24em] text-muted">
                        Projects
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/70 p-3 text-center">
                      <div className="text-lg font-semibold text-foreground">
                        100%
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.24em] text-muted">
                        Focus
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/70 p-3 text-center">
                      <div className="text-lg font-semibold text-foreground">
                        24/7
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.24em] text-muted">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
