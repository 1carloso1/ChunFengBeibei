"use client"; 
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data/socials";
import { CONTACT_INFO } from "@/lib/data/socials";
import { getWhatsAppUrl } from "@/lib/utils";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        
        {/* FILA 1: MARCA Y REDES (Alineación horizontal premium) */}
        <div className="flex flex-col items-center justify-between gap-8 pb-12 sm:flex-row sm:items-center">
          
          {/* Marca con Scroll Suave */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex cursor-pointer items-center gap-4 transition-transform active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="ChunFeng BeiBei logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            
            <div className="text-left">
              <span className="font-serif text-xl font-bold tracking-[0.12em] text-white transition-colors duration-300 md:group-hover:text-jade group-active:text-jade group-active:duration-0">
                ChunFeng BeiBei
              </span>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-jade/80">
                Centro de Estudios Culturales
              </p>
            </div>
          </div>

          {/* Redes Sociales a la derecha */}
          <nav aria-label="Redes sociales" className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <SocialLink key={social.label} href={social.href} label={social.label}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </SocialLink>
            ))}
          </nav>
        </div>

        {/* FILA 2: DATOS TÉCNICOS (Contacto, Sede y Legales) */}
        {/* Usamos un grid elegante que se divide arriba/abajo en móvil y a los lados en escritorio */}
        <div className="flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:justify-between md:gap-8">
          
          {/* Bloque Izquierdo: Contacto y Sede (Estilo "Whisper" - tipografía pequeña y elegante) */}
          <div className="flex flex-col items-center text-center gap-8 sm:flex-row sm:text-left sm:gap-16">
            <div>
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Sede Administrativa
              </span>
              <p className="text-sm leading-relaxed text-rice/60">
                Zacatecas,<br/>
                Zacatecas, México.
              </p>
            </div>
            
            <div>
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Contacto Directo
              </span>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="block text-sm text-rice/60 transition-all duration-300 md:hover:text-jade active:text-jade active:scale-95"
              >
               {CONTACT_INFO.email}
              </a>
              <a 
                href={getWhatsAppUrl("Información")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 block text-sm text-rice/60 transition-all duration-300 md:hover:text-jade active:text-jade active:scale-95"
              >
                {CONTACT_INFO.whatsappFormatted}
              </a>
            </div>
          </div>

          {/* Bloque Derecho: Legales y Copyright (Alineado a la derecha en monitor) */}
          <div className="flex flex-col items-center text-center gap-4 md:items-end md:text-right md:justify-between">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-rice/40 md:justify-end">
              <Link href="/privacidad" className="transition-all duration-300 hover:text-jade active:scale-95 active:text-jade">
                Aviso de Privacidad
              </Link>
              <Link href="/terminos" className="transition-all duration-300 hover:text-jade active:scale-95 active:text-jade">
                Términos y Condiciones
              </Link>
            </div>
            
            <p className="text-xs text-rice/30">
              &copy; {currentYear} ChunFeng BeiBei. Todos los derechos reservados.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-rice/50 transition-all duration-300 md:hover:bg-jade/10 md:hover:text-jade active:bg-jade/20 active:text-jade active:scale-90 active:duration-0"
    >
      {children}
    </a>
  );
}