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
    <section className="w-full bg-transparent text-[#E8F3FF] py-16 px-4 flex flex-col items-center">

      {/* Title */}
      <h2 className="font-[Orbitron] text-[28px] sm:text-[32px] lg:text-[36px] font-bold mb-12 text-center">
        Why Choose Us?
      </h2>

      {/* Grid Wrapper */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          md:gap-10
          max-w-[1200px]
          w-full
        "
      >
        <FeatureCard
          icon={<Search size={32} strokeWidth={2.5} />}
          title="We Search All Brands"
          desc="We explore every year, make, and model. Need help? Call (877) 982-7774 — your ultimate vehicle solution!"
        />

        <FeatureCard
          icon={<Tags size={32} strokeWidth={2.5} />}
          title="Competitive Pricing"
          desc="Affordable, budget-friendly pricing on all OEM parts so you get maximum value for every purchase."
        />

        <FeatureCard
          icon={<ShieldCheck size={32} strokeWidth={2.5} />}
          title="Reliable Parts"
          desc="Every used part we sell is inspected for quality. Your vehicle’s performance is our top priority."
        />

        <FeatureCard
          icon={<RefreshCcw size={32} strokeWidth={2.5} />}
          title="Easy Replacements"
          desc="Hassle-free returns and replacements. Enjoy peace of mind from start to finish."
        />

        <FeatureCard
          icon={<Truck size={32} strokeWidth={2.5} />}
          title="Free Shipping"
          desc="Free delivery across the continental US. Convenience and savings delivered to your door."
        />

        <FeatureCard
          icon={<ShieldCheck size={32} strokeWidth={2.5} />}
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
        bg-gradient-to-b 
        from-[#049FFF] 
        to-[#091B33]
        shadow-[4px_4px_8px_rgba(3,113,181,0.3)]
        rounded-[24px]
        p-6
        pt-10
        flex
        flex-col
        items-center
        text-center
        gap-4
        min-h-[350px]
      "
    >
      {/* Circular Icon Container */}
      <div className="w-[70px] h-[70px] rounded-full border-2 border-[#E8F3FF] flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-[Jaldi] text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-tight mt-1">
        {title}
      </h3>

      <p className="font-[Jaldi] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] max-w-[260px] opacity-95">
        {desc}
      </p>
    </div>
  );
}
