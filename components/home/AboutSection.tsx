"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#07142B] text-[#E8F3FF] flex justify-center">
      <div className="relative max-w-[1200px] w-full grid grid-cols-1 items-center">

        {/* LEFT TEXT */}
        <div className="z-20 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7">

          <h2
            className="
              font-bold
              text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px]
              leading-snug
              text-transparent bg-clip-text
              bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#B3D9FF]
            "
          >
            Welcome to Used Auto Parts Pro — Your Premier Source for Quality Vehicle Components!
          </h2>

          <p
            className="
              text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]
              leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px]
              text-[#B3D9FF]
              font-light
            "
          >
            Discover the pinnacle of convenience and expertise with online used auto parts and 
            online used car parts at Used Auto Parts Pro. Whether you're seeking used parts for 
            trucks or exploring local junkyards near me, we're your go-to solution. Experience 
            the ease of browsing online inventory as we redefine accessibility.
          </p>

         <p
  className="
    text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]
    leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px]
    text-[#B3D9FF]
    font-light
  "
>
  Trust meets affordability here. We blend competitive pricing with uncompromised value, 
  ensuring you receive the best. Ready to step into excellence? Dial{" "}
  <a
    href="tel:+18779827774"
    className="
      font-semibold 
      text-[#00A3FF]
      hover:text-[#00D4FF]
      cursor-pointer
      transition-all
      duration-300
      hover:underline
      hover:drop-shadow-[0_0_8px_rgba(0,163,255,0.6)]
    "
  >
    (877) 982-7774
  </a>
  {" "}
  and join the ranks of satisfied Used Auto Parts Pro customers.
</p>


          <p
            className="
              text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]
              leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px]
              text-[#B3D9FF]
              font-light
            "
          >
            Elevate your auto parts journey today – where quality and convenience collide!
          </p>

          {/* ✅ RESPONSIVE BUTTON */}
          <div className="w-full flex justify-center pt-4 sm:pt-5 md:pt-6">
  <button
    onClick={(e) => {
      e.preventDefault();
      
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const element = document.getElementById("lead-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.href = "/#lead-form";
      }
    }}
    className="
      px-6 sm:px-7 md:px-8 lg:px-10
      py-2.5 sm:py-3
      bg-gradient-to-r from-[#00A3FF] to-[#0080D0]
      text-white
      font-bold
      rounded-lg
      transition-all duration-300
      text-sm sm:text-base
      cursor-pointer
      hover:shadow-[0_0_18px_rgba(0,163,255,0.6)]
      hover:-translate-y-[1px]
      active:translate-y-0
    "
  >
    Find My Part
  </button>
</div>


        </div>

        {/* RIGHT IMAGE — Still Commented (As You Wanted) */}
        {/*
        <div className="relative z-10 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div
            className="
              relative 
              w-[280px] sm:w-[380px] md:w-[460px] lg:w-[600px]
              h-[240px] sm:h-[320px] md:h-[380px] lg:h-[520px]
              drop-shadow-[0_-25px_80px_rgba(0,163,255,0.9)]
              filter brightness-125 hover:brightness-150 transition-all duration-300
            "
          >
            <Image
              src="/images/about-engine.png"
              alt="Engine"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
        */}

      </div>
    </section>
  );
}
