import { Users, GraduationCap, Globe } from "lucide-react";

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
    <section id="sobre-nosotros" className="bg-rice/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
       {/* LAYOUT EDITORIAL INVERTIDO (ZIGZAG) */}
       <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* 1. LA IMAGEN AHORA VA PRIMERO EN EL CÓDIGO (Izquierda en Desktop) */}
          {/* Usamos order-2 lg:order-1 para que en móviles la imagen siga saliendo debajo del título si lo prefieres, 
              o order-1 lg:order-1 para que salga arriba. Lo estándar es que en móvil el texto vaya primero, 
              así que usaremos order-last lg:order-first */}
          <div className="order-last lg:order-first relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl lg:aspect-square group">
            <div className="absolute inset-0 bg-imperial/5 transition-colors group-hover:bg-transparent z-10" />
            
            {/* Si tienes una foto real, reemplaza este div por la etiqueta <img> */}
            <div className="flex h-full w-full flex-col items-center justify-center border border-imperial/10 bg-rice/50 p-8 text-center transition-transform duration-500 group-hover:scale-105">
              <span className="font-serif text-5xl text-imperial/20 mb-4">春风</span>
              <p className="text-ink-light/60 font-medium">
                [ Sugerencia de Imagen: Estudiantes interactuando en vivo, o detalles de caligrafía tradicional ]
              </p>
            </div>
          </div>

          {/* 2. EL TEXTO AHORA VA SEGUNDO (Derecha en Desktop) */}
          <div className="order-first lg:order-last max-w-xl">
            <p className="text-sm font-bold tracking-[0.15em] text-imperial uppercase">
              ¿Qué es ChunFeng BeiBei?
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              El espacio donde tu idioma <span className="text-imperial italic">cobra vida</span>
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
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-imperial transition-all duration-300 group-hover:w-full" />
              
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-imperial/5 text-imperial transition-transform duration-300 group-hover:scale-110 group-hover:bg-imperial/10">
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

      </div>
    </section>
  );
}