"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="main-footer" className="w-full bg-[#0a1615] text-white border-t border-white/10">
      {/* Main Footer Container */}
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Newsletter: 4 cols */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-lg bg-[#c8e600] flex items-center justify-center text-[#0a1615] shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  Anis<span className="font-sans font-normal text-white/85 text-xl">Care</span>
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
              Compassionate, nurse-led senior home care in Northern Virginia. Founded by Maryam Garousi, RN, BSN with 28+ years of clinical nursing leadership.
            </p>

            {/* Newsletter form */}
            <div className="w-full max-w-sm">
              <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                Subscribe for care updates & senior wellness tips
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 bg-white/10 rounded-full p-1.5 border border-white/15 focus-within:border-[#c8e600]"
              >
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-transparent text-xs text-white placeholder-white/40 px-3.5 py-1.5 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-[#c8e600] text-[#0a1615] flex items-center justify-center font-bold text-xs hover:bg-[#d8f41e] transition-colors"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links: 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#hero" className="hover:text-[#c8e600] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c8e600] transition-colors">About Maryam Garousi</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8e600] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#c8e600] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#c8e600] transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#c8e600] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Services List: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Care Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#services" className="hover:text-[#c8e600] transition-colors">Personal Care & Hygiene</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8e600] transition-colors">Private Nurse & CNA Care</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8e600] transition-colors">Dining & Nutrition Support</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8e600] transition-colors">Companionship & Socialization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8e600] transition-colors">Respite & 24/7 Live-In Care</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c8e600] transition-colors">Dementia & Alzheimer’s Care</a>
              </li>
            </ul>
          </div>

          {/* Contact Details: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Contact & Coverage
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div>
                <p className="font-semibold text-white">Direct Clinical Line:</p>
                <a href="tel:7032208012" className="text-[#c8e600] font-bold text-sm hover:underline">
                  (703) 220-8012
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Agency Office:</p>
                <a href="tel:15715954443" className="hover:text-white transition-colors">
                  1 (571) 595-4443
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Email Consultations:</p>
                <a href="mailto:anishomecare123@gmail.com" className="hover:text-white transition-colors break-all">
                  anishomecare123@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Service Area:</p>
                <p className="text-white/60">Fairfax, Alexandria, Arlington, Loudoun & Prince William Counties, VA</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credentials */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Anis Home Care Services LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Commonwealth of Virginia Licensed</span>
            <span>•</span>
            <span>Medicaid Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
