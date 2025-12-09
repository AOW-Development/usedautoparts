// import HeroTransmission from "@/components/home/HeroTransmission";
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
      {/* <HeroTransmission /> */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 space-y-20">
        {(engineSections as EngineSection[]).map((section, idx) => (
          <div key={idx} className="space-y-6">

            {/* ✅ TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
              {section.title}
            </h2>

            {/* ✅ IMAGE + PARAGRAPHS */}
            {section.paragraphs && section.image && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* TEXT FIRST (IF IMAGE ON RIGHT) */}
                {section.imageSide === "right" && (
                  <div className="space-y-5">
                    {section.paragraphs.map((text, i) => (
                      <p
                        key={i}
                        className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}

                {/* IMAGE */}
                <div className="flex justify-center">
                  <img
                    src={section.image}
                    alt="Used Engines"
                    className="w-[260px] sm:w-[320px] md:w-[380px] drop-shadow-[0_0_25px_rgba(0,163,255,0.5)]"
                  />
                </div>

                {/* TEXT AFTER IMAGE (IF IMAGE ON LEFT) */}
                {section.imageSide !== "right" && (
                  <div className="space-y-5">
                    {section.paragraphs.map((text, i) => (
                      <p
                        key={i}
                        className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ✅ NORMAL PARAGRAPHS (NO IMAGE) */}
            {!section.image && section.paragraphs && (
              <div className="space-y-5 max-w-5xl">
                {section.paragraphs.map((text, i) => (
                  <p
                    key={i}
                    className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}

          </div>
        ))}
      </section>
    </main>
  );
}
