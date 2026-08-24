import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#f7f5ee]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-gradient-to-br from-[#0a1615] via-[#10221e] to-[#0a1615] text-white rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden border border-white/10">
          
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#c8e600] rounded-full blur-3xl opacity-15 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#c8e600] rounded-full blur-3xl opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#c8e600] text-xs font-extrabold uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c8e600] animate-pulse" />
              <span>COMPLIMENTARY IN-HOME NURSE CONSULTATION</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] mb-6">
              Let us care for your loved one —{" "}
              <span className="italic font-normal text-[#c8e600]">
                with the warmth of family.
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mb-10 font-normal">
              Speak directly with Maryam Garousi, RN, BSN to discuss your loved one’s personal routine, medical background, and schedule a customized care plan across Northern Virginia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <a
                href="tel:7032208012"
                id="cta-call"
                className="inline-flex items-center gap-3.5 bg-[#c8e600] hover:bg-[#d8f41e] text-[#0a1615] font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-2xl transition-all duration-200 hover:scale-[1.03]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Call (703) 220-8012</span>
              </a>

              <a
                href="mailto:anishomecare123@gmail.com"
                id="cta-email"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-full border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-[1.03]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Send An Email Request</span>
              </a>
            </div>

            {/* 4 Trust Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs text-white/80 w-full pt-8 border-t border-white/15">
              <div className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#c8e600]/20 text-[#c8e600] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Licensed in Virginia</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#c8e600]/20 text-[#c8e600] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Medicaid Certified</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#c8e600]/20 text-[#c8e600] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Free Initial Assessment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#c8e600]/20 text-[#c8e600] flex items-center justify-center text-xs font-bold">✓</span>
                <span>Multilingual Team</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
