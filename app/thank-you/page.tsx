"use client";

import { PhoneCall, CheckCircle2 } from "lucide-react";
import GradientButton from "@/components/button";
import SectionHeader from "@/components/SectionHeader";

export default function ThankYouPage() {
  return (
    <main className="w-full text-[#E8F3FF]">

      {/* HERO TITLE */}
      <SectionHeader title="THANK YOU" />

      {/* CONFIRMATION BOX */}
      <section className="w-full flex justify-center px-6 py-16">
        <div
          className="
            max-w-[900px] w-full
            border-2 border-[#049FFF]
            rounded-xl overflow-hidden
            bg-transparent
          "
        >
          {/* TOP GRADIENT STRIP */}
          <div className="w-full h-[160px] bg-gradient-to-b from-[#049FFF] to-[#091B33] border-b-2 border-[#049FFF] flex flex-col justify-center items-center space-y-4">
            {/* Tick Icon */}
            <CheckCircle2 size={60} strokeWidth={2} className="text-white" />

            <h2 className="text-[30px] sm:text-[36px] font-bold text-center">
              Request Submitted Successfully!
            </h2>
          </div>

          {/* CONTENT */}
          <div className="px-8 py-10 space-y-10">

            <p className="text-center text-[20px] leading-[32px] opacity-95 max-w-[700px] mx-auto">
              Thank you for submitting your auto part request. Our team will review your information and get back to you shortly.
            </p>

            <p className="text-center text-[20px] leading-[32px] opacity-95 max-w-[700px] mx-auto">
              A confirmation email has been sent to your email address.
            </p>

            {/* LINE */}
            <div className="w-full border-t border-[#049FFF]"></div>

            {/* WHAT HAPPENS NEXT */}
            <div className="space-y-4 text-center">
              <h3 className="text-[26px] font-bold">
                What happens next?
              </h3>

              <p className="text-[20px] leading-[32px] max-w-[700px] mx-auto">
                • Our parts specialists will check inventory for your requested part. <br />
                • We’ll contact you via phone or email with availability and pricing. <br />
                • Once confirmed, we’ll arrange shipping or pickup of your part.
              </p>
            </div>

            {/* LINE */}
            <div className="w-full border-t border-[#049FFF]"></div>

            {/* CALL SECTION */}
            <div className="flex flex-col items-center space-y-4 pt-2">

              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] rounded-full border-2 border-white flex items-center justify-center">
                  <PhoneCall size={32} className="text-white" />
                </div>

                <div>
                  <p className="text-[22px] opacity-95">
                    Need immediate assistance?
                  </p>
                  <p className="text-[24px] text-[#049FFF] font-semibold">
                    (877) 982 7774
                  </p>
                </div>
              </div>
              <GradientButton
                width={260}
                height={60}
                text="Call Now"
                textSize="text-[26px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
