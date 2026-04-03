"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

// 1. Limpieza de enlaces (Sugerencia: quitar Inicio y Preguntas si se puede)
const NAV_LINKS = [
  { href: "#sobre-nosotros", label: "Nosotros" },      // ¿Quiénes son? (Autoridad)
  { href: "#metodologia", label: "Metodología" },       // ¿Por qué funciona? (Diferenciador)
  { href: "#programas", label: "Programas" },           // ¿Qué venden? (Oferta)
  { href: "#horarios", label: "Horarios" },             // ¿Cuándo puedo estudiar? (Logística)
  // Testimonios es opcional. Si ves que el Navbar se ve muy lleno, puedes quitarlo. 
  // Si tienes espacio, déjalo, porque da mucha prueba social.
  { href: "#testimonios", label: "Testimonios" },       
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-imperial/10 bg-rice/80 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
    
    {/* LOGO: Más aire */}
    <a href="#inicio" className="flex items-center gap-2 group">
      <img src="/logo.png" alt="Logo" className="h-9 w-9 transition-transform group-hover:scale-110" />
      <span className="font-serif text-xl font-bold text-ink tracking-[0.12em] transition-colors group-hover:text-imperial">
        ChunFengBeiBei
      </span>
    </a>

    {/* LINKS: Interactividad refinada */}
    <ul className="hidden items-center gap-2 lg:flex">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="relative px-3 py-2 text-sm font-medium text-ink-light transition-all hover:text-imperial after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-imperial after:transition-all hover:after:w-full"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>

    {/* CTA: Coherencia con el Hero */}
    <a
      href="#contacto"
      className="hidden rounded-full bg-jade px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-jade-dark hover:shadow-md md:inline-block"
    >
      Inscríbete
    </a>

    {/* Menú móvil con un toque más limpio */}
    <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink">
      {open ? <X /> : <Menu />}
    </button>
  </nav>
  
  {/* Animación de entrada sugerida para el menú móvil */}
  {/* Menú Móvil: Desplegable con efecto Glassmorphism */}
  {open && (
  /* 1. Ponemos la animación en el contenedor PADRE (el que tiene el fondo y el blur) */
  <div className="absolute inset-x-0 top-full flex h-[calc(100vh-72px)] flex-col bg-rice/95 backdrop-blur-lg lg:hidden animate-in fade-in slide-in-from-top-5 duration-300">
    
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

  {/* BOTÓN GRANDE Y CENTRADO: Máxima facilidad de clic */}
  <div className="mt-8 w-full px-4"> 
    <a
      href="#contacto"
      onClick={() => setOpen(false)}
      className="flex w-full items-center justify-center rounded-full bg-jade py-5 text-lg font-bold text-white shadow-xl active:scale-95 transition-transform"
    >
      Inscríbete ahora
    </a>
  </div>
</nav>

    {/* El detalle decorativo */}
    <div className="mt-auto pb-10 text-center opacity-20">
      <span className="font-serif text-4xl text-imperial">春风贝贝</span>
    </div>
  </div>
)}
</header>
  );
}
