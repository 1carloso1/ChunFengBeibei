import { MessageCircle, BookOpen } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-rice pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* 回纹 (huíwén) meander — continuity & classical ornament */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] sm:opacity-[0.075] md:opacity-[0.055] lg:opacity-[0.04]">
        <svg
          viewBox="0 0 1200 600"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-huiwen"
              width={40}
              height={40}
              patternUnits="userSpaceOnUse"
            >
              <path
                fill="none"
                stroke="#BC2406"
                strokeWidth={0.9}
                strokeLinecap="square"
                strokeLinejoin="miter"
                d="M0.5 0.5h39v39h-39v-31h31v23h-23v-15h15v7h-7v-3h3v0.5h-0.5v-0.5h0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-huiwen)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
        <div className="max-w-3xl text-center sm:text-left lg:col-span-7">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-imperial/15 bg-imperial/5 px-4 py-1.5 text-sm font-medium text-imperial">
          {/* Punto animado estilo "Live / Activo" */}
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-imperial opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-imperial"></span>
          </span>
          Inscripciones abiertas
        </div>

          <h1 className="font-serif text-4xl leading-[1.1] font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            Aprende el idioma del futuro{" "}
            <span className="text-imperial">con el alma de su cultura</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-light md:text-xl">
          Domina el mandarín desde casa y abre las puertas a nuevas oportunidades profesionales y personales. Un programa diseñado para conectar profundamente con China a través de su lengua y sus tradiciones.
          </p>

          <ul className="mt-10 flex w-full list-none flex-wrap items-center justify-center gap-x-10 gap-y-4 p-0 text-base font-medium leading-relaxed text-ink sm:justify-start md:flex-nowrap md:justify-between">
              <li className="flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-imperial ring-2 ring-imperial/30"
                  aria-hidden="true"
                />
                Profesoras nativas certificadas
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-imperial ring-2 ring-imperial/30"
                  aria-hidden="true"
                />
                Grupos de 3 a 6 alumnos
              </li>
              <li className="flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-imperial ring-2 ring-imperial/30"
                  aria-hidden="true"
                />
                Preparación para exámenes HSK
              </li>
            </ul>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <a
            href={getWhatsAppUrl("Información")}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2.5 rounded-lg bg-jade px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 md:hover:bg-jade-dark md:hover:shadow-md active:bg-jade-dark active:duration-0 active:scale-95"
          >
            <MessageCircle className="h-5 w-5 transition-transform group-active/btn:scale-110 md:group-hover/btn:scale-110" aria-hidden="true" />
            Contactar por WhatsApp
          </a>
            {/* Reemplaza la importación de Mail por BookOpen o ArrowDown si quieres */}
            <a 
              href='#metodologia' 
              className="group/btn inline-flex items-center justify-center gap-2.5 rounded-lg border border-imperial/30 bg-imperial/20 px-7 py-3.5 text-base font-semibold text-imperial transition-all duration-300 md:hover:bg-imperial/30 md:hover:border-imperial/40 active:bg-imperial/30 active:duration-0 active:scale-95"
            >
              <BookOpen className="h-5 w-5 transition-transform group-active/btn:scale-110 md:group-hover/btn:scale-110" aria-hidden="true" />
              Conocer metodología
            </a>
          </div>

          <div className="mt-6 flex flex-col items-center sm:items-start gap-4">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-ink">
              <div className="flex text-gold">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="m-0 leading-none">Más de 200 alumnos hispanohablantes</p>
            </div>

          </div>
        </div>

        <div className="w-full lg:col-span-5">
  {/* El contenedor maneja el 'hundimiento' en móviles al tocarlo */}
  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-imperial/10 transition-transform duration-300 active:scale-[0.98]">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/hero.png"
      alt="Mockup flotante"
      // La imagen maneja el acercamiento elegante en escritorio al pasar el mouse
      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  </div>
</div>
      </div>
    </section>
  );
}
