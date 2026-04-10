// src/components/ui/PreRegistrationModal.tsx
import { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, Loader2, ShieldCheck, Users } from "lucide-react";
import { Course } from "@/types";

interface PreRegistrationModalProps {
  isOpen: boolean;
  status: 'idle' | 'loading' | 'success' | 'error';
  course: Course | null;
  onClose: () => void;
  onSubmit: (name: string, phone: string) => void;
}

export default function PreRegistrationModal({ isOpen, status, course, onClose, onSubmit }: PreRegistrationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false); // Estado para el checkbox legal

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setPhone("");
      setAgreed(false);
    }
  }, [isOpen]);

  if (!isOpen || !course) return null;

  // Lógica de Marketing: Título Dinámico
  const getDynamicTitle = () => {
    if (course.status === 'almost-full') return "Asegura tu inscripción";
    // Caso por defecto
    return "Inicia tu inscripción";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim() && agreed) {
      onSubmit(name, phone);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          disabled={status === 'loading'}
          className="absolute right-4 top-4 z-10 rounded-full bg-border-subtle/20 p-2 text-ink-light transition-colors hover:bg-border-subtle/50 hover:text-ink disabled:opacity-50"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center py-6 text-center animate-in zoom-in duration-500">
              <CheckCircle2 className="mb-4 h-16 w-16 text-jade" />
              <h2 className="font-serif text-2xl font-bold text-ink">¡Registro Exitoso!</h2>
              <p className="mt-3 text-ink-light leading-relaxed">
                Tu información fue almacenada correctamente. Pronto te contactaremos por <strong>WhatsApp</strong> para tu nivel {course.level}.
              </p>
              <button onClick={onClose} className="mt-8 w-full rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white hover:bg-ink-light">Entendido</button>
            </div>
          ) : (
            <>
              {/* Título Dinámico */}
              <h2 className={`font-serif text-2xl font-bold transition-colors ${
                  course.spotsAvailable === 1 ? 'text-imperial' : 'text-ink'
                }`}>
                  {getDynamicTitle()}
                </h2>
              <p className="mt-2 text-sm text-ink-light">Déjanos tus datos y te contactaremos por WhatsApp para completar tu Inscripción.</p>

              {/* Tarjeta de Resumen (Modo Urgencia) */}
              {/* Tarjeta de Resumen Sofisticada */}
              <div className={`mt-6 overflow-hidden rounded-2xl border transition-all duration-300 ${
                course.spotsAvailable === 1 
                  ? 'border-imperial/50 bg-gradient-to-b from-white to-imperial/[0.03] shadow-inner' // Estilo elegante de urgencia
                  : 'border-border-subtle/50 bg-rice shadow-sm' // Estilo normal
              }`}>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block rounded-md border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100 px-2.5 py-1 text-xs font-bold tracking-wide text-amber-700 shadow-sm">
                        {course.level}
                      </span>
                      <h3 className="mt-2 font-serif text-lg font-bold text-ink leading-tight">
                        {course.title}
                      </h3>
                    </div>
                    
                    {/* Etiqueta estática de Turno */}
                    <span className="flex shrink-0 items-center rounded-full border border-border-subtle/60 bg-white/80 px-3 py-1 text-[10px] font-medium text-ink-light shadow-sm">
                      Matutino {/* O {course.shift} si tienes el dato */}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3 border-t border-border-subtle/30 pt-4 text-sm text-ink-light">
                    <li className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 shrink-0 text-jade" />
                      <span>Inicia: <strong className="font-medium text-ink">{course.startDate}</strong></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-jade" />
                      <span>{course.days} • <strong className="font-medium text-ink">{course.time}</strong></span>
                    </li>
                    
                    {/* Integración elegante del estado de cupos en la lista */}
                    {course.spotsAvailable === 1 && (
                      <li className="flex items-center gap-3 rounded-md p-2 text-imperial">
                        <Users className="h-4 w-4 shrink-0" />
                        <span className="font-bold text-xs tracking-wide">¡ÚLTIMO LUGAR DISPONIBLE!</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Inputs de Nombre y Teléfono (igual que los tenías) */}
                <div>
                  <label className="mb-1 block text-sm font-semibold text-ink">Nombre completo</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-border-subtle/50 px-4 py-3 text-sm focus:border-jade focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-ink">Número de WhatsApp</label>
                  <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-border-subtle/50 px-4 py-3 text-sm focus:border-jade focus:outline-none" />
                </div>

                {/* Checkbox Legal de Marketing */}
                {/* Reemplaza el div del checkbox actual por este */}

                {/* Bloque de Aceptación (Diseño Integrado) */}
                <div className="flex items-start gap-3.5 rounded-xl border border-border-subtle/40 bg-rice p-4">
                  <input 
                    type="checkbox" 
                    id="legal" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    // Estas clases aseguran que al marcarse sea Jade y el borde normal sea sutil
                    className="mt-1 h-4.5 w-4.5 rounded border-border-subtle/80 text-jade shadow-sm focus:ring-jade focus:ring-offset-1 focus:ring-offset-rice transition-colors cursor-pointer"
                  />
                  <label htmlFor="legal" className="text-xs leading-relaxed text-ink-light cursor-pointer select-none">
                    Al confirmar, aceptas recibir información detallada sobre este curso y el proceso de inscripción vía <strong className="font-semibold text-jade">WhatsApp</strong>.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading' || !agreed}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold text-white transition-all active:scale-95 disabled:grayscale disabled:opacity-50 ${
                    course.spotsAvailable === 1 ? 'bg-imperial' : 'bg-jade'
                  }`}
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : "Confirmar Registro"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}