"use client";

import { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Heidi Gardner from TX",
    text: `I can't express how thrilled I am with the motor I got. It runs like a dream, and my mechanic was impressed with how clean and low-mileage it was under the valve covers. Used Auto Parts Pro came through for me, and I wouldn't think twice about choosing them again if I ever need another engine. Top-notch service and quality parts!`,
  },
  {
    name: "Heidi Gardner from TX",
    text: `I can't express how thrilled I am with the motor I got. It runs like a dream, and my mechanic was impressed with how clean and low-mileage it was under the valve covers. Used Auto Parts Pro came through for me, and I wouldn't think twice about choosing them again if I ever need another engine. Top-notch service and quality parts!`,
  },
  {
    name: "Heidi Gardner from TX",
    text: `I can't express how thrilled I am with the motor I got. It runs like a dream, and my mechanic was impressed with how clean and low-mileage it was under the valve covers. Used Auto Parts Pro came through for me, and I wouldn't think twice about choosing them again if I ever need another engine. Top-notch service and quality parts!`,
  },
  {
    name: "Heidi Gardner from TX",
    text: `I can't express how thrilled I am with the motor I got. It runs like a dream, and my mechanic was impressed with how clean and low-mileage it was under the valve covers. Used Auto Parts Pro came through for me, and I wouldn't think twice about choosing them again if I ever need another engine. Top-notch service and quality parts!`,
  },
  {
    name: "Heidi Gardner from TX",
    text: `I can't express how thrilled I am with the motor I got. It runs like a dream, and my mechanic was impressed with how clean and low-mileage it was under the valve covers. Used Auto Parts Pro came through for me, and I wouldn't think twice about choosing them again if I ever need another engine. Top-notch service and quality parts!`,
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section className="bg-[#07142B] py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Heading */}
        <h2 className="text-center text-[28px] sm:text-[36px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#daedff] mb-10 sm:mb-12 tracking-wide">
          Testimonials
        </h2>

        {/* LEFT BUTTON */}
<button
  onClick={scrollLeft}
  className="absolute left-2 sm:-left-8 top-[60%] -translate-y-1/2 z-10 bg-[#00A3FF]/30 hover:bg-[#00A3FF]/50 p-2 sm:p-3 rounded-full text-white"
>
  <ChevronLeft size={24} className="sm:size-[28px]" />
</button>

{/* RIGHT BUTTON */}
<button
  onClick={scrollRight}
  className="absolute right-2 sm:-right-8 top-[60%] -translate-y-1/2 z-10 bg-[#00A3FF]/30 hover:bg-[#00A3FF]/50 p-2 sm:p-3 rounded-full text-white"
>
  <ChevronRight size={24} className="sm:size-[28px]" />
</button>


        {/* SCROLLER */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory pb-4"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[260px] sm:w-[320px] md:w-[360px]"
            >
              <div className="rounded-4xl p-0.5 bg-linear-to-b from-[#00A3FF] to-[#003D80] h-full">
                <div className="h-full min-h-[300px] sm:min-h-[320px] rounded-[30px] bg-linear-to-b from-[#00A3FF] to-[#001D3D] px-6 sm:px-8 py-6 sm:py-8 text-white shadow-[0_0_25px_rgba(0,163,255,0.35)] flex flex-col">

                  {/* Icon + Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <FaUserCircle className="text-white" size={36} />
                    <p className="text-base sm:text-lg font-semibold">{item.name}</p>
                  </div>

                  {/* Text */}
                  <p className="text-sm leading-relaxed text-[#E5F4FF] flex-1">
                    {item.text}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
