import { TestimonialsItems } from "@/data/data";
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Testimonial from "./ui/testimonial"
import Heading from "./ui/heading";

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
        <Heading
          title="Testimoniales"
          highlightWords={['Testimoniales']}
        />
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
        </div>
        {
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

export default Testimonials