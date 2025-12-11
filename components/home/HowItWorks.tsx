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
      className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-r from-[#07142B] via-[#0A2F5C] to-[#001D3D] text-white relative overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#00A3FF]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADING */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#B3D9FF] bg-clip-text text-transparent">
          How It Works
        </h2>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="
                bg-[#07142B]
                border
                border-[#00A3FF]/30
                rounded-2xl
                p-6
                text-center
                shadow-[0_0_25px_rgba(0,163,255,0.15)]
                hover:shadow-[0_0_30px_rgba(0,163,255,0.5)]
                transition-all
                duration-500
                hover:scale-105
                hover:-translate-y-3
                hover:border-[#00A3FF]/60
                group
                relative
                overflow-hidden
                cursor-pointer
              "
              style={{
                animation: `slideUp 0.6s ease-out forwards`,
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/0 via-transparent to-[#0099FF]/0 group-hover:from-[#00A3FF]/10 group-hover:to-[#0099FF]/5 transition-all duration-500 pointer-events-none"></div>

              {/* STEP NUMBER */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00A3FF] to-[#003D80] text-white text-xl sm:text-2xl font-bold shadow-[0_0_15px_rgba(0,163,255,0.6)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,163,255,0.9)] group-hover:scale-110 relative z-10">
                {step.num}
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-bold mb-2 transition-all duration-300 group-hover:text-[#0099FF] relative z-10">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-xs sm:text-sm text-[#B3D9FF] leading-relaxed transition-all duration-300 group-hover:opacity-100 opacity-90 relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
