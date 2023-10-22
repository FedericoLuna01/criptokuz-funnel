import Calendly from "@/components/calendly";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero
        title='Descrubrí la clave del crecimiento de tu negocio'
        subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit'
        highlightWords={['clave', 'negocio']}
        video='https://www.youtube.com/embed/-CQK5DSMa20?si=AcMzQUNMhGufAw9s?autoplay=1'
      />
      <Testimonials />
      <Gallery />
      <Calendly />
    </main>
  )
}
