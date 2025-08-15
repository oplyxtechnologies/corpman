import Hero from "@/components/Home/Hero";
import SectionFinalCTA from "@/components/Home/SectionCTA";
import SectionFeatures from "@/components/Home/SectionFeatures";
import SectionPricing from "@/components/Home/SectionPricing";
import SectionSpotlight from "@/components/Home/SectionSpotlight";
import SectionTestimonials from "@/components/Home/SectionTestimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionFeatures />
      <SectionSpotlight />
      <SectionTestimonials />
      <SectionPricing />
      <SectionFinalCTA />
    </main>
  );
}
