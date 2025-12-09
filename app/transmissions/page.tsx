import Image from "next/image";
import Link from "next/link";
import { transmissionSections } from "@/data/transmission";

export default function TransmissionsPage() {
  return (
    <main className="w-full text-[#E8F3FF] overflow-x-hidden">

      {/* HERO */}
      <section className="w-full py-20 px-4 sm:px-8 bg-[#0B1C33] text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          Used Transmissions
        </h1>
        <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base lg:text-lg">
          High-quality junkyard transmissions with nationwide shipping, warranty,
          and unbeatable pricing.
        </p>

        {/* HERO CTA */}
        <Link
          href="/get-a-quote"
          className="inline-block mt-8 bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4]
                     text-white px-6 py-3 rounded-md font-semibold shadow
                     hover:opacity-90 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="w-full px-4 sm:px-8 py-16 flex flex-col gap-20">
        {transmissionSections.map((section, index) => (
          <div
            key={index}
            className={`max-w-7xl mx-auto grid gap-10 items-center
              ${section.image ? "lg:grid-cols-2" : "grid-cols-1"}
            `}
          >
            {/* TEXT */}
            <div
              className={`flex flex-col gap-4 ${
                section.imageSide === "right" ? "order-1" : "order-2"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold">
                {section.title}
              </h2>

              {section.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="text-white/80 text-sm sm:text-base leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* IMAGE (Optional) */}
            {section.image && (
              <div
                className={`relative w-full h-[260px] sm:h-[320px] rounded-xl overflow-hidden
                  ${section.imageSide === "right" ? "order-2" : "order-1"}
                `}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-20 px-4 sm:px-8 bg-[#0E3A75] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Find the Right Transmission?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Get fast pricing, expert guidance, and nationwide delivery on quality used transmissions.
        </p>

        <Link
          href="/get-a-quote"
          className="inline-block bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4]
                     text-white px-7 py-3 rounded-md font-semibold shadow
                     hover:opacity-90 transition"
        >
          Get a Quote Now
        </Link>
      </section>
    </main>
  );
}
