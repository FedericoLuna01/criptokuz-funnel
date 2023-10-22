import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Testimonial from "./ui/testimonial"

const Testimonials = () => {
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
          <Testimonial
            video='https://www.youtube.com/embed/Iy-dJwHVX84?si=CZ6IhpCy6xpegWrK'
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de "
            highlightWords={['Lorem', 'Ipsum', 'imprentas y archivos']}
          />
          <Testimonial
            video='https://www.youtube.com/embed/fGqdIPer-ms?si=uh0bgcES7Buhxsh_'
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de "
            highlightWords={['simplemente', 'de']}
          />
          <Testimonial
            video='https://www.youtube.com/embed/SWoKmOM1CQc?si=XRhoLiFtQ9QxF7Wv'
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de "
            highlightWords={['imprentas', 'archivos']}
          />
        </div>
        <Button
          className="text-2xl font-semibold py-7 px-24"
          size='lg'
          asChild
        >
          <a href="#calendly">Quiero aplicar</a>
        </Button>
      </section>
      <Separator className="container bg-gray-200" />
    </>
  )
}

export default Testimonials