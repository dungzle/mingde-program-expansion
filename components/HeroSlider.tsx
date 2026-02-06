"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    src: "/student-exchange.webp",
    alt: "Canadian and Chinese high school students participating in a student exchange program",
    headline: "Learn Beyond Borders",
    subline: "A structured student exchange between Canada and China",
    position: "center 35%",
  },
  {
    src: "/CCSEP-Great-Wall.webp",
    alt: "Students visiting the Great Wall of China during a cultural exchange",
    headline: "Experience China Firsthand",
    subline: "Language, culture, and daily life — not just tourism",
    position: "center 35%",
  },
  {
    src: "/parliament.jpg",
    alt: "Legislative Assembly of British Columbia representing civic education",
    headline: "Global Citizenship Starts Young",
    subline: "Building confidence through real-world learning",
    position: "center 35%",
  },
  {
    src: "/royal-road.webp",
    alt: "Royal Roads University campus symbolizing academic inspiration",
    headline: "Inspired by Academic Excellence",
    subline: "Learning environments that prepare students for the future",
    position: "center 55%",
  },
  {
    src: "/uvic.webp",
    alt: "University of Victoria campus representing global education pathways",
    headline: "A Pathway to the World",
    subline: "Connecting secondary education with global opportunities",
    position: "center 50%",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      if (!hasInteracted.current) {
        setActiveIndex((prev) => (prev + 1) % SLIDES.length);
      }
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    hasInteracted.current = true;
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    hasInteracted.current = true;
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handleDotClick = (index: number) => {
    hasInteracted.current = true;
    setActiveIndex(index);
  };

  return (
    <section
      aria-label="Mingde International Student Exchange Program"
      className="relative w-full min-h-[360px] md:min-h-[480px] lg:min-h-[520px] overflow-hidden bg-brand-light"
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            style={{ objectPosition: slide.position }}
            sizes="100vw"
            priority={index === 0}
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="max-w-3xl text-white">
              {/* SEO: Only ONE H1, always indexable */}
              {index === 0 ? (
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                  {slide.headline}
                </h1>
              ) : (
                <p className="text-3xl md:text-5xl font-semibold tracking-tight">
                  {slide.headline}
                </p>
              )}

              <p className="mt-4 text-base md:text-xl text-white/90">
                {slide.subline}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* previous */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-white/80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 md:h-10 md:w-10"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* next */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-white/80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 md:h-10 md:w-10"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
