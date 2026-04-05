"use client"; 

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
            <SocialLink href="https://www.tiktok.com/@chunfengbeibei" label="TikTok">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.96a8.28 8.28 0 003.76.94V6.45a4.81 4.81 0 01-.01.24z" /></svg>
            </SocialLink>
            <SocialLink href="https://facebook.com/chunfengbeibei" label="Facebook">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </SocialLink>
            <SocialLink href="https://youtube.com/@chunfengbeibei" label="YouTube">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </SocialLink>
            <SocialLink href="https://instagram.com/chunfengbeibei" label="Instagram">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </SocialLink>
          </nav>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-rice/40">
            &copy; {currentYear} ChunFengBeiBei. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-rice/40">
            <a href="#" className="inline-block transition-all duration-300 md:hover:text-jade active:scale-95 active:text-jade">Aviso de Privacidad</a>
            <a href="#" className="inline-block transition-all duration-300 md:hover:text-jade active:scale-95 active:text-jade">Términos y Condiciones</a>
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