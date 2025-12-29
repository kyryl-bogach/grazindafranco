"use client";

const reviews = [
    {
        name: "Inés Serna",
        rating: 5,
        text: "Es maravillosa. Confíe en ella para el maquillaje de mi boda y no pude salir más contenta. Me duró impecable todo el día y captó justo lo que yo quería. Súper profesional.",
    },
    {
        name: "Carmen Almagro",
        rating: 5,
        text: "Elegí a Grazinda para el maquillaje de mi boda y de mi madre, y qué decir... ¡Simplemente espectacular! Súper profesional, captó mi estilo a la primera: un look muy natural y elegante.",
    },
    {
        name: "Ana Hernandez",
        rating: 5,
        text: "Profesional de 10. La contraté para el maquillaje de mi boda y el resultado fue espectacular. Un maquillaje súper duradero y muy cuidado. Recomendable 100%.",
    },
    {
        name: "Lola Rabasco",
        rating: 5,
        text: "Una profesional increíble. Me maquilló para un evento y quedé encantada. Sabe resaltar lo mejor de cada una con mucha delicadeza. El trato inmejorable.",
    },
    {
        name: "Dori S.",
        rating: 5,
        text: "Hice un curso de automaquillaje con ella y fue la mejor inversión. Explica todo súper bien, es muy paciente y técnica. He aprendido muchísimo para mi día a día.",
    },
    {
        name: "Paula M.",
        rating: 5,
        text: "Desde que descubrí a Grace no quiero que me maquille nadie más. Para cualquier evento social es mi apuesta segura. Productos de alta calidad y una técnica impecable.",
    }
];

export default function ReviewsSection() {
    return (
        <section className="py-20 bg-[#faf8f5] overflow-hidden" id="testimonios">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-[#c9a87c] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                        Testimonios
                    </span>
                    <h2 className="section-title justify-center mb-6">Lo que dicen mis clientas</h2>
                    <div className="separator mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    {reviews.map((review, index) => (
                        <div
                            key={review.name}
                            className="bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#e8e4df]/50 relative"
                        >
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#c9a87c]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-[#6b6b6b] leading-relaxed mb-8 italic">
                                "{review.text}"
                            </blockquote>

                            <div className="flex justify-between items-center pt-6 border-t border-[#f0f0f0]">
                                <div>
                                    <cite className="text-[#2d2d2d] font-medium not-italic block">{review.name}</cite>
                                </div>
                                <div className="w-10 h-10 bg-[#faf8f5] rounded-full flex items-center justify-center">
                                    <span className="text-[#c9a87c] font-script text-xl">{review.name.charAt(0)}</span>
                                </div>
                            </div>

                            {/* Decorative Quote Mark */}
                            <div className="absolute top-6 right-8 text-[#c9a87c]/10 text-6xl font-serif">
                                &ldquo;
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="inline-flex flex-col items-center">
                        <p className="text-[#6b6b6b] mb-6">¿Has confiado en mí para tu gran día o evento?</p>
                        <a
                            href="https://g.page/r/CdCKnzqZ6staEBM/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
                            </svg>
                            Dejar una reseña en Google
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
