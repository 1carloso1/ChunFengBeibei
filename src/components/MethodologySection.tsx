import { UserCheck, Layers, Languages, Users } from "lucide-react";

const FEATURES = [
  {
    icon: UserCheck,
    title: "Profesoras nativas",
    description:
      "Todas nuestras docentes nacieron y se formaron en China. Enseñan desde la experiencia directa del idioma y transmiten matices que solo un hablante nativo conoce.",
  },
  {
    icon: Users,
    title: "Grupos reducidos",
    description:
      "Entre 3 y 6 alumnos por clase. Esto permite atención personalizada, corrección inmediata de pronunciación y un ritmo de aprendizaje adaptado al grupo.",
  },
  {
    icon: Layers,
    title: "Niveles progresivos",
    description:
      "Desde el nivel introductorio (HSK 1) hasta niveles avanzados de conversación y lectura. Evaluamos tu punto de partida para ubicarte donde más provecho saques.",
  },
  {
    icon: Languages,
    title: "Inmersión cultural",
    description:
      "Cada unidad incorpora elementos de la cultura china: caligrafía, festividades, gastronomía e historia. Aprender el idioma sin su cultura es como leer música sin escucharla.",
  },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="bg-rice py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-jade uppercase">
            Metodología
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Cómo enseñamos mandarín
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-light">
            Nuestro método combina la enseñanza formal del idioma con una
            inmersión cultural constante. No memorizas: comprendes,
            practicas y conectas con el idioma de manera orgánica.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature, idx) => (
            <article
              key={feature.title}
              className="relative overflow-hidden rounded-xl border border-border-subtle bg-white p-8 transition-all hover:border-jade/20 hover:shadow-sm"
            >
              <div className="pointer-events-none absolute -right-4 -top-4 font-serif text-[120px] font-bold leading-none text-jade/[0.04] select-none" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-jade/8 text-jade">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-light">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
