"use client"

import { usePathname } from "next/navigation"
import Logo from "./ui/logo"

const Footer = () => {
  const pathname = usePathname()
  const showLegalNotice = pathname === "/thankyou" || pathname === "/thank-you"

  return (
    <footer className="border-t border-input">
      <div
        className="container text-center md:text-left py-4 flex flex-col md:flex-row items-center justify-between min-h-20"
      >
        <Logo />
        <p
          className="text-sm text-gray-500 mt-4 md:mt-0"
        >
          {!showLegalNotice && <>Copyright &copy; {new Date().getFullYear()} Criptokuz | Todos los derechos reservados | </>}
          Diseño y desarrollo{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.federicoluna.me/"
            className="text-cyan-300 hover:brightness-90 hover:underline transition-all ease-in-out"
          >
            Federico Luna
          </a>
        </p>
      </div>
      {showLegalNotice && <section
        aria-labelledby="legal-notice-title"
        className="container pb-6 pt-2 text-left text-xs leading-relaxed text-gray-400"
      >
        <div className="mx-auto max-w-4xl space-y-2">
          <h2 id="legal-notice-title" className="font-bold text-gray-300">
            Aviso legal y advertencia de riesgos
          </h2>
          <p>
            Kuz Academy ofrece servicios de formación y mentoría educativa en trading. No constituye un servicio de administración de inversiones ni garantiza rentabilidad, ganancias económicas o tasas de acierto específicas. Los resultados publicados corresponden a experiencias individuales y no representan resultados asegurados para otros participantes. El trading conlleva riesgos significativos, incluida la pérdida total del capital utilizado. Cada alumno es responsable de sus decisiones operativas.
          </p>
          <p>
            La contratación se encuentra sujeta a las condiciones particulares del programa adquirido, las garantías comerciales expresamente ofrecidas y la legislación de protección del consumidor aplicable.
          </p>
          <p>© 2026 Kuz Academy. Todos los derechos reservados.</p>
        </div>
      </section>}
    </footer>
  )
}

export default Footer
