import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/main-nav'
import { ThemeProvider } from '@/providers/theme-provider'
import Footer from '@/components/footer'

const font = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Criptokuz',
  description: 'Bienvenido a nuestra página, aca vas a encontrar información de como convertirte en trader.',
  icons: ['/favicon.png']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`dark bg-gradient-to-br from-primary/40 to-30% ${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <MainNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
