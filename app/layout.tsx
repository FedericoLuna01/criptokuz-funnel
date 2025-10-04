import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import PixelTracker from "@/components/pixel-tracker";

const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Criptokuz",
  description:
    "Bienvenido a nuestra página, aca vas a encontrar información de como convertirte en trader.",
  icons: ["/favicon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1121793129971987');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt="Fb Pixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1121793129971987&ev=
            PageView&noscript=1"/>
        </noscript>
      </head>
      <body
        className={`dark ${font.className}`}
      >
        <PixelTracker />
        <GoogleAnalytics gaId="G-6SM89PPRHD" />
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  );
}
