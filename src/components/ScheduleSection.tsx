import { Clock } from "lucide-react";

const SCHEDULE = [
  {
    level: "Principiante (HSK 1)",
    schedule: "Lunes y Miércoles",
    time: "18:00 – 19:30 (hora CDMX)",
    spots: "4 plazas disponibles",
    color: "imperial" as const,
  },
  {
    level: "Básico (HSK 2)",
    schedule: "Martes y Jueves",
    time: "19:00 – 20:30 (hora CDMX)",
    spots: "3 plazas disponibles",
    color: "jade" as const,
  },
  {
    level: "Intermedio (HSK 3)",
    schedule: "Miércoles y Viernes",
    time: "17:00 – 18:30 (hora CDMX)",
    spots: "5 plazas disponibles",
    color: "gold" as const,
  },
  {
    level: "Conversación libre",
    schedule: "Sábados",
    time: "10:00 – 11:30 (hora CDMX)",
    spots: "6 plazas disponibles",
    color: "imperial" as const,
  },
];

const colorMap = {
  imperial: {
    bg: "bg-imperial/8",
    text: "text-imperial",
    border: "border-imperial/15",
    dot: "bg-imperial",
  },
  jade: {
    bg: "bg-jade/8",
    text: "text-jade",
    border: "border-jade/15",
    dot: "bg-jade",
  },
  gold: {
    bg: "bg-gold-dark/8",
    text: "text-gold-dark",
    border: "border-gold-dark/15",
    dot: "bg-gold-dark",
  },
};

export default function ScheduleSection() {
  return (
    <section id="horarios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-gold-dark uppercase">
            Horarios
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Encuentra tu horario ideal
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-light">
            Ofrecemos diferentes franjas horarias para que puedas estudiar
            desde cualquier país de habla hispana. Los horarios se muestran
            en hora de Ciudad de México (CST).
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SCHEDULE.map((item) => {
            const colors = colorMap[item.color];
            return (
              <article
                key={item.level}
                className={`rounded-xl border ${colors.border} bg-rice/50 p-6 transition-all hover:shadow-sm`}
              >
                <div className={`inline-flex items-center gap-2 rounded-full ${colors.bg} px-3 py-1 text-xs font-semibold ${colors.text}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} aria-hidden="true" />
                  {item.spots}
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                  {item.level}
                </h3>
                <div className="mt-3 space-y-2 text-sm text-ink-light">
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                    {item.schedule}
                  </p>
                  <p className="pl-6">{item.time}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink-muted">
          Los horarios pueden ajustarse según la demanda. Escríbenos si
          necesitas un horario diferente y haremos lo posible por acomodarte.
        </p>
      </div>
    </section>
  );
}
