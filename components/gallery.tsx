import Image from "next/image"
import Heading from "./ui/heading"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const images = [230, 200, 300, 400, 500, 600, 700, 800, 900, 260, 234, 654, 234, 645, 465]

const Gallery = () => {
  return (
    <>
      <section
        className="container flex flex-col items-center justify-center space-y-6 my-10"
      >
        <Heading
          title='Conoce a algunos de nuestos alumnos'
          highlightWords={['alumnos']}
        />
        <div
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-16 gap-10"
        >
          {
            images.map((image, index) => (
              <Image
                key={index}
                src={`https://picsum.photos/id/${image}/${Math.ceil(image * 1.2)}/${Math.ceil(image + 300 * 1.2)}`}
                width={350}
                height={550}
                alt='random image'
                className="rounded-sm object-cover"
              />
            ))
          }
        </div>
        <Button
          size='xl'
          asChild
        >
          <a href="#calendly">Quiero aplicar</a>
        </Button>
      </section>
      <Separator className="container bg-gray-200" />
    </>
  )
}

export default Gallery