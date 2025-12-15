"use client";

import AboutSection from "@/components/home/AboutSection";
import CallFloatingButton from "@/components/home/CallFloatingButton";
import ChatBot from "@/components/home/ChatBot";
import ExitIntentPopup from "@/components/home/ExitIntentPopup";
import HeroSection from "@/components/home/HeroTransmission";
import HowItWorks from "@/components/home/HowItWorks";
import SearchCar from "@/components/home/search";
import TestimonialSection from "@/components/home/testimonials";
import TrustSignals from "@/components/home/TrustSignals";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { heroData } from "@/data/herodata";

export default function Home() {

  return (
    <div>
      <HeroSection {...heroData.home} />
      <ChatBot />
      <CallFloatingButton />
      <ExitIntentPopup />
      <AboutSection />
      <TrustSignals />
      <WhyChooseUs />
      <TestimonialSection />
      <HowItWorks />
      <SearchCar />
    </div>
  );
}
