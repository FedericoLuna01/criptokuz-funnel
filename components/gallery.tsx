import Image from "next/image"
import Heading from "./ui/heading"
import { Button } from "./ui/button"

// const images = [230, 200, 300, 400, 500, 600, 700, 800, 900, 260, 234, 654, 234, 645, 465]
const images = new Array(22).fill(0).map((_, index) => index + 1).filter((item) => item !== 4)

const Gallery = () => {
  return (
    <>
      <section
        className="bg-gradient-to-b from-[#090101] from-60% to-white"
      >
        <div
          className="container flex flex-col items-center justify-center space-y-6 py-10"
        >
          <Heading
            title='Más casos de exitos'
            highlightWords={['exitos']}
          />
          <div
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-16 gap-10"
          >
            {
              images.map((image, index) => (
                <Image
                  key={index}
                  src={`/Screenshot_${image}.png`}
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
        </div>
      </section>
    </>
  )
}

export default Gallery