import Logo from "./ui/logo"

const FooterBlack = () => {
  return (
    <footer
      className="container text-center md:text-left py-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 min-h-20"
    >
      <Logo/>
      <p
        className="text-sm text-gray-500 mt-4 md:mt-0"
      >
          Copyright &copy; 2023 Criptokuz | Todos los derechos reservados | Diseño y desarrollo{' '}
        <a
          target="_blank"
          href="https://www.cuppypaginasweb.com/"
          className="text-cyan-300 hover:brightness-90 hover:underline transition-all ease-in-out"
        >
            Cuppy páginas web
        </a>
      </p>
    </footer>
  )
}

export default FooterBlack