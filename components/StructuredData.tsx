export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Local Business / Beauty Salon Schema
      {
        "@type": "BeautySalon",
        "@id": "https://grazindafranco.com/#organization",
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Belleza",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Maquillaje para Novias",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    "@id": "https://grazindafranco.com/#servicio-novias",
                    serviceType: "Maquillaje para Novias",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Asesoramiento en Dermofarmacia",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    "@id": "https://grazindafranco.com/#dermofarmacia",
                    serviceType: "Asesoramiento en Dermofarmacia",
                  },
                },
              ],
            },
          ],
        },
      },
      // Bridal Makeup Service Schema
      {
        "@type": "Service",
        "@id": "https://grazindafranco.com/#servicio-novias",
        serviceType: "Maquillaje para Novias",
        name: "Maquillaje para Novias en Orihuela",
        description:
          "Servicio completo de maquillaje profesional para novias en Orihuela, Alicante. Incluye prueba previa, maquillaje del día de la boda y asesoramiento personalizado para lucir perfecta en tu día especial.",
        provider: {
          "@id": "https://grazindafranco.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Orihuela",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Alicante",
          },
        },
        image: "https://grazindafranco.com/images/og-image.png",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceRange: "€€",
        },
      },
      // Dermopharmacy Service Schema
      {
        "@type": "Service",
        "@id": "https://grazindafranco.com/#dermofarmacia",
        serviceType: "Asesoramiento en Dermofarmacia",
        name: "Asesoramiento en Dermofarmacia en Orihuela",
        description:
          "Consultoría personalizada sobre cuidado de la piel por farmacéutica especializada en dermofarmacia. Análisis de piel, recomendaciones de productos y rutinas personalizadas de cuidado facial.",
        provider: {
          "@id": "https://grazindafranco.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Orihuela",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Alicante",
          },
        },
        image: "https://grazindafranco.com/images/og-image.png",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceRange: "€€",
        },
      },
      // BreadcrumbList Schema for Site Navigation
      {
        "@type": "BreadcrumbList",
        "@id": "https://grazindafranco.com/#breadcrumbs",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://grazindafranco.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sobre Mí",
            item: "https://grazindafranco.com/#sobre-mi",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Galería",
            item: "https://grazindafranco.com/#galeria",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Servicio Novias",
            item: "https://grazindafranco.com/#servicio-novias",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contacto",
            item: "https://grazindafranco.com/#contacto",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

