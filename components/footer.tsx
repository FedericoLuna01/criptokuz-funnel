import Logo from "./ui/logo"

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="border-t border-input">
      <div
        className="container text-center md:text-left py-4 flex flex-col md:flex-row items-center justify-between min-h-20"
      >
        <Logo />
        <p
          className="text-sm text-gray-500 mt-4 md:mt-0"
        >
          Copyright &copy; {date} Criptokuz | Todos los derechos reservados | Diseño y desarrollo{' '}
          <a
            target="_blank"
            href="https://www.federicoluna.me/"
            className="text-cyan-300 hover:brightness-90 hover:underline transition-all ease-in-out"
          >
            Federico Luna
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer