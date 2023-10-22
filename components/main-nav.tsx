import { Instagram, Twitter, Youtube } from "lucide-react"

import Logo from "./ui/logo"
import { Button } from "./ui/button"

const Contact_Items = [
  {
    id: 1,
    href: '',
    icon: <Instagram className="w-6 h-6" />
  },
  {
    id: 2,
    href: '',
    icon: <Twitter className="w-6 h-6" />
  },
  {
    id: 3,
    href: '',
    icon: <Youtube className="w-6 h-6" />
  }
]

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