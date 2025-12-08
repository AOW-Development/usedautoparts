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
    <section className="w-full bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] text-[#E8F3FF] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">

      {/* Title */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
        <h2 className="font-[Orbitron] text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#B3D9FF]">
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
          gap-4
          sm:gap-5
          md:gap-6
          lg:gap-8
          max-w-[1200px]
          w-full
        "
      >
        <FeatureCard
          icon={<Search className="w-7 sm:w-8 md:w-8 lg:w-8 h-7 sm:h-8 md:h-8 lg:h-8 text-[#00A3FF]" strokeWidth={2.5} />}
          title="We Search All Brands"
          desc="We explore every year, make, and model. Need help? Call (877) 982-7774 — your ultimate vehicle solution!"
        />

        <FeatureCard
          icon={<Tags className="w-7 sm:w-8 md:w-8 lg:w-8 h-7 sm:h-8 md:h-8 lg:h-8 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Competitive Pricing"
          desc="Affordable, budget-friendly pricing on all OEM parts so you get maximum value for every purchase."
        />

        <FeatureCard
          icon={<ShieldCheck className="w-7 sm:w-8 md:w-8 lg:w-8 h-7 sm:h-8 md:h-8 lg:h-8 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Reliable Parts"
          desc="Every used part we sell is inspected for quality. Your vehicle's performance is our top priority."
        />

        <FeatureCard
          icon={<RefreshCcw className="w-7 sm:w-8 md:w-8 lg:w-8 h-7 sm:h-8 md:h-8 lg:h-8 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Easy Replacements"
          desc="Hassle-free returns and replacements. Enjoy peace of mind from start to finish."
        />

        <FeatureCard
          icon={<Truck className="w-7 sm:w-8 md:w-8 lg:w-8 h-7 sm:h-8 md:h-8 lg:h-8 text-[#00A3FF]" strokeWidth={2.5} />}
          title="Free Shipping"
          desc="Free delivery across the continental US. Convenience and savings delivered to your door."
        />

        <FeatureCard
          icon={<ShieldCheck className="w-7 sm:w-8 md:w-8 lg:w-8 h-7 sm:h-8 md:h-8 lg:h-8 text-[#00A3FF]" strokeWidth={2.5} />}
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
        hover:shadow-[0_-15px_50px_rgba(0,163,255,0.4)]
        rounded-xl
        sm:rounded-2xl
        lg:rounded-3xl
        p-4
        sm:p-5
        md:p-6
        lg:p-8
        pt-6
        sm:pt-8
        md:pt-10
        lg:pt-12
        flex
        flex-col
        items-center
        text-center
        gap-2
        sm:gap-3
        md:gap-4
        lg:gap-5
        min-h-[280px]
        sm:min-h-[320px]
        md:min-h-[350px]
        lg:min-h-[380px]
        transition-all
        duration-300
        hover:scale-102
        border-opacity-30
        hover:border-opacity-40
      "
    >
      {/* Circular Icon Container */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] lg:w-20 lg:h-20 rounded-full border-2 border-[#00A3FF]/40 flex items-center justify-center bg-transparent transition-all duration-300">
        <div className="text-[#00A3FF] drop-shadow-lg">
          {icon}
        </div>
      </div>

      <h3 className="font-[Jaldi] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-tight mt-1 text-white">
        {title}
      </h3>

      <p className="font-[Jaldi] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] lg:leading-[30px] max-w-xs md:max-w-sm opacity-90 text-[#B3D9FF]">
        {desc}
      </p>
    </div>
  );
}
