"use client";

import { PhoneCall, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function ThankYouPage() {
  return (
    <main className="w-full text-[#E8F3FF] px-4 sm:px-6 md:px-8">

      {/* HERO TITLE */}
      <SectionHeader title="THANK YOU" />

      {/* CONFIRMATION BOX */}
      <section className="w-full flex justify-center py-10 sm:py-12 md:py-16">
        <div className="max-w-[900px] w-full border-2 border-[#049FFF] rounded-xl overflow-hidden bg-transparent">
          
          {/* TOP GRADIENT STRIP */}
          <div className="w-full bg-gradient-to-b from-[#049FFF] to-[#091B33] border-b-2 border-[#049FFF] flex flex-col justify-center items-center space-y-3 sm:space-y-4 px-4 py-10 sm:py-12 md:py-16">
            {/* Tick Icon */}
            <CheckCircle2 size={50} strokeWidth={2} className="text-white sm:w-14 sm:h-14 md:w-16 md:h-16" />

            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-center">
              Request Submitted Successfully!
            </h2>
          </div>

          {/* CONTENT */}
          <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 space-y-6 sm:space-y-8 md:space-y-10">

            <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[28px] md:leading-[32px] opacity-95 max-w-[700px] mx-auto">
              Thank you for submitting your auto part request. Our team will review your information and get back to you shortly.
            </p>

            <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[28px] md:leading-[32px] opacity-95 max-w-[700px] mx-auto">
              A confirmation email has been sent to your email address.
            </p>

            {/* LINE */}
            <div className="w-full border-t border-[#049FFF]"></div>

            {/* WHAT HAPPENS NEXT */}
            <div className="space-y-3 sm:space-y-4 text-center">
              <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-bold">
                What happens next?
              </h3>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[32px] max-w-[700px] mx-auto">
                • Our parts specialists will check inventory for your requested part.
                <br />
                • We'll contact you via phone or email with availability and pricing.
                <br />
                • Once confirmed, we'll arrange shipping or pickup of your part.
              </p>
            </div>

            {/* LINE */}
            <div className="w-full border-t border-[#049FFF]"></div>

            {/* CALL SECTION */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 pt-2 sm:pt-3 md:pt-4">

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
                <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                  <PhoneCall size={28} className="text-white sm:w-8 sm:h-8 md:w-9 md:h-9" />
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] opacity-95">
                    Need immediate assistance?
                  </p>
                  {/* <p className="text-[20px] sm:text-[22px] md:text-[24px] text-[#049FFF] font-semibold">
                    (877) 982-7774
                  </p> */}
                </div>
              </div>

              {/* Call Now Button */}
              <a
                href="tel:+18779827774"
                className="inline-flex items-center gap-2 sm:gap-3 rounded-lg px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-white hover:scale-105 active:scale-95 transition-all duration-300 bg-gradient-to-r from-[#00A3FF] to-[#003D80] shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:shadow-[0_0_30px_rgba(0,163,255,0.6)] font-bold text-sm sm:text-base md:text-lg w-fit"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </div>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
