"use client";

import SectionHeader from "@/components/SectionHeader";
import SectionWrapper from "@/components/about/SectionWrapper";
import ImageCard from "@/components/about/ImageCard";
import ContactIconCard from "@/components/contact/ContactIconCard";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <main className="w-full text-[#E8F3FF]">

            {/* ---------------- HERO TITLE ---------------- */}
            <SectionHeader title="CONTACT US" />

            {/* ---------------- SECTION 1 ---------------- */}
            <SectionWrapper>

                <div className="space-y-6 max-w-[900px] mx-auto ml-18">
                    <Title>Experience Excellence: Reach Out For Unparalleled Service and Support</Title>

                    <Paragraph>
                        Discover a new level of service and support with usedautoparts.pro.
                        Whether you're seeking solutions, have questions, or want to explore opportunities, our
                        dedicated team is here to provide exceptional assistance. Connect with us today and let's
                        make things happen together.
                    </Paragraph>
                </div>
                <div className="flex justify-center">
                    <ImageCard src="/images/About-image-1.jpg" />
                </div>
            </SectionWrapper>


            {/* ---------------- CALL + EMAIL SECTION ---------------- */}
            <section className="w-full flex justify-center py-12 px-6">
                <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
                    <ContactIconCard
                        label="Call"
                        iconType="phone"
                    />
                    <ContactIconCard
                        label="Mail"
                        iconType="mail"
                    />
                </div>
            </section>

            {/* ---------------- CONTACT FORM ---------------- */}
            <section className="w-full flex justify-center py-20 px-6">
                <ContactForm />
            </section>
        </main>
    );
}

function Title({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-[Orbitron] text-[26px] sm:text-[30px] lg:text-[32px] font-semibold leading-snug tracking-wide">
            {children}
        </h2>
    );
}

function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-[Jaldi] text-[17px] sm:text-[19px] lg:text-[21px] leading-[30px] opacity-95">
            {children}
        </p>
    );
}
