import { TestimonialsItems } from "@/data/data";
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Testimonial from "./ui/testimonial"
import Heading from "./ui/heading";

interface TestimonialProps {
  isMain?: boolean;
  title: string;
  highlightWords: string[];
}

const Testimonials: React.FC<TestimonialProps> = ({
  isMain = true,
  title,
  highlightWords
}) => {
  return (
    <>
      <section
        className="container flex flex-col items-center justify-center space-y-6 my-20"
      >
        <Heading
          title={title}
          highlightWords={highlightWords}
        />
        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-10"
        >
          {
            TestimonialsItems.map(({ id, video, description, highlightWords }, index) => {
              const isLast = TestimonialsItems.length === index + 1
              return (
                <Testimonial
                  key={id}
                  video={video}
                  description={description}
                  highlightWords={highlightWords}
                  isLast={isLast}
                />
              )

            })
          }
        </div>
        {
          isMain ?
            <Button
              size='xl'
              asChild
            >
              <a href="#calendly">Quiero aplicar</a>
            </Button>
            :
            <div
              className="container space-y-2 text-center py-10"
            >
              <h2
                className="text-4xl font-bold"
              >
                Nos vemos en la llamada!
              </h2>
              <p
                className="text-2xl text-gray-400"
              >
                Si no viste los videos anteriores, no podremos tener la llamada
              </p>
            </div>
        }
      </section>
      <Separator className="container bg-gray-200" />
    </>
  )
}

export default Testimonials