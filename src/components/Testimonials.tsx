"use client";

import { useState } from "react";
import Image from "next/image";

const initialTestimonials = [
  {
    id: "1",
    name: "Sara jahan",
    role: "helpful team",
    location: "Fairfax, VA",
    quote:
      "The caregivers treated my mother with so much kindness and patience. We noticed a real improvement in her mood and overall well-being. It gave our entire family peace of mind.",
    type: "text",
  },
  {
    id: "2",
    name: "Sujon ahmed",
    role: "family of resident",
    location: "Alexandria, VA",
    image: "/images/testimonial-1.jpg",
    type: "photo",
  },
  {
    id: "3",
    name: "James smith",
    role: "family of resident",
    location: "Woodbridge, VA",
    image: "/images/testimonial-2.jpg",
    type: "photo",
  },
  {
    id: "4",
    name: "Jony ahmed",
    role: "helpful team",
    location: "Arlington, VA",
    quote:
      "Maryam Garousi’s RN supervision makes all the difference. The team is prompt, reliable, and truly empathetic with my father’s daily routines and medication reminders.",
    type: "text",
  },
  {
    id: "5",
    name: "James smith",
    role: "helpful team",
    location: "McLean, VA",
    quote:
      "After my grandmother’s surgery, the recovery care was outstanding. The staff handled everything with professionalism and genuine compassion.",
    type: "text",
  },
  {
    id: "6",
    name: "Sara jahan",
    role: "family of resident",
    location: "Loudoun County, VA",
    image: "/images/testimonial-3.jpg",
    type: "photo",
  },
];

