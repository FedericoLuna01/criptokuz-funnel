import { Button } from "./ui/button"
import Heading from "./ui/heading"
import { Separator } from "./ui/separator"

interface HeroProps {
  title: string;
  subtitle: string;
  highlightWords: string[];
  video: string;
  isMain?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
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
          subtitle={subtitle}
          highlightWords={highlightWords}
        />
        <iframe
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto rounded-lg w-[90%] h-[200px] sm:w-[80%] sm:h-[300px] md:w-[70%] md:h-[400px] lg:w-[60%] lg:h-[500px] "
        >
        </iframe>
        {
          // true === está en la página principal. De lo contrario thankspage
          isMain ?
            <Button
              className="text-2xl font-semibold py-7 px-24"
              size='lg'
              asChild
            >
              <a href="#calendly">Quiero aplicar</a>
            </Button>
            :
            null
        }
      </section>
      <Separator className="container bg-gray-200" />
    </>
  )
}

export default Hero