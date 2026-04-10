"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { Clock, Calendar, Users, ArrowRight, BookOpen, CalendarDays, EyeOff, Star} from "lucide-react";
import { getEnrichedCourses } from "@/lib/data/courses";
import { getWhatsAppUrl } from "@/lib/utils";
import { usePreRegistration } from "@/hooks/usePreRegistration";
import PreRegistrationModal from "@/components/ui/PreRegistrationModal";

interface ScheduleSectionProps {
  activeLevel: string;
  setActiveLevel: Dispatch<SetStateAction<string>>;
}

export default function ScheduleSection({ activeLevel, setActiveLevel }: ScheduleSectionProps) {

const [activeFormat, setActiveFormat] = useState("all"); 
const [activeShift, setActiveShift] = useState("Todos");
const [hideFull, setHideFull] = useState(false); 

const courses = getEnrichedCourses();

const filteredCourses = courses.filter((course) => {
  const matchLevel = activeLevel === "Todos" ? true : course.level === activeLevel;
  const matchFormat = activeFormat === "all" ? true : course.format === activeFormat;
  // NUEVO: Lógica para comparar el turno (Matutino, Vespertino, Nocturno)
  const matchShift = activeShift === "Todos" ? true : course.shift === activeShift;
  const matchAvailability = hideFull ? course.spotsAvailable > 0 : true;

  // Ahora la tarjeta debe cumplir 4 condiciones
  return matchLevel && matchFormat && matchShift && matchAvailability;
});

// Buscamos el próximo inicio disponible (ignorando los grupos llenos)
const availableCourses = courses.filter(course => course.status !== 'full');
  
// Tomamos la fecha del primer curso disponible. 
// (Nota: Si tu base de datos está ordenada cronológicamente, esto es perfecto. 
// Si no, podríamos agregar un sort() más adelante).
const nextStartDate = availableCourses.length > 0 
  ? availableCourses[0].startDate 
  : "Próximamente";

// NUEVO HOOK ACTUALIZADO
const { isOpen, status, selectedCourse, openModal, closeModal, submitRegistration } = usePreRegistration();

return (
  <section id="horarios" className="relative overflow-hidden bg-white py-24 md:py-32 border-t border-border-subtle/30">

<div className="pointer-events-none absolute inset-0 z-0">
  <svg 
    className="h-full w-full" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="endless-clouds-final"
        width="56"
        height="28"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(1)" 
      >
        <path
          fill="none"
          stroke="#059669" 
          
          strokeWidth="1.5" 
         
          strokeOpacity="0.1" 
          d="M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#endless-clouds-final)" />
  </svg>
</div>

    {/* Contenedor Principal (z-10 para que quede por encima del patrón) */}
    <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
      
      {/* Cabecera */}
      <div className="mx-auto max-w-2xl text-center">
        {/* Regresamos al Jade aquí para indicar "Acción / Crecimiento" */}
        <p className="text-sm font-bold tracking-[0.15em] text-jade uppercase">
          Próximos Inicios
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
          Reserva tu lugar en menos de 1 minuto
        </h2>
        
        {/* Contenedor de Información Rápida */}
        {/* CAMBIO: De bg-white a bg-rice, y agregamos shadow-md para que flote sobre el patrón */}
        <div className="mx-auto mt-8 flex w-fit flex-col items-center justify-center rounded-2xl border border-border-subtle/50 bg-rice px-8 py-5 shadow-md md:flex-row md:gap-8 transition-transform hover:-translate-y-1 duration-300">
          
          {/* Bloque 1: Fecha */}
          <div className="text-center"> 
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink-light">
              Próximo inicio
            </span>
            <span className="font-medium text-jade">{nextStartDate}</span>
          </div>

          {/* DIVISOR 1 (Ajustado a color sutil) */}
          <div className="my-3 h-[1px] w-16 bg-border-subtle/50 md:my-0 md:h-10 md:w-[1px]" aria-hidden="true" />

          {/* Bloque 2: Duración */}
          <div className="text-center"> 
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink-light">
              Duración
            </span>
            <span className="font-medium text-ink">7 semanas (21 hrs)</span>
          </div>

          {/* DIVISOR 2 */}
          <div className="my-3 h-[1px] w-16 bg-border-subtle/50 md:my-0 md:h-10 md:w-[1px]" aria-hidden="true" />

          {/* Bloque 3: Inversión */}
          <div className="text-center"> 
            <span className="block text-xs font-semibold uppercase tracking-wider text-ink-light">
              Inversión del módulo
            </span>
            {/* El precio destaca en negritas */}
            <span className="font-bold text-ink">$2,000 MXN</span>
          </div>

        </div>
        
        <p className="mt-5 text-sm font-medium text-ink-light">
          * Los grupos se abren con un mínimo de 4 estudiantes.
        </p>
      </div>

      {/* LA BARRA DE FILTROS PREMIUM (Diseño Responsivo Mejorado) */}
      {/* LA BARRA DE FILTROS PREMIUM (Estructura de 2 Filas) */}
      <div className="mt-12 mb-8 flex flex-col gap-6 rounded-2xl border border-border-subtle/50 bg-rice p-6 shadow-sm">
          
          {/* --- FILA 1: Filtros Principales (Optimizados para 1 sola fila en PC) --- */}
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap lg:flex-nowrap lg:items-end lg:justify-between lg:gap-4">
          
          {/* 1. Filtro Principal: Nivel HSK (Ahora en formato caja unida) */}
          <div className="flex w-full flex-col gap-2 md:w-auto">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-light">
              <BookOpen className="h-4 w-4 text-jade" /> Nivel
            </span>
            {/* Contenedor gris/arroz que agrupa los botones */}
            <div className="inline-flex w-full overflow-x-auto rounded-lg border border-border-subtle/50 bg-white/50 p-1 sm:w-auto hide-scrollbar"> 
              {["Todos", "HSK 1", "HSK 2", "HSK 3"].map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`flex-1 whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all active:scale-95 sm:flex-none ${
                    activeLevel === level
                      ? "bg-jade text-white shadow-sm" // <--- Color Jade para el seleccionado
                      : "text-ink-light hover:text-jade" 
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Filtro de Días: (Actualizado para coincidir en el color Jade) */}
          <div className="flex w-full flex-col gap-2 md:w-auto">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-light">
              <CalendarDays className="h-4 w-4 text-jade" /> Días
            </span>
            <div className="inline-flex w-full overflow-x-auto rounded-lg border border-border-subtle/50 bg-white/50 p-1 sm:w-auto hide-scrollbar"> 
              {["all", "weekday", "weekend"].map((format) => (
                <button
                  key={format}
                  onClick={() => setActiveFormat(format)}
                  className={`flex-1 whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all active:scale-95 sm:flex-none ${
                    activeFormat === format
                      ? "bg-jade text-white shadow-sm" // <--- Color Jade para el seleccionado
                      : "text-ink-light hover:text-jade"
                  }`}
                >
                  {format === "all" ? "Todos" : format === "weekday" ? "Entre semana" : "Fines de semana"}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Filtro de Turno (Dropdown) */}
          <div className="flex w-full flex-col gap-2 md:w-auto lg:min-w-[200px]">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-light">
              <Clock className="h-4 w-4 text-jade" /> Turno
            </span>
            <select
              value={activeShift}
              onChange={(e) => setActiveShift(e.target.value)}
              className="w-full cursor-pointer rounded-lg border border-border-subtle/50 bg-rice px-3 py-2 text-sm font-medium text-ink-light shadow-sm outline-none transition-all hover:border-jade/30 focus:border-jade focus:ring-1 focus:ring-jade active:scale-95" 
            >
              <option value="Todos">Cualquier hora</option>
              <option value="Matutino">Matutino (AM)</option>
              <option value="Vespertino">Vespertino (Tarde)</option>
              <option value="Nocturno">Nocturno (Noche)</option>
            </select>
          </div>
        </div>

          {/* --- FILA 2: Opciones de Vista (Alineada a la izquierda) --- */}
          <div className="flex items-center justify-between border-t border-border-subtle/50 pt-5 md:justify-start md:gap-4">
            <span 
              className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink-light" 
              onClick={() => setHideFull(!hideFull)}
            >
              <EyeOff className="h-4 w-4 text-jade" /> Ocultar agotados
            </span>
            <button 
              onClick={() => setHideFull(!hideFull)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none active:scale-95 ${
                hideFull ? "bg-jade" : "bg-border-subtle"
              }`}
              role="switch"
              aria-checked={hideFull}
            >
              <span className="sr-only">Ocultar cursos agotados</span>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-rice transition duration-200 ease-in-out shadow-sm ${
                hideFull ? "translate-x-5" : "translate-x-0"
              }`} />
            </button>
          </div>

      </div>

      {/* MENSAJE DE ESTADO: Diseño de Tarjeta Coherente */}
      {filteredCourses.length === 0 && (
        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-border-subtle/50 bg-rice p-8 text-center shadow-sm transition-all duration-300 md:p-12 md:hover:-translate-y-1 md:hover:shadow-md active:scale-[0.98]">
          
          {/* Icono en el verde de la marca */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-jade/10">
            <CalendarDays className="h-8 w-8 text-jade" />
          </div>
          
          <h3 className="font-serif text-2xl font-bold text-ink">
            ¿No encontraste tu horario ideal?
          </h3>
          
          <p className="mt-4 text-base leading-relaxed text-ink-light">
            Te avisaremos en cuanto abramos grupos para <strong className="text-jade">{activeLevel === "Todos" ? "el nivel que buscas" : activeLevel}</strong>. ¿No quieres esperar? Arma tu propio horario con nuestras <strong className="text-ink">Clases VIP 1 a 1</strong>.
          </p>

          {/* Contenedor de los dos botones principales */}
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-start">
            
            {/* OPCIÓN 1: La Venta (VIP) */}
            <div className="flex w-full flex-col items-center gap-2 sm:w-auto">
            <button 
              onClick={() => window.open(getWhatsAppUrl("Información"), '_blank')}
              className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-8 py-4 text-sm font-bold text-white transition-all duration-300 md:hover:bg-jade active:bg-jade active:scale-95 active:duration-0 sm:w-auto"
            >
              Consultar horarios VIP
              <ArrowRight className="h-4 w-4 transition-transform group-active/btn:translate-x-1 md:group-hover/btn:translate-x-1" />
            </button>
              <span className="text-xs font-medium text-ink-light">
                Inversión del programa: <strong className="text-ink">$10,000 MXN</strong>
              </span>
            </div>

            {/* OPCIÓN 2: La Lista de Espera (Grupal) */}
            <div className="flex w-full flex-col items-center gap-2 sm:w-auto">
            <button 
              onClick={() => window.open(getWhatsAppUrl("Información"), '_blank')}
              className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle bg-rice px-8 py-4 text-sm font-bold text-ink transition-all duration-300 md:hover:border-jade md:hover:text-jade active:border-jade active:text-jade active:scale-95 active:duration-0 sm:w-auto"
            >
              Avisarme de nuevos grupos
            </button>
            </div>

          </div>

          {/* Enlace global para limpiar filtros (Ahora centrado abajo) */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => {
                setActiveLevel("Todos");
                setActiveFormat("all");
                setActiveShift("Todos");
                setHideFull(false);
              }}
              className="text-xs font-semibold text-ink-light underline underline-offset-4 transition-colors hover:text-jade"
            >
              Ver toda la oferta
            </button>
          </div>
        </div>
      )}

      {/* Cuadrícula de Cursos FILTRADOS */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <article
            key={course.id}
            className={`group flex flex-col justify-between overflow-hidden rounded-2xl border bg-rice p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-md active:scale-[0.98] ${
              course.status === 'full' ? 'border-border-subtle/30 opacity-75 grayscale-[0.5]' : 'border-border-subtle/50 md:hover:border-jade/30'
            }`}
          >
            <div>
              <div className="mb-4 flex items-start justify-between">
                <div>
                <span className={`inline-block rounded-md border px-2.5 py-1 text-xs font-bold tracking-wide shadow-sm ${
                  course.status === 'full' 
                    ? 'border-border-subtle/50 bg-border-subtle/10 text-ink-muted shadow-none' 
                    : 'border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700'
                }`}>
                  {course.level}
                </span>
                  <h3 className="mt-2 font-serif text-xl font-bold text-ink">
                    {course.title}
                  </h3>
                </div>
                {/* Etiqueta de Turno (Gris Estilo Premium) */}
                <span className="flex items-center rounded-full border border-border-subtle/60 bg-white/50 px-3 py-1 text-xs font-medium text-ink-light shadow-sm">
                  {course.shift}
                </span>
              </div>

              <ul className="mt-6 space-y-3 border-t border-border-subtle/30 pt-4 text-sm text-ink-light">
                <li className="flex items-center gap-3">
                  <Calendar className={`h-4 w-4 shrink-0 ${course.status === 'full' ? 'text-ink-muted' : 'text-jade'}`} />
                  <span>Inicia: <strong className="font-medium text-ink">{course.startDate}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className={`h-4 w-4 shrink-0 ${course.status === 'full' ? 'text-ink-muted' : 'text-jade'}`} />
                  <span>{course.days} • <strong className="font-medium text-ink">{course.time}</strong></span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-border-subtle/30 pt-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Icono con pulso de urgencia si es el último lugar */}
                  <Users className={`h-4 w-4 ${
                    course.status === 'full' ? 'text-ink-muted' :
                    course.status === 'almost-full' ? 'text-imperial animate-pulse' : 'text-jade'
                  }`} />
                  
                  <span className={`text-sm ${
                    course.status === 'full' ? 'text-ink-muted font-medium' :
                    course.status === 'almost-full' ? 'text-imperial font-bold' : 'text-ink-light font-medium'
                  }`}>
                    {course.status === 'full' 
                      ? 'Grupo lleno' 
                      : course.status === 'almost-full'
                        ? course.spotsAvailable === 1 
                          ? '¡ÚLTIMO LUGAR DISPONIBLE!' // <-- El "Killer Copy" para el cierre
                          : `¡Últimos ${course.spotsAvailable} lugares!` 
                        : `${course.spotsAvailable} cupos disponibles`
                    }
                  </span>
                </div>
              </div>

              {/* Botón: Si es el último, podemos hacerlo vibrar o resaltar más */}
              <button 
                disabled={course.status === 'full'}
                // CAMBIO AQUÍ: Llamamos a openModal pasando el curso
                onClick={() => openModal(course)}
                className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-all duration-300 active:duration-0 ${
                  course.status === 'full' 
                    ? 'bg-border-subtle cursor-not-allowed' 
                    : course.spotsAvailable === 1
                      ? 'bg-imperial shadow-lg shadow-imperial/20 md:hover:bg-red-700 active:bg-red-800' 
                      : 'bg-ink md:hover:bg-jade active:bg-jade'
                } active:scale-95`}
              >
                {course.status === 'full' ? 'Agotado' : '¡Reservar mi lugar!'}
                {course.status !== 'full' && (
                  <ArrowRight className="h-4 w-4 transition-transform group-active/btn:translate-x-1 md:group-hover/btn:translate-x-1" />
                )}
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* --- BANNER VIP: Siempre visible como Upsell Premium --- */}
{filteredCourses.length > 0 && (
  
  <div className="mt-16 w-full overflow-hidden rounded-3xl bg-emerald-950 p-8 shadow-2xl transition-all duration-300 md:p-10 md:hover:-translate-y-1 md:hover:shadow-jade/10 lg:flex lg:items-center lg:justify-between lg:gap-8 active:scale-[0.99]">
    
    {/* Columna Izquierda: Copywriting persuasivo */}
    <div className="lg:w-2/3">
      {/* Etiqueta Premium usando el Amber de tu sistema */}
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
        <Star className="h-4 w-4 fill-emerald-400" /> Servicio Premium
      </span>
      <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
        ¿Prefieres avanzar a tu propio ritmo?
      </h3>
      <p className="mt-4 text-base leading-relaxed text-rice/80">
        No te adaptes a nuestros horarios, nosotros nos adaptamos a ti. Arma tu plan de estudio ideal con nuestras <strong>Clases VIP 1 a 1</strong>, profesor exclusivo y flexibilidad total.
      </p>
    </div>
    
    {/* Columna Derecha: Precio y CTA */}
    <div className="mt-8 flex flex-col items-start gap-4 lg:mt-0 lg:w-1/3 lg:items-end">
      <div className="flex flex-col lg:items-end">
        <span className="text-2xl font-bold text-white">$10,000</span>
        {/* Corrección: Volvemos a módulo para no mentir sobre la duración */}
        <span className="text-sm font-medium text-rice/60">MXN / por módulo</span>
      </div>
      
      {/* Botón en Amber para mantener la consistencia */}
      <button 
        onClick={() => window.open(getWhatsAppUrl("Información"), '_blank')}
        className="group/vip flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-emerald-950 transition-all duration-300 md:hover:bg-emerald-50 md:hover:shadow-lg md:hover:shadow-white/10 active:scale-95 active:bg-emerald-100 active:duration-0 sm:w-auto"
      >
        
        Agendar mi programa VIP
        <ArrowRight className="h-4 w-4 transition-transform group-active/vip:translate-x-1 md:group-hover/vip:translate-x-1" />
      </button>
    </div>
    
  </div>
)}

{/* NUEVO MODAL DE PRE-REGISTRO */}
      <PreRegistrationModal 
        isOpen={isOpen} 
        status={status} // <-- ¡Esta es la línea nueva!
        course={selectedCourse} 
        onClose={closeModal} 
        onSubmit={submitRegistration} 
      />

    </div>
  </section>
);
}