import { MessageCircle, BookOpen } from "lucide-react";

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
            <span className="h-2 w-2 rounded-full bg-imperial" aria-hidden="true" />
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
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-jade px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-jade-dark hover:shadow-md"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Contactar por WhatsApp
            </a>
            {/* Reemplaza la importación de Mail por BookOpen o ArrowDown si quieres */}
            <a href='#metodologia' 
            className='inline-flex items-center justify-center gap-2.5 rounded-lg border border-imperial/30 bg-imperial/20 px-7 py-3.5 text-base font-semibold text-imperial transition-all hover:bg-imperial/30 hover:border-imperial/40'>
              <BookOpen className="h-5 w-5" aria-hidden="true" />
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
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-imperial/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero.png"
              alt="Mockup flotante"
              className="h-full w-full object-cover"
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
