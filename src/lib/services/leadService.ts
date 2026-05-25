export interface PreRegistrationData {
  name: string;
  phone: string;
  courseTitle: string;
  level: string;
  schedule: string;
  startDate: string;
}

export const leadService = {
  async saveRegistration(data: PreRegistrationData): Promise<boolean> {
    try {
      // Hacemos un POST a nuestra API Route de Next.js
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }

      const result = await response.json();
      return result.success; 
      
    } catch (error) {
      console.error("Error al guardar el registro en el servicio:", error);
      return false; // Retorna falso para que el Modal muestre la pantalla de error
    }
  }
};