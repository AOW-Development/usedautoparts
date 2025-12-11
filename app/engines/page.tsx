import Header from "@/components/header";
import CallFloatingButton from "@/components/home/CallFloatingButton";
import ChatBot from "@/components/home/ChatBot";
import HeroTransmission from "@/components/home/HeroTransmission";
import SearchCar from "@/components/home/search";
import { engineSections } from "@/data/engine";

/* ✅ Proper Type to Fix 'never' Error */
type EngineSection = {
  title: string;
  paragraphs?: string[];
  image?: string;
  imageSide?: "left" | "right";
};

export default function UsedEnginesPage() {
  return (
    <main className="min-h-screen bg-[#07142B] text-[#E8F3FF]">

      <HeroTransmission />
      <ChatBot />
      <CallFloatingButton />

      {/* Main Content */}
      <section className="py-16 bg-[#07142B]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mx-auto space-y-12">

            {/* Hero Section - First item from engineSections */}
            {(engineSections as EngineSection[]).length > 0 && (
              <div className="space-y-4 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {(engineSections as EngineSection[])[0].title}
                </h1>
                <div className="space-y-4">
                  {(engineSections as EngineSection[])[0].paragraphs?.map((text, i) => (
                    <p key={i} className="text-lg text-white/80 leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Content Sections - Rest of the items */}
            <div className="space-y-8">
              {(engineSections as EngineSection[]).slice(1).map((section, index) => (
                <div
                  key={section.title}
                  className="bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] rounded-2xl px-10 py-12 border border-[#00A3FF]/40 hover:border-[#00A3FF] transition-all duration-300 max-w-[1200px] mx-auto"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6 lg:gap-4">

                    {/* Larger image without cropping */}
                    {section.image && (
                      <div className="w-full md:w-[30%] flex items-center justify-center h-[300px] rounded-lg overflow-hidden">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="h-full w-auto object-contain rounded-lg"
                        />
                      </div>
                    )}

                    {/* Text */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="font-bold text-2xl text-[#00A3FF] mb-4">
                        {section.title}
                      </h2>

                      <div className="space-y-4">
                        {section.paragraphs?.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          Ready to Find the Right Engine?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Get fast pricing, expert guidance, and nationwide delivery on quality used engines.
        </p>

        <a
          href="/#lead-form"
          className="inline-block bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white px-7 sm:px-9 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:shadow-[0_0_30px_rgba(0,163,255,0.6)] transition-all duration-300 hover:opacity-90 cursor-pointer"
        >
          Find My Engine
        </a>
      </section>

      <SearchCar />
    </main>
  );
}
