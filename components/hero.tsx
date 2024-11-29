import { Button } from "./ui/button"
import Heading from "./ui/heading"
import { Separator } from "./ui/separator"

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
    <>
      <section
        className="container flex flex-col items-center justify-center space-y-6 my-10"
      >
        <Heading
          title={title}
          highlightWords={highlightWords}
        />
        {
          subtitle && (
            <p className="max-w-3xl text-center text-xl text-zinc-200">
              {subtitle}
            </p>
          )
        }
        {
          steps && (
            <div>
              <Separator className="bg-white max-w-3xl mb-4" />
              <Heading
                title={`Paso ${stepNumber} de 2: Mira el siguiente video`}
                highlightWords={['Paso', "de", "1", "3", "2", 'video']}
              />
            </div>
          )
        }
        <iframe
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto rounded-lg w-full max-w-5xl aspect-video"
        >
        </iframe>
        {
          // true === está en la página principal. De lo contrario thankspage
          isMain &&
          <Button
            size='xl'
            asChild
          >
            <a href="#calendly">Quiero aplicar</a>
          </Button>
        }
      </section>
    </>
  )
}

export default Hero