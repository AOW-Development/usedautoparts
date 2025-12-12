"use client";

import { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Heidi Gardner from TX",
    rating: 5,
    text: `I can't express how thrilled I am with the motor I got. It runs like a dream, and my mechanic was impressed with how clean and low-mileage it was under the valve covers. Used Auto Parts Pro came through for me, and I wouldn't think twice about choosing them again if I ever need another engine. Top-notch service and quality parts!`,
  },
  {
    name: "James Mitchell from CA",
    rating: 5,
    text: `The transmission I ordered arrived faster than expected and in perfect condition. The team was incredibly helpful in answering my questions about compatibility. Five stars all the way! I've already recommended them to my friends and family.`,
  },
  {
    name: "Sarah Chen from NY",
    rating: 4,
    text: `Best experience I've had ordering auto parts online. The quality is outstanding, and the pricing is unbeatable. Shipping took a bit longer than expected, but the 90-day warranty gave me complete peace of mind. Will definitely be a repeat customer!`,
  },
  {
    name: "Robert Johnson from FL",
    rating: 5,
    text: `Couldn't believe how quickly I received my order. The engine runs smooth and is exactly what I needed. The customer service team was patient and knowledgeable. Highly recommend to anyone needing reliable used auto parts!`,
  },
  {
    name: "Maria Rodriguez from TX",
    rating: 5,
    text: `My transmission works perfectly! I was nervous about ordering online, but Used Auto Parts Pro made the entire process seamless. Great quality, fair prices, and excellent customer support. Absolutely satisfied with my purchase!`,
  },
  {
    name: "David Thompson from OH",
    rating: 5,
    text: `Fantastic service from start to finish. The parts arrived in excellent condition and fit perfectly. The team went above and beyond to ensure I got exactly what I needed. This is my go-to place for all my auto parts now.`,
  },
  {
    name: "Jessica Lee from WA",
    rating: 5,
    text: `I was skeptical about buying used parts, but this company proved me wrong. Everything arrived exactly as described. The warranty coverage is comprehensive. I'm impressed and will be ordering again soon!`,
  },
  {
    name: "Michael Brown from TX",
    rating: 5,
    text: `Best decision I made was ordering from Used Auto Parts Pro. Fast shipping, excellent quality, competitive pricing, and amazing customer service. My car is running better than ever. Highly recommended!`,
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-center">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={i < rating ? "text-[#FFD700] text-lg" : "text-[#4a5568] text-lg"}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section 
      className="bg-[#07142B] py-16 sm:py-20 relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/hero/hero24.png')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07142B]/5 via-[#0A2F5C]/5 to-[#001D3D]/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <h2 className="text-center text-[28px] sm:text-[36px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#daedff] mb-10 sm:mb-12 tracking-wide">
          Testimonials
        </h2>

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 sm:-left-8 top-[60%] -translate-y-1/2 z-20 bg-[#00A3FF]/30 hover:bg-[#00A3FF]/50 p-2 sm:p-3 rounded-full text-white transition-all"
        >
          <ChevronLeft size={24} className="sm:size-[28px]" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="absolute right-2 sm:-right-8 top-[60%] -translate-y-1/2 z-20 bg-[#00A3FF]/30 hover:bg-[#00A3FF]/50 p-2 sm:p-3 rounded-full text-white transition-all"
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
                  <div className="flex items-center gap-4 mb-4">
                    <FaUserCircle className="text-white" size={36} />
                    <p className="text-base sm:text-lg font-semibold">{item.name}</p>
                  </div>

                  {/* Stars - Centered in the middle */}
                  <div className="mb-4">
                    {renderStars(item.rating)}
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
