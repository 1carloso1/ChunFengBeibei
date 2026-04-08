"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#sobre-nosotros", label: "Nosotros" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#programas", label: "Programas" },
  { href: "#horarios", label: "Horarios" },
  { href: "#testimonios", label: "Testimonios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-imperial/10 bg-rice/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Logo" className="h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
          <span className="font-serif text-xl font-bold text-ink tracking-[0.12em] transition-colors duration-300 group-hover:text-imperial">
            ChunFengBeiBei
          </span>
        </a>

        {/* LINKS DE ESCRITORIO */}
        <ul className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-ink-light transition-all duration-300 hover:text-imperial after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-imperial after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MEJORA 1: CTA DE ESCRITORIO CON ANIMACIÓN HOMOGÉNEA */}
        <a
          href={getWhatsAppUrl("Información")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-jade px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 md:inline-flex md:hover:bg-jade-dark md:hover:shadow-md active:duration-0 active:scale-95"
        >
          Inscríbete
        </a>

        {/* MEJORA 2: ACCESIBILIDAD EN EL BOTÓN MÓVIL */}
        <button 
          onClick={() => setOpen(!open)} 
          className="lg:hidden p-2 text-ink active:scale-95 transition-transform"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      
      {/* MENÚ MÓVIL */}
      {open && (
        /* MEJORA 3: USO DE 100dvh Y OVERFLOW PARA EVITAR EL BUG VISUAL DEL CELULAR */
        <div className="absolute inset-x-0 top-full flex h-[calc(100dvh-72px)] flex-col overflow-y-auto bg-rice/95 backdrop-blur-lg lg:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          
          <nav className="flex flex-col items-center gap-4 px-6 py-12 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full rounded-lg py-4 text-xl font-medium text-ink transition-colors hover:bg-imperial/5 hover:text-imperial active:bg-imperial/10"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-8 w-full px-4"> 
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-jade py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 active:duration-0 active:scale-95"
              >
                Inscríbete ahora
              </a>
            </div>
          </nav>

          <div className="mt-auto pb-10 pt-6 text-center opacity-20">
            <span 
              className="text-4xl text-imperial"
              style={{ fontFamily: '"Kaiti SC", "STKaiti", "KaiTi", "Songti SC", "SimSun", serif' }}
            >
              春风贝贝
            </span>
          </div>
        </div>
      )}
    </header>
  );
}