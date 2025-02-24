import { Metadata } from "next";

import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import BackgroundLayout from "@/components/background-layout";
import Badge from "@/components/ui/badge";

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
    <main>
      <BackgroundLayout
        className="flex items-center justify-center pt-10"
      >
        <Badge
          text="Pasos anteriores a la llamada"
        />
        <Hero
          isMain={false}
          title="Paso #1 (OBLIGATORIO) Mira el siguiente video para confirmar tu llamada"
          highlightWords={["paso #1"]}
          video="https://player.vimeo.com/video/1036551613?h=e65bbb5409&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        />
        <Button
          size="xl"
          asChild
        >
          <a
            href="https://api.whatsapp.com/send?phone=5491140971234&text=Hola,%20qu%C3%A9%20tal?%20Agende%20una%20sesi%C3%B3n%20por%20favor"
            target="_blank"
            className="z-50 mb-10"
          >
            Confirmar llamada
          </a>
        </Button>
      </BackgroundLayout>
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
        highlightWords={["paso #3"]}
      />
      <Faq />
    </main>
  );
};

export default ThankYouPage;
