import { ElementType, ReactNode } from "react";

export interface Pillar {
  icon: ElementType;
  title: string;
  text: string;
}

export interface Step {
  icon: ElementType;
  title: string;
  description: string;
}

export interface Program {
  id: string;
  level: string;
  name: string;
  target: string;
  icon: ElementType; // Guardamos la referencia al icono, no el HTML
  color: string;
  outcomes: string[];
}

// La información CRUDA que viene de la Base de Datos / Google Sheets
export interface RawCourse {
  id: string;
  scheduleCode: string; 
  level: string;
  title: string;
  shift: string;
  duration: string;
  startDate: string; 
  days: string;
  time: string;
  spotsAvailable: number;
}

// La información ENRIQUECIDA que usa tu componente visual
export interface Course extends RawCourse {
  format: "weekday" | "weekend";
  status: "open" | "almost-full" | "full";
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  title: string;
  name: string;
  location: string;
  text: string;
  level: string;
}