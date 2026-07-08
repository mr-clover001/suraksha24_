import Image from "next/image";
import { whyUs } from "@/config/site";
import DecorativeBackground from "@/components/home/why-choose-us/DecorativeBackground";
import SectionHeading from "@/components/home/why-choose-us/SectionHeading";
import CircularFeatureLayout from "@/components/home/why-choose-us/CircularFeatureLayout";
import MobileFeatureCard from "@/components/home/why-choose-us/MobileFeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <DecorativeBackground />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading />

        {/* Desktop (lg+): circular orbit layout */}
        <div className="mt-16 hidden lg:block">
          <CircularFeatureLayout />
        </div>

        {/* Mobile & tablet: photo up top, cards below (1 col on mobile, 2 on tablet) */}
        <div className="mt-14 lg:hidden">
          <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full shadow-soft-lg ring-8 ring-white sm:h-64 sm:w-64">
            <Image
              src="/assests/WhyChooseUS.jpg"
              alt="A younger hand gently holding an elderly family member's hand"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {whyUs.map((feature, index) => (
              <MobileFeatureCard
                key={feature.title}
                iconIndex={index}
                title={feature.title}
                body={feature.body}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
