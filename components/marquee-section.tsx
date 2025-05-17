import Image from "next/image"
import { Marquee } from "./magicui/marquee"
import { NumberTicker } from "./magicui/number-ticker"

const MarqueeSection = () => {
  return (
    <section className="z-50 bg-black border-b border-[#2d2d2d] py-8 ">
      <div className="container mx-auto flex items-center flex-col">
        <div className="flex flex-col items-center justify-center max-w-4xl">
          <h3 className="text-center font-semibold text-lg max-w-2xl">
            +
            <span className="inline-block min-w-[7ch] font-tabular-nums">
              <NumberTicker value={284392} />
            </span>USD Cash Collecteado entre todas las personas que trabajaron con nosotros
          </h3>
          <p className="text-zinc-400">Accedes a ver sus entrevistas una ves que te Agendes</p>
          <div className="overflow-hidden relative max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl mt-8">
            <Marquee className="[--duration:35s]">
              {
                new Array(16).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={`/avatars/${i + 4}.png`}
                      width={100}
                      height={100}
                      alt="Logo"
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                ))
              }
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 -left-2 w-1/4 bg-linear-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 -right-2 w-1/4 bg-linear-to-l from-background"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection