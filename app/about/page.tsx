"use client";

import GradientButton from "@/components/button";
import SectionWrapper from "@/components/about/SectionWrapper";
import ImageCard from "@/components/about/ImageCard";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
    return (
        <main className="w-full text-[#E8F3FF] px-6 sm:px-10 lg:px-20">

            {/* ---------------- HERO TITLE ---------------- */}
            <SectionHeader title="ABOUT US"/>

            {/* ---------------- SECTION 1 ---------------- */}
            <SectionWrapper>
                <div className="flex justify-center">
                    <ImageCard src="/images/About-image-1.jpg" />
                </div>

                <div className="space-y-6 max-w-[900px] mx-auto">
                    <Title> Your Trusted Source for Quality Vehicle Parts </Title>

                    <Paragraph>
                        At usedautoparts.pro, we stand as a pillar of trust in the world of automotive solutions.
                        With an extensive inventory of top-tier vehicle parts, we're your dependable partner in
                        keeping your vehicles running smoothly.
                    </Paragraph>
                </div>
            </SectionWrapper>

            {/* ---------------- SECTION 2 ---------------- */}
            <SectionWrapper reverse>
                <div className="space-y-6 max-w-[900px] mx-auto">
                    <Title> About Used Auto Parts Pro </Title>

                    <Paragraph>
                        At Used Auto Parts Pro, we specialize in providing high-quality used OEM automotive parts
                        and accessories. Our experts provide fast real-time guidance, and we deliver the best
                        parts at the most competitive prices. Call now at (877) 982-7774 and join thousands of
                        satisfied customers.
                    </Paragraph>

                    <GradientButton
                        width={300}
                        height={65}
                        text="Call Now"
                        textSize="text-[24px]"
                    />
                </div>

                <div className="flex justify-center">
                    <ImageCard src="/images/About-image-2.jpg" />
                </div>
            </SectionWrapper>

            {/* ---------------- SECTION 3 & 4 SIDE BY SIDE ---------------- */}
            <SectionWrapper>
                {/* LEFT — Why Choose Us */}
                <div className="space-y-6">
                    <Title> Why Choose Us for Your Automotive Needs? </Title>
                    <HighlightList
                        items={[
                            "Unmatched Trust: usedautoparts.pro has earned its name by consistently delivering reliable solutions.",
                            "Vast Stocks, Instant Availability: Get the parts you need exactly when you need them.",
                            "Seamless Shipping: Fast, reliable, and delivered right to your doorstep.",
                            "Committed to Quality: Every part meets strict inspection standards.",
                        ]}
                    />
                </div>

                {/* RIGHT — Your Journey */}
                <div className="space-y-6">
                    <Title> Your Journey, Our Priority </Title>
                    <Paragraph>
                        Whether you're a car enthusiast, a mechanic, or someone needing a quick fix,
                        Used Auto Parts Pro brings you top-tier support, unmatched reliability, and peace of mind.
                        Your journey deserves the best — and that's exactly what we deliver.
                    </Paragraph>
                </div>

            </SectionWrapper>


        </main>
    );
}

/* ---------------- SMALL COMPONENTS ---------------- */

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

function HighlightList({ items }: { items: string[] }) {
    return (
        <div className="space-y-3 text-[#049FFF] font-[Jaldi] text-[18px] sm:text-[20px] leading-[30px]">
            {items.map((item, i) => (
                <p key={i}>• {item}</p>
            ))}
        </div>
    );
}
