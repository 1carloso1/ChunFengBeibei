import { Clock, Calendar, Users, ArrowRight } from "lucide-react";

// 1. ESTRUCTURA LISTA PARA BASE DE DATOS (Mock Data)
// Así es exactamente como te llegará el JSON de tu backend en el futuro.
const MOCK_DB_COURSES = [
  {
    id: "hsk1-matutino-1",
    level: "HSK 1",
    title: "Chino desde cero",
    shift: "Matutino",
    duration: "7 semanas",
    startDate: "6 de abril de 2026",
    days: "Martes, Jueves y Sáb",
    time: "6:00 am",
    spotsAvailable: 5,
    minStudents: 4,
    status: "open", // open, almost-full, full
  },
  {
    id: "hsk1-vespertino-1",
    level: "HSK 1",
    title: "Chino desde cero",
    shift: "Vespertino",
    duration: "7 semanas",
    startDate: "6 de abril de 2026",
    days: "Lun, Mié y Vie",
    time: "5:00 pm",
    spotsAvailable: 2, // Simulamos pocos lugares
    minStudents: 4,
    status: "almost-full",
  },
  {
    id: "hsk1-nocturno-1",
    level: "HSK 1",
    title: "Chino desde cero",
    shift: "Nocturno",
    duration: "7 semanas",
    startDate: "6 de abril de 2026",
    days: "Lun, Jue y Vie",
    time: "9:00 pm",
    spotsAvailable: 6,
    minStudents: 4,
    status: "open",
  },
  // Aquí se renderizarían los demás que lleguen de tu DB...
];

export default function ScheduleSection() {
  return (
    // CAMBIO 1: Fondo bg-rice para continuar el ritmo visual
    <section id="programas" className="bg-rice py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        {/* Cabecera de la sección (Incluyendo datos originales) */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.15em] text-jade uppercase">
            Programas y Horarios
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Reserva tu lugar en menos de 1 minuto
          </h2>
          
          {/* Caja de información general del periodo */}
          <div className="mt-8 inline-flex flex-col items-center justify-center rounded-2xl border border-jade/10 bg-white px-6 py-4 shadow-sm sm:flex-row sm:gap-6">
            <div className="text-center sm:text-left">
              <span className="block text-xs font-semibold text-ink-light uppercase tracking-wider">Semana de inicio general</span>
              <span className="font-medium text-jade">Lunes 6 de abril de 2026</span>
            </div>
            <div className="hidden h-8 w-[1px] bg-border-subtle sm:block" />
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <span className="block text-xs font-semibold text-ink-light uppercase tracking-wider">Duración por módulo</span>
              <span className="font-medium text-ink">7 semanas (21 horas)</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-light">
            * Los grupos se abren con un mínimo de 4 estudiantes.
          </p>
        </div>

        {/* Cuadrícula de Cursos (Mapeo de la Base de Datos) */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_DB_COURSES.map((course) => (
            <article
              key={course.id}
              // Tarjeta Blanca sobre fondo Arroz. Efectos táctiles móviles incluidos.
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border-subtle/50 bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:border-jade/30 md:hover:shadow-md active:scale-[0.98]"
            >
              <div>
                {/* Encabezado de la tarjeta: Nivel y Turno */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-md bg-jade/10 px-2.5 py-1 text-xs font-bold text-jade">
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

                {/* Detalles Operativos */}
                <ul className="mt-6 space-y-3 border-t border-border-subtle/30 pt-4 text-sm text-ink-light">
                  <li className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-jade shrink-0" />
                    <span>Inicia: <strong className="font-medium text-ink">{course.startDate}</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-jade shrink-0" />
                    <span>{course.days} • <strong className="font-medium text-ink">{course.time}</strong></span>
                  </li>
                </ul>
              </div>

              {/* Pie de la tarjeta: Cupos y CTA */}
              <div className="mt-8 border-t border-border-subtle/30 pt-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className={`h-4 w-4 ${course.status === 'almost-full' ? 'text-imperial' : 'text-jade'}`} />
                    <span className={`text-sm font-medium ${course.status === 'almost-full' ? 'text-imperial' : 'text-ink-light'}`}>
                      {course.spotsAvailable} cupos disponibles
                    </span>
                  </div>
                </div>

                <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-medium text-white transition-all duration-300 md:hover:bg-jade active:scale-95">
                  Elegir horario
                  <ArrowRight className="h-4 w-4 transition-transform md:group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}