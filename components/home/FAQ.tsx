"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "How long does it take to get a quote?",
      a: "Usually 1-5 minutes! Our team will call you within 1 hour with an exact price.",
    },
    {
      q: "Do you guarantee the parts are authentic?",
      a: "100% OEM authentic or your money back. Every part is verified.",
    },
    {
      q: "What's your return policy?",
      a: "30-day full return for any reason + 90-day warranty on all parts.",
    },
    {
      q: "Is shipping really free?",
      a: "Yes! Free shipping nationwide. Tracking included.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
              >
                <h3 className="font-bold text-left">{faq.q}</h3>
                <ChevronDown
                  className={`transition ${openIdx === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openIdx === idx && (
                <div className="p-4 bg-white border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
