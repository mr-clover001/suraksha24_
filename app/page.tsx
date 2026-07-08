import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import DistanceSection from "@/components/home/DistanceSection";
import HowItWorks from "@/components/home/HowItWorks";
import ServicePickerSection from "@/components/home/ServicePickerSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ReportingSection from "@/components/home/ReportingSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import WhereWeCare from "@/components/home/WhereWeCare";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <DistanceSection />
      <HowItWorks />
      {/* <ServicePickerSection /> */}
      <ServicesGrid />
      <ReportingSection />
      <WhyChooseUs />
      <Testimonials />
      <MeetTheTeam />
      {/* <WhereWeCare /> */}
      <FAQSection />
      <FinalCTA />
    </>
  );
}
