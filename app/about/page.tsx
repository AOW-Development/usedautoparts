"use client";

import { PhoneCall } from "lucide-react";
import SectionWrapper from "@/components/about/SectionWrapper";
import ImageCard from "@/components/about/ImageCard";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <main className="w-full text-[#E8F3FF] px-4 sm:px-6 md:px-10 lg:px-20">

      {/* HERO TITLE */}
      <SectionHeader title="ABOUT US" />
 
      {/* SECTION 1 */}
      <SectionWrapper>
        <div className="flex justify-center">
          <ImageCard src="/images/About-image-1.jpg" />
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-[900px] mx-auto">
          <Title>Your Trusted Source for Quality Vehicle Parts</Title>

          <Paragraph>
            At usedautoparts.pro, we stand as a pillar of trust in the world of automotive solutions.
            With an extensive inventory of top-tier vehicle parts, we're your dependable partner in
            keeping your vehicles running smoothly.
          </Paragraph>
        </div>
      </SectionWrapper>

      {/* SECTION 2 */}
      <SectionWrapper reverse>
        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-[900px] mx-auto">
          <Title>About Used Auto Parts Pro</Title>

          <Paragraph>
            At Used Auto Parts Pro, we specialize in providing high-quality used OEM automotive parts
            and accessories. Our experts provide fast real-time guidance, and we deliver the best
            parts at the most competitive prices. Call now at (877) 982-7774 and join thousands of
            satisfied customers.
          </Paragraph>

          {/* Call Now Button */}
          <a
            href="tel:+18779827774"
            className="inline-flex items-center gap-2 sm:gap-3 rounded-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-white hover:scale-105 transition-transform bg-gradient-to-r from-[#00A3FF] to-[#003D80] shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:shadow-[0_0_30px_rgba(0,163,255,0.6)] font-bold text-sm sm:text-base md:text-lg w-fit"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
            <span>Call Now: (877) 982-7774</span>
          </a>
        </div>

        <div className="flex justify-center">
          <ImageCard src="/images/About-image-2.jpg" />
        </div>
      </SectionWrapper>

      {/* SECTION 3 & 4 SIDE BY SIDE */}
      <SectionWrapper>
        {/* LEFT — Why Choose Us */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <Title>Why Choose Us for Your Automotive Needs?</Title>
          <HighlightList
            items={[
              "Unmatched Trust: usedautoparts.pro has earned its name by consistently delivering reliable solutions.",
              "Vast Stocks, Instant Availability: Get the parts you need exactly when you need them.",
              "Seamless Shipping: Fast, reliable, and delivered right to your doorstep.",
              "Committed to Quality: Every part meets strict inspection standards.",
            ]}
          />
        </div>

        {/* RIGHT — Your Journey */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <Title>Your Journey, Our Priority</Title>
          <Paragraph>
            Whether you're a car enthusiast, a mechanic, or someone needing a quick fix,
            Used Auto Parts Pro brings you top-tier support, unmatched reliability, and peace of mind.
            Your journey deserves the best — and that's exactly what we deliver.
          </Paragraph>
        </div>
      </SectionWrapper>

    </main>
  );
}

/* SMALL COMPONENTS */

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-snug tracking-wide">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] opacity-95">
      {children}
    </p>
  );
}

function HighlightList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[#049FFF] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px]">
      {items.map((item, i) => (
        <p key={i}>• {item}</p>
      ))}
    </div>
  );
}
