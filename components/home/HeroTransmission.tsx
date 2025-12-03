"use client";

import Image from "next/image";

export default function HeroTransmissionClean() {
    return (
        <section className="relative w-full h-[900px] bg-[#091B33] overflow-hidden">

            {/* ---------------- BACKGROUND IMAGE + OVERLAY ---------------- */}
            <div className="absolute inset-0 h-[900px]">
                <Image
                    src="/iStock-184828850.jpg"
                    alt="Transmission Hero"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#091B33]/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#049FFF]/60 to-[#091B33]" />
            </div>

            {/* ------------------- HEADINGS ------------------- */}
            <div className="absolute left-1/2 top-[180px] -translate-x-1/2 text-center text-[#E8F3FF] px-6">

                <h1 className="font-[Orbitron] font-bold text-[38px] leading-[48px]">
                    Used Transmissions for Sale
                </h1>

                <p className="mt-3 font-[Orbitron] text-[20px] leading-[28px] font-medium max-w-[600px] mx-auto">
                    Unlock smooth shifting & savings with high-quality used transmissions
                </p>

                {/* CALL NOW BUTTON */}
                <div className="relative w-[280px] h-[50px] mx-auto mt-6">
                    <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-[#049FFF] to-[#0077C8] shadow-lg opacity-90" />

                    <div className="absolute inset-0 flex items-center justify-center gap-3">
                        <div className="w-[20px] h-[20px] rounded-full border-2 border-[#E8F3FF]" />
                        <span className="font-[Orbitron] text-[18px] font-semibold">
                            (877) 982-7774
                        </span>
                    </div>
                </div>
            </div>

            {/* ------------------- FORM ------------------- */}
            <FormGrid />
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/*                                 FORM GRID                                   */
/* -------------------------------------------------------------------------- */

function FormGrid() {
    return (
        <div className="absolute left-1/2 top-[420px] -translate-x-1/2 w-[900px] max-w-[90%]">

            <div className="grid grid-cols-3 gap-5">
                {[
                    { label: "Year", type: "select", options: ["2024", "2023", "2022"] },
                    { label: "Make", type: "select", options: ["Toyota", "Honda", "Ford"] },
                    { label: "Model", type: "select", options: ["A", "B", "C"] },
                    { label: "Part", type: "select", options: ["Transmission", "Engine"] },
                    { label: "Engine Size", type: "select", options: ["2.0L", "2.4L", "3.0L"] },
                    { label: "Transmission", type: "select", options: ["Automatic", "Manual"] },
                    { label: "Zip Code", type: "text" },
                    { label: "Phone", type: "text" },
                ].map((item, i) => (
                    <SmallInput
                        key={i}
                        label={item.label}
                        type={item.type}
                        options={item.options}
                    />
                ))}
                <div className="col-span-3 flex justify-center mt-2">
                    <SmallSubmit />
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                               SMALL INPUT                                   */
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
    <div className="w-full">
      <div
        className="
          bg-[#E8F3FF]
          rounded-full
          h-[48px]
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
                text-sm 
                text-center 
                appearance-none
                cursor-pointer
                placeholder:text-[#4A5568]   /* darker placeholder */
                text-[#091B33]
              "
            >
              <option value="">{label}</option>
              {options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>

            {/* ▼ Arrow Icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#091B33]"
              >
                <path
                  d="M5 7L10 12L15 7"
                  stroke="#091B33"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </>
        ) : (
          <input
            placeholder={label}
            className="
              bg-transparent 
              w-full 
              outline-none 
              text-sm 
              text-center
              placeholder:text-[#4A5568]   /* darker placeholder */
              text-[#091B33]
            "
          />
        )}
      </div>
    </div>
  );
}


/* -------------------------------------------------------------------------- */
/*                             SMALL SUBMIT BUTTON                             */
/* -------------------------------------------------------------------------- */

function SmallSubmit() {
    return (
        <button
            className="
        bg-gradient-to-r from-[#049FFF] to-[#0077C8]
        text-white font-semibold
        rounded-2xl
        px-10 py-3
        text-[16px]
        shadow-lg hover:opacity-90 transition
      "
        >
            Submit Request
        </button>
    );
}
