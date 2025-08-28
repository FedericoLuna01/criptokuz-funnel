import BackgroundLayout from "@/components/background-layout";
import Calendly from "@/components/calendly";
import CardsGrid from "@/components/cards-grid";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import HorizontalTestimonials from "@/components/horizontal-testimonials";
import MarqueeSection from "@/components/marquee-section";
import Rentable from "@/components/rentable";
import Badge from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="">
      <BackgroundLayout
        className="pt-10"
      >
        <Badge
          text="Exclusivo para Traders/Operadores de mercado"
        />
        <Hero
          title="Te ayudamos a volverte Rentable en menos de 90 dias a través de HEW"
          video="https://player.vimeo.com/video/1028229172?h=303fcf7d1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          subtitle="Si ya probaste Wyckoff, SMC o acción del precio y seguís estancado, es normal: estabas viendo solo precio. Con HEW dejás de depender de un trading interpretativo y pasás a reglas claras de precio, tiempo y volumen (garantizado por contrato)"
          highlightWords={["sistema"]}
          steps
        />
      </BackgroundLayout>
      <MarqueeSection />
      <Calendly />
      <BackgroundLayout>
        <HorizontalTestimonials />
      </BackgroundLayout>
      <CardsGrid />
      <Rentable />
      <Faq />
    </main>
  );
}
