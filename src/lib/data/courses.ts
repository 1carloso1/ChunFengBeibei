import { RawCourse, Course } from "@/types";

// 1. La base de datos "cruda" que en el futuro vendrá de Wix
export const MOCK_DB_COURSES: RawCourse[] = [
  {
    id: "hsk1-mat-1", 
    scheduleCode: "2026-Abr-H1", // <-- Conecta con la fila 1 de tu Excel
    level: "HSK 1", 
    title: "Chino desde cero", 
    shift: "Matutino", 
    duration: "7 semanas", 
    startDate: "27 de abril de 2026", 
    days: "Lun, Mié y Vie", 
    time: "6:00 am", 
    spotsAvailable: 0 // Simula un grupo "Cerrado" o lleno
  },
  {
    id: "hsk1-mat-2", 
    scheduleCode: "2026-Abr-H3", // <-- Conecta con la fila 3 de tu Excel
    level: "HSK 1", 
    title: "Chino desde cero", 
    shift: "Matutino", 
    duration: "7 semanas", 
    startDate: "27 de abril de 2026", 
    days: "Lun, Mié y Vie", 
    time: "7:00 am", 
    spotsAvailable: 1 // Simula urgencia ("¡Última vacante!")
  },
  {
    id: "hsk1-fds-1", 
    scheduleCode: "2026-Abr-H16", // <-- Conecta con la fila 16 (Fin de semana)
    level: "HSK 1", 
    title: "Chino desde cero", 
    shift: "Fin de semana", 
    duration: "7 semanas", 
    startDate: "2 de mayo de 2026", 
    days: "Sáb y Dom", 
    time: "8:00 am", 
    spotsAvailable: 6 // Simula un grupo recién abierto
  }
];

// 2. La función mágica que autocalcula el formato y el estatus basado en las reglas que propusiste 
export const getEnrichedCourses = (): Course[] => {
    return MOCK_DB_COURSES.map((course) => {
      
      // Regla 1: Calcular Estatus 
      let calculatedStatus: Course["status"] = "open";
      if (course.spotsAvailable === 0) calculatedStatus = "full";
      else if (course.spotsAvailable <= 2) calculatedStatus = "almost-full";
  
      // Regla 2: Calcular Formato 
      const daysLower = course.days.toLowerCase();
      const isWeekendOnly = daysLower.includes("sábado") && !daysLower.includes("lunes") && !daysLower.includes("martes") && !daysLower.includes("mié") && !daysLower.includes("jueves") && !daysLower.includes("viernes");
      const calculatedFormat: Course["format"] = isWeekendOnly ? "weekend" : "weekday";
  
      return {
        ...course,
        status: calculatedStatus,
        format: calculatedFormat
      };
    });
  };