"use client";

import {
  Search,
  Tags,
  ShieldCheck,
  Truck,
  RefreshCcw,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] text-[#E8F3FF] py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center relative overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00A3FF]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0099FF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>

      {/* Title */}
      <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center relative z-10">
        <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#B3D9FF]">
          Why Choose Us?
        </h2>
        <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-[#00A3FF] to-[#0080D0] mx-auto mt-3 sm:mt-4 md:mt-5 rounded-full"></div>
      </div>

      {/* Grid Wrapper */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-3
          sm:gap-4
          md:gap-4
          lg:gap-5
          max-w-[1200px]
          w-full
          relative
          z-10
        "
      >
        <FeatureCard
          icon={<Search className="w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6 text-[#00A3FF]" strokeWidth={2.5} />}
          title="We Search All Brands"
          desc="We explore every year, make, and model. Need help? Call (877) 982-7774 — your ultimate vehicle solution!"
        />

        <FeatureCard
          icon={<Tags className="w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Competitive Pricing"
          desc="Affordable, budget-friendly pricing on all OEM parts so you get maximum value for every purchase."
        />

        <FeatureCard
          icon={<ShieldCheck className="w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Reliable Parts"
          desc="Every used part we sell is inspected for quality. Your vehicle's performance is our top priority."
        />

        <FeatureCard
          icon={<RefreshCcw className="w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Easy Replacements"
          desc="Hassle-free returns and replacements. Enjoy peace of mind from start to finish."
        />

        <FeatureCard
          icon={<Truck className="w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Free Shipping"
          desc="Free delivery across the continental US. Convenience and savings delivered to your door."
        />

        <FeatureCard
          icon={<ShieldCheck className="w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Guaranteed Parts"
          desc="Enjoy a free 90-day standard warranty, with extended warranty options available for added protection."
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Feature Card                                  */
/* -------------------------------------------------------------------------- */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        bg-[#091B33]
        border
        border-[#00A3FF]/40
        shadow-[0_-15px_50px_rgba(0,163,255,0.3)]
        hover:shadow-[0_-15px_50px_rgba(0,163,255,0.6)]
        rounded-xl
        sm:rounded-2xl
        lg:rounded-3xl
        p-3
        sm:p-4
        md:p-4
        lg:p-6
        pt-4
        sm:pt-5
        md:pt-6
        lg:pt-8
        flex
        flex-col
        items-center
        text-center
        gap-2
        sm:gap-2
        md:gap-2
        lg:gap-3
        min-h-[240px]
        sm:min-h-[260px]
        md:min-h-[280px]
        lg:min-h-[300px]
        transition-all
        duration-300
        hover:scale-105
        hover:-translate-y-2
        border-opacity-30
        hover:border-opacity-60
        group
        cursor-pointer
        relative
        overflow-hidden
      "
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/0 via-transparent to-[#0099FF]/0 group-hover:from-[#00A3FF]/15 group-hover:to-[#0099FF]/8 transition-all duration-300 pointer-events-none"></div>

      {/* Circular Icon Container */}
      <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#00A3FF]/40 flex items-center justify-center bg-gradient-to-br from-[#00A3FF]/5 to-transparent transition-all duration-300 group-hover:border-[#00A3FF]/70 group-hover:bg-gradient-to-br group-hover:from-[#00A3FF]/20 group-hover:to-transparent group-hover:scale-110 relative z-10">
        <div className="text-[#00A3FF] drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(0,163,255,0.8)]">
          {icon}
        </div>
      </div>

      <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-bold leading-tight mt-1 text-white transition-all duration-300 group-hover:text-[#0099FF] relative z-10">
        {title}
      </h3>

      <p className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] max-w-xs md:max-w-sm opacity-90 text-[#B3D9FF] transition-all duration-300 group-hover:opacity-100 relative z-10">
        {desc}
      </p>
    </div>
  );
}
