import { RawCourse, Course } from "@/types";

// 1. La base de datos "cruda" que en el futuro vendrá de Wix
const MOCK_DB_COURSES: RawCourse[] = [
    {
      id: "hsk1-mat-1", level: "HSK 1", title: "Chino desde cero", shift: "Matutino", duration: "7 semanas", 
      startDate: "6 de abril de 2026", days: "Martes, Jueves y Sáb", time: "6:00 am", spotsAvailable: 5 // [cite: 9]
    },
    {
      id: "hsk1-vesp-1", level: "HSK 1", title: "Chino desde cero", shift: "Vespertino", duration: "7 semanas", 
      startDate: "6 de abril de 2026", days: "Lun, Mié y Vie", time: "5:00 pm", spotsAvailable: 2 // [cite: 9, 10]
    },
    {
      id: "hsk1-fds-1", level: "HSK 1", title: "Chino desde cero", shift: "Matutino", duration: "7 semanas", 
      startDate: "11 de abril de 2026", days: "Sábado y Domingo", time: "8:00 am", spotsAvailable: 0 // [cite: 10, 11]
    },
    {
      id: "hsk2-noc-1", level: "HSK 2", title: "Básico Acelerado", shift: "Nocturno", duration: "7 semanas", 
      startDate: "7 de abril de 2026", days: "Martes y Jueves", time: "8:00 pm", spotsAvailable: 4 // [cite: 11, 12]
    },
    {
      id: "hsk3-fds-1", level: "HSK 3", title: "Intermedio Conversacional", shift: "Matutino", duration: "7 semanas", 
      startDate: "11 de abril de 2026", days: "Sábados", time: "10:00 am", spotsAvailable: 1 // [cite: 12]
    },
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