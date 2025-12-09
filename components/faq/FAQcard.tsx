"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQCardProps {
  question: string;
  answer?: string;
  expanded?: boolean;
}

export default function FAQCard({ question, answer, expanded }: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(!!expanded);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="
        bg-gradient-to-b from-[#049FFF] to-[#091B33]
        rounded-2xl p-4 sm:p-6 text-[#E8F3FF]
        shadow-lg transition-all duration-300
        cursor-pointer select-none
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between gap-4">
        <p className="font-[Jaldi] text-[16px] sm:text-[20px] lg:text-[22px] font-semibold leading-[24px] sm:leading-[30px]">
          {question}
        </p>

        {/* ✅ REACT + / - ICON */}
        <span className="text-[#E8F3FF] text-[18px] sm:text-[22px] shrink-0">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </div>

      {/* ✅ ANSWER */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {answer && (
            <p className="font-[Jaldi] text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[32px] opacity-90">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
