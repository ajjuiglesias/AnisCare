"use client";

import Image from "next/image";

const columnsData = [
  {
    id: "nurse-led",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    title: "Nurse-Led Care",
    badge: "28+ Years Clinical",
    description:
      "Founded and supervised by Maryam Garousi, RN, BSN. Every care plan begins with an in-depth in-home health assessment.",
    highlight: false,
  },
  {
    id: "vetting",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Caregiver Matching",
    badge: "Rigorous Vetting",
    description:
      "Caregivers matched by personality, clinical requirements, and daily routine for seamless comfort and trust.",
    highlight: true,
  },
  {
    id: "multilingual",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
    title: "Multilingual Care",
    badge: "7+ Languages",
    description:
      "Caregivers speaking Farsi, Russian, Turkish, Spanish, Chinese, Hindi, and English across Northern Virginia.",
    highlight: false,
  },
  {
    id: "availability",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Availability",
    badge: "24–48h Startup",
    description:
      "Flexible short-term, long-term, hourly, overnight, and live-in schedules with rapid response care.",
    highlight: false,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-20 lg:py-28 bg-white border-b border-[#e8e4d8]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 text-[#191c1a] text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#191c1a] flex items-center justify-center text-[0.5rem] text-white">
                ◆
              </span>
              <span>WHY CHOOSE ANIS CARE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-[#191c1a] font-medium leading-[1.12] tracking-tight">
              Because your loved ones<br />
              <span className="italic font-normal text-[#191c1a]">
                deserve the best care
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#636662] max-w-md leading-relaxed">
            With 28+ years of clinical RN leadership, we provide compassionate, personalized in-home support that preserves dignity, health, and family peace of mind.
          </p>
        </div>

        {/* 4-Column Modern Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {columnsData.map((col) => (
            <div
              key={col.id}
              className={`rounded-[2rem] p-8 sm:p-9 flex flex-col justify-between min-h-[340px] transition-all duration-300 border ${
                col.highlight
                  ? "bg-[#0a1615] text-white border-[#0a1615] shadow-xl hover:scale-[1.02]"
                  : "bg-[#f7f5ee] text-[#191c1a] border-[#e8e4d8] shadow-xs hover:shadow-xl hover:border-[#c8e600] hover:bg-white"
              }`}
            >
              <div>
                {/* Top Icon + Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-13 h-13 rounded-full flex items-center justify-center transition-colors ${
                      col.highlight
                        ? "bg-[#c8e600] text-[#0a1615]"
                        : "bg-[#ece8dc] text-[#191c1a]"
                    }`}
                  >
                    {col.icon}
                  </div>
                  <span
                    className={`text-[0.65rem] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full ${
                      col.highlight
                        ? "bg-white/10 text-[#c8e600] border border-white/10"
                        : "bg-[#ece8dc] text-[#636662]"
                    }`}
                  >
                    {col.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-serif text-2xl font-bold mb-3 ${
                    col.highlight ? "text-white" : "text-[#191c1a]"
                  }`}
                >
                  {col.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    col.highlight ? "text-white/80" : "text-[#636662]"
                  }`}
                >
                  {col.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-current/10">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                    col.highlight
                      ? "text-[#c8e600] hover:underline"
                      : "text-[#191c1a] hover:text-[#325238]"
                  }`}
                >
                  <span>Learn More</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Split Banner: "Because your loved ones deserve the best care" */}
        <div className="bg-[#f7f5ee] rounded-[2.5rem] p-8 sm:p-12 lg:p-14 border border-[#e8e4d8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image: 5 cols */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Senior couple smiling together at home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Right Checklist: 7 cols */}
            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#191c1a] font-medium leading-tight mb-4">
                Personalized support,{" "}
                <span className="italic font-normal text-[#6b7268]">
                  tailored to your family.
                </span>
              </h3>
              <p className="text-sm text-[#636662] leading-relaxed mb-8">
                Every caregiver is personally screened, background checked, and trained with direct clinical supervision from founder Maryam Garousi, RN.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Rigorous Caregiver Vetting",
                    desc: "Background checked, reference verified, nurse-trained.",
                  },
                  {
                    title: "RN-Led Care Plans",
                    desc: "In-home clinical assessment tailored to each client.",
                  },
                  {
                    title: "Cultural Understanding",
                    desc: "Multilingual team matching communication comfort.",
                  },
                  {
                    title: "Transparent Family Notes",
                    desc: "Regular updates and direct supervisor contact.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#e8e4d8] flex items-start gap-3 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#c8e600] text-[#0a1615] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#191c1a] mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#636662] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
