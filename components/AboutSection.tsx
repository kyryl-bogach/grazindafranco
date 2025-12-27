import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  showFullContent?: boolean;
}

export default function AboutSection({ showFullContent = false }: AboutSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white" id="sobre-mi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/portrait-about.jpg"
                alt="Grazinda Franco - Maquilladora profesional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#c9a87c] -z-10" />
          </div>

          <div>
            <h2 className="section-title mb-6">Sobre mí</h2>
            <div className="separator" />

            <div className="space-y-6 text-[#6b6b6b] leading-relaxed">
              <p>
                Como farmacéutica y experta en Dermofarmacia, mi pasión es compartir
                contigo mis conocimientos; tanto en maquillaje como en el cuidado ideal
                para cada tipo de piel. Mi objetivo es conseguir una piel sana y
                radiante que te haga sentir segura de ti misma.
              </p>

              <p>
                El buen cosmético debe ofrecer resultados visibles que nos hagan
                disfrutar del momento y de nosotros mismos.
              </p>

              {showFullContent && (
                <>
                  <h3 className="text-4xl text-[#2d2d2d] mt-12 mb-6 font-script">
                    La perfección dentro de la imperfección
                  </h3>
                  <div className="separator" />

                  <p>
                    Aprendí que <em>&ldquo;menos es más&rdquo;</em>. La verdadera belleza surge
                    cuando superamos nuestras inseguridades y aprendemos a querernos
                    tal como somos.
                  </p>

                  <p>
                    Comprendes que verte bien va más allá del maquillaje; se trata de
                    la <strong>seguridad en ti misma</strong> y del cuidado que le
                    das a tu piel. Por eso me enfoco en diferenciar una <strong>piel sana
                      que reluce luminosidad</strong> de una descuidada.
                  </p>

                  <p>
                    <strong>A la hora del maquillaje todo cuenta</strong>, y mi propósito
                    es que seas capaz de verte como a ti misma: un maquillaje natural,
                    lleno de vida, donde tú eres el lienzo.
                  </p>
                </>
              )}
            </div>

            {!showFullContent && (
              <Link
                href="/sobre-mi"
                className="inline-block mt-8 text-[#c9a87c] uppercase tracking-widest text-sm hover:text-[#b8956a] transition-colors"
              >
                ¿Quieres saber cómo? Te invito a descubrirlo →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

