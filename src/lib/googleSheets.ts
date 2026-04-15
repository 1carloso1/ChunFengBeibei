import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { Course } from '@/types'; // Asegúrate de que la ruta a tu interfaz sea correcta

import { TITULOS_POR_NIVEL } from "@/lib/data/courseTitles";

export async function getLocalCourses(): Promise<Course[]> {
  try {
    // 1. Buscamos el archivo CSV en la carpeta 'data' de tu proyecto
    const filePath = path.join(process.cwd(), 'data', 'horarios.csv');
    
    // 2. Leemos el contenido del archivo
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // 3. Convertimos el texto CSV a objetos de JavaScript
    const { data } = Papa.parse<Record<string, string>>(fileContent, {
      header: true, // Usa la primera fila (Índice, Horario...) como llaves
      skipEmptyLines: true,
    });

    // 4. Transformamos las filas del Excel al formato enriquecido "Course"
    const courses: Course[] = data.map((fila, index) => {
      // -- PROCESAMIENTO DE TEXTOS --
      // El Excel trae "Lun, Mié, Vie · 7am". Lo partimos por el "·"
      const horarioParts = fila.Horario ? fila.Horario.split('·') : ["", ""];
      const dias = horarioParts[0] ? horarioParts[0].trim() : "";
      const hora = horarioParts[1] ? horarioParts[1].trim() : "";

      // Formateamos "HSK1" a "HSK 1"
      const nivelFormat = fila.Nivel ? fila.Nivel.replace('HSK', 'HSK ') : "HSK 1";

      // Traducimos el Turno del Excel a formatos visuales
      const turnoComercial = fila.Turno === 'Mañana' ? 'Matutino' : 
                             fila.Turno === 'Tarde' ? 'Vespertino' : 'Fin de semana';

      const tituloDinamico = TITULOS_POR_NIVEL[nivelFormat];

      // -- LÓGICA MATEMÁTICA PARA LOS CUPOS --
      const cupoMax = parseInt(fila.cupo_max) || 6;
      const inscritos = parseInt(fila.inscritos) || 0; // Si la celda está vacía, vale 0
      
      // Hacemos la resta. Math.max asegura que nunca baje de 0.
      const lugaresDisponibles = Math.max(0, cupoMax - inscritos); 

      // -- LÓGICA DE ESTADO (Para los colores y botones de tu tarjeta) --
      let status: "open" | "almost-full" | "full" = "open";
      if (lugaresDisponibles === 0) {
        status = "full";
      } else if (lugaresDisponibles <= 2) {
        status = "almost-full";
      }

      // -- LÓGICA DE FORMATO --
      const format: "weekday" | "weekend" = 
        fila.Tipo_dia === 'Entre_semana' ? 'weekday' : 'weekend';

      // 5. Retornamos el objeto con la estructura exacta que pide tu interfaz Course
      return {
        id: fila.slot_key || `fallback-id-${index}`,
        scheduleCode: fila.Codigo_horario,
        level: nivelFormat,
        title: tituloDinamico, 
        shift: turnoComercial,
        duration: "7 semanas", 
        startDate: fila.inicio_curso, 
        days: dias,
        time: hora,
        spotsAvailable: lugaresDisponibles,
        status: status,
        format: format
      };
    });

    // 6. Filtramos filas vacías por si el Excel tiene líneas en blanco al final
    return courses.filter(course => course.scheduleCode !== "");

  } catch (error) {
    console.error("Error leyendo el archivo CSV local:", error);
    return []; // Evita que la página colapse si no encuentra el archivo
  }
}