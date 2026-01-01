import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Dossier Novias 2026",
    description: "Servicio completo de maquillaje para novias. Incluye entrevista previa, prueba de maquillaje y el gran día. Consigue una piel radiante para tu boda en Orihuela, Alicante.",
    keywords: ["maquillaje novias", "maquillaje boda", "novias Orihuela", "maquilladora bodas Alicante", "prueba maquillaje novia"],
    openGraph: {
        title: "Dossier Novias 2026 | Grazinda Franco",
        description: "Servicio completo de maquillaje para novias con piel radiante el día de tu boda.",
        images: [
            {
                url: "/images/dossier-novias/hero-portrait.jpg",
                width: 1200,
                height: 1600,
                alt: "Maquillaje de novia Grazinda Franco",
            },
        ],
    },
};

export default function DossierNoviasPage() {
    return (
        <article className="dossier-novias">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center bg-[#faf8f5] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left: Title & Message */}
                        <div className="order-2 md:order-1 animate-fade-in-up">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#2d2d2d] font-light leading-tight mb-8">
                                Piel Radiante
                                <span className="block text-[#c9a87c] font-script text-6xl md:text-7xl lg:text-8xl mt-4">
                                    el día de tu boda
                                </span>
                            </h1>

                            <div className="space-y-4 text-[#6b6b6b] leading-relaxed">
                                <p className="text-xl">En primer lugar, ¡enhorabuena!</p>
                                <p>
                                    Espero que estés viviendo al máximo cada instante de esta maravillosa experiencia.
                                </p>
                                <p>
                                    Gracias por contactar conmigo y querer que forme parte de un día tan especial.
                                </p>
                            </div>
                        </div>

                        {/* Right: Portrait Image with Decorative Treatment */}
                        <div className="relative h-[60vh] md:h-[75vh] order-1 md:order-2">
                            {/* Decorative background layer */}
                            <div className="absolute -inset-6 bg-[#c9a87c]/10 rounded-t-[10rem] -rotate-3 -z-10" />

                            {/* Main image container with arch */}
                            <div className="relative w-full h-full rounded-t-[10rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/dossier-novias/hero-portrait.jpg"
                                    alt="Novia con maquillaje radiante por Grazinda Franco"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 90vw, 50vw"
                                    quality={90}
                                    priority
                                />
                            </div>

                            {/* Decorative accent frame */}
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-[#c9a87c] -z-10 hidden md:block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INTRODUCTION SECTION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-title justify-center mb-8">Tu Experiencia Nupcial</div>
                    <div className="separator mx-auto mb-12" />

                    <div className="prose prose-lg max-w-none">
                        <p className="text-[#6b6b6b] leading-relaxed text-center mb-8">
                            Creo firmemente que el maquillaje de novia debe reflejar tu personalidad, hacerte sentir
                            cómoda y resaltar tu belleza natural. Me encantaría asesorarte en este proceso, siempre
                            teniendo en cuenta tu estilo y preferencias.
                        </p>

                        <p className="text-2xl text-center text-[#2d2d2d] font-light mb-12">
                            Por ello, mi servicio de maquillaje para novias incluye:
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE: Entrevista Previa */}
            <section className="py-16 md:py-24 bg-white border-t border-[#f0f0f0]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl text-[#2d2d2d] font-light mb-6 text-center">
                        Entrevista Previa
                    </h2>

                    <div className="text-[#6b6b6b] leading-relaxed space-y-4">
                        <p>
                            Podremos reunirnos una vez contratado el servicio y realizado la reserva para conocernos
                            mejor, ver el estado de la piel y poder darte la posibilidad de realizar una rutina
                            personalizada de dermocosmética, así como aconsejar posible tratamientos de cabina si fuese
                            necesario o estuvieses interesada.
                        </p>

                        <div className="p-6 bg-[#faf8f5] border-l-4 border-[#c9a87c] my-8">
                            <p className="text-lg italic text-[#2d2d2d]">
                                Es muy importante realizar una rutina los meses previos para conseguir un mejor
                                resultado del maquillaje en un día tan importante, así como mejorar posibles patologías,
                                o simplemente conseguir una piel resplandeciente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICE: Prueba de Maquillaje */}
            <section className="py-16 md:py-24 bg-[#faf8f5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                            {/* Decorative frame behind */}
                            <div className="absolute -inset-4 bg-white/50 rounded-[2rem] rotate-1 -z-10" />

                            {/* Main image */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-[#e8e4df] shadow-xl">
                                <Image
                                    src="/images/dossier-novias/prueba-maquillaje.png"
                                    alt="Prueba de maquillaje en el estudio"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    quality={90}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl text-[#2d2d2d] font-light mb-6">
                                Prueba de Maquillaje
                            </h2>

                            <div className="text-[#6b6b6b] leading-relaxed space-y-4">
                                <p>
                                    Nos reuniremos antes de la boda en mi estudio en Orihuela, equipado con todos los
                                    materiales necesarios. Probaremos diferentes estilos de maquillaje hasta encontrar
                                    el perfecto para ti, dedicando todo el tiempo que sea necesario.
                                </p>

                                <p>
                                    Para la prueba lo aconsejable es realizarla sobre un mes antes de la boda, para
                                    ceñirnos al estado de tu piel en ese momento, tanto en hidratación como en
                                    tonalidad. De querer realizarla con más antelación no habría problema, me adapto a
                                    tu necesidad.
                                </p>

                                <p>
                                    Utilizo productos de alta calidad, constantemente actualizados, y es vital para mí
                                    conocer tus preferencias, alergias o tratamientos de piel específicos. Esto ayuda a
                                    garantizar que el maquillaje no solo luzca espectacular, sino que también sea
                                    seguro y adecuado para tu piel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICE: Día de la Boda */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl text-[#2d2d2d] font-light mb-12 text-center">
                        Maquillaje el Día de la Boda
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
                        {/* Image 1 - Arched */}
                        <div className="relative h-[350px] md:h-[450px] md:mt-12">
                            <div className="relative w-full h-full rounded-t-[4rem] overflow-hidden shadow-xl">
                                <Image
                                    src="/images/dossier-novias/dia-boda-makeup.png"
                                    alt="Maquillaje de novia el día de la boda"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={90}
                                />
                            </div>
                        </div>

                        {/* Image 2 - Gold border */}
                        <div className="relative h-[350px] md:h-[450px]">
                            <div className="relative w-full h-full overflow-hidden border-4 border-[#c9a87c] shadow-xl">
                                <Image
                                    src="/images/dossier-novias/dia-boda-scene.png"
                                    alt="Novia preparándose para la boda"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={90}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto text-[#6b6b6b] leading-relaxed space-y-4">
                        <p className="text-center text-lg">
                            Incluye mi desplazamiento al lugar donde te prepararás. El servicio consiste en la
                            preparación de la piel, aplicación del maquillaje elegido durante la prueba y pestañas
                            postizas. Además, te proporcionaré un kit de retoque para que puedas mantener tu look
                            perfecto durante todo el evento.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. PRICING SECTION */}
            <section className="py-16 md:py-24 bg-[#faf8f5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title justify-center mb-6">Inversión</h2>
                        <div className="separator mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Card 1: Prueba */}
                        <div
                            className="group p-8 bg-white border-2 border-[#e8e4df] hover:shadow-[0_20px_50px_rgba(201,168,124,0.15)] hover:-translate-y-2 transition-all duration-500"
                            style={{ animationDelay: "0ms" }}
                        >
                            <h3 className="text-2xl text-[#2d2d2d] font-light mb-2">Prueba de Maquillaje</h3>

                            <div className="mb-6">
                                <span className="text-4xl text-[#c9a87c] font-light">150€</span>
                                <p className="text-sm text-[#999] mt-1">En Orihuela</p>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-[#c9a87c] to-transparent mb-6" />

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Reunión en mi estudio equipado
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Pruebas de diferentes estilos
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Todo el tiempo necesario
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Productos de alta calidad
                                </li>
                            </ul>

                            <p className="text-xs text-[#999] italic pt-4 border-t border-dashed border-[#e8e4df]">
                                Segunda prueba: 100€
                            </p>
                        </div>

                        {/* Card 2: Día de la Boda (Highlighted) */}
                        <div
                            className="group p-8 bg-white border-2 border-[#c9a87c] shadow-lg hover:shadow-[0_20px_50px_rgba(201,168,124,0.2)] hover:-translate-y-2 transition-all duration-500"
                            style={{ animationDelay: "100ms" }}
                        >
                            <div className="inline-block px-3 py-1 bg-[#c9a87c] text-white text-xs uppercase tracking-widest mb-4">
                                Recomendado
                            </div>

                            <h3 className="text-2xl text-[#2d2d2d] font-light mb-2">Día de la Boda</h3>

                            <div className="mb-6">
                                <span className="text-4xl text-[#c9a87c] font-light">350€</span>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-[#c9a87c] to-transparent mb-6" />

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Desplazamiento incluido (hasta 5km)
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Preparación completa de la piel
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Aplicación del maquillaje elegido
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Pestañas postizas
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Kit de retoque personalizado
                                </li>
                            </ul>

                            <p className="text-xs text-[#999] italic pt-4 border-t border-dashed border-[#e8e4df]">
                                Km adicionales con suplemento
                            </p>
                        </div>

                        {/* Card 3: Familiares */}
                        <div
                            className="group p-8 bg-white border-2 border-[#e8e4df] hover:shadow-[0_20px_50px_rgba(201,168,124,0.15)] hover:-translate-y-2 transition-all duration-500"
                            style={{ animationDelay: "200ms" }}
                        >
                            <h3 className="text-2xl text-[#2d2d2d] font-light mb-2">Familiares e Invitadas</h3>

                            <div className="mb-6">
                                <span className="text-4xl text-[#c9a87c] font-light">90€</span>
                                <span className="text-sm text-[#999] ml-2">por persona</span>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-[#c9a87c] to-transparent mb-6" />

                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Maquillaje en el mismo lugar
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Preparación de la piel
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Pestañas incluidas
                                </li>
                                <li className="flex items-start text-sm text-[#6b6b6b]">
                                    <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3 mt-2 flex-shrink-0" />
                                    Duración: 1 hora por persona
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. BOOKING & CTA SECTION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Booking Terms Header */}
                    <div className="text-center mb-16">
                        <h2 className="section-title justify-center mb-6">Reserva y Condiciones</h2>
                        <div className="separator mx-auto" />
                    </div>

                    {/* Key Points in Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 border border-[#e8e4df] bg-[#faf8f5]">
                            <div className="text-3xl text-[#c9a87c] mb-2">150€</div>
                            <div className="text-sm uppercase tracking-wide text-[#999]">Reserva Anticipada</div>
                            <p className="text-xs mt-2 text-[#6b6b6b]">No reembolsable</p>
                        </div>

                        <div className="p-6 border border-[#e8e4df] bg-[#faf8f5]">
                            <div className="text-3xl text-[#c9a87c] mb-2">5 días</div>
                            <div className="text-sm uppercase tracking-wide text-[#999]">Plazo de Reserva</div>
                            <p className="text-xs mt-2 text-[#6b6b6b]">Desde recepción del dossier</p>
                        </div>

                        <div className="p-6 border border-[#e8e4df] bg-[#faf8f5]">
                            <div className="text-3xl text-[#c9a87c] mb-2">50%</div>
                            <div className="text-sm uppercase tracking-wide text-[#999]">Cancelación &lt;6 meses</div>
                            <p className="text-xs mt-2 text-[#6b6b6b]">Del coste total</p>
                        </div>
                    </div>

                    {/* Full Legal Text */}
                    <div className="mb-16">
                        <div className="p-6 md:p-8 bg-[#faf8f5] border-l-4 border-[#c9a87c]">
                            <p className="text-sm text-[#6b6b6b] leading-relaxed">
                                Para asegurar la reserva de la fecha, es necesario realizar un pago anticipado del
                                total de la prueba de maquillaje (150€) mediante transferencia bancaria o bizum, el
                                cual no es reembolsable bajo ninguna circunstancia. Es imprescindible incluir en la
                                contratación al menos el maquillaje de una amiga o familiar, si tengo que desplazarme
                                fuera de la zona de Orihuela y alrededores. El pago del maquillaje de la boda y de las
                                acompañantes se realizará el día de la prueba de maquillaje o por transferencia
                                bancaria previa. La reserva debe formalizarse en un periodo de cinco días desde la
                                recepción de este dossier-presupuesto. En caso de que otra persona muestre interés por
                                la misma fecha, se confirmará a quien complete la reserva primero. El compromiso del
                                servicio se formaliza con la confirmación y pago de la reserva, así como la validación
                                de un contrato firmado. En el caso de cancelación del servicio con menos de seis meses
                                de antelación a la fecha reservada, deberá abonar el 50% del costo total del servicio,
                                compensando así las oportunidades perdidas de haber ofrecido esa fecha a esta clienta
                                hasta el momento.
                            </p>
                        </div>
                    </div>

                    {/* Closing & CTA */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Signature Style Close */}
                        <div className="text-center md:text-left">
                            <p className="text-4xl md:text-5xl text-[#c9a87c] font-script mb-4">
                                Gracias por la confianza
                            </p>
                            <div className="separator md:mx-0" />
                            <p className="text-[#6b6b6b] mt-6 leading-relaxed">
                                Estoy emocionada de acompañarte en este día tan especial. No dudes en contactarme para
                                cualquier consulta.
                            </p>
                        </div>

                        {/* Right: CTA Buttons */}
                        <div className="flex flex-col gap-4">
                            {/* Primary: WhatsApp */}
                            <a
                                href="https://wa.me/34620006167?text=Hola%20Grazinda,%20me%20interesa%20tu%20servicio%20de%20maquillaje%20para%20novias"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-3 group w-full text-center"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 175.216 175.552" fill="currentColor">
                                    <path d="M87.183.002C39.066.002.002 39.065.002 87.182c0 19.104 6.112 36.834 16.52 51.272L.142 175.55l37.928-16.003c14.046 9.37 30.96 14.876 49.113 14.876 48.117 0 87.182-39.065 87.182-87.182C174.365 39.065 135.3.002 87.183.002zm50.943 124.444c-2.104 5.925-12.024 11.023-16.652 11.693-4.629.67-8.996 2.196-30.394-6.33-27.214-10.848-44.602-38.55-45.953-40.29-1.351-1.74-11.074-14.724-11.074-28.087 0-13.363 7.001-19.922 9.48-22.646 2.48-2.724 5.406-3.405 7.215-3.405 1.809 0 3.619.012 5.195.095 1.663.087 3.886-.634 6.073 4.629 2.187 5.263 7.479 18.25 8.133 19.577.654 1.327 1.089 2.88.218 4.642-.871 1.762-1.307 2.858-2.614 4.393-1.307 1.535-2.759 3.426-3.92 4.598-1.307 1.327-2.679 2.758-1.15 5.396 1.529 2.638 6.788 11.228 14.565 18.19 10.007 8.947 18.448 11.745 21.05 13.073 2.602 1.328 4.116 1.107 5.645-.654 1.529-1.761 6.567-7.672 8.32-10.31 1.753-2.638 3.506-2.187 5.925-1.307 2.42.88 15.326 7.226 17.95 8.541 2.624 1.315 4.366 1.984 5.02 3.094.654 1.11.654 6.373-1.45 12.298z" />
                                </svg>
                                <span>Reservar por WhatsApp</span>
                            </a>

                            {/* Secondary: Google Form */}
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSc4sm3DIsFfKeooxF3wIewOdN-uENTxt5ir0PPVTPbiK6VnYQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 text-sm text-center border-2 border-[#c9a87c] text-[#c9a87c] uppercase tracking-widest hover:bg-[#c9a87c] hover:text-white transition-all duration-300"
                            >
                                Formulario de Consulta
                            </a>

                            {/* Tertiary: Phone */}
                            <a
                                href="tel:+34620006167"
                                className="text-center text-[#6b6b6b] hover:text-[#c9a87c] transition-colors text-sm"
                            >
                                O llama al: +34 620 00 61 67
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
