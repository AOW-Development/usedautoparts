
export default function FeaturesZipper() {
  const features = [
    {
      title: "Powerhouse Engine",
      desc: "Rigorously tested used engines — reliable and performance-ready.",
      icon: "⚙️",
    },
    {
      title: "Unmatched Reliability",
      desc: "Revive your vehicle with dependable, power-optimized engines.",
      icon: "⚡",
    },
    {
      title: "Covered & Not Covered",
      desc: "Warranty on long block; excludes manifolds, turbos & accessories.",
      icon: "🛡️",
    },
    {
      title: "Tailored Solutions",
      desc: "Choose competitively priced, fully tested junkyard & salvage engines.",
      icon: "🏷️",
    },
    {
      title: "Local Engine Dealer",
      desc: "Find used engines near you — local or nationwide locator.",
      icon: "📍",
    },
    {
      title: "Delivering Excellence",
      desc: "We ensure premium engine quality & best-in-class customer experience.",
      icon: "📄",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative">
      <h2 className="text-4xl font-bold text-center mb-16">Features</h2>

      {/* Zipper line */}
      <div className="absolute left-1/2 top-32 bottom-0 w-[3px] bg-[#00A3FF]/50 rounded-full" />

      <div className="flex flex-col gap-12 relative z-10">
        {features.map((f, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div key={idx} className={`flex ${isLeft ? "justify-start" : "justify-end"} w-full`}>
              <div className="relative bg-[#00A3FF]/10 border border-[#00A3FF]/20 rounded-2xl p-6 w-full md:w-[44%]">

                {/* Icon */}
                <div className="text-3xl mb-2">{f.icon}</div>

                <h3 className="text-lg font-semibold text-[#CBF1FF]">{f.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{f.desc}</p>

                {/* Zipper Dot */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#00A3FF] rounded-full border-[3px] border-[#091B33] ${
                    isLeft ? "right-[-10px]" : "left-[-10px]"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
