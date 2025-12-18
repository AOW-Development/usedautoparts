"use client";

import React from "react";
import { CarBrand } from "@/data/cars";
import { LeadForm } from "./home/HeroTransmission";

interface CarBrandInfoProps {
  car: CarBrand;
}

const CarBrandInfo: React.FC<CarBrandInfoProps> = ({ car }) => {
  const { title, heroSection, sections = {} } = car;

  const sectionArray = Object.values(sections);

  return (
    <section className="w-full px-6 py-20 text-[#E8F3FF] bg-[#07142B]">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 items-start mb-12">


        {/* LEFT — IMAGE + TEXT */}
        <div className="flex flex-col gap-6 justify-start">

          {/* IMAGE */}
          {heroSection.image && (
            <div className="flex justify-center md:justify-start">
              <img
                src={heroSection.image.src}
                alt={heroSection.image.alt}
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </div>
          )}

          {/* TEXT */}
          <div>
            {/* <h2 className="text-3xl md:text-4xl font-bold text-[#049FFF] font-orbitron mb-4">
              {title}
            </h2> */}

            <h3 className="text-[#049FFF] font-semibold text-xl md:text-2xl mb-2">
              {heroSection.headline}
            </h3>

            <p className="text-[18px] leading-[30px] text-[#E8F3FF]/90">
              {heroSection.description}
            </p>
          </div>
        </div>

        {/* RIGHT — LEAD FORM */}
        <div className="flex justify-center md:justify-end items-start">
          {/* Wider but not stretched */}
          <div className="w-full max-w-lg lg:max-w-xl">
            <LeadForm />
          </div>
        </div>


      </div>


      {/* ALL OTHER SECTIONS */}
      <div className="max-w-5xl mx-auto space-y-14">
        {sectionArray.map((sec, i) => (
          <div key={i} className="text-left">

            {/* HEADLINE */}
            {sec.headline && (
              <h3 className="text-[#049FFF] text-2xl mb-2">
                {sec.headline}
              </h3>
            )}

            {/* DESCRIPTION */}
            {sec.description && (
              <p className="text-[20px] leading-[34px] mb-3">
                {sec.description}
              </p>
            )}

            {/* LIST */}
            {sec.list && (
              <ul className="list-disc ml-6 space-y-2">
                {sec.list.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            )}

            {/* POINTS */}
            {sec.points && (
              <ul className="list-disc ml-6 space-y-2">
                {sec.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            )}

            {/* MODELS */}
            {sec.models && (
              <ul className="list-disc ml-6 space-y-1">
                {sec.models.map((model, idx) => (
                  <li key={idx}>{model}</li>
                ))}
              </ul>
            )}

            {/* TESTIMONIALS */}
            {sec.testimonials && (
              <ul className="space-y-3 italic text-[#e0f0ff]">
                {sec.testimonials.map((t, idx) => (
                  <li key={idx}>"{t}"</li>
                ))}
              </ul>
            )}

            {/* QUESTIONS / FAQ */}
            {sec.questions && (
              <div className="space-y-4">
                {sec.questions.map((q, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold">{q.question}</h4>
                    <p>{q.answer}</p>
                  </div>
                ))}
              </div>
            )}

            {/* SUBSECTIONS */}
            {sec.subsections &&
              Object.entries(sec.subsections).map(([key, sub], idx) => (
                <div key={idx} className="mt-6">
                  {sub.headline && (
                    <h4 className="text-xl font-bold text-[#049FFF] mb-2">
                      {sub.headline}
                    </h4>
                  )}

                  {sub.list && (
                    <ul className="list-disc ml-6 space-y-1">
                      {sub.list.map((l, k) => <li key={k}>{l}</li>)}
                    </ul>
                  )}

                  {sub.exteriors && (
                    <ul className="list-disc ml-6 space-y-1">
                      {sub.exteriors.map((l, k) => <li key={k}>{l}</li>)}
                    </ul>
                  )}

                  {sub.interiors && (
                    <ul className="list-disc ml-6 space-y-1">
                      {sub.interiors.map((l, k) => <li key={k}>{l}</li>)}
                    </ul>
                  )}
                </div>
              ))
            }

            {/* CTA */}
            {sec.cta && (
              <p className="mt-4 font-bold text-[#049FFF]">{sec.cta}</p>
            )}
          </div>
        ))}
      </div>

      {/* FINAL CTA SECTION */}
      <div className="w-full mt-20 py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] text-center rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          Find Quality {title} Parts Today?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Get fast pricing, expert guidance, and nationwide delivery on quality used auto parts for your {title}.
        </p>

        <a
          href="/#lead-form"
          className="inline-block bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white px-7 sm:px-9 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:shadow-[0_0_30px_rgba(0,163,255,0.6)] transition-all duration-300 hover:opacity-90 cursor-pointer"
        >
          Find My Parts
        </a>
      </div>

    </section>
  );
};

export default CarBrandInfo;
