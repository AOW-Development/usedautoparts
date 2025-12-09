"use client";

import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/about/SectionWrapper";
import ImageCard from "@/components/about/ImageCard";
import ContactIconCard from "@/components/contact/ContactIconCard";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="w-full text-[#E8F3FF] px-3 sm:px-4 md:px-6 lg:px-10 xl:px-20">

      {/* HERO TITLE */}
      <SectionHeader title="CONTACT US" />

      {/* SECTION 1 */}
      <SectionWrapper>
        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-[900px] mx-auto w-full">
          <Title>
            Experience Excellence: Reach Out For Unparalleled Service and Support
          </Title>

          <Paragraph>
            Discover a new level of service and support with usedautoparts.pro.
            Whether you're seeking solutions, have questions, or want to explore opportunities, our
            dedicated team is here to provide exceptional assistance. Connect with us today and let's
            make things happen together.
          </Paragraph>
        </div>

        <div className="flex justify-center w-full">
          <ImageCard src="/images/About-image-1.jpg" />
        </div>
      </SectionWrapper>

      {/* CALL + EMAIL SECTION */}
      <section className="w-full flex justify-center py-10 sm:py-12 md:py-14 lg:py-16 px-3 sm:px-4 md:px-6">
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-items-center">
          {/* Call Card as CTA */}
          <a
            href="tel:+18779827774"
            className="w-full max-w-sm transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ContactIconCard
              label="Call"
              iconType="phone"
            />
          </a>

          {/* Mail Card as CTA */}
          <a
            href="mailto:support@usedautoparts.com"
            className="w-full max-w-sm transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ContactIconCard
              label="Mail"
              iconType="mail"
            />
          </a>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="w-full flex justify-center py-14 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-[900px]">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-snug tracking-wide">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] opacity-95">
      {children}
    </p>
  );
}
