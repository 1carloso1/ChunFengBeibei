import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Aquí pegaremos la URL que nos dará Make.com en el siguiente paso
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    // 2. Validación de seguridad (Esto quita el error de TypeScript)
    if (!webhookUrl) {
      console.error("ERROR: La variable MAKE_WEBHOOK_URL no está definida en el entorno.");
      return NextResponse.json(
        { success: false, error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Registro guardado' });
    } else {
      throw new Error("Fallo al enviar al Webhook");
    }
    
  } catch (error) {
    console.error('Error en el Webhook:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno' }, 
      { status: 500 }
    );
  }
}