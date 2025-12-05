"use client";

interface FAQCardProps {
  question: string;
  answer?: string;
  expanded?: boolean;
}

export default function FAQCard({ question, answer, expanded }: FAQCardProps) {
  return (
    <div
      className="
        bg-gradient-to-b from-[#049FFF] to-[#091B33]
        rounded-2xl p-6 text-[#E8F3FF] shadow-lg
        flex flex-col justify-center
        min-h-[110px]
        transition-all
      "
    >
      <p className="font-[Jaldi] text-[22px] font-semibold text-center leading-[30px]">
        {question}
      </p>

      {expanded && answer && (
        <p className="font-[Jaldi] text-[20px] leading-[32px] text-center mt-4 opacity-90">
          {answer}
        </p>
      )}
    </div>
  );
}
