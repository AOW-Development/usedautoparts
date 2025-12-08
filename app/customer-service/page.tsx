"use client";

import SectionHeader from "@/components/SectionHeader";

export default function CustomerServicePage() {
  return (
    <main className="w-full text-[#E8F3FF]">

      {/* HERO SECTION */}
      <SectionHeader 
        title="Exceptional Customer Service: Your Satisfaction, Our Priority"
      />

      {/* SUBTITLE */}
      <section className="w-full flex justify-center px-6 mt-10">
        <h2 className="
            font-[Orbitron] text-[22px] sm:text-[28px] lg:text-[32px] 
            font-semibold leading-[38px] text-center max-w-[1400px]
        ">
          Streamline Your Support: Submit a Ticket for Quick and Effective Assistance — 
          Fast-track Solutions with Our Ticket Submission Process for Prompt Support
        </h2>
      </section>

      {/* CONTENT SECTION */}
      <section className="w-full flex justify-center px-6 py-16">
        <div className="max-w-[1400px] space-y-12">

          {/* Block 1 */}
          <ContentBlock
            bold="Personalized Assistance, Prompt Solutions"
            text="At Usedautoparts.pro, we take pride in delivering not just quality products, but also an unparalleled customer experience. Our dedicated team of customer service agents stands ready to assist you at every step of your journey."
          />

          {/* Block 2 */}
          <ContentBlock
            bold="Convenient Hours for Your Convenience"
            text="We understand that each customer's needs are unique. That's why we provide you with personalized attention, ensuring you're directed to the most relevant department to swiftly address your queries and concerns."
          />

          {/* Block 3 */}
          <ContentBlock
            bold="Need Immediate Assistance? Reach Out!"
            text="Your convenience matters to us. Our customer service operates from Monday to Friday, ensuring you have access to support when you need it. Our hours of operation are 8:00 am to 6:00 pm CST, allowing us to assist you during your busy schedule."
          />

          {/* Block 4 */}
          <Paragraph>
            Have questions, need guidance, or seeking assistance?  
            Feel free to connect with us directly at **(888) 748-0882**.  
            Our dedicated helpline is your direct line to efficient solutions.
            <br /><br />
            At Usedautoparts.pro, customer satisfaction isn't just a goal—it's our commitment.  
            Experience customer service that goes beyond expectations.  
            Your needs drive us, and your contentment fuels us.
          </Paragraph>

        </div>
      </section>

    </main>
  );
}

/* ------------------ REUSABLE COMPONENTS ------------------ */

function ContentBlock({
  bold,
  text,
}: {
  bold: string;
  text: string;
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-[Jaldi] text-[20px] sm:text-[24px] font-semibold">
        {bold}
      </h3>

      <Paragraph>{text}</Paragraph>
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="
        font-[Jaldi] text-[18px] sm:text-[20px] lg:text-[22px]
        leading-[32px] opacity-95 text-[#E8F3FF]
    ">
      {children}
    </p>
  );
}
