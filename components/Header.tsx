"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CTAButton from "@/components/CTAButton";

interface NavLink {
  label: string;
  id: string;
  href?: string;
}

interface NavDropdownLinks {
  program: NavLink[];
  studentLife: NavLink[];
}

const NAV_DROPDOWN_LINKS: NavDropdownLinks = {
  program: [
    {
      label: "Program Overview",
      id: "program-overview",
      href: "/program-overview",
    },
    {
      label: "Academic Experience",
      id: "academic-experience",
      href: "/academic-experience",
    },
    {
      label: "Workshops & Cultural Activities",
      id: "workshops-cultural-activities",
      href: "/workshops-cultural-activities",
    },
  ],
  studentLife: [
    {
      label: "Daily Life & Student Pairing",
      id: "daily-life-student-pairing",
      href: "/daily-life-student-pairing",
    },
    {
      label: "Accommodation & Safety",
      id: "accommodation-safety",
      href: "/accommodation-safety",
    },
  ],
  planning: [
    {
      label: "Travel & Timeline",
      id: "travel-timeline",
      href: "/travel-timeline",
    },
    {
      label: "Accommodation & Safety",
      id: "accommodation-safety",
      href: "/accommodation-safety",
    },
  ],
};

const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    id: "home",
    href: "/",
  },
  {
    label: "About",
    id: "about",
    href: "/about",
  },
  {
    label: "Program",
    id: "program",
    href: "/program",
  },
  {
    label: "Student Life",
    id: "student-life",
    href: "/student-life",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };
  const handleMobileToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="sticky top-0 bg-brand-dark border-b border-brand-gold z-50">
      <div className="max-w-7xl mx-auto px-6 min-h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 lg:gap-4 cursor-pointer transition-all duration-300 min-w-0"
        >
          <Image
            src="/mingde-logo.png"
            alt="Mingde Logo"
            width={100}
            height={100}
            className={`transition-all duration-500 h-10 md:h-14 w-auto object-contain shrink-0`}
          />
          <span className="font-sans font-bold text-sm md:text-xl tracking-tight transition-all duration-300 text-brand-gold wrap-break-word">
            Mingde International Program
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-white hover:text-brand-gold transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block shrink-0">
          <CTAButton href="/contact">Apply Now</CTAButton>
        </div>

        <button
          type="button"
          onClick={handleMobileToggle}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-gold hover:bg-brand-gold/10 transition shrink-0"
        >
          <span className="sr-only">Toggle navigation</span>
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-brand-gold bg-brand-dark transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={handleNavClick}
              className="text-white text-sm font-medium hover:text-brand-gold transition"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <CTAButton href="/contact">Apply Now</CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
