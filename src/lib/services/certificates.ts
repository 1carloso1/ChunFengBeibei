import Papa from 'papaparse';
import { Certificate } from '@/types';

const certificatesSheetCSV = process.env.CERTIFICATES_CSV_URL;

export async function getCertificateByFolio(folioBuscar: string): Promise<Certificate | null> {
  if (!certificatesSheetCSV) {
    console.error("Falta la variable CERTIFICATES_CSV_URL");
    return null;
  }

  try {
    // Para validaciones, no queremos caché (revalidate: 0) porque 
    // si revocan una constancia, queremos saberlo al instante.
    const response = await fetch(certificatesSheetCSV, { cache: 'no-store' });
    if (!response.ok) throw new Error('Error al conectar con Sheets');

    const csvText = await response.text();
    const { data } = Papa.parse<Record<string, string>>(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    // Buscamos la fila exacta que coincida con el folio
    const fila = data.find(row => row.Folio === folioBuscar);

    if (!fila) return null; // No se encontró la constancia

    // Mapeamos los datos de la fila a nuestra interfaz
    return {
      folio: fila.Folio || "",
      nombreCompleto: fila.Nombre_completo || "",
      nivel: fila.Nivel || "",
      modulo: fila.Modulo || "",
      fechaInicio: fila.Fecha_inicio_text || "",
      fechaFin: fila.Fecha_fin_text || "",
      fechaEmision: fila.Fecha_emision_text || "",
    };

  } catch (error) {
    console.error("Error buscando constancia:", error);
    return null;
  }
}