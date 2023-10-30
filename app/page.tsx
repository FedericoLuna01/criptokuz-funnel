import Calendly from "@/components/calendly";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero
        title='Como ser un Trader Rentable y Consistente en menos de 90 dias'
        highlightWords={['Trader Rentable', '90 dias']}
        video='https://www.youtube.com/embed/qOECE3AkOlQ?si=1ma39Jy4YcIn-e4G'
      />
      <Hero
        title='Nuestro proceso para ser rentable en menos de 90 dias'
        video='https://www.youtube.com/embed/htvXBn3_kuA?si=VnyL3PR-sTFOHGC8'
        highlightWords={['rentable', '90 dias']}
        isMain={false}
      />
      <Hero
        title='Mis rendimientos en 30 dias operando'
        video='https://www.youtube.com/embed/Fnx8-jEAYMM?si=AQ80Bvnaulwz6XkX'
        highlightWords={['30 dias']}
        isMain={false}
      />
      <Testimonials
        title='Mira nuestros casos de éxito'
        highlightWords={['']}
      />
      <Gallery />
      <Calendly />
    </main>
  )
}
