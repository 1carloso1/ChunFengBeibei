"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function CTASection() {
  return (
    <section id="admisiones" className="relative overflow-hidden bg-emerald-950 py-24 sm:py-32">
      
      {/* Brillo de fondo para dar profundidad */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 opacity-50 blur-3xl"></div>

      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        
        {/* Etiqueta idéntica al VIP */}
        <p className="flex items-center justify-center gap-2 text-sm font-bold tracking-[0.15em] uppercase text-jade">
          El siguiente paso
        </p>
        
        <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Tu dominio del mandarín comienza con una conversación.
        </h2>
        
        {/* Usamos tu text-rice/80 para mantener esa calidez del marfil */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-rice/80">
          Da el primer paso para dominar el idioma del futuro. Habla directamente con nuestro equipo para conocer los programas disponibles, encontrar el horario perfecto para ti y asegurar tu lugar en nuestra próxima generación.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <a
            href={getWhatsAppUrl("Información")}
            target="_blank"
            rel="noopener noreferrer"
            // Botón idéntico al de tu banner VIP: Blanco puro, texto esmeralda, hover suave
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-emerald-950 transition-all duration-300 md:hover:bg-emerald-50 md:hover:shadow-lg md:hover:shadow-white/10 active:scale-95 active:bg-emerald-100 active:duration-0 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Hablar con un Asesor en WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-active:translate-x-1 md:group-hover:translate-x-1" />
          </a>
          
          {/* Indicador con text-rice/60 para mantener consistencia con el VIP */}
          <div className="flex items-center gap-2 text-sm font-medium text-rice/60">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-jade"></span>
            </span>
            Atención personalizada • Inscripciones abiertas
          </div>
        </div>
      </div>
    </section>
  );
}