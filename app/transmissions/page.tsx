"use client";

import Image from "next/image";
import { transmissionSections } from "@/data/transmission";
import SearchCar from "@/components/home/search";
import ChatBot from "@/components/home/ChatBot";
import CallFloatingButton from "@/components/home/CallFloatingButton";
import HeroSection from "@/components/home/HeroTransmission";
import { heroData } from "@/data/herodata";

type TransmissionSection = {
  title: string;
  paragraphs: string[];
  image?: string;
  imageSide?: "left" | "right";
};

export default function TransmissionsPage() {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const element = document.getElementById("lead-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = "/#lead-form";
    }
  };

  return (
    <main className="w-full text-[#E8F3FF] bg-[#07142B] overflow-x-hidden">
      <ChatBot />
      <CallFloatingButton />
      <HeroSection {...heroData.transmissions} />

      {/* HERO - FIRST SECTION */}
      {(transmissionSections as TransmissionSection[]).length > 0 && (
        <section className="w-full py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] text-center">
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-white">
            {(transmissionSections as TransmissionSection[])[0].title}
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            {(transmissionSections as TransmissionSection[])[0].paragraphs
              .slice(0, 2)
              .map((text, i) => (
                <p
                  key={i}
                  className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80"
                >
                  {text}
                </p>
              ))}
          </div>

          <a
            href="/#lead-form"
            onClick={handleQuoteClick}
            className="inline-block bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
          >
            Find My Transmission
          </a>
        </section>
      )}

      {/* CONTENT SECTIONS */}
      <section className="w-full px-4 sm:px-8 py-16 bg-[#07142B]">
        <div className="max-w-7xl mx-auto space-y-12">
          {(transmissionSections as TransmissionSection[]).slice(1).map(
            (section, index) => (
              <div
                key={section.title}
                className={`max-w-7xl mx-auto grid gap-10 items-center ${
                  section.image ? "lg:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {/* TEXT */}
                <div
                  className={`flex flex-col gap-4 order-1 lg:order-${
                    section.imageSide === "right" ? "1" : "2"
                  }`}
                >
                  <h2 className="font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white mb-4">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.paragraphs.map((text, i) => (
                      <p
                        key={i}
                        className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* IMAGE */}
                {section.image && (
                  <div
                    className={`relative w-full h-[260px] sm:h-[320px] lg:h-[380px] rounded-xl overflow-hidden order-2 lg:order-${
                      section.imageSide === "right" ? "2" : "1"
                    }`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover drop-shadow-[0_0_25px_rgba(0,163,255,0.5)]"
                      priority={index === 0}
                    />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] text-center">
        <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-semibold mb-4 text-white">
          Ready to Find the Right Transmission?
        </h2>
        <p className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80 max-w-2xl mx-auto mb-8">
          Get fast pricing, expert guidance, and nationwide delivery on quality used transmissions.
        </p>

        <a
          href="/#lead-form"
          onClick={handleQuoteClick}
          className="inline-block bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white px-7 sm:px-9 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Find My Transmission
        </a>
      </section>

      <SearchCar />
    </main>
  );
}
