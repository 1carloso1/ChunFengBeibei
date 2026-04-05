"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { useCarousel } from "@/hooks/useCarousel";

interface ProgramsSectionProps {
  setActiveLevel: Dispatch<SetStateAction<string>>;
}

export default function TestimonialsSection() {

  const { scrollRef, canScrollLeft, canScrollRight, scroll, checkScrollability } = useCarousel();

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

        {/* Contenedor Relativo para posicionar las flechas en Escritorio */}
        <div className="relative mt-12 md:mt-16">
          {TESTIMONIALS.length > 3 && (
            <div className="hidden md:absolute md:-top-16 md:right-0 md:flex md:gap-3">
              <button 
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle/50 bg-white text-ink shadow-sm transition-all 
                  ${canScrollLeft 
                    ? "hover:bg-jade/10 hover:text-jade active:scale-95" 
                    : "opacity-30 cursor-not-allowed" // Efecto apagado si topa a la izquierda
                  }`}
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle/50 bg-white text-ink shadow-sm transition-all 
                  ${canScrollRight 
                    ? "hover:bg-jade/10 hover:text-jade active:scale-95" 
                    : "opacity-30 cursor-not-allowed" // Efecto apagado si topa a la derecha
                  }`}
                aria-label="Siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Carrusel: AGREGAMOS el evento onScroll={checkScrollability} aquí 👇 */}
          <div 
            ref={scrollRef}
            onScroll={checkScrollability} 
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 sm:gap-8 md:mx-0 md:px-0 md:pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <article
                key={index}
                // EL TRUCO: En escritorio forzamos el ancho a 1/3 (restando el espacio del gap) para que siempre quepan exactamente 3
                className="group flex w-[80vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border border-border-subtle/50 bg-rice p-8 shadow-sm transition-all duration-300 active:scale-[0.98] sm:w-[320px] md:w-[calc(33.333%-1.33rem)] md:hover:-translate-y-2 md:hover:shadow-xl"
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
      </div>
    </section>
  );
}