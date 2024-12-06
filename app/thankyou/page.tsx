import { Metadata } from "next";

import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import VideoTestimonials from "@/components/video-testimonials";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Criptokuz | ¡Gracias por aplicar!",
  description: "Muchas gracias por aplicar a la mentoría de CriptoKuz.",
  openGraph: {
    title: "Criptokuz | ¡Gracias por aplicar!",
    description: "Muchas gracias por aplicar a la mentoría de CriptoKuz.",
    type: "website",
    url: "https://criptokuz.com/thankyou",
    images: [
      {
        url: "./og-image-thankyou.jpg",
        width: 800,
        height: 450,
        alt: "Criptokuz | ¡Gracias por aplicar!",
      },
    ]
  },
};

const ThankYouPage = () => {
  return (
    <>
      <main className="flex items-center flex-col">
        <Hero
          isMain={false}
          title="Paso #1 (OBLIGATORIO)
          Mira el siguiente video para confirmar tu llamada"
          highlightWords={["Paso #1"]}
          video="https://player.vimeo.com/video/1036551613?h=e65bbb5409&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        />
        <Button size="xl" asChild>
          <a href="https://api.whatsapp.com/send?phone=5491140971234&text=Hola,%20qu%C3%A9%20tal?%20Agende%20una%20sesi%C3%B3n%20por%20favor" target="_blank">
            Confirmar llamada
          </a>
        </Button>
        <Hero
          isMain={false}
          title="Paso #2 (OBLIGATORIO)
          Nuestro proceso para ser rentable en menos de 90 dias"
          video="https://player.vimeo.com/video/958728289?h=2dca979dc9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          highlightWords={["Paso #2", "rentable", "90 dias"]}
        />
        <Testimonials
          isMain={false}
          title="Paso #3 (OBLIGATORIO)
          Mira nuestros casos de éxito de CriptoKuz"
          highlightWords={["Paso #3"]}
        />
        <Faq />
        <VideoTestimonials />
        <Gallery
          href="https://api.whatsapp.com/send?phone=5491140971234&text=Hola,%20qu%C3%A9%20tal?%20Agende%20una%20sesi%C3%B3n%20por%20favor"
          label="Confirmar llamada"
        />
      </main>
    </>
  );
};

export default ThankYouPage;
