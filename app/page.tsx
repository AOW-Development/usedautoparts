
import AboutSection from "@/components/home/AboutSection";
import CallFloatingButton from "@/components/home/CallFloatingButton";
import ChatBot from "@/components/home/ChatBot";
import HeroSection from "@/components/home/HeroTransmission";
import HowItWorks from "@/components/home/HomeItWorks";
import SearchCar from "@/components/home/search";
import TestimonialSection from "@/components/home/testimonials";
import TrustSignals from "@/components/home/TrustSignals";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChatBot />
      <CallFloatingButton />
      <AboutSection />
      <TrustSignals />
      <WhyChooseUs />
      <TestimonialSection />
      <HowItWorks />
      <SearchCar />
    </div>

  );
}
