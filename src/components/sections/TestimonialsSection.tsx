"use client";

import { Star } from "lucide-react";

import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="overflow-hidden border-t border-border-subtle/50 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        {/* Cabecera */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.15em] uppercase text-jade">
            Testimonios
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Historias de éxito de nuestros alumnos
          </h2>
        </div>

        {/* Estructura de Scroll/Grid idéntica a Programas:
          - Móvil: Carrusel con snap y scroll invisible, tocando bordes (-mx-5 px-5)
          - Desktop: Grid de 3 columnas
        */}
        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 sm:gap-8 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={index}
              // Clases idénticas a Programas (anchos, redondeo 3xl, sombras, hover y active)
              className="group flex w-[80vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border border-border-subtle/50 bg-rice p-8 shadow-sm transition-all duration-300 active:scale-[0.98] sm:w-[320px] md:w-auto md:hover:-translate-y-2 md:hover:shadow-xl"
            >
              <div>
                <div className="flex gap-1" aria-label="5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#CBA153] text-[#CBA153]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                
                <h3 className="mt-6 font-serif text-xl font-bold text-ink">
                &quot;{testimonial.title}&quot;
                </h3>
                
                <blockquote className="mt-3 text-base leading-relaxed text-ink-light">
                  {testimonial.text}
                </blockquote>
              </div>

              {/* Pie de la tarjeta idéntico estructuralmente al pie de programas */}
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border-subtle/30 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jade/10 text-sm font-bold text-jade">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink">{testimonial.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-ink-muted">
                    {testimonial.level} &middot; {testimonial.location}
                  </p>
                </div>
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}