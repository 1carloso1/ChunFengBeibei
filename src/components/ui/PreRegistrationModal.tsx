// src/components/ui/PreRegistrationModal.tsx
import { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
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
    if (course.spotsAvailable === 1) return "¡Aparta el último lugar!";
    if (course.status === 'almost-full') return "¡Casi lleno! Asegura tu cupo";
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
              <h2 className={`font-serif text-2xl font-bold transition-colors ${course.spotsAvailable === 1 ? 'text-imperial' : 'text-ink'}`}>
                {getDynamicTitle()}
              </h2>
              <p className="mt-2 text-sm text-ink-light">Déjanos tus datos y te contactaremos por WhatsApp para finalizar el proceso.</p>

              {/* Tarjeta de Resumen (Modo Urgencia) */}
              <div className={`mt-6 overflow-hidden rounded-2xl border bg-rice p-5 transition-all duration-500 ${
                course.spotsAvailable === 1 
                  ? 'border-imperial shadow-[0_0_15px_rgba(237,66,69,0.2)] animate-[pulse_3s_infinite]' 
                  : 'border-border-subtle/50 shadow-sm'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-md border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100 px-2.5 py-1 text-xs font-bold tracking-wide text-amber-700 shadow-sm">
                      {course.level}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold text-ink">{course.title}</h3>
                  </div>
                  {course.spotsAvailable === 1 && (
                    <span className="animate-bounce rounded-full bg-imperial px-3 py-1 text-[10px] font-bold text-white">
                      ¡ÚLTIMO CUPO!
                    </span>
                  )}
                </div>

                <ul className="mt-4 space-y-2 border-t border-border-subtle/30 pt-4 text-sm text-ink-light">
                  <li className="flex items-center gap-3"><Calendar className="h-4 w-4 text-jade" /> Inicia: <strong className="text-ink">{course.startDate}</strong></li>
                  <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-jade" /> {course.days} • <strong className="text-ink">{course.time}</strong></li>
                </ul>
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
                <div className="flex items-start gap-3 rounded-lg bg-border-subtle/10 p-3">
                  <input 
                    type="checkbox" 
                    id="legal" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border-subtle text-jade focus:ring-jade"
                  />
                  <label htmlFor="legal" className="text-xs leading-relaxed text-ink-light">
                    Al confirmar, aceptas recibir información detallada sobre este curso y el proceso de inscripción vía <strong>WhatsApp</strong>.
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