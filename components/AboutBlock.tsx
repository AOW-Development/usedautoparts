"use client";

import Image from "next/image";

interface AboutBlockProps {
  title?: string;
  paragraphs?: string[];
  highlights?: { title: string; text: string }[];
  image?: string;
  imageSide?: "left" | "right";
}

export default function AboutBlock({
  title,
  paragraphs = [],
  highlights = [],
  image,
  imageSide = "right",
}: AboutBlockProps) {
  const hasImage = Boolean(image);

  return (
    <div
      className={`
        w-full grid
        ${hasImage ? "grid-cols-1 lg:grid-cols-[70%_30%]" : "grid-cols-1"} mb-8
      `}
    >
      {/* IMAGE LEFT (Occupies the 2nd column visually but placed 1st) */}
      {image && imageSide === "left" && (
        <div className="order-1 lg:order-none">
          <ImageContainer src={image} />
        </div>
      )}

      {/* TEXT BLOCK */}
      <div
        className={`
          space-y-3 text-[#E8F3FF]
          ${imageSide === "left" ? "order-2 lg:order-none" : ""}
        `}
      >
        {title && (
          <h2 className="font-[Orbitron] text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-tight">
            {title}
          </h2>
        )}

        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-[Jaldi] text-[17px] sm:text-[19px] lg:text-[20px] leading-[28px] opacity-90"
          >
            {p}
          </p>
        ))}

        {highlights.length > 0 && (
          <div className="space-y-3 mt-3">
            {highlights.map((h, i) => (
              <div key={i}>
                <strong className="block text-[19px] font-bold text-[#049FFF]">
                  {h.title}
                </strong>
                <p className="font-[Jaldi] text-[18px] leading-[26px] opacity-90">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* IMAGE RIGHT */}
      {image && imageSide === "right" && <ImageContainer src={image} />}
    </div>
  );
}

/* ------------------ IMAGE CONTAINER ------------------ */

function ImageContainer({ src }: { src: string }) {
  return (
    <div className="flex lg:justify-end justify-center">
      <div
        className="
        relative
        w-[180px] sm:w-[220px] lg:w-[260px]
        h-[150px] sm:h-[200px] lg:h-[240px]
        -mt-2
      "
      >
        <Image
          src={src}
          alt="Illustration"
          fill
          className="object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
        />
      </div>
    </div>
  );
}
