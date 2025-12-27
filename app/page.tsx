import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesFullSection from "@/components/ServicesFullSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <section id="inicio" className="-mt-20">
        <Hero />
      </section>

      <section id="sobre-mi">
        <AboutSection showFullContent />
      </section>

      <section id="servicios">
        <ServicesFullSection />
      </section>

      <section id="galeria">
        <GallerySection showAll />
      </section>

      <section id="testimonios">
        <ReviewsSection />
      </section>

      <section id="contacto">
        <ContactSection showFullPage />
      </section>
    </>
  );
}
