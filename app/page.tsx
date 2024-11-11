import Calendly from "@/components/calendly";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import VideoTestimonials from "@/components/video-testimonials";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero
        title="Traders de mercados, estas a un paso de entender como puede ser rentable y vivir de los mercados GARANTIZADO"
        video="https://player.vimeo.com/video/1028229172?h=303fcf7d1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        subtitle="La mejor parte es que si no sos rentable, te devolvemos cada dolar que nos pagaste garantizado por contrato"
        highlightWords={["mercados", "habilidad", "rentable", "vivir", "garantizado"]}
        steps
      />
      <Hero
        title="Nuestro proceso para ser rentable en menos de 90 dias"
        video="https://player.vimeo.com/video/958728289?h=2dca979dc9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        highlightWords={["rentable", "90 dias"]}
        isMain={false}
        steps
        stepNumber="2"
      />
      <Calendly />
      <Testimonials
        title="Mira nuestros casos de éxito"
        highlightWords={[""]}
      />
      <VideoTestimonials />
    </main>
  );
}
