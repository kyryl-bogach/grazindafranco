export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Grazinda Franco - Maquillaje y Belleza",
    description:
      "Maquilladora profesional y experta en dermofarmacia en Orihuela, Alicante. Servicios de maquillaje para novias, eventos especiales y asesoramiento en cuidado de la piel.",
    url: "https://grazindafranco.com",
    telephone: "+34620006167",
    email: "grazinda.franco@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle San Agustín",
      addressLocality: "Orihuela",
      postalCode: "03300",
      addressRegion: "Alicante",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.0847,
      longitude: -0.9442,
    },
    image: "https://grazindafranco.com/images/og-image.png",
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: ["https://www.instagram.com/grazindafranco/"],
    founder: {
      "@type": "Person",
      name: "Grazinda Franco",
      jobTitle: "Maquilladora Profesional y Farmacéutica",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maquillaje para Novias",
          description: "Servicio completo de maquillaje para el día de tu boda",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asesoramiento en Dermofarmacia",
          description: "Consultoría personalizada sobre cuidado de la piel",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

