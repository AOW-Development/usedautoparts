"use client";

import Image from "next/image";
import { ChevronDown, PhoneCall } from "lucide-react";
import GradientButton from "../button"; // <-- your separate button component

export default function HeroTransmission() {
  return (
    <section className="relative w-full h-screen bg-transparent overflow-hidden flex flex-col justify-start">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Transmission Hero"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ------------------- HERO TEXT ------------------- */}
      <div className="mt-[100px] sm:mt-[120px] lg:mt-[140px] text-center text-[#E8F3FF] px-4 space-y-5">

        <h1 className="font-[Orbitron] font-bold text-[26px] sm:text-[32px] lg:text-[38px] leading-tight">
          Used Transmissions for Sale
        </h1>

        <p className="font-[Orbitron] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[600px] mx-auto leading-snug">
          Unlock smooth shifting & savings with high-quality used transmissions
        </p>

        <GradientButton
          width={320}
          height={60}
          text="(877) 982-7774"
          textSize="text-[22px] sm:text-[26px] lg:text-[28px]"
          icon={<PhoneCall size={24} strokeWidth={3} color="#E8F3FF" />}
        />
      </div>

      {/* ------------------- FORM SECTION ------------------- */}
      <div className="mt-10 w-full flex justify-center px-4 pb-6">
        <FormGrid />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               FORM GRID                                     */
/* -------------------------------------------------------------------------- */

function FormGrid() {
  return (
    <div className="w-full max-w-[900px]">
      <div
        className="
          grid 
          grid-cols-2      /* mobile: 2 inputs per row */
          md:grid-cols-3   /* tablet+desktop: 3 per row */
          gap-4 sm:gap-5
        "
      >
        {[
          { label: "Year", type: "select", options: ["2024", "2023", "2022"] },
          { label: "Make", type: "select", options: ["Toyota", "Honda", "Ford"] },
          { label: "Model", type: "select", options: ["A", "B", "C"] },
          { label: "Part", type: "select", options: ["Transmission", "Engine"] },
          { label: "Engine Size", type: "select", options: ["2.0L", "2.4L", "3.0L"] },
          { label: "Transmission", type: "select", options: ["Automatic", "Manual"] },
          { label: "Name", type: "text" },
          { label: "Email id", type: "text" },
          { label: "Zip Code", type: "text" },
          { label: "Phone", type: "text" },
        ].map((item, i) => (
          <SmallInput key={i} {...item} />
        ))}

        {/* Submit Button (same component as call button, no icon) */}
        <div className="col-span-2 md:col-span-3 flex justify-center mt-2">
          <GradientButton
            width={260}
            height={48}
            text="Submit Request"
            textSize="text-[16px] sm:text-[18px]"
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SMALL INPUT FIELD                               */
/* -------------------------------------------------------------------------- */

function SmallInput({
  label,
  type,
  options = [],
}: {
  label: string;
  type: string;
  options?: string[];
}) {
  return (
    <div>
      <div
        className="
          bg-[#E8F3FF]
          rounded-full
          h-[44px] sm:h-[48px]
          flex items-center
          text-[#091B33]
          border border-[#c7d5e8]
          px-4
          relative
        "
      >
        {type === "select" ? (
          <>
            <select
              className="
                bg-transparent 
                w-full 
                outline-none 
                text-[14px] sm:text-[15px]
                text-center 
                cursor-pointer
              "
            >
              <option value="">{label}</option>
              {options.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>

            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2"
              strokeWidth={3}
              color="#091B33"
              size={18}
            />
          </>
        ) : (
          <input
            placeholder={label}
            className="
              bg-transparent w-full outline-none 
              text-[14px] sm:text-[15px]
              text-center text-[#091B33]
            "
          />
        )}
      </div>
    </div>
  );
}
