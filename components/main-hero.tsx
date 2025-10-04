import BackgroundLayout from './background-layout'
import Badge from './ui/badge'
import { Button } from './ui/button'

const MainHero = () => {
  return (
    <section>
      <BackgroundLayout>
        <div className="container flex flex-col items-center justify-center space-y-6 py-6 md:py-10 z-50">
          <Badge
            text="Exclusivo para Traders/Operadores de mercado"
          />
          <div className="text-xl sm:text-4xl font-bold text-center max-w-5xl">
            Te instalamos un sistema a traves de <span className='uppercase text-primary drop-shadow-[0_0_10px_rgba(18,193,243,0.7)]'>HEW, tiempo, volumen y kpis</span>, para operar sin interpretación, y con pautas-métricas medibles
          </div>
          <p className="max-w-3xl text-center text-base md:text-xl text-zinc-300 z-50">
            Sin señales, sin indicadores, ni robots mágicos, con un solo sistema validado, con scorecard y métricas tangibles
          </p>
          <div
            className="mx-auto max-w-5xl w-full h-full p-3 bg-[#FFFFFF12] border border-[#444d55] rounded-lg hover:shadow-[0px_0px_70px_-12px_rgba(18,193,243,.5)] transition-shadow duration-300 z-50"
          >
            <iframe
              src={"https://player.vimeo.com/video/1028229172?h=303fcf7d1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
              title="Vimeo video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg w-full aspect-video"
            >
            </iframe>
          </div>
          <Button
            size='xl'
            asChild
            className="z-50"
          >
            <a href="#calendly">Agenda tu llamada</a>
          </Button>
        </div>
      </BackgroundLayout>
    </section>
  )
}

export default MainHero