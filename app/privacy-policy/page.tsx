"use client";

import SectionHeader from "@/components/SectionHeader";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full text-[#E8F3FF] overflow-x-hidden">

      {/* HERO TITLE */}
      <SectionHeader title="PRIVACY POLICY" />

      {/* SUB-HEADING */}
      <section className="w-full flex justify-center px-4 sm:px-6 md:px-10 mt-10 sm:mt-14 lg:mt-16">
        <h2
          className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px]
                     font-semibold leading-tight sm:leading-[34px] lg:leading-[40px]
                     text-center max-w-[1200px]"
        >
          Your Privacy Matters: Our Commitment to Protecting Your Information —
          Safeguarding Your Data with Transparency, Security, and Trust
        </h2>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-full flex justify-center px-4 sm:px-6 md:px-10 py-10 sm:py-14 lg:py-16">
        <p
          className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px]
                     leading-[26px] sm:leading-[30px] md:leading-[32px] lg:leading-[36px]
                     max-w-[1300px] text-center lg:text-left"
        >
          Used Auto Parts Pro certifies that your information is safe and secure
          when making transactions over the Internet. Through this Internet Privacy
          Statement, we want to reassure users of the Site that we will not sell,
          share, or rent user information to others in a manner different than as
          set forth in this Internet Privacy Statement.
          <br /><br />
          We use a credit card processing company to bill purchasers of goods from
          the Site, and we also use outside distributors and delivery companies to
          assist us in fulfilling and delivering orders. We share with them only the
          information necessary to enable such card processing and fulfillment and
          delivery of goods.
          <br /><br />
          Our users' personal information will not be shared, sold, or rented to any
          organization outside of Used Auto Parts Pro and our financial and order
          fulfillment affiliates. Used Auto Parts Pro occasionally sends our customers
          and users of the Site announcements and updates, containing important
          information which we believe will be of value to them.
          <br /><br />
          Users of the Site can always update their personally identifying information
          that they have provided to Used Auto Parts Pro by e-mailing us at{" "}
          <a
            href="mailto:sales@usedautoparts.pro"
            className="font-semibold bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] bg-clip-text text-transparent hover:underline"
          >
            sales@usedautoparts.pro
          </a>{" "}
          or by calling{" "}
          <a
            href="tel:+18779827774"
            className="font-semibold bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] bg-clip-text text-transparent hover:underline"
          >
            (877) 982-7774
          </a>.
        </p>
      </section>

    </main>
  );
}
