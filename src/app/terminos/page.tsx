import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-rice px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-xl shadow-imperial/5 sm:p-12">
        
        {/* Botón de regreso */}
        <Link 
          href="/" 
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-light transition-colors hover:text-imperial active:scale-95"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Volver al inicio
        </Link>

        {/* Encabezado */}
        <header className="mb-10 border-b border-imperial/10 pb-8">
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
            Términos y Condiciones
          </h1>
          <p className="mt-2 text-sm text-ink-light">
            ChunFengBeiBei – Centro de Estudios Culturales
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-jade">
            Última actualización: Abril 2026
          </p>
        </header>

        {/* Contenido (Modo Lectura) */}
        <div className="space-y-8 text-base leading-relaxed text-ink-light">
          
          <section>
            <p className="mb-4 font-medium text-ink">
              Al inscribirse en cualquiera de nuestros cursos, talleres, clases o eventos, el participante acepta de manera expresa los presentes Términos y Condiciones.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">1. Naturaleza del servicio</h2>
            <p>
              ChunFengBeiBei ofrece servicios educativos en línea, principalmente cursos de idioma chino mandarín y actividades culturales relacionadas, impartidos en modalidad en vivo mediante plataformas digitales. Los servicios ofrecidos no constituyen un bien físico, sino un servicio educativo digital de acceso limitado en tiempo y cupo.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">2. Inscripción y reserva de lugar</h2>
            <p className="mb-3">
              La inscripción se considera válida únicamente cuando el pago ha sido confirmado. El pago reserva un lugar específico en un grupo, nivel y horario determinados. Los grupos tienen cupo limitado; una vez cubierto, no se garantiza disponibilidad en otros horarios.
            </p>
            <h3 className="mb-2 mt-4 font-semibold text-ink">2.1 Apertura de grupos</h3>
            <p className="mb-2">
              Los grupos se abrirán únicamente cuando se alcance el número mínimo de alumnos inscritos definido por ChunFengBeiBei. En caso de que un grupo no alcance el mínimo requerido y no pueda abrirse en la fecha prevista, el participante podrá elegir entre:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Integrarse a otro grupo disponible del mismo nivel (sujeto a cupo).</li>
              <li>Reprogramar su inscripción para el siguiente módulo.</li>
              <li>Solicitar el reembolso total del pago realizado.</li>
            </ul>
            <p className="mt-2 text-sm italic">La decisión final será del participante.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">3. Pagos</h2>
            <p>
              Todos los precios se expresan en pesos mexicanos (MXN), salvo que se indique lo contrario. Los pagos se realizan a través de las plataformas habilitadas (por ejemplo, MercadoPago u otras). ChunFengBeiBei no almacena datos bancarios de los participantes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">4. Política de cancelación y reembolsos</h2>
            <p className="mb-3">
              Al realizar el pago, se bloquea un cupo exclusivo para ti y se inicia la planificación académica. Por ello, no se emiten reembolsos automáticos ni antes ni después de iniciado el curso.
            </p>
            <p className="mb-2">
              En casos excepcionales y debidamente justificados, ChunFengBeiBei podrá evaluar alternativas como:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Cambio de grupo (sujeto a disponibilidad).</li>
              <li>Reprogramación para un módulo posterior.</li>
            </ul>
            <p className="mt-2 text-sm italic">Estas alternativas no constituyen una obligación.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">5. Asistencia y responsabilidad del alumno</h2>
            <p className="mb-2">Es responsabilidad del participante contar con:</p>
            <ul className="mb-3 ml-5 list-disc space-y-1">
              <li>Conexión estable a internet.</li>
              <li>Equipo adecuado (computadora, tablet o teléfono).</li>
            </ul>
            <p>
              ChunFengBeiBei no se hace responsable por fallas técnicas del participante. La falta de asistencia a clases no da derecho a reembolso ni a reposición automática.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">6. Cambios de horario o grupo</h2>
            <p className="mb-2">Las solicitudes de cambio deben realizarse por escrito. Los cambios están sujetos a:</p>
            <ul className="mb-3 ml-5 list-disc space-y-1">
              <li>Disponibilidad de cupo.</li>
              <li>Nivel académico compatible.</li>
            </ul>
            <p>No se garantiza que un cambio sea posible.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">7. Propiedad intelectual</h2>
            <p>
              Todo el material didáctico, grabaciones, presentaciones y contenidos son propiedad de ChunFengBeiBei. Está prohibida su reproducción, distribución o uso comercial sin autorización expresa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">8. Grabaciones</h2>
            <p>
              Algunas sesiones pueden ser grabadas con fines académicos internos. El acceso a grabaciones, cuando exista, no sustituye la asistencia en vivo. El participante acepta que su imagen o voz pueda aparecer de forma incidental en dichas grabaciones.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">9. Conducta y convivencia</h2>
            <p className="mb-2">
              ChunFengBeiBei se reserva el derecho de suspender o cancelar la participación de cualquier alumno que incurra en:
            </p>
            <ul className="mb-3 ml-5 list-disc space-y-1">
              <li>Conductas ofensivas o irrespetuosas.</li>
              <li>Uso indebido de las plataformas.</li>
              <li>Incumplimiento reiterado de normas básicas de convivencia.</li>
            </ul>
            <p className="font-medium text-imperial">En estos casos no habrá reembolso.</p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">10. Modificaciones</h2>
            <p>
              ChunFengBeiBei podrá actualizar estos Términos y Condiciones cuando sea necesario. La versión vigente será siempre la publicada en los canales oficiales.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">11. Aceptación</h2>
            <p>
              Al realizar el pago y/o participar en cualquier actividad, el alumno declara que ha leído, ha comprendido y acepta plenamente estos Términos y Condiciones.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}