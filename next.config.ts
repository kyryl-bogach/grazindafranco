import type { NextConfig } from "next";

// Formulario "Servicio de Novias" (Google Forms).
// Vive aqui para que la URL larga no se repita por los componentes:
// en la web siempre enlazamos a /dossier-novias/formulario/.
const BRIDAL_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc4sm3DIsFfKeooxF3wIewOdN-uENTxt5ir0PPVTPbiK6VnYQ/viewform";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    qualities: [75, 85, 95],
    formats: ["image/avif", "image/webp"],
  },
  // Con trailingSlash: true el `source` debe llevar la barra final.
  async redirects() {
    return [
      {
        source: "/dossier-novias/formulario/",
        destination: BRIDAL_FORM_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
