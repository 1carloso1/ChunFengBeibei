import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CONTACT_INFO } from "./data/socials";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
  
  // Si no pasamos un mensaje, devuelve solo la URL del número
  if (!message) return baseUrl;
  
  // encodeURIComponent convierte "Hola mundo" en "Hola%20mundo" para que la URL sea válida
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}