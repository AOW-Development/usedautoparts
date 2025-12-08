"use client";

import GradientButton from "@/components/button";

export default function ContactForm() {
  return (
    <div
      className="
        w-full max-w-[860px] bg-gradient-to-b from-[#049FFF] to-[#091B33]
        rounded-[40px] border-[3px] border-[#049FFF]
        px-10 py-12 space-y-8
      "
    >
      <h2 className="text-center font-[Orbitron] text-[32px] font-bold">
        Let's Get In Touch
      </h2>

      <FormInput label="Name" />
      <FormInput label="Email" />
      <FormInput label="Phone" />
      <FormInput label="Message" textarea />

      <div className="flex justify-center">
        <GradientButton
          width={220}
          height={50}
          text="Submit"
          textSize="text-[20px]"
        />
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
            px-5 py-3 text-[#091B33] font-[Jaldi] text-[20px]
            outline-none
          "
          placeholder={label}
        />
      ) : (
        <input
          className="
            w-full h-[58px] rounded-[30px] bg-white/60 
            px-5 text-[#091B33] font-[Jaldi] text-[20px]
            outline-none
          "
          placeholder={label}
        />
      )}
    </div>
  );
}
