// lib/gsap.ts
"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export { gsap, ScrollTrigger, SplitText };
