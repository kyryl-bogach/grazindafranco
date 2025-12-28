import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Pinyon_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grazindafranco.com"),
  title: {
    default: "Grazinda Franco | Maquillaje y Belleza en Orihuela, Alicante",
    template: "%s | Grazinda Franco",
  },
  description:
    "Maquilladora profesional y experta en dermofarmacia en Orihuela, Alicante. Servicios de maquillaje para novias, eventos especiales y asesoramiento en cuidado de la piel.",
  keywords: [
    "maquillaje",
    "maquilladora",
    "Orihuela",
    "Alicante",
    "novia",
    "belleza",
    "dermofarmacia",
    "cuidado piel",
  ],
  authors: [{ name: "Grazinda Franco" }],
  creator: "Grazinda Franco",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://grazindafranco.com",
    siteName: "Grazinda Franco",
    title: "Grazinda Franco | Maquillaje y Belleza",
    description:
      "Maquilladora profesional y experta en dermofarmacia en Orihuela, Alicante. Servicios de maquillaje para novias, eventos especiales y asesoramiento personalizado en cuidado de la piel.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grazinda Franco - Maquillaje y Belleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grazinda Franco | Maquillaje y Belleza",
    description:
      "Maquilladora profesional y experta en dermofarmacia en Orihuela, Alicante.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${cormorant.variable} ${lato.variable} ${pinyon.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="pt-20 flex-grow">{children}</main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
