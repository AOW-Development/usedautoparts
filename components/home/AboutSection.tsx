"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-6 bg-transparent text-[#E8F3FF] flex justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6">

          <h2 className="font-[Orbitron] font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-tight">
            Welcome to Used Auto Parts Pro — Your Premier Source for Quality Vehicle Components!
          </h2>

          <p className="font-[Jaldi] text-[18px] sm:text-[20px] lg:text-[22px] leading-[30px] sm:leading-[34px]">
            Discover the pinnacle of convenience and expertise with online used auto parts and 
            online used car parts at Used Auto Parts Pro. Whether you're seeking used parts for 
            trucks or exploring local junkyards near me, we’re your go-to solution. Experience 
            the ease of browsing online inventory as we redefine accessibility.
          </p>

          <p className="font-[Jaldi] text-[18px] sm:text-[20px] lg:text-[22px] leading-[30px] sm:leading-[34px]">
            Trust meets affordability here. We blend competitive pricing with uncompromised value, 
            ensuring you receive the best. Ready to step into excellence? Dial (877) 982-7774 and 
            join the ranks of satisfied Used Auto Parts Pro customers.
          </p>

          <p className="font-[Jaldi] text-[18px] sm:text-[20px] lg:text-[22px] leading-[30px] sm:leading-[34px]">
            Elevate your auto parts journey today – where quality and convenience collide!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[300px] sm:w-[380px] lg:w-[480px] h-[240px] sm:h-[300px] lg:h-[380px]">
            <Image
              src="/images/about-engine.png"  // Update your path
              alt="Engine"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
