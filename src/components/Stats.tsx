export default function Stats() {
  const stats = [
    { value: "28+", label: "Years of Experience" },
    { value: "500+", label: "Seniors & Families Cared" },
    { value: "50+", label: "Multilingual Care Experts" },
    { value: "98%", label: "Client Satisfaction Rate" },
  ];

  return (
    <section id="stats" className="w-full py-12 bg-white border-y border-[#e2ede4]/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#191c1a] tracking-tight mb-2">
                {stat.value.replace("+", "").replace("%", "")}
                <span className="text-[#c5b430]">
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
