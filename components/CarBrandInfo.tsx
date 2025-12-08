"use client";
import React from "react";

export type InfoSection = {
  heading?: string;
  text: string;
};

export type CarBrandInfoProps = {
  brand: string;
  title: string;
  sections: InfoSection[];
  image?: string;
};

const CarBrandInfo: React.FC<CarBrandInfoProps> = ({
  brand,
  title,
  sections,
  image,
}) => {
  return (
    <section className="w-full px-6 py-20 flex flex-col items-center text-[#E8F3FF]">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#049FFF] font-orbitron mb-10 text-center">
        {title}
      </h2>

      {/* Image on top (optional) */}
      {image && (
        <div className="flex justify-center mb-12">
          <img
            src={image}
            alt={`${brand} image`}
            className="w-full max-w-lg rounded-2xl shadow-xl drop-shadow-xl mx-auto"
          />
        </div>
      )}

      {/* Content Paragraphs */}
      <div className="max-w-4xl space-y-10 font-jaldi text-[20px] leading-[34px] text-center">
        {sections.map((sec, index) => (
          <div key={index}>
            {sec.heading && (
              <h3 className="text-[#049FFF] font-semibold text-2xl mb-2">
                {sec.heading}
              </h3>
            )}
            <p>{sec.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarBrandInfo;
