import { Metadata } from "next";

import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import VideoTestimonials from "@/components/video-testimonials";

export const metadata: Metadata = {
  title: "Criptokuz | ¡Gracias por aplicar!",
  description: "Muchas gracias por aplicar a la mentoría de CriptoKuz.",
};

const ThankYouPage = () => {
  return (
    <>
      <main>
        <Hero
          isMain={false}
          title="Paso #1 (OBLIGATORIO)
          Mira el siguiente video para confirmar tu llamada"
          highlightWords={["Paso #1"]}
          video="https://www.youtube.com/embed/WtLopPLUtbg?si=RDusYyHZN0XXYX1s"
        />
        <Hero
          isMain={false}
          title="Paso #2 (OBLIGATORIO)
          Mira el entrenamiento de cómo convertirte en trader en 2024"
          highlightWords={["Paso #2"]}
          video="https://www.youtube.com/embed/pgTWT0zSCko?si=6n3HdKTx6aeR5Jch"
        />
        <Hero
          isMain={false}
          title="Paso #3 (OBLIGATORIO)
          Nuestro proceso para ser rentable en menos de 90 dias"
          video="https://www.youtube.com/embed/nFq_bqfgx9A?si=7G7dvWQHfvy2oZXM"
          highlightWords={["Paso #3", "rentable", "90 dias"]}
        />
        <Testimonials
          isMain={false}
          title="Paso #4 (OBLIGATORIO)
          Mira nuestros casos de éxito de CriptoKuz"
          highlightWords={["Paso #4"]}
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
