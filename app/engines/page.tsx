import CallFloatingButton from "@/components/home/CallFloatingButton";
import ChatBot from "@/components/home/ChatBot";
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
      

      <ChatBot />
      <CallFloatingButton />

      {/* Main Content */}
      <section className="py-16 bg-[#07142B]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
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
                  className="bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] rounded-2xl p-8 border border-[#00A3FF]/40 hover:border-[#00A3FF] transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h2 className="font-bold text-2xl text-[#00A3FF] mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.paragraphs?.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SearchCar />
    </main>
  );
}
