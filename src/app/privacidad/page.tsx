import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadPage() {
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
            Política de Privacidad
          </h1>
          <p className="mt-2 text-sm text-ink-light">
            ChunFeng BeiBei – Centro de Estudios Culturales
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-jade">
            Última actualización: Abril 2026
          </p>
        </header>

        {/* Contenido (Modo Lectura) */}
        <div className="space-y-8 text-base leading-relaxed text-ink-light">
          
          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Responsable de los datos personales</h2>
            <p>
              En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), Centro de Estudios Culturales ChunFeng BeiBei, con domicilio en Guadalupe, Zacatecas, México, es responsable del tratamiento de sus datos personales.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Datos personales que recopilamos</h2>
            <p className="mb-2">Los datos personales que recopilaremos incluyen:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Nombre completo.</li>
              <li>Correo electrónico.</li>
              <li>Número de teléfono.</li>
              <li>Otros datos que usted proporcione voluntariamente a través de formularios.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Finalidad del tratamiento de datos</h2>
            <p className="mb-2">Los datos personales que recopilamos serán utilizados para las siguientes finalidades principales:</p>
            <ol className="mb-4 ml-5 list-decimal space-y-1">
              <li>Identificación y contacto.</li>
              <li>Seguimiento de solicitudes, consultas o servicios.</li>
              <li>Envío de información, promociones y materiales publicitarios.</li>
              <li>Mejorar nuestros productos y servicios.</li>
            </ol>
            
            <p className="mb-2 font-medium text-ink">Finalidades secundarias (opcionales):</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Realizar encuestas o estudios de mercado.</li>
              <li>Personalizar su experiencia con nuestros servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Uso de tecnologías de rastreo (Cookies y Píxeles)</h2>
            <p>
              Nuestro sitio web y campañas pueden utilizar cookies y píxeles para mejorar la experiencia del usuario, medir campañas publicitarias y analizar el comportamiento en línea. Usted puede desactivar el uso de estas tecnologías desde la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Transferencia de datos</h2>
            <p className="mb-2">
              Sus datos personales no serán compartidos con terceros sin su consentimiento, excepto en los siguientes casos:
            </p>
            <ol className="ml-5 list-decimal space-y-1">
              <li>Cumplimiento de obligaciones legales.</li>
              <li>Proveedores de servicios necesarios para el funcionamiento de nuestro negocio (por ejemplo, plataformas de marketing como Facebook Ads).</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Ejercicio de derechos ARCO</h2>
            <p className="mb-2">Usted tiene derecho a:</p>
            <ol className="mb-4 ml-5 list-decimal space-y-1">
              <li><strong>Acceder</strong> a sus datos personales.</li>
              <li><strong>Rectificar</strong> sus datos si son inexactos o incompletos.</li>
              <li><strong>Cancelar</strong> sus datos cuando considere que no son necesarios.</li>
              <li><strong>Oponerse</strong> al tratamiento de sus datos personales.</li>
            </ol>
            <p>
              Para ejercer estos derechos, puede enviar una solicitud a nuestro correo electrónico: <a href="mailto:chinoconbeibei@gmail.com" className="font-medium text-jade hover:underline">chinoconbeibei@gmail.com</a> con el asunto <span className="font-medium text-ink">“Ejercicio de Derechos ARCO”</span>, adjuntando una identificación oficial.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Medios para revocar el consentimiento</h2>
            <p>
              Usted puede revocar en cualquier momento el consentimiento otorgado para el tratamiento de sus datos personales enviando un correo electrónico a <a href="mailto:chinoconbeibei@gmail.com" className="font-medium text-jade hover:underline">chinoconbeibei@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Seguridad de los datos</h2>
            <p>
              Implementamos medidas técnicas, físicas y administrativas para proteger sus datos personales contra pérdida, mal uso o acceso no autorizado.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Cambios a esta Política de Privacidad</h2>
            <p>
              Nos reservamos el derecho de realizar modificaciones a esta política en cualquier momento. La versión actualizada estará disponible en nuestro sitio web o será proporcionada mediante correo electrónico.
            </p>
          </section>

          <section className="rounded-xl bg-imperial/5 p-6">
            <h2 className="mb-3 font-serif text-xl font-bold text-ink">Contacto</h2>
            <p className="mb-2">Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos en:</p>
            <ul className="space-y-2">
              <li><span className="font-medium text-ink">Nombre de la empresa:</span> Centro de Estudios Culturales ChunFeng BeiBei</li>
              <li><span className="font-medium text-ink">Correo electrónico:</span> <a href="mailto:chinoconbeibei@gmail.com" className="text-jade hover:underline">chinoconbeibei@gmail.com</a></li>
              <li><span className="font-medium text-ink">Teléfono:</span> <a href="tel:+5214921790077" className="text-jade hover:underline">+52 1 492179 0077</a></li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}