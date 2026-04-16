import Papa from 'papaparse';
import { Course } from '@/types'; // Asegúrate de que la ruta a tu interfaz sea correcta
import { TITULOS_POR_NIVEL } from "@/lib/data/courseTitles";

const scheduleSheetCSV = process.env.SHEET_CSV_URL

export async function getLiveCourses(): Promise<Course[]> {

    if (!scheduleSheetCSV) {
        console.error("ERROR CRÍTICO: No se encontró la variable SHEET_CSV_URL en el archivo .env");
        return []; // Retorna vacío para no romper la página
      }

  try {
    // En lugar de leer el disco duro, "llamamos" a Google
    const response = await fetch(scheduleSheetCSV, {
        // Esta línea es ORO: Next.js refrescará los datos cada 5 minutos
        next: { revalidate: 300 } 
      });

    if (!response.ok) throw new Error('No se pudo conectar con Google Sheets');

    const csvText = await response.text();

    // 3. Convertimos el texto CSV a objetos de JavaScript
    const { data } = Papa.parse<Record<string, string>>(csvText, {
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
      let turnoBase = fila.Turno;

      // Si es fin de semana, "re-calculamos" el turno basado en la hora
      if (turnoBase === 'Fin_de_semana') {
        const horaLower = hora.toLowerCase();
        
        if (horaLower.includes('am')) {
          turnoBase = 'Mañana';
        } 
        else {
          turnoBase = 'Tarde';
        }
      }
      // 3. Ahora asignamos la etiqueta comercial final (solo Matutino o Vespertino)
      const turnoComercial = turnoBase === 'Mañana' ? 'Matutino' : 'Vespertino';

      const tituloDinamico = TITULOS_POR_NIVEL[nivelFormat];

      // -- LÓGICA MATEMÁTICA PARA LOS CUPOS --
      const cupoMax = parseInt(fila.cupo_max || "6") || 6;
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

      // -- LÓGICA DE ORDEN POR IMPORTANCIA --
        const rawPriority = parseInt(fila['prioridad global']);
        const priorityValue = isNaN(rawPriority) ? 9999 : rawPriority;

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
        priority: priorityValue,
        status: status,
        format: format
      };
    });

    // 6. Filtramos filas vacías por si el Excel tiene líneas en blanco al final
    courses.filter(course => course.scheduleCode !== "");

    // 7. Ordenamos de menor a mayor basado en la prioridad (1 va primero, 9999 va al final)
    courses.sort((a, b) => (a.priority || 9999) - (b.priority || 9999));

    return courses;

  } catch (error) {
    console.error("Error obteniendo datos online desde Google Sheets:", error);
    return []; // Evita que la página colapse si no encuentra el archivo
  }
}