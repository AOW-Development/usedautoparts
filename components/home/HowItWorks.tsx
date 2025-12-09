export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Tell Us What You Need",
      desc: "Share your year, make, model and required part",
    },
    {
      num: "2",
      title: "Get Instant Quote",
      desc: "Receive exact pricing within 60 seconds",
    },
    {
      num: "3",
      title: "Fast Shipping",
      desc: "Free delivery within 5–7 business days",
    },
    {
      num: "4",
      title: "Peace of Mind",
      desc: "Every order includes a 90-day warranty",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-r from-[#07142B] via-[#0A2F5C] to-[#001D3D] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#B3D9FF] bg-clip-text text-transparent">
          How It Works
        </h2>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#07142B] border border-[#00A3FF]/30 rounded-2xl p-6 text-center shadow-[0_0_25px_rgba(0,163,255,0.15)] hover:shadow-[0_0_30px_rgba(0,163,255,0.35)] transition-all duration-300"
            >
              {/* STEP NUMBER */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00A3FF] to-[#003D80] text-white text-xl sm:text-2xl font-bold shadow-[0_0_15px_rgba(0,163,255,0.6)]">
                {step.num}
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-bold mb-2">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-xs sm:text-sm text-[#B3D9FF] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
