import { Button } from "./ui/button"
import Heading from "./ui/heading"
import { Separator } from "./ui/separator"
import { LiquidHighlight } from "./ui/liquid-highlight";

interface HeroProps {
  title: string;
  highlightWords: string[];
  video: string;
  isMain?: boolean;
  steps?: boolean;
  stepNumber?: string;
  subtitle?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  highlightWords,
  video,
  isMain = true,
  steps = false,
  stepNumber = "1",
  subtitle
}) => {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center space-y-6 py-10 z-50">
        {
          isMain ? (
            <div className="text-2xl sm:text-4xl font-bold uppercase text-center max-w-5xl">
              Te instalamos un sistema a traves de {" "}<LiquidHighlight className="px-2">HEW</LiquidHighlight>, <LiquidHighlight className="px-2">tiempo</LiquidHighlight>, <LiquidHighlight className="px-2">volumen</LiquidHighlight> y kpis, para operar sin interpretación, y con pautas-métricas medibles
            </div>
          ) : (
            <Heading
              title={title}
              highlightWords={highlightWords}
            />
          )
        }

        {
          subtitle && (
            <p className="max-w-3xl text-center text-xl text-zinc-300 z-50">
              {subtitle}
            </p>
          )
        }
        {
          steps && (
            <div className="z-50">
              <Separator className="bg-white max-w-3xl mb-4" />
              <Heading
                title={`Paso ${stepNumber} de 2: Mira el video`}
                highlightWords={['video', "2 de 2", "1 de 2"]}
              />
            </div>
          )
        }
        <div
          className="mx-auto max-w-5xl w-full h-full p-3 bg-[#FFFFFF12] border border-[#444d55] rounded-lg hover:shadow-[0px_0px_70px_-12px_rgba(18,193,243,.5)] transition-shadow duration-300 z-50"
        >
          <iframe
            src={video}
            title="Vimeo video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg w-full aspect-video"
          >
          </iframe>
        </div>
        {
          // true === está en la página principal. De lo contrario thankspage
          isMain &&
          <Button
            size='xl'
            asChild
            className="z-50"
          >
            <a href="#calendly">Agenda tu llamada</a>
          </Button>
        }
      </div>
    </section>
  )
}

export default Hero