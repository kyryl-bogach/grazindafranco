import Image from "next/image";

const services = [
    {
        title: "Maquillaje Social",
        price: "70€",
        priceDetail: "Duración: 1 hora",
        description:
            "Perfecto para invitadas, eventos de día o de noche, graduaciones o cualquier ocasión especial donde quieras lucir impecable.",
        includes: ["Preparación de la piel", "Maquillaje de larga duración", "Pestañas postizas individuales (opcional +10€)"],
    },
    {
        title: "Maquillaje a Domicilio",
        price: "120€",
        priceDetail: "Duración: 1 hora",
        description:
            "La comodidad de recibir el servicio en tu propia casa. Me desplazo con todo mi equipo para que no tengas que preocuparte por nada.",
        includes: ["Servicio exclusivo a domicilio", "Desplazamiento incluido (consultar zona)", "Todo el material necesario"],
    },
    {
        title: "Curso Automaquillaje Individual",
        price: "150€",
        priceDetail: "Duración: 3 horas",
        description:
            "Aprende a sacarte el máximo partido con técnicas profesionales adaptadas a tu rostro y estilo. Una clase intensiva y personalizada.",
        includes: ["Análisis de neceser", "Práctica guiada", "Material de alta calidad incluido"],
    },
    {
        title: "Curso Automaquillaje Grupal",
        price: "100€/persona",
        priceDetail: "Duración: 3 horas",
        description:
            "Disfruta de una tarde de belleza con amigas. Aprenderéis juntas trucos y técnicas en un ambiente divertido y relajado.",
        includes: ["Mínimo 3 personas", "Práctica guiada", "Material de alta calidad incluido"],
    },
];

export default function ServicesFullSection() {
    return (
        <section className="pt-20 pb-10 bg-white overflow-hidden" id="servicios">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title justify-center mb-6">Servicios y Tarifas</h2>
                    <div className="separator mx-auto" />
                </div>

                {/* Main Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 md:p-8 bg-white border border-[#e8e4df] hover:shadow-[0_10px_30px_rgba(201,168,124,0.1)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                                <h3 className="text-xl sm:text-2xl text-[#2d2d2d] font-light pr-4">{service.title}</h3>
                                <div className="text-left sm:text-right flex-shrink-0">
                                    <span className="text-xl font-medium text-[#c9a87c]">{service.price}</span>
                                    {service.priceDetail && (
                                        <p className="text-sm text-[#999]">{service.priceDetail}</p>
                                    )}
                                </div>
                            </div>
                            <div className="w-full h-px bg-[#f0f0f0] mb-6 transform origin-left group-hover:scale-x-100 transition-transform duration-500" />
                            <p className="text-[#6b6b6b] mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.includes.map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-[#888]">
                                        <span className="w-1.5 h-1.5 bg-[#c9a87c] rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Featured Bridal Pack */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#faf8f5] transform -skew-y-2 rounded-3xl -z-10" />
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-8 lg:p-12">
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/bridal-pack.jpg"
                                alt="Pack Novia Grazinda Franco"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div>
                            <div className="inline-block px-4 py-1 bg-[#c9a87c] text-white text-xs uppercase tracking-widest mb-4">
                                Especial Bodas
                            </div>
                            <h2 className="text-3xl sm:text-4xl text-[#2d2d2d] font-light mb-2">Pack Novia Completo</h2>
                            <p className="text-2xl sm:text-3xl text-[#c9a87c] font-light mb-6 md:mb-8">590€</p>

                            <div className="space-y-6 text-[#6b6b6b] mb-10">
                                <p className="leading-relaxed">
                                    Un servicio integral diseñado para que vivas tu gran día con total tranquilidad y belleza.
                                    Desde la primera prueba hasta el momento del "sí, quiero".
                                </p>

                                <ul className="space-y-4 border-l-2 border-[#c9a87c]/30 pl-4 md:pl-6">
                                    <li className="flex justify-between items-start gap-4">
                                        <span className="flex-1"><strong>Prueba y Reserva</strong> <span className="text-sm text-[#999]">(Bloqueo de fecha)</span></span>
                                        <span className="font-medium flex-shrink-0">150€</span>
                                    </li>
                                    <li className="flex justify-between items-start gap-4">
                                        <div className="flex flex-col flex-1">
                                            <strong>Día de la Boda</strong>
                                            <span className="text-sm text-[#999]">Desplazamiento (hasta 5km) + Kit de retoque</span>
                                        </div>
                                        <span className="font-medium flex-shrink-0">350€</span>
                                    </li>
                                    <li className="flex justify-between items-start gap-4 pt-2 border-t border-dashed border-[#e8e4df]">
                                        <span className="flex-1"><strong>Invitada adicional</strong> <span className="text-xs text-[#999]">(Mínimo 1 persona)</span></span>
                                        <span className="font-medium flex-shrink-0">90€</span>
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSc4sm3DIsFfKeooxF3wIewOdN-uENTxt5ir0PPVTPbiK6VnYQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full md:w-auto text-center inline-block"
                            >
                                Consultar disponibilidad (Formulario Novias)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
