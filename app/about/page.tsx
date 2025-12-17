"use client";



import { PhoneCall } from "lucide-react";
import ChatBot from "@/components/home/ChatBot";
import CallFloatingButton from "@/components/home/CallFloatingButton";
import SectionHeader from "@/components/SectionHeader";



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#07142B] to-[#0A1F3D] text-[#E8F3FF] overflow-hidden">
      <ChatBot />
      <CallFloatingButton />



      {/* HERO TITLE */}
      <SectionHeader title="ABOUT US" />



      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
              Your Trusted Source for Quality Vehicle Parts
            </h2>
            <div className="space-y-5">
              <p className="text-base sm:text-lg lg:text-lg lg:text-xl text-[#cacaca] leading-relaxed max-w-lg">
                At <span className="font-semibold text-[#00A3FF]">Parts Central</span>, we stand as a pillar of trust in the automotive industry.
                With an extensive inventory of rigorously tested OEM parts, we're your dependable partner for keeping vehicles running at peak performance.
              </p>
              <p className="text-base sm:text-lg lg:text-lg lg:text-xl text-[#cacaca] leading-relaxed max-w-lg">
                Thousands of satisfied customers trust us for our commitment to quality, competitive pricing, and lightning-fast delivery nationwide.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-[#00A3FF]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/20 to-[#003D80]/20" />
            <img
              src="/hero/hero32.png"
              alt="Warehouse Operations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>



      {/* COMPANY STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#0A2F5C]/30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:text-left text-left">
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-[#00A3FF]/30 order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/20 to-[#003D80]/20" />
            <img
              src="/hero/hero31.jpg"
              alt="Expert Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">
              About Parts Central
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg lg:text-lg lg:text-xl text-[#cacaca] leading-relaxed max-w-lg mx-auto lg:mx-0">
                We specialize in providing <span className="font-semibold">high-quality used OEM automotive parts</span> with comprehensive warranties.
                Our expert team offers real-time guidance to ensure you get the perfect part for your vehicle.
              </p>
              <p className="text-base sm:text-lg lg:text-lg lg:text-xl text-[#cacaca] leading-relaxed">
                Join <span className="font-semibold text-[#00FFB2]">thousands of satisfied customers</span> who've discovered why we're the nation's leading source for quality used auto parts.
              </p>
            </div>



            {/* Premium Call CTA */}
            <a
              href="tel:+18779827774"
              className="group inline-flex items-center gap-3 lg:gap-4 rounded-2xl px-6 lg:px-8 py-4 text-white font-bold shadow-2xl shadow-[#00A3FF]/40 hover:shadow-2xl hover:shadow-[#00A3FF]/60 bg-gradient-to-r from-[#00A3FF] via-[#0080D0] to-[#003D80] hover:from-[#00A3FF]/90 hover:to-[#003D80]/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-fit"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/20 group-hover:bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                <PhoneCall className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <span className="text-lg lg:text-xl tracking-wide">
                Call Now: (888) 338-2540
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
