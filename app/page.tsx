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

export default function Home() {
  return (
    <div>
      <HeroSection />
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
