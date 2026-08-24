"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "HOME", active: true },
  { href: "#about", label: "ABOUT US" },
  { href: "#services", label: "SERVICES" },
  { href: "#why-us", label: "WHY CHOOSE US" },
  { href: "#testimonials", label: "REVIEWS" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if past hero header threshold
      setIsScrolled(currentScrollY > 50);

      // Hide when scrolling up (while away from the very top)
      if (currentScrollY < prevScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        // Show when scrolling down or when back at the top
        setIsVisible(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 sm:px-6 lg:px-8 ${
        isScrolled
          ? "top-3 sm:top-5"
          : "top-0 py-6 sm:py-8"
      } ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-28 opacity-0 pointer-events-none"
      }`}
    >
      {/* Navbar Container matching standard max-w-7xl content width */}
      <div
        className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a1615]/90 backdrop-blur-xl border border-white/15 rounded-full py-2.5 sm:py-3 px-5 sm:px-8 shadow-2xl"
            : "bg-transparent py-0 px-0"
        }`}
      >
        
        {/* Left Brand Logo */}
        <div className="flex items-center gap-5">
          <Link href="/" id="logo" className="flex items-center gap-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#c8e600] flex items-center justify-center text-[#0a1615] shadow-sm transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-none">
                Anis Home Care
              </span>
              <span className="text-[0.55rem] sm:text-[0.6rem] uppercase tracking-widest text-white/70 font-semibold mt-0.5">
                Services LLC • Northern VA
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                link.active
                  ? "text-[#c8e600]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Phone */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:7032208012"
            id="nav-phone"
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-[#c8e600] transition-colors"
          >
            <span>(703) 220-8012</span>
          </a>

          <a
            href="#contact"
            id="nav-cta"
            className="inline-flex items-center gap-2.5 sm:gap-3 bg-white hover:bg-white/95 text-[#0a1615] font-extrabold text-xs tracking-wider uppercase py-2 sm:py-2.5 pl-5 sm:pl-6 pr-2 rounded-full shadow-lg transition-all duration-200 hover:scale-[1.03]"
          >
            <span>CONTACT US</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0a1615] text-[#c8e600] flex items-center justify-center text-xs font-mono font-bold">
              →
            </div>
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-toggle"
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-1.5 sm:translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-1.5 sm:-translate-y-2" : ""
              }`}
            />
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed top-20 left-4 right-4 bg-[#0a1615]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl z-50 max-w-7xl mx-auto"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`py-2 text-sm font-bold tracking-wider ${
                  link.active ? "text-[#c8e600]" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7032208012"
              className="mt-3 text-center py-3 rounded-full bg-[#c8e600] text-[#0a1615] font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              Call (703) 220-8012
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
