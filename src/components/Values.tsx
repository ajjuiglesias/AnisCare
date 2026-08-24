"use client";

import { useState } from "react";
import Image from "next/image";

const valuesTabs = [
  {
    id: "compassion",
    num: "01/05",
    label: "Compassion",
    headline: "We believe in offering care with empathy, understanding, and kindness treating every senior as a valued individual.",
    description: "We provide care with empathy, kindness, and respect, treating every senior as our own valued family member.",
  },
  {
    id: "respect",
    num: "02/05",
    label: "Respect",
    headline: "Preserving independence and honoring personal dignity and lifelong habits.",
    description: "Every client’s routines, preferences, and cultural background are upheld with total reverence and patience.",
  },
  {
    id: "integrity",
    num: "03/05",
    label: "Integrity",
    headline: "Uncompromising clinical standards backed by 28+ years of registered nursing leadership.",
    description: "We maintain transparent reporting, rigorous caregiver supervision, and honest communication with every family.",
  },
  {
    id: "community",
    num: "04/05",
    label: "Community",
    headline: "Empowering Northern Virginia families with reliable, culturally sensitive care.",
    description: "Proudly supporting multilingual seniors with caregivers who speak Farsi, Russian, Turkish, Spanish, Chinese, and Hindi.",
  },
];

export default function Values() {
  const [activeTab, setActiveTab] = useState<string>("compassion");
  const current = valuesTabs.find((v) => v.id === activeTab) || valuesTabs[0];

  return (
    <section id="values" className="w-full py-20 lg:py-28 bg-[#f7f5ee] border-b border-[#e8e4d8]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-[#191c1a] text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#191c1a] flex items-center justify-center text-[0.5rem] text-white">
              ◆
            </span>
            <span>OUR VALUES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#191c1a] font-medium leading-[1.2] tracking-tight">
            The driving force behind<br />
            <span className="italic font-normal text-[#191c1a]">
              everything we create
            </span>
          </h2>
        </div>

        {/* 3-Column Values Layout (matching Demo 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Tab list (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="text-xs font-mono font-bold text-[#8e908c] tracking-wider mb-2">
              {current.num}
            </div>
            
            <div className="flex flex-col gap-2 border-l-2 border-[#dcd8cc] pl-5">
              {valuesTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left py-2 text-xl sm:text-2xl font-serif font-bold transition-all ${
                    tab.id === activeTab
                      ? "text-[#191c1a] scale-105"
                      : "text-[#8e908c] hover:text-[#191c1a]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Middle Column: Headline & Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#191c1a] leading-snug mb-6">
              {current.headline}
            </h3>
            <p className="text-sm sm:text-base text-[#636662] leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Right Column: Lifestyle Photo (4 cols) */}
          <div className="lg:col-span-4 relative">
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
              <Image
                src="/images/service-companionship.png"
                alt="Nurse caring for senior with compassion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
