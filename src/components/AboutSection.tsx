import { Users, GraduationCap, Globe, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    icon: Users,
    title: "Atención Boutique",
    text: "Grupos íntimos de máximo 6 personas y clases en vivo. Cada grupo se forma cuidadosamente para asegurar un acompañamiento real, corrección constante de pronunciación y un progreso acelerado.",
  },
  {
    icon: GraduationCap,
    title: "Excelencia Oficial",
    text: "Guiados por profesoras nativas, nuestro método progresivo se alinea perfectamente con los niveles oficiales HSK, dándote bases sólidas, certificables a nivel internacional y aplicables desde el día uno.",
  },
  {
    icon: Globe,
    title: "Inmersión Auténtica",
    text: "El idioma no existe en el vacío. Integramos de manera natural costumbres, formas de cortesía y festividades tradicionales para que tu aprendizaje sea profundo, significativo y contextualizado.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-rice/30 py-24 md:py-32 border-t border-border-subtle/50">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
       {/* LAYOUT EDITORIAL INVERTIDO (ZIGZAG) */}
       <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* 1. LA IMAGEN AHORA VA PRIMERO EN EL CÓDIGO (Izquierda en Desktop) */}
          {/* Usamos order-2 lg:order-1 para que en móviles la imagen siga saliendo debajo del título si lo prefieres, 
              o order-1 lg:order-1 para que salga arriba. Lo estándar es que en móvil el texto vaya primero, 
              así que usaremos order-last lg:order-first */}
          <div className="order-last lg:order-first relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl lg:aspect-square group">
            <div className="absolute inset-0 bg-imperial/5 transition-colors group-hover:bg-transparent z-10" />
            
            {/* IMAGEN REAL IMPLEMENTADA */}
            <img 
              src="/caligrafia.jpg" // Asegúrate de que este archivo esté dentro de tu carpeta /public
              alt="Detalle fotográfico de caligrafía china tradicional realizada a mano con pincel y tinta negra sobre papel de arroz texturizado, representando la esencia de ChunFengBeiBei"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* 2. EL TEXTO AHORA VA SEGUNDO (Derecha en Desktop) */}
          <div className="order-first lg:order-last max-w-xl">
            <p className="text-sm font-bold tracking-[0.15em] text-imperial uppercase">
              Nuestra Esencia
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              El espacio donde tu idioma <span className="text-imperial">cobra vida</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-light">
              Somos un centro de estudios culturales dedicado a la enseñanza del chino mandarín con un enfoque radicalmente diferente: <strong className="text-ink font-semibold">práctico, humano y progresivo.</strong>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-light">
              Nuestro objetivo no es solo enseñarte listas de vocabulario, sino darte las herramientas para que comprendas, practiques y te comuniques con seguridad desde tu primera clase, respaldado siempre por profesoras nativas.
            </p>
          </div>

        </div>

        {/* Las 3 Columnas (Tus ventajas competitivas reales) */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              // 1. Contenedor principal: Hover para Desktop, Active (hundimiento sutil) para Móvil
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-md active:scale-[0.98] active:bg-gray-50/50"
            >
              {/* 2. Barra superior: Se expande en Desktop (hover) y en Móvil (al tocar) */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-imperial transition-all duration-300 md:group-hover:w-full group-active:w-full" />
              
              {/* 3. Icono: Escala hacia arriba en Desktop, se encoge un poco al tacto en Móvil */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-imperial/5 text-imperial transition-all duration-300 md:group-hover:scale-110 md:group-hover:bg-imperial/10 group-active:scale-95 group-active:bg-imperial/10">
                <pillar.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </div>
              
              <h3 className="mb-3 font-serif text-xl font-bold text-ink">
                {pillar.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-light">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>

        {/* EL NUEVO CALL TO ACTION ELEGANTE (Para la sección "Nuestra Esencia") */}
        <div className="mt-16 flex justify-center">
          <a
            href="#horarios" // Cambia esto al ID de tu sección de cursos
            // Le damos el efecto de hundimiento en móvil (active:scale-95) y cambio de color
            className="group inline-flex items-center gap-2 font-medium text-imperial transition-all duration-300 md:hover:text-ink active:scale-95 active:text-6nk"
          >
            Conoce nuestros programas de estudio
            
            {/* Animación: Se desliza a la derecha al pasar el mouse (PC) o al presionar (Móvil) */}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 md:group-hover:translate-x-1.5 group-active:translate-x-1.5" />
          </a>
        </div>

      </div>
    </section>
  );
}