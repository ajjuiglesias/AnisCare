import Image from "next/image";

const stats = [
  { value: "28+", label: "Years of RN Experience" },
  { value: "500+", label: "Seniors Cared" },
  { value: "50+", label: "Multilingual Care Experts" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

export default function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-white border-b border-[#e2ede4]/60">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Tag: WHO WE ARE (Demo 1 Style) */}
        <div className="inline-flex items-center gap-2 mb-10 text-[#191c1a] text-xs font-extrabold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#c8e600]" />
          <span>WHO WE ARE</span>
        </div>

        {/* 2-Column Split: Image Left, Headline & Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: 5 cols with Rounded Lifestyle Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
              <Image
                src="/images/about-walk.jpg"
                alt="Caregiver walking cheerfully in garden with senior man"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: 7 cols with Serif Headline and Description */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[2.75rem] text-[#191c1a] font-medium leading-[1.2] tracking-tight mb-6">
              We believe aging should be filled with comfort respect, and meaningful moments,{" "}
              <span className="text-[#888c88] font-normal italic block sm:inline mt-1 sm:mt-0">
                our senior care services are thoughtfully designed to provide personalized support.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#636662] leading-relaxed mb-8 max-w-2xl font-normal">
              With a team of trained caregivers and a warm, welcoming environment, we ensure every resident feels secure, connected, and truly cared for. Our senior care services are thoughtfully designed to provide personalized attention, daily assistance, emotional support, dignity, comfort.
            </p>

            {/* Learn More Button with Lime Arrow Circle */}
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-[#191c1a] font-extrabold text-xs tracking-wider uppercase group hover:text-[#325238] transition-colors"
            >
              <span className="border-b-2 border-[#191c1a] pb-0.5 group-hover:border-[#325238] transition-colors">
                LEARN MORE
              </span>
              <div className="w-8 h-8 rounded-full bg-[#c8e600] text-[#0a1615] flex items-center justify-center text-xs font-mono font-bold group-hover:scale-110 transition-transform shadow-sm">
                →
              </div>
            </a>

          </div>

        </div>

        {/* Stats Row: 4 Columns Directly Underneath (Demo 1 Style) */}
        <div className="pt-12 border-t border-[#e2ede4]/80 grid grid-cols-2 md:grid-cols-4 gap-8 text-left sm:text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start sm:items-center">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#191c1a] tracking-tight mb-1">
                {stat.value.replace("+", "").replace("%", "")}
                <span className="text-[#c8e600] font-normal">
                  {stat.value.includes("+") ? "+" : "%"}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#636662] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
