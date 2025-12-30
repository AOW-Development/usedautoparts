import CallFloatingButton from "@/components/home/CallFloatingButton";
import ChatBot from "@/components/home/ChatBot";
import HeroTransmission from "@/components/home/HeroTransmission";
import SearchCar from "@/components/home/search";
import { heroData } from "@/data/herodata";
import { uapSections } from "@/data/uap";

/* ✅ Fix TypeScript 'never' error with proper typing */
type UAPSection = {
  title: string;
  paragraphs?: string[];
  highlights?: {
    title: string;
    text: string;
  }[];
  image?: string;
  imageSide?: "left" | "right";
};

const features = [
  {
    title: "Always Best Quality",
    description:
      "Quality for us is not just a word; it's a commitment. Every single used part we supply has been comprehensively checked to perform as you would expect. Whether it is an engine or any other component, big or small, rest assured we do the job right with quality used auto parts.",
  },
  {
    title: "Unparalleled Convenience",
    description:
      "We know minutes count when your car is down. That's why we design our used auto parts stores with convenience in mind. Conveniently browse our catalog from the comfort of your home and find exactly what you need without the aggravation of visiting multiple stores. Once you make your selection, we will ship your parts directly to you free of charge!",
  },
  {
    title: "A Haven for Car Enthusiasts",
    description:
      "Whether you restore classic cars or tune up your daily driver, this is your one-stop shop: Parts Central. Our website is not exactly a marketplace but, foremost, a community for car enthusiasts. Get immersed in our world of replacement auto parts and find the hidden gems and super-rare finds here.",
  },
  {
    title: "365 Days of Service",
    description:
      "Your car doesn't take a day off, and neither do we. Our dedicated sales team is happy to assist in finding those parts any time of the year. From emergencies to long projects, remember you need us; we'll be there.",
  },
];

export default function UsedAutoPartsPage() {
  return (
    <main className="min-h-screen bg-[#07142B] text-[#E8F3FF]">
      <HeroTransmission {...heroData.autoParts} />
      <ChatBot />
      <CallFloatingButton />

      {/* WHY BUY SECTION */}
      <section className="py-16 bg-[#0A2F5C]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-semibold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] text-white text-center mb-12">
            Why Buy from Parts Central?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] rounded-2xl p-8 border border-[#00A3FF]/40 hover:border-[#00A3FF] transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-[18px] lg:text-[20px] mb-4 text-white">
                  {index + 1}. {feature.title}
                </h3>
                <p className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 space-y-20">
        {(uapSections as UAPSection[]).map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h2 className="font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white mb-4">
              {section.title}
            </h2>

            {/* IMAGE + PARAGRAPHS */}
            {section.paragraphs && section.image && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {section.imageSide === "right" && (
                  <div className="space-y-5">
                    {section.paragraphs.map((text, i) => (
                      <p
                        key={i}
                        className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex justify-center">
                  <img
                    src={section.image}
                    alt="Used Auto Parts"
                    className="w-[260px] sm:w-[320px] md:w-[380px]"
                  />
                </div>

                {section.imageSide !== "right" && (
                  <div className="space-y-5">
                    {section.paragraphs.map((text, i) => (
                      <p
                        key={i}
                        className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* NORMAL PARAGRAPHS */}
            {!section.image && section.paragraphs && (
              <div className="space-y-5 max-w-5xl">
                {section.paragraphs.map((text, i) => (
                  <p
                    key={i}
                    className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}

            {/* HIGHLIGHTS */}
            {section.highlights && (
              <div className="space-y-8 max-w-5xl">
                {section.highlights.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-[#00A3FF] font-semibold text-[18px] lg:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] text-center">
        <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-semibold mb-4 text-white">
          Ready to Find Quality Used Auto Parts?
        </h2>
        <p className="text-[16px] lg:text-[18px] leading-[28px] tracking-[0.015em] font-medium text-white/80 max-w-2xl mx-auto mb-8">
          Get fast pricing, expert guidance, and nationwide delivery on quality used auto parts.
        </p>

        <a
          href="/#lead-form"
          className="inline-block bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white px-7 sm:px-9 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
        >
          Find My Parts
        </a>
      </section>

      <SearchCar />
    </main>
  );
}
