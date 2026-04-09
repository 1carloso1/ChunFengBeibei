// src/hooks/usePreRegistration.ts
import { useState } from "react";
import { leadService } from "@/services/leadService";
// Si quieres que sea exacta, puedes importarla de tus tipos
import { Course } from "@/types";

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export function usePreRegistration() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setStatus('idle'); // Reseteamos el estado cada vez que se abre
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedCourse(null);
      setStatus('idle');
    }, 300); 
  };

  const submitRegistration = async (name: string, phone: string) => {
    if (!selectedCourse) return;

    setStatus('loading');

    // Mapeamos los datos al formato que espera nuestro servicio
    const success = await leadService.saveRegistration({
      name,
      phone,
      courseTitle: selectedCourse.title,
      level: selectedCourse.level,
      schedule: `${selectedCourse.days} (${selectedCourse.time})`,
      startDate: selectedCourse.startDate
    });

    if (success) {
      setStatus('success');
      // Opcional: Cerrar el modal automáticamente después de unos segundos
      // setTimeout(closeModal, 4000);
    } else {
      setStatus('error');
    }
  };

  return {
    isOpen,
    status,
    selectedCourse,
    openModal,
    closeModal,
    submitRegistration
  };
}