
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

          {/* Left: Text Content */}
          <div className="relative z-10 text-center md:text-left order-2 md:order-1 animate-fade-in-up">
            <span className="inline-block text-[#c9a87c] uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Maquilladora Profesional
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#2d2d2d] leading-[0.9] mb-6 font-light">
              Realza tu <br />
              <span className="font-script text-[#c9a87c] text-6xl md:text-8xl lg:text-9xl block mt-2">
                belleza natural
              </span>
            </h1>

            <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-lg mx-auto md:mx-0 mb-10 font-light">
              Experta en dermofarmacia y maquillaje social.
              Descubre una visión del maquillaje que cuida tu piel y resalta tu esencia única.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/#contacto"
                className="btn-primary"
              >
                Reserva tu cita
              </Link>
              <Link
                href="/#galeria"
                className="px-8 py-3.5 text-sm tracking-widest uppercase border-b-2 border-[#c9a87c] text-[#2d2d2d] hover:text-[#c9a87c] transition-colors"
              >
                Ver Trabajos
              </Link>
            </div>
          </div>

          {/* Right: Visual Composition */}
          <div className="relative h-[50vh] md:h-[80vh] w-full order-1 md:order-2 flex items-center justify-center">
            {/* Layer 1: Brush Stroke Background */}
            <div className="absolute inset-0 z-0 animate-float opacity-80 pointer-events-none">
              <Image
                src="/images/hero-brush-stroke.png"
                alt=""
                fill
                className="object-contain scale-[1.3] md:scale-[1.5] rotate-12 opacity-30"
                priority
              />
            </div>

            {/* Layer 2: Main Portrait (Video) */}
            <div className="relative z-10 w-[70%] h-[80%] md:w-[80%] md:h-[90%] transition-all duration-700 ease-in-out">
              <div className="absolute inset-0 bg-[#f5f0e6] rounded-t-[10rem] -rotate-3 transform translate-x-4 translate-y-4 -z-10" />
              <div className="relative h-full w-full rounded-t-[10rem] overflow-hidden shadow-2xl">
                <video
                  poster="/images/hero-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                >
                  <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

