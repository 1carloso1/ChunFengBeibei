import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "María Fernanda G.",
    location: "Ciudad de México, México",
    text: "Llevaba meses buscando clases de chino que no fueran solo repetir frases. Aquí entiendo por qué se dice cada cosa. La profesora Li explica las diferencias culturales con una paciencia que agradezco mucho.",
    level: "Alumna HSK 2",
  },
  {
    name: "Sebastián R.",
    location: "Buenos Aires, Argentina",
    text: "Me sorprendió la calidad de las clases. El grupo pequeño hace que realmente practiques. En tres meses ya puedo mantener conversaciones básicas y leer caracteres simples, algo que no logré con apps después de un año.",
    level: "Alumno HSK 1",
  },
  {
    name: "Carolina P.",
    location: "Bogotá, Colombia",
    text: "Lo que más valoro es que las profesoras son nativas y hablan español. Eso cambia todo, porque pueden explicar los tonos y la gramática de una forma que tiene sentido para nosotros como hispanohablantes.",
    level: "Alumna HSK 3",
  },
];

export default function TestimonialsSection() {
  return (
    // Cambiamos bg-rice por bg-white
    <section id="testimonios" className="bg-white py-24 md:py-32 border-t border-border-subtle/50">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.15em] text-jade uppercase">
            Testimonios
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros alumnos
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-border-subtle bg-rice/50 p-7"
            >
              <div className="flex gap-1" aria-label="5 estrellas">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-light">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border-subtle pt-5">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {testimonial.level} &middot; {testimonial.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