const additionalTestimonials = [
  {
    id: "7",
    name: "Soraya M.",
    role: "daughter of client",
    location: "Fairfax, VA",
    quote:
      "Finding a caregiver fluent in Farsi was a blessing for my mother. She felt understood, respected, and comfortable from day one.",
    stars: 5,
  },
  {
    id: "8",
    name: "David K.",
    role: "family caregiver",
    location: "Springfield, VA",
    quote:
      "The 24/7 responsiveness and transparent daily care notes gave our family continuous reassurance while we were at work.",
    stars: 5,
  },
  {
    id: "9",
    name: "Helen R.",
    role: "client family",
    location: "Vienna, VA",
    quote:
      "Anis Home Care provided exceptional respite care during our family vacation. We knew my father was in the safest clinical hands.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="testimonials" className="w-full py-20 lg:py-28 bg-[#f7f5ee] border-b border-[#e8e4d8]">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-[#191c1a] text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#191c1a] flex items-center justify-center text-[0.5rem] text-white">
              ◆
            </span>
            <span>TESTIMONIALS</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-[#191c1a] font-medium leading-[1.15] tracking-tight">
            Trusted by families<br />
            <span className="italic font-normal text-[#191c1a]">
              cherished by seniors
            </span>
          </h2>
        </div>

        {/* 3-Column Alternating Bento Grid (matching reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-14">
          
          {/* ================= COLUMN 1 (Left) ================= */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            {/* Top Text Card: Sara jahan */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 border border-[#e8e4d8] shadow-xs hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-[#e8e4d8]/60">
                <div className="w-10 h-10 rounded-full bg-[#10201c] text-[#c8e600] flex items-center justify-center font-serif font-bold text-sm flex-shrink-0">
                  S
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#191c1a] leading-tight">
                    Sara jahan
                  </h3>
                  <p className="text-xs text-[#8e908c] font-normal">
                    helpful team
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#636662] leading-relaxed font-normal">
                The caregivers treated my mother with so much kindness and patience. We noticed a real improvement in her mood and overall well-being. It gave our entire family peace of mind.
              </p>
            </div>

            {/* Bottom Photo Card: Sujon ahmed (Senior with Cane) */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-lg border border-black/5 group">
              <Image
                src="/images/testimonial-1.jpg"
                alt="Senior man sitting with walking cane"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-[#c8e600] flex items-center justify-center font-serif font-bold text-xs border border-white/30 flex-shrink-0">
                    S
                  </div>
                  <div className="text-white">
                    <h4 className="text-sm font-serif font-bold leading-tight">
                      Sujon ahmed
                    </h4>
                    <p className="text-[0.7rem] text-white/75 font-normal">
                      family of resident
                    </p>
                  </div>
                </div>

                <button
                  aria-label="Play video testimonial"
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-xs transition-transform group-hover:scale-110 hover:bg-[#c8e600] hover:text-[#0a1615] flex-shrink-0"
                >
                  ▶
                </button>
              </div>
            </div>

          </div>

          {/* ================= COLUMN 2 (Center) ================= */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            {/* Top Photo Card: James smith (Senior with Glasses) */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-lg border border-black/5 group">
              <Image
                src="/images/testimonial-2.jpg"
                alt="Smiling elderly man with glasses in jacket"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-[#c8e600] flex items-center justify-center font-serif font-bold text-xs border border-white/30 flex-shrink-0">
                    J
                  </div>
                  <div className="text-white">
                    <h4 className="text-sm font-serif font-bold leading-tight">
                      James smith
                    </h4>
                    <p className="text-[0.7rem] text-white/75 font-normal">
                      family of resident
                    </p>
                  </div>
                </div>

                <button
                  aria-label="Play video testimonial"
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-xs transition-transform group-hover:scale-110 hover:bg-[#c8e600] hover:text-[#0a1615] flex-shrink-0"
                >
                  ▶
                </button>
              </div>
            </div>

            {/* Bottom Text Card: Jony ahmed */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 border border-[#e8e4d8] shadow-xs hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-[#e8e4d8]/60">
                <div className="w-10 h-10 rounded-full bg-[#10201c] text-[#c8e600] flex items-center justify-center font-serif font-bold text-sm flex-shrink-0">
                  J
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#191c1a] leading-tight">
                    Jony ahmed
                  </h3>
                  <p className="text-xs text-[#8e908c] font-normal">
                    helpful team
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#636662] leading-relaxed font-normal">
                Maryam Garousi’s RN supervision makes all the difference. The team is prompt, reliable, and truly empathetic with my father’s daily routines and medication reminders.
              </p>
            </div>

          </div>

          {/* ================= COLUMN 3 (Right) ================= */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            {/* Top Text Card: James smith */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 border border-[#e8e4d8] shadow-xs hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-[#e8e4d8]/60">
                <div className="w-10 h-10 rounded-full bg-[#10201c] text-[#c8e600] flex items-center justify-center font-serif font-bold text-sm flex-shrink-0">
                  J
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#191c1a] leading-tight">
                    James smith
                  </h3>
                  <p className="text-xs text-[#8e908c] font-normal">
                    helpful team
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#636662] leading-relaxed font-normal">
                After my grandmother’s surgery, the recovery care was outstanding. The staff handled everything with professionalism and genuine compassion.
              </p>
            </div>

            {/* Bottom Photo Card: Sara jahan (Senior Woman) */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-lg border border-black/5 group">
              <Image
                src="/images/testimonial-3.jpg"
                alt="Smiling elderly woman with silver hair"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-[#c8e600] flex items-center justify-center font-serif font-bold text-xs border border-white/30 flex-shrink-0">
                    S
                  </div>
                  <div className="text-white">
                    <h4 className="text-sm font-serif font-bold leading-tight">
                      Sara jahan
                    </h4>
                    <p className="text-[0.7rem] text-white/75 font-normal">
                      family of resident
                    </p>
                  </div>
                </div>

                <button
                  aria-label="Play video testimonial"
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-xs transition-transform group-hover:scale-110 hover:bg-[#c8e600] hover:text-[#0a1615] flex-shrink-0"
                >
                  ▶
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ================= Expanded Testimonials Row (When Toggled) ================= */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 animate-fadeIn">
            {additionalTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[2rem] p-7 sm:p-8 border border-[#e8e4d8] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#c8e600] text-sm mb-4">★★★★★</div>
                  <p className="text-xs sm:text-sm text-[#636662] leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e8e4d8]/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#191c1a]">{item.name}</h4>
                    <p className="text-[0.7rem] text-[#8e908c] capitalize">{item.role}</p>
                  </div>
                  <span className="text-[0.65rem] text-[#325238] font-bold bg-[#e2ede4] px-2 py-0.5 rounded-full">
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= SEE MORE TESTIMONIALS BUTTON ================= */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            id="see-more-testimonials-btn"
            className="inline-flex items-center gap-3.5 bg-[#0a1615] hover:bg-[#1a2c28] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 pl-8 pr-3 rounded-full shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <span>{showMore ? "SHOW LESS REVIEWS" : "SEE MORE TESTIMONIALS"}</span>
            <div className="w-8 h-8 rounded-full bg-[#c8e600] text-[#0a1615] flex items-center justify-center text-xs font-mono font-bold transition-transform">
              {showMore ? "↑" : "↓"}
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
