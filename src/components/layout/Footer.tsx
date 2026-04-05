"use client"; 
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data/socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          
        {/* Cambiamos Link por un elemento con evento onClick para el Scroll Suave */}

          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex cursor-pointer flex-col items-center gap-4 transition-transform active:scale-95 sm:flex-row sm:items-center"
          >
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Chunfengbeibei logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            
            <div className="text-center sm:text-left">
              <span className="font-serif text-xl font-bold tracking-[0.12em] text-white transition-colors duration-300 md:group-hover:text-jade group-active:text-jade group-active:duration-0">
                ChunFengBeiBei
              </span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-jade/80">
                Centro de Estudios Culturales
              </p>
            </div>
            
          </div>

          <nav aria-label="Redes sociales" className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <SocialLink key={social.label} href={social.href} label={social.label}>
                {/* El Footer decide cómo de grande es y qué clases tiene */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  {/* Aquí inyectamos mágicamente la forma del logo */}
                  <path d={social.path} />
                </svg>
              </SocialLink>
            ))}
          </nav>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-rice/40">
            &copy; {currentYear} ChunFengBeiBei. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-rice/40">
            <Link href="/privacidad" className="inline-block transition-all duration-300 md:hover:text-jade active:scale-95 active:text-jade">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="inline-block transition-all duration-300 md:hover:text-jade active:scale-95 active:text-jade">
              Términos y Condiciones
            </Link>
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
      // Escritorio: Hover suave. Móvil: Hundimiento instantáneo y color
      className="flex h-10 w-10 items-center justify-center rounded-lg text-rice/50 transition-all duration-300 md:hover:bg-jade/10 md:hover:text-jade active:bg-jade/20 active:text-jade active:scale-90 active:duration-0"
    >
      {children}
    </a>
  );
}