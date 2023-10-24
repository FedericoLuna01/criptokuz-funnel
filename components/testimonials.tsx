import { TestimonialsItems } from "@/data/data";
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Testimonial from "./ui/testimonial"

interface TestimonialProps {
  isMain?: boolean;
}

const Testimonials: React.FC<TestimonialProps> = ({
  isMain = true
}) => {
  return (
    <>
      <section
        className="container flex flex-col items-center justify-center space-y-6 my-10"
      >
        <h1
          className="text-5xl font-bold"
        >
          Testimoniales
        </h1>
        <div
          className="space-y-20"
        >
          {
            TestimonialsItems.map(({ id, video, description, highlightWords }) => (
              <Testimonial
                key={id}
                video={video}
                description={description}
                highlightWords={highlightWords}
              />
            ))
          }
          {/* <Testimonial
            video='https://www.youtube.com/embed/fGqdIPer-ms?si=uh0bgcES7Buhxsh_'
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de "
            highlightWords={['simplemente', 'de']}
          />
          <Testimonial
            video='https://www.youtube.com/embed/SWoKmOM1CQc?si=XRhoLiFtQ9QxF7Wv'
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de "
            highlightWords={['imprentas', 'archivos']}
          /> */}
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
            null
        }
      </section>
      <Separator className="container bg-gray-200" />
    </>
  )
}

export default Testimonials