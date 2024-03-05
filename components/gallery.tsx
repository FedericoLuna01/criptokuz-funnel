import Image from "next/image";
import Heading from "./ui/heading";
import { Button } from "./ui/button";

const images = new Array(22).fill(0).map((_, index) => index + 1);

interface GalleryProps {
  href: string;
  label: string;
}

const Gallery: React.FC<GalleryProps> = ({ href, label }) => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#090101] from-60% to-white">
        <div className="container flex flex-col items-center justify-center space-y-6 py-20">
          <Heading title="Más casos de éxitos" highlightWords={["éxitos"]} />
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-16 gap-10">
            {images.map((image) => (
              <Image
                key={image}
                src={`/testimoniales_${image}.webp`}
                width={350}
                height={550}
                alt="Testimonial image"
                className="rounded-sm object-cover"
              />
            ))}
          </div>
          <Button size="xl" asChild>
            <a href={href} target="_blank">
              {label}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
