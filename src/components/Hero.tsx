import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] sm:min-h-[750px] lg:min-h-[850px] max-h-[1100px] flex flex-col justify-end overflow-hidden bg-[#0a1615]"
    >
      {/* Background Image: Carefully positioned for mobile and desktop */}
      <Image
        src="/images/hero-banner.jpg"
        alt="Compassionate nurse standing behind smiling senior man"
        fill
        priority
        className="object-cover object-[78%_15%] sm:object-[70%_22%] md:object-[65%_28%] lg:object-[60%_35%]"
        sizes="100vw"
      />

      {/* Responsive Gradient Overlays: Ensures faces are visible at the top, text is readable at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1615] via-[#0a1615]/70 sm:via-[#0a1615]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1615]/90 via-[#0a1615]/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a1615]/80 to-transparent pointer-events-none" />

      {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 pt-28 sm:pt-32 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-14">
          
          {/* Left Column: Tag, Headline, Subtext, CTA Button */}
          <div className="flex flex-col items-start max-w-xl lg:max-w-2xl">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 text-[#c8e600] text-[0.65rem] sm:text-xs font-extrabold uppercase tracking-widest bg-[#0a1615]/60 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10 sm:border-0 sm:p-0 sm:bg-transparent">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-xs bg-[#c8e600] text-[#0a1615] flex items-center justify-center text-[0.6rem] sm:text-[0.65rem] font-black">
                +
              </span>
              <span>TRUSTED CARE FOR EVERY STAGE OF LIFE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] text-white font-medium leading-[1.12] tracking-tight mb-3 sm:mb-4">
              Senior support built<br />
              on safety trust and<br />
              <span className="italic font-normal text-white">
                compassion.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-lg leading-relaxed mb-6 font-normal">
              Nurse-led in-home care helping Northern Virginia seniors live safely with dignity, comfort, and independence every single day.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                id="hero-cta-get-started"
                className="inline-flex items-center justify-between gap-3 sm:gap-4 bg-[#c8e600] hover:bg-[#d8f41e] text-[#0a1615] font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3 sm:py-3.5 pl-6 sm:pl-7 pr-2.5 sm:pr-3 rounded-full shadow-2xl transition-all duration-200 hover:scale-[1.03]"
              >
                <span>GET STARTED NOW</span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0a1615] text-[#c8e600] flex items-center justify-center text-xs sm:text-sm font-mono font-bold">
                  →
                </div>
              </a>

              <a
                href="tel:7032208012"
                id="hero-cta-call"
                className="inline-flex sm:hidden items-center gap-2 bg-white/10 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-5 rounded-full border border-white/20 backdrop-blur-md"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#c8e600]" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>(703) 220-8012</span>
              </a>
            </div>

          </div>

          {/* Right Column: Floating Stat Card (Hidden on mobile devices, shown on tablet/desktop) */}
          <div className="hidden sm:flex justify-start lg:justify-end">
            <div className="bg-[#0a1615]/85 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 lg:p-7 w-full sm:max-w-xs shadow-2xl">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[#c8e600] text-[0.6rem] sm:text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-4 border border-white/10">
                <span>♥</span>
                <span>BETTER HEALTH</span>
                <span>✦</span>
              </div>

              {/* Number & Subtext */}
              <div className="flex sm:block items-baseline gap-3 sm:gap-0">
                <div className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-none mb-1 sm:mb-2">
                  96%
                </div>
                <p className="text-[0.75rem] sm:text-xs md:text-sm text-white/80 leading-snug">
                  Empowering safer more active days with personalized nurse-led support.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
