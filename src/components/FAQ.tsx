"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do you ensure the safety and quality of your caregivers?",
    answer:
      "Every Anis Home Care caregiver undergoes comprehensive background checks, credential verification, and personal interview screening. Caregivers receive direct clinical orientation and ongoing supervision by Maryam Garousi, RN, BSN to ensure the highest standards of safety, dignity, and personalized care.",
  },
  {
    question: "What areas in Northern Virginia do you serve?",
    answer:
      "We proudly provide in-home care across Northern Virginia, including Fairfax County, Arlington, Alexandria, Loudoun County, Prince William County (Woodbridge, Manassas), Springfield, McLean, and surrounding communities.",
  },
  {
    question: "What languages do your multilingual caregivers speak?",
    answer:
      "We match caregivers to clients based on communication and cultural comfort. Our team includes fluent speakers of Farsi, Russian, Turkish, Spanish, Chinese, Hindi, and English.",
  },
  {
    question: "Are you licensed and Medicaid certified in Virginia?",
    answer:
      "Yes, Anis Home Care Services LLC is fully licensed, bonded, and insured in the Commonwealth of Virginia. We are also Medicaid certified and work with private pay, long-term care insurance, and state assistance programs.",
  },
  {
    question: "How quickly can care services begin?",
    answer:
      "Care can often start within 24 to 48 hours following an initial nurse assessment. For urgent situations or hospital discharges, we do everything possible to expedite same-day consultations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 lg:py-28 bg-white border-b border-[#e8e4d8]">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-[#191c1a] text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#c8e600]" />
            <span>QUICK HELP</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191c1a] font-medium leading-[1.2] tracking-tight">
            Top questions from{" "}
            <span className="italic font-normal text-[#6b7268]">
              families like yours
            </span>
          </h2>
        </div>

        {/* FAQ Accordion List (Cards on Pure White Background) */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`bg-[#f7f5ee] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#c8e600] shadow-sm bg-white"
                    : "border-[#e8e4d8] hover:border-[#c8e600]/60"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#191c1a]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-[#10201c] text-[#c8e600] rotate-45"
                        : "bg-[#e8e4d8] text-[#191c1a]"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 pt-1 text-sm sm:text-base text-[#636662] leading-relaxed border-t border-[#e8e4d8]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
