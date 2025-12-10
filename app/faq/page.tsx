"use client";

import FAQCard from "@/components/faq/FAQcard";
import SectionHeader from "@/components/SectionHeader";
import { faqData } from "@/data/faqData";

export default function FAQPage() {
  return (
    <main className="w-full min-h-screen text-[#E8F3FF] bg-[#07142B]">

      <SectionHeader title="FREQUENTLY ASKED QUESTIONS" />

      <section className="w-full max-w-[1500px] mx-auto px-6 py-20">
        
        <h2 className="text-[26px] sm:text-[32px] text-center font-bold mb-10">
          Learn more about used auto parts that we use
        </h2>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              expanded={faq.expanded}
            />
          ))}
        </div>
      </section>

    </main>
  );
}
