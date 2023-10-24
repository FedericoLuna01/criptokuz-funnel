import Logo from "./ui/logo"
import { Button } from "./ui/button"
import { Contact_Items } from "@/data/data"

const MainNav = () => {
  return (
    <header
      className="container flex h-20 flex-row items-center justify-between border-b border-gray-200"
    >
      <Logo />
      <nav>
        <ul className="flex space-x-3">
          {
            Contact_Items.map(({ id, href, icon }) => (
              <Button
                key={id}
                asChild
                size='icon'
                variant='secondary'
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              </Button>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default MainNav