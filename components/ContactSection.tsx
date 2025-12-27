import ContactForm from "./ContactForm";

interface ContactSectionProps {
  showFullPage?: boolean;
}

export default function ContactSection({ showFullPage = false }: ContactSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-[#faf8f5]" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title justify-center mb-6">¿Hablamos?</h2>
          <div className="separator mx-auto" />
        </div>

        <div className={`grid ${showFullPage ? "lg:grid-cols-2" : "md:grid-cols-2"} gap-12 lg:gap-20`}>
          <div>
            <h3 className="text-2xl text-[#2d2d2d] mb-6 font-light">Dirección</h3>
            <div className="separator" />

            <div className="space-y-4 text-[#6b6b6b] mt-6">
              <p>
                C. San Agustín, 7, 1º<br />
                03300 Orihuela, Alicante
              </p>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps?sca_esv=89bbb5f22cb469d0&sxsrf=AE3TifM-NbaNa5_1fGUlpsmfmmPQ8AhwUQ:1766857406756&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0rh_xD-hoboO3p440Cw1HiWsnBdA3a8H79kbw4N59m2MLHBMrJiiahiR595cTO9tpV5Hh5h-cK6h5IeZszwjXCVtEK3jjXZrSEPbeQOa_KzKbaqajjYRM0ox1MfndcwC6VG8sA%3D&biw=1080&bih=1198&dpr=1&um=1&ie=UTF-8&fb=1&gl=es&sa=X&geocode=KfMNl9HlmWMNMdCKnzqZ6sta&daddr=C.+San+Agust%C3%ADn,+7,+1%C2%BA,+03300+Orihuela,+Alicante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a87c] text-[#c9a87c] hover:bg-[#c9a87c] hover:text-white transition-all duration-300 uppercase text-xs tracking-widest font-medium group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Cómo llegar
                </a>
              </div>

              <p>
                <strong className="text-[#4a4a4a]">Teléfono:</strong>{" "}
                <a
                  href="tel:+34620006167"
                  className="hover:text-[#c9a87c] transition-colors"
                >
                  +34 620 00 61 67
                </a>
              </p>

              <p className="flex items-center gap-2">
                <strong className="text-[#4a4a4a]">WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/+34620006167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#c9a87c] transition-colors group"
                >
                  <svg className="w-5 h-5 text-[#c9a87c] group-hover:text-[#b8956a] transition-colors" viewBox="0 0 175.216 175.552" fill="currentColor">
                    <path d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
                    <path d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" fillOpacity="0.2" />
                  </svg>
                  Enviar un WhatsApp
                </a>
              </p>

              <p>
                <strong className="text-[#4a4a4a]">Email:</strong>{" "}
                <a
                  href="mailto:grazinda.franco@gmail.com"
                  className="hover:text-[#c9a87c] transition-colors"
                >
                  grazinda.franco@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.instagram.com/grazindafranco/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a87c] hover:text-[#b8956a] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @grazindafranco
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-[#2d2d2d] mb-6 font-light">Envíame un correo electrónico</h3>
            <div className="separator" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

