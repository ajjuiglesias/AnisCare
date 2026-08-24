"use client";

import { useState, useRef } from "react";

const serviceCards = [
  {
    id: "personal-care",
    title: "Personal Care",
    description: "We provide respectful, hands-on assistance with daily living activities, ensuring safety and comfort.",
    iconType: "personal",
    badge: "Daily Living",
  },
  {
    id: "medical-care",
    title: "Medical Care",
    description: "Professional medication management, vitals monitoring, and RN clinical assessments tailored to each client.",
    iconType: "medical",
    badge: "Nurse-Led",
  },
  {
    id: "dining-nutrition",
    title: "Dining & Nutrition",
    description: "Customized healthy meal preparation, specialized diets, and ensuring proper daily hydration.",
    iconType: "dining",
    badge: "Wellness",
  },
  {
    id: "companionship",
    title: "Companionship",
    description: "Engaging conversation, mentally stimulating activities, accompanied walks, and emotional support.",
    iconType: "companion",
    badge: "Emotional Care",
  },
  {
    id: "respite-care",
    title: "Respite Care",
    description: "Flexible short-term relief for family caregivers. Available for a few hours, weekends, or scheduled breaks.",
    iconType: "respite",
    badge: "Family Relief",
  },
  {
    id: "live-in-care",
    title: "24/7 Live-In Care",
    description: "Round-the-clock supportive supervision and emergency readiness for continuous peace of mind.",
    iconType: "livein",
    badge: "24/7 Support",
  },
  {
    id: "dementia-care",
    title: "Dementia & Memory",
    description: "Gentle daily routines, cognitive engagement, and patient support for Alzheimer’s and memory loss.",
    iconType: "memory",
    badge: "Specialized",
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Safe, assisted transportation to doctor visits, pharmacy pickups, grocery shopping, and community events.",
    iconType: "transport",
    badge: "Mobility",
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<string>("medical-care");
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.firstElementChild as HTMLElement;
      // Scroll by exactly one single card's width + the 24px (gap-6) spacing
      const cardWidth = firstChild ? firstChild.getBoundingClientRect().width + 24 : 350;
      
      carouselRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-[#f7f5ee] border-b border-[#e8e4d8]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex items-end justify-between mb-12 sm:mb-16">
          
          {/* Left Title & Badge */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 text-[#191c1a] text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#191c1a] flex items-center justify-center text-[0.5rem] text-white">
                ◆
              </span>
              <span>OUR SERVICES</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-[#191c1a] font-medium leading-[1.12] tracking-tight">
              Nurturing care for every<br />
              <span className="italic font-normal text-[#191c1a]">
                step of the journey
              </span>
            </h2>
          </div>

          {/* Right Carousel Controls (Single-Card Step Navigation) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous service"
              id="services-prev-btn"
              className="w-12 h-12 rounded-full border border-[#d8d4c6] bg-white text-[#191c1a] flex items-center justify-center text-lg font-bold transition-all hover:bg-[#0a1615] hover:text-[#c8e600] hover:border-[#0a1615] active:scale-95 shadow-xs"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next service"
              id="services-next-btn"
              className="w-12 h-12 rounded-full bg-[#0a1615] text-[#c8e600] border border-[#0a1615] flex items-center justify-center text-lg font-bold transition-all hover:bg-[#1a2c28] active:scale-95 shadow-md"
            >
              →
            </button>
          </div>

        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          id="services-carousel"
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {serviceCards.map((card) => {
            const isHighlight = card.id === activeCard;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                className="snap-start flex-shrink-0 w-[86vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[410px] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e8e4d8] group"
              >
                {/* Top Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-13 h-13 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isHighlight
                          ? "bg-[#c8e600] text-[#0a1615]"
                          : "bg-[#ece8dc] text-[#191c1a] group-hover:bg-[#c8e600] group-hover:text-[#0a1615]"
                      }`}
                    >
                      {card.iconType === "personal" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 2.76 2.24 5 5 5h1v-8H5v-4c0-3.87 3.13-7 7-7s7 3.13 7 7v4h-4v8h1c2.76 0 5-2.24 5-5v-7c0-4.97-4.03-9-9-9z" />
                        </svg>
                      )}
                      {card.iconType === "medical" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M19 8h-1V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v5h-1c-.55 0-1 .45-1 1v2c0 2.97 2.16 5.44 5 5.92V18c0 .55.45 1 1 1s1-.45 1-1v-2.08c2.84-.48 5-2.95 5-5.92V9c0-.55-.45-1-1-1zm-9 6H8v-2H6v2H4v2h2v2h2v-2h2v-2z" />
                        </svg>
                      )}
                      {card.iconType === "dining" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
                        </svg>
                      )}
                      {card.iconType === "companion" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      )}
                      {card.iconType === "respite" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
                        </svg>
                      )}
                      {card.iconType === "livein" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                      )}
                      {card.iconType === "memory" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                        </svg>
                      )}
                      {card.iconType === "transport" && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                      )}
                    </div>

                    <span className="text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#ece8dc] text-[#636662]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#191c1a] mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#71717a] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Pill Button */}
                <div className="pt-6">
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-between w-full rounded-full py-2 pl-6 pr-2 transition-all duration-300 ${
                      isHighlight
                        ? "bg-[#0a1615] text-[#faf8f3]"
                        : "bg-[#ece8dc] group-hover:bg-[#0a1615] group-hover:text-[#faf8f3] text-[#191c1a]"
                    }`}
                  >
                    <span className="text-xs font-black tracking-widest uppercase">
                      LEARN MORE
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-transform ${
                        isHighlight
                          ? "bg-[#c8e600] text-[#0a1615]"
                          : "bg-[#0a1615] text-[#c8e600] group-hover:bg-[#c8e600] group-hover:text-[#0a1615]"
                      }`}
                    >
                      →
                    </div>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
