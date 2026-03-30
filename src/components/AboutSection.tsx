import { BookOpen, Globe, Users } from "lucide-react";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Nuestra misión",
    text: "Hacer accesible la lengua y cultura china para el mundo hispanohablante, con un método que va más allá de la gramática: enseñamos a pensar, sentir y comunicar en mandarín.",
  },
  {
    icon: Globe,
    title: "Nuestra visión",
    text: "Convertirnos en el puente educativo de referencia entre la cultura china y Latinoamérica, formando hablantes que comprendan el idioma en su contexto cultural completo.",
  },
  {
    icon: Users,
    title: "Nuestro enfoque",
    text: "Cada clase integra caligrafía, historia y tradiciones junto al estudio del idioma. Creemos que no se puede dominar una lengua sin entender el mundo que la creó.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-imperial uppercase">
            Sobre el centro
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Un espacio donde el idioma cobra vida
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-light">
            Chunfengbeibei nació de la convicción de que aprender chino mandarín
            debe ser una experiencia cultural completa, no solo un ejercicio
            lingüístico. Nuestras profesoras, todas originarias de China,
            traen consigo el conocimiento vivo de una civilización milenaria.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group rounded-xl border border-border-subtle bg-rice/50 p-7 transition-all hover:border-imperial/20 hover:shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-imperial/8 text-imperial transition-colors group-hover:bg-imperial/12">
                <pillar.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-light">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
