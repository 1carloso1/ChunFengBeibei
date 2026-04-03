import { Milestone, BookOpen, Clock, ArrowRightCircle, ArrowDown } from "lucide-react";

// Hemos extraído la "carnita" operativa de tu texto original
const STEPS = [
  {
    icon: BookOpen,
    title: "El Sistema Modular",
    description: "Olvídate de compromisos anuales abrumadores. Nuestro aprendizaje se divide en bloques claros y digeribles. Avanzas paso a paso, dominando un módulo antes de pasar al siguiente.",
  },
  {
    icon: Clock,
    title: "Ciclos de 7 Semanas",
    description: "Cada nivel (HSK 1 al 6) está segmentado en módulos cortos de 7 semanas. Esto te permite ver progreso real a corto plazo, integrando el estudio fácilmente en tu vida diaria.",
  },
  {
    icon: Milestone,
    title: "A Tu Propio Ritmo",
    description: "Al terminar un módulo, decides si continúas inmediatamente o tomas una pausa hasta el siguiente grupo. Tú tienes el control absoluto de tu avance, sin presiones.",
  },
];

export default function MethodologySection() {
  return (
    // Cambiamos bg-rice por bg-white
    <section id="metodologia" className="bg-white py-24 md:py-32 border-t border-border-subtle/50">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.15em] text-jade uppercase">
            Nuestra Metodología
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Aprende sin presión, <span className="text-jade">módulo a módulo</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-light">
            En ChunFeng BeiBei no creemos en los métodos abrumadores. Hemos adaptado los niveles oficiales (HSK) a un sistema modular ágil, diseñado para que veas resultados desde la primera clase.
          </p>
        </div>

        {/* El "Camino" Visual */}
        <div className="mt-20 relative">
          {/* Línea conectora HORIZONTAL (Solo Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-jade/10" aria-hidden="true" />

          {/* Línea conectora VERTICAL (Solo Móvil) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-jade/10 lg:hidden" aria-hidden="true" />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, idx) => (
              <article
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Número / Paso */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rice shadow-sm border border-jade/10 text-jade transition-all duration-300 md:group-hover:-translate-y-2 md:group-hover:shadow-md active:scale-95 active:bg-jade/10 z-10">
                  <step.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                
                <h3 className="mb-3 font-serif text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-light max-w-sm">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Caja de Destacado: ¿Qué se logra realmente? */}
        <div className="mt-24 overflow-hidden rounded-2xl bg-rice shadow-md border border-jade/10 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg active:scale-[0.98] lg:flex lg:items-center">
          
          {/* Eliminamos bg-jade/5 de aquí */}
          <div className="flex flex-col justify-center border-b border-jade/10 p-10 lg:w-1/3 lg:border-b-0 lg:border-r lg:p-12">
            <h3 className="mb-4 font-serif text-2xl font-bold text-jade">En cada módulo lograrás:</h3>
            <p className="text-ink-light">El avance es progresivo, medible y siempre acompañado por tu profesora nativa.</p>
          </div>
          <div className="p-10 lg:w-2/3 lg:p-12">
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Dominar los tonos correctamente",
                "Comprender vocabulario clave",
                "Formar frases útiles de inmediato",
                "Presentarte con seguridad",
                "Participar activamente en chino",
                "Prepararte para el sistema HSK"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRightCircle className="mt-0.5 h-5 w-5 shrink-0 text-jade" />
                  <span className="font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* EL PUENTE ELEGANTE (Con animación sutil en el icono) */}
        {/* EL PUENTE ELEGANTE (Con animación táctil perfecta para móvil) */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm font-medium text-ink-light/80">
            ¿Listo para dar el primer paso?
          </p>
          <a
            href="#horarios"
            className="group inline-flex items-center gap-2 rounded-full border border-jade/30 bg-jade/20 px-8 py-3 font-medium text-ink transition-all duration-300 md:hover:bg-jade md:hover:text-white md:hover:shadow-lg md:hover:shadow-jade/20 active:scale-95 active:bg-jade active:text-white"
          >
            Ver Horarios
            
            {/* La flecha sigue rebotando para llamar la atención */}
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}