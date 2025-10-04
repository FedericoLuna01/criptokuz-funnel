import Image from "next/image"
import WhoAmIImage from "../public/quien-soy.webp"

const WhoAmI = () => {
  return (
    <section className="z-50 bg-black p-4">
      <div
        className="container mx-auto my-12 p-8 grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-x-0 lg:gap-x-4 gap-y-8 bg-[linear-gradient(219deg,#233e47_10%,#0c0b0b_60%)] bg-transparent rounded-xl border border-[#2d3740] hover:shadow-[0px_0px_70px_-12px_rgba(18,193,243,.5)] transition-shadow duration-300"
      >
        <div className="flex flex-col gap-4 items-center lg:items-start ">
          <div className="flex gap-1 flex-col items-center lg:items-start">
            <h2 className="uppercase text-4xl font-bold">¿Quién soy?</h2>
            <a
              href="https://www.instagram.com/maurocka/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline text-lg"
            >
              @maurocka
            </a>
          </div>
          <div className="flex flex-col gap-4 text-zinc-300 text-base lg:text-lg text-center lg:text-start ">
            <p>
              Mi nombre es Mauro, tengo 24 años, opero hace 5 años dentro del mercado crypto y americano.
              Logré retornos consistentes del 7% al 15% mensual, y al segundo año de ser rentable superé los 200.000 USD en capital propio viviendo en Argentina.
              Ya trabajé con más de 70 personas, donde les implantamos un sistema con métricas medibles para que puedan ser rentables por una cuestión de números y no por una cuestión de fe o percepción, lo hacemos a través de precio, tiempo y volumen, medimos kpi tales como wr, pf, dd, rr, etc...
            </p>
            <p>
              Hoy vivo plenamente del trading, y trabajo con otros traders para que dejen de quemar años y dinero, intentando ser rentables por su cuenta.
            </p>
          </div>
        </div>
        <div
          className="place-items-center lg:place-items-end place-content-center relative"
        >
          <div className="h-[14rem] w-auto lg:h-[22rem] aspect-[4/3] relative">
            <Image
              src={WhoAmIImage}
              fill={true}
              alt="Quien soy"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoAmI