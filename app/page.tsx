import Calendly from "@/components/calendly";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import VideoTestimonials from "@/components/video-testimonials";

export default function Home() {
  return (
    <main>
      <Hero
        title="Como ser un Trader Rentable y Consistente en menos de 90 dias a través de HEW"
        highlightWords={["Trader Rentable", "90 dias", "HEW"]}
        video="https://www.youtube.com/embed/pgTWT0zSCko?si=6n3HdKTx6aeR5Jch"
      />
      <Hero
        title="Nuestro proceso para ser rentable en menos de 90 dias"
        video="https://www.youtube.com/embed/htvXBn3_kuA?si=VnyL3PR-sTFOHGC8"
        highlightWords={["rentable", "90 dias"]}
        isMain={false}
      />
      <Hero
        title="Mis rendimientos en 30 dias operando"
        video="https://www.youtube.com/embed/Fnx8-jEAYMM?si=AQ80Bvnaulwz6XkX"
        highlightWords={["30 dias"]}
        isMain={false}
      />
      <Testimonials
        title="Mira nuestros casos de éxito"
        highlightWords={[""]}
      />
      <VideoTestimonials />
      <Gallery href="#calendly" label="Quiero aplicar" />
      <Calendly />
    </main>
  );
}
