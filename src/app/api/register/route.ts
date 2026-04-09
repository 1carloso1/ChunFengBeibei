import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Aquí pegaremos la URL que nos dará Make.com en el siguiente paso
    const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/7e32dag84u07ls8aywqxbdm8vn8uokp1"; 

    const response = await fetch(MAKE_WEBHOOK_URL, {
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