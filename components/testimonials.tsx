import { TestimonialsItems } from "@/data/data";
import { Button } from "./ui/button"
import Testimonial from "./ui/testimonial"
import Heading from "./ui/heading";
import Badge from "./ui/badge";

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
    <section
      className="py-10 border-t border-b border-[#2d2d2d] bg-[#111]"
    >
      <div className="container flex flex-col items-center justify-center space-y-6">
        <Badge
          text="Estos son algunos de los traders que han pasado por nuestro programa"
        />
        <Heading
          title={title}
          highlightWords={highlightWords}
        />
        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-10"
        >
          {
            TestimonialsItems.map(({ id, video, user, badInfo, goodInfo }) => {
              return (
                <Testimonial
                  key={id}
                  video={video}
                  user={user}
                  badInfo={badInfo}
                  goodInfo={goodInfo}
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
              <a href="#calendly">Agenda tu llamada</a>
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
      </div>
    </section>
  )
}

export default Testimonials