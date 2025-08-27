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
          title="Como dejar de perder y empezar a operar con un sistema claro y mecanizado (precio, tiempo, volumen)"
          video="https://player.vimeo.com/video/1028229172?h=303fcf7d1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          subtitle="El paso a paso que utilizo para tener la rentabilidad por mas de 6 años de manera consistente y predecible, y la mejor parte es que si no sos rentable, te devolvemos cada dolar que nos pagaste garantizado por contrato"
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
