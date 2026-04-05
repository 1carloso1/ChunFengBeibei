import { Step } from "@/types";
import { Milestone, BookOpen, Clock } from "lucide-react";

export const STEPS: Step[] = [
    {
      icon: BookOpen,
      title: "El Sistema Modular", // [cite: 3]
      description: "Olvídate de compromisos anuales abrumadores. Nuestro aprendizaje se divide en bloques claros y digeribles. Avanzas paso a paso, dominando un módulo antes de pasar al siguiente.", // [cite: 3]
    },
    {
      icon: Clock,
      title: "Ciclos de 7 Semanas", // [cite: 3]
      description: "Cada nivel (HSK 1 al 6) está segmentado en módulos cortos de 7 semanas. Esto te permite ver progreso real a corto plazo, integrando el estudio fácilmente en tu vida diaria.", // [cite: 3]
    },
    {
      icon: Milestone,
      title: "A Tu Propio Ritmo", // [cite: 4]
      description: "Al terminar un módulo, decides si continúas inmediatamente o tomas una pausa hasta el siguiente grupo. Tú tienes el control absoluto de tu avance, sin presiones.", // [cite: 4]
    },
  ];