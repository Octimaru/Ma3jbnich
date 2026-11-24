import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  title: {
    default: `${site.name} | Streetwear mkhedem f Lmghrib`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "ar_MA",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#040705",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ary-Latn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Hanken+Grotesk:wght@400;500;600&family=Reem+Kufi:wght@600;700&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Daz l l-mohtawa
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
