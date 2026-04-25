import { getCertificateByFolio } from "@/lib/services/certificates";
import { ShieldCheck, User, Calendar, BookOpen, BadgeCheck, XCircle, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Importamos Link para el botón de acción
import { getWhatsAppUrl } from "@/lib/utils";

export default async function CertificateValidationPage({ params }: { params: Promise<{ folio: string }> }) {
  const { folio } = await params;
  const cert = await getCertificateByFolio(folio);
  
  // Generamos la fecha actual para dar validez "en tiempo real" a la consulta
  const fechaConsulta = new Date().toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'
  });

  if (!cert) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
            <XCircle className="h-10 w-10" />
          </div>
          <h1 className="text-xl font-bold text-ink">Folio no reconocido</h1>
          <p className="mt-2 text-sm text-gray-500">
            El código <span className="font-mono font-bold text-red-600">{folio}</span> no coincide con nuestros registros oficiales de emisión.
          </p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-jade hover:underline">
            Volver al inicio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] bg-rice/30 px-4 py-12">
      <div className="mx-auto max-w-xl">
        
        {/* Card Principal */}
        <div className="overflow-hidden rounded-[2.5rem] border border-jade/10 bg-white shadow-2xl shadow-jade/5">
          
          {/* Header de la Constancia */}
          <div className="bg-jade/5 px-8 py-10 text-center">
            <Image 
              src="/logo.png" 
              alt="Chunfeng Beibei Logo" 
              width={140} 
              height={50} 
              className="mx-auto mb-6"
            />
            <div className="inline-flex items-center gap-2 rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-jade/20">
              <BadgeCheck className="h-4 w-4" />
              Documento Verificado
            </div>
            <p className="mt-4 text-[10px] text-gray-400">
              Consulta realizada el {fechaConsulta}
            </p>
          </div>

          <div className="p-8 md:p-12">
            {/* Título y Folio */}
            <div className="mb-10 border-b border-gray-100 pb-8 text-center">
              <h2 className="text-2xl font-bold text-ink">Registro Académico Oficial</h2>
              <p className="text-sm font-medium text-gray-400 mt-1">Folio: <span className="font-mono text-jade">{cert.folio}</span></p>
            </div>

            {/* Grid de Datos */}
            <div className="space-y-8">
              {/* Alumno */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rice text-jade">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Estudiante</p>
                  <p className="text-xl font-bold text-ink">{cert.nombreCompleto}</p>
                </div>
              </div>

              {/* Nivel y Módulo (AHORA SEPARADOS) */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rice text-jade">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Nivel</p>
                    <p className="text-lg font-bold text-ink">{cert.nivel}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rice text-jade">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Módulo</p>
                    <p className="text-lg font-bold text-ink">{cert.modulo}</p>
                  </div>
                </div>
              </div>

              {/* Fechas */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rice text-jade">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Periodo</p>
                    <p className="text-sm font-bold text-ink">{cert.fechaInicio} al {cert.fechaFin}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rice text-jade">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Emisión</p>
                    <p className="text-sm font-bold text-ink">{cert.fechaEmision}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota de Valor */}
            <div className="mt-12 rounded-2xl border border-dashed border-jade/20 bg-jade/[0.02] p-6">
              <p className="text-center text-xs leading-relaxed text-gray-500">
                Esta página confirma que el portador ha acreditado satisfactoriamente los criterios de evaluación de 
                <span className="font-bold text-jade"> Chunfeng Beibei</span>. 
                Este registro es único e inalterable.
              </p>
            </div>
          </div>
        </div>

        {/* Botón de Acción y Mensaje de apoyo */}
        <div className="mt-8 flex flex-col items-center gap-6 text-center">
        
        {/* Botón Principal: Para tráfico nuevo */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 rounded-full border border-jade/30 bg-white px-8 py-3 text-sm font-bold text-ink transition-all hover:border-jade hover:bg-jade/5 shadow-sm"
        >
          Visitar sitio web oficial
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* Enlace de Soporte: Para validación (Tu sugerencia mejorada) */}
        <p className="max-w-xs text-xs leading-relaxed text-gray-500">
          ¿Tienes dudas sobre esta validación? Siéntete libre de{" "}
          <a 
            href={getWhatsAppUrl(`Hola, tengo una duda sobre la validez del folio oficial: ${cert.folio}`)}
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-jade underline decoration-jade/30 underline-offset-4 transition-colors hover:decoration-jade"
          >
            contactarnos por WhatsApp
          </a>.
        </p>

      </div>

      </div>
    </main>
  );
}