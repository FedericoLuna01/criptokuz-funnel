import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link
      href="/"
    >
      <Image
        src='/logo.png'
        width={60}
        height={60}
        alt='Criptokuz logo'
        className="invert dark:invert-0"
      />
    </Link>
  )
}

export default Logo