"use client";

import { useState } from "react";
import { Clock, Calendar, Users, ArrowRight, BookOpen, CalendarDays, EyeOff } from "lucide-react";

// 1. BASE DE DATOS SIMULADA (Mock Data Ampliada para pruebas)
const MOCK_DB_COURSES = [
  // HSK 1 - Entre semana
  {
    id: "hsk1-mat-1",
    level: "HSK 1",
    title: "Chino desde cero",
    shift: "Matutino",
    duration: "7 semanas",
    startDate: "6 de abril de 2026",
    days: "Martes, Jueves y Sáb",
    time: "6:00 am",
    spotsAvailable: 5,
    format: "weekday",
    status: "open",
  },
  {
    id: "hsk1-vesp-1",
    level: "HSK 1",
    title: "Chino desde cero",
    shift: "Vespertino",
    duration: "7 semanas",
    startDate: "6 de abril de 2026",
    days: "Lun, Mié y Vie",
    time: "5:00 pm",
    spotsAvailable: 2,
    format: "weekday",
    status: "almost-full",
  },
  // HSK 1 - Fin de semana
  {
    id: "hsk1-fds-1",
    level: "HSK 1",
    title: "Chino desde cero",
    shift: "Matutino",
    duration: "7 semanas",
    startDate: "11 de abril de 2026",
    days: "Sábado y Domingo",
    time: "8:00 am",
    spotsAvailable: 0,
    format: "weekend",
    status: "full", // Este está lleno para probar el filtro de "Ocultar agotados"
  },
  // HSK 2 - Entre semana
  {
    id: "hsk2-noc-1",
    level: "HSK 2",
    title: "Básico Acelerado",
    shift: "Nocturno",
    duration: "7 semanas",
    startDate: "7 de abril de 2026",
    days: "Martes y Jueves",
    time: "8:00 pm",
    spotsAvailable: 4,
    format: "weekday",
    status: "open",
  },
  // HSK 3 - Fin de semana
  {
    id: "hsk3-fds-1",
    level: "HSK 3",
    title: "Intermedio Conversacional",
    shift: "Matutino",
    duration: "7 semanas",
    startDate: "11 de abril de 2026",
    days: "Sábados",
    time: "10:00 am",
    spotsAvailable: 1,
    format: "weekend",
    status: "almost-full",
  },
];

export default function ScheduleSection() {
// Agrega este nuevo estado debajo de los otros tres
const [activeLevel, setActiveLevel] = useState("HSK 1"); 
const [activeFormat, setActiveFormat] = useState("all"); 
const [activeShift, setActiveShift] = useState("Todos"); // NUEVO: Estado del Turno
const [hideFull, setHideFull] = useState(false); 

const filteredCourses = MOCK_DB_COURSES.filter((course) => {
  const matchLevel = course.level === activeLevel;
  const matchFormat = activeFormat === "all" ? true : course.format === activeFormat;
  // NUEVO: Lógica para comparar el turno (Matutino, Vespertino, Nocturno)
  const matchShift = activeShift === "Todos" ? true : course.shift === activeShift;
  const matchAvailability = hideFull ? course.spotsAvailable > 0 : true;

  // Ahora la tarjeta debe cumplir 4 condiciones
  return matchLevel && matchFormat && matchShift && matchAvailability;
});

// Buscamos el próximo inicio disponible (ignorando los grupos llenos)
const availableCourses = MOCK_DB_COURSES.filter(course => course.status !== 'full');
  
// Tomamos la fecha del primer curso disponible. 
// (Nota: Si tu base de datos está ordenada cronológicamente, esto es perfecto. 
// Si no, podríamos agregar un sort() más adelante).
const nextStartDate = availableCourses.length > 0 
  ? availableCourses[0].startDate 
  : "Próximamente";

return (
  <section id="programas" className="bg-rice py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-5 lg:px-8">
      
      {/* Cabecera */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold tracking-[0.15em] text-jade uppercase">
          Programas y Horarios
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Reserva tu lugar en menos de 1 minuto
        </h2>
        
        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-jade/10 bg-white px-6 py-4 shadow-sm md:flex-row md:gap-6">
          
          {/* Bloque 1: Fecha */}
          <div className="w-full text-center md:w-auto"> 
            <span className="block text-xs font-semibold text-ink-light uppercase tracking-wider">
              Próximo inicio disponible
            </span>
            <span className="font-medium text-jade">{nextStartDate}</span>
          </div>

          {/* DIVISOR MUTANTE: 
              Móvil: Margen vertical (my-3), altura de 1px (h-[1px]), ancho sutil (w-16)
              PC (md:): Sin margen (md:my-0), altura de 2 rems (md:h-8), ancho de 1px (md:w-[1px]) 
          */}
          <div className="my-3 h-[1px] w-16 bg-border-subtle md:my-0 md:h-8 md:w-[1px]" aria-hidden="true" />

          {/* Bloque 2: Duración */}
          <div className="w-full text-center md:w-auto"> 
            <span className="block text-xs font-semibold text-ink-light uppercase tracking-wider">
              Duración por módulo
            </span>
            <span className="font-medium text-ink">7 semanas (21 horas)</span>
          </div>

        </div>
        <p className="mt-4 text-sm text-ink-light">
          * Los grupos se abren con un mínimo de 4 estudiantes.
        </p>
      </div>

      {/* LA BARRA DE FILTROS PREMIUM (Diseño Responsivo Mejorado) */}
      {/* LA BARRA DE FILTROS PREMIUM (Estructura de 2 Filas) */}
      <div className="mt-12 mb-8 flex flex-col gap-6 rounded-2xl border border-border-subtle/50 bg-white p-6 shadow-sm">
          
          {/* --- FILA 1: Filtros Principales (Centrados en Tablet/PC) --- */}
          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-center lg:gap-8">
            
            {/* 1. Filtro Principal: Nivel HSK */}
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-light">
                <BookOpen className="h-4 w-4 text-jade" /> Nivel:
              </span>
              <div className="flex flex-wrap gap-2">
                {["HSK 1", "HSK 2", "HSK 3"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setActiveLevel(level)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all active:scale-95 ${
                      activeLevel === level
                        ? "bg-jade text-white shadow-sm" 
                        : "border border-border-subtle/50 bg-rice/30 text-ink-light hover:border-jade/30 hover:text-jade" 
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Filtro de Días: Control Segmentado */}
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-light">
                <CalendarDays className="h-4 w-4 text-jade" /> Días:
              </span>
              <div className="inline-flex w-full rounded-lg border border-border-subtle/50 bg-rice/50 p-1 sm:w-auto">
                {["all", "weekday", "weekend"].map((format) => (
                  <button
                    key={format}
                    onClick={() => setActiveFormat(format)}
                    className={`flex-1 rounded-md px-4 py-1.5 text-sm font-medium transition-all active:scale-95 sm:flex-none ${
                      activeFormat === format
                        ? "bg-white text-ink shadow-sm"
                        : "text-ink-light hover:text-ink"
                    }`}
                  >
                    {format === "all" ? "Todos" : format === "weekday" ? "Entre semana" : "Fines de semana"}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Filtro de Turno (Dropdown) */}
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-light">
                <Clock className="h-4 w-4 text-jade" /> Turno:
              </span>
              <select
                value={activeShift}
                onChange={(e) => setActiveShift(e.target.value)}
                className="w-full cursor-pointer rounded-lg border border-border-subtle/50 bg-white px-3 py-2 text-sm font-medium text-ink-light shadow-sm outline-none transition-all hover:border-jade/30 focus:border-jade focus:ring-1 focus:ring-jade active:scale-95 md:w-auto md:py-1.5"
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
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out shadow-sm ${
                hideFull ? "translate-x-5" : "translate-x-0"
              }`} />
            </button>
          </div>

        </div>

      {/* MENSAJE DE ESTADO */}
      {filteredCourses.length === 0 && (
        <div className="mt-16 text-center text-ink-light">
          <p className="text-lg">No hay grupos disponibles con estos filtros.</p>
          <p className="mt-2 text-sm">Prueba seleccionando otro nivel u otros días.</p>
        </div>
      )}

      {/* Cuadrícula de Cursos FILTRADOS */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <article
            key={course.id}
            className={`group flex flex-col justify-between overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-md active:scale-[0.98] ${
              course.status === 'full' ? 'border-border-subtle/30 opacity-75 grayscale-[0.5]' : 'border-border-subtle/50 md:hover:border-jade/30'
            }`}
          >
            <div>
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-bold ${
                    course.status === 'full' ? 'bg-border-subtle/20 text-ink-muted' : 'bg-jade/10 text-jade'
                  }`}>
                    {course.level}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-bold text-ink">
                    {course.title}
                  </h3>
                </div>
                <span className="rounded-full bg-border-subtle/30 px-3 py-1 text-xs font-medium text-ink-light">
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
                  <Users className={`h-4 w-4 ${
                    course.status === 'full' ? 'text-ink-muted' :
                    course.status === 'almost-full' ? 'text-imperial' : 'text-jade'
                  }`} />
                  <span className={`text-sm font-medium ${
                    course.status === 'full' ? 'text-ink-muted' :
                    course.status === 'almost-full' ? 'text-imperial' : 'text-ink-light'
                  }`}>
                    {course.status === 'full' ? 'Grupo lleno' : `${course.spotsAvailable} cupos disponibles`}
                  </span>
                </div>
              </div>

              <button 
                disabled={course.status === 'full'}
                className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white transition-all duration-300 ${
                  course.status === 'full' 
                    ? 'bg-border-subtle cursor-not-allowed' 
                    : 'bg-ink md:hover:bg-jade active:scale-95'
                }`}
              >
                {course.status === 'full' ? 'Agotado' : 'Elegir horario'}
                {course.status !== 'full' && (
                  <ArrowRight className="h-4 w-4 transition-transform md:group-hover/btn:translate-x-1" />
                )}
              </button>
            </div>
          </article>
        ))}
      </div>

    </div>
  </section>
);
}