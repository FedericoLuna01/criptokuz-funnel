import HorizontalTestimonials from "@/components/horizontal-testimonials";
import BackgroundLayout from "@/components/background-layout";
import MarqueeSection from "@/components/marquee-section";
import Entregables from "@/components/entregables";
import Calendly from "@/components/calendly";
import Faq from "@/components/faq";
import WhoAmI from "@/components/who-am-i";
import MainHero from "@/components/main-hero";

export default function Home() {
  return (
    <main className="">
      <MainHero />
      <MarqueeSection />
      <Calendly />
      <BackgroundLayout>
        <HorizontalTestimonials />
      </BackgroundLayout>
      <WhoAmI />
      <BackgroundLayout>
        <Entregables />
      </BackgroundLayout>
      <Faq />
    </main>
  );
}
