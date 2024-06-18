import Calendly from "@/components/calendly";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import VideoTestimonials from "@/components/video-testimonials";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero
        title="Traders/Operadores de mercados, estas a un paso de tener la habilidad de poder ser rentable y vivir del mercado GARANTIZADO"
        video="https://player.vimeo.com/video/958724118?h=accff79db4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
