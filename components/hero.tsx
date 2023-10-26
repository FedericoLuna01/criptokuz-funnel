import { Button } from "./ui/button"
import Heading from "./ui/heading"
import { Separator } from "./ui/separator"

interface HeroProps {
  title: string;
  highlightWords: string[];
  video: string;
  isMain?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  highlightWords,
  video,
  isMain = true
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
        <iframe
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto rounded-lg w-full max-w-6xl aspect-video"
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
      <Separator className="container bg-gray-200" />
    </>
  )
}

export default Hero