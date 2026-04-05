"use client";

import { Dispatch, SetStateAction } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/lib/data/programs";

interface ProgramsSectionProps {
  setActiveLevel: Dispatch<SetStateAction<string>>;
}

export default function ProgramsSection({ setActiveLevel }: ProgramsSectionProps) {
  return (

    <section id="programas" className="bg-rice py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.15em] text-imperial uppercase">
            Ruta de Aprendizaje
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Desde tu primer &quot;Nǐ Hǎo&quot; <span className="text-imperial">hasta tu independencia conversacional</span>
          </h2>
          
          {/* 2. Igualamos a mt-6 y text-lg para que tenga la misma jerarquía que la metodología */}
          <p className="mt-6 text-lg leading-relaxed text-ink-light">
            Nuestro método te prepara paso a paso con el <strong>estándar oficial HSK (el equivalente al TOEFL en chino)</strong>. No solo aprendes a hablar; construyes un camino hacia una certificación con validez mundial.
          </p>
        </div>

        {/* NUEVO: Indicador visual (Márgenes reducidos para que conecte con las tarjetas) */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold text-imperial/80 md:hidden">
          <span className="animate-pulse">Desliza para explorar</span>
          <ArrowRight className="h-4 w-4 animate-pulse" />
        </div>

        {/* Carrusel (Corregido el centrado y espaciado) */}
        {/* Truco: -mx-5 px-5 hace que el scroll toque los bordes del celular, permitiendo un centrado perfecto */}
        <div className="mt-4 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-8 sm:gap-8 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          
        {PROGRAMS.map((program) => (
  <article 
    key={program.id}
    className="group flex w-[80vw] sm:w-[320px] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-border-subtle/50 bg-white shadow-sm transition-all duration-300 active:scale-[0.98] md:w-auto md:hover:-translate-y-2 md:hover:shadow-xl"
  >
    {/* CABECERA TOTALMENTE BLANCA: Eliminamos el bg-rice/30 para máxima limpieza */}
    <div className="border-b border-border-subtle/30 bg-transparent p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-border-subtle/50">
        <program.icon className="h-6 w-6 text-imperial" />
      </div>
      <span className="inline-block rounded-md border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100 px-2.5 py-1 text-xs font-bold tracking-wide text-amber-700">
        {program.level}
      </span>
      <h3 className="mt-3 font-serif text-2xl font-bold text-ink">
        {program.name}
      </h3>
      <p className="mt-2 text-sm font-medium text-ink-light">
        {program.target}
      </p>
    </div>

    {/* Lista de Logros y Botón */}
    <div className="flex flex-1 flex-col justify-between p-8">
      <ul className="space-y-4">
        {program.outcomes.map((outcome, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-ink-light">
            {/* Regresamos el check a Jade para indicar "Logro desbloqueado" positivamente */}
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-jade" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      {/* BOTÓN "SOFT RED": Fondo rojizo muy suave, texto rojo oscuro, hover Rojo Imperial sólido */}
      <button 
        onClick={() => {
          setActiveLevel(program.level);
          document.getElementById('horarios')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="group/link mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-bold text-imperial transition-all duration-300 md:hover:bg-imperial md:hover:text-white active:bg-imperial active:text-white active:scale-95 active:duration-0"
      >
        Ver horarios disponibles
        <ArrowRight className="h-4 w-4 transition-transform group-active/link:translate-x-1 md:group-hover/link:translate-x-1" />
      </button>
    </div>
  </article>
))}
        </div>

      </div>
    </section>
  );
}