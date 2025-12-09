"use client";

import Link from "next/link";

export default function ContactForm() {
  return (
    <div
      className="
        w-full max-w-[860px] bg-gradient-to-b from-[#049FFF] to-[#091B33]
        rounded-[40px] border-[3px] border-[#049FFF]
        px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 space-y-6 sm:space-y-7 md:space-y-8
      "
    >
      <h2 className="text-center font-[Orbitron] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold">
        Let's Get In Touch
      </h2>

      <FormInput label="Name" />
      <FormInput label="Email" />
      <FormInput label="Phone" />
      <FormInput label="Message" textarea />

      <div className="flex justify-center">
        <Link
          href="/get-a-quote"
          className="bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white text-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-md font-semibold shadow hover:opacity-90 transition text-sm sm:text-base"
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

function FormInput({
  label,
  textarea = false,
}: {
  label: string;
  textarea?: boolean;
}) {
  return (
    <div className="w-full">
      {textarea ? (
        <textarea
          className="
            w-full h-[120px] rounded-[20px] bg-white/60 
            px-4 sm:px-5 py-3 text-[#091B33] font-[Jaldi] text-[16px] sm:text-[18px] md:text-[20px]
            outline-none
          "
          placeholder={label}
        />
      ) : (
        <input
          className="
            w-full h-[50px] sm:h-[54px] md:h-[58px] rounded-[30px] bg-white/60 
            px-4 sm:px-5 text-[#091B33] font-[Jaldi] text-[16px] sm:text-[18px] md:text-[20px]
            outline-none
          "
          placeholder={label}
        />
      )}
    </div>
  );
}
