"use client";

import React from "react";
import { CarBrand } from "@/data/cars";

interface CarBrandInfoProps {
  car: CarBrand;
}

const CarBrandInfo: React.FC<CarBrandInfoProps> = ({ car }) => {
  const { title, heroSection, sections = {} } = car;

  const sectionArray = Object.values(sections);

  return (
    <section className="w-full px-6 py-20 text-[#E8F3FF]">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#049FFF] font-orbitron mb-6">
            {title}
          </h2>

          <h3 className="text-[#049FFF] font-semibold text-2xl mb-3">
            {heroSection.headline}
          </h3>

          <p className="font-jaldi text-[20px] leading-[34px]">
            {heroSection.description}
          </p>
        </div>

        {/* IMAGE */}
        {heroSection.image && (
          <div
            className={`flex justify-center ${
              heroSection.image.position === "left" ? "md:order-first" : ""
            }`}
          >
            <img
              src={heroSection.image.src}
              alt={heroSection.image.alt}
              className="w-full max-w-md rounded-2xl shadow-xl drop-shadow-xl"
            />
          </div>
        )}
      </div>

      {/* ALL OTHER SECTIONS */}
      <div className="max-w-5xl mx-auto space-y-14">
        {sectionArray.map((sec, i) => (
          <div key={i} className="text-left">

            {/* HEADLINE */}
            {sec.headline && (
              <h3 className="text-[#049FFF] font-semibold text-2xl mb-2">
                {sec.headline}
              </h3>
            )}

            {/* DESCRIPTION */}
            {sec.description && (
              <p className="font-jaldi text-[20px] leading-[34px] mb-3">
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

    </section>
  );
};

export default CarBrandInfo;
