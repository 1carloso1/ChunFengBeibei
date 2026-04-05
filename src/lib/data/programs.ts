import { Program } from "@/types";
import { Target, Zap, Globe2 } from "lucide-react";

export const PROGRAMS: Program[] = [
    {
      id: "hsk1", // [cite: 5]
      level: "HSK 1", // [cite: 5]
      name: "Bases y Supervivencia", // [cite: 5]
      target: "Empieza desde cero absoluto y pierde el miedo a hablar en tu primera clase.", // [cite: 5]
      icon: Target, // Pasamos el componente, el diseño le dará el color "text-imperial"
      color: "amber", // [cite: 5]
      outcomes: [
        "Dominar la pronunciación real (Pinyin y tonos)", // [cite: 5]
        "Presentarte con seguridad ante nativos", // [cite: 5]
        "Sobrevivir en restaurantes, tiendas y calles", // [cite: 5]
        "Leer y escribir tus primeros 150 caracteres" // [cite: 5, 6]
      ]
    },
    {
      id: "hsk2", // [cite: 6]
      level: "HSK 2", // [cite: 6]
      name: "Conversación Activa", // [cite: 6]
      target: "Deja de traducir en tu mente y empieza a conectar de verdad.", // [cite: 6]
      icon: Zap,
      color: "amber", // [cite: 6]
      outcomes: [
        "Mantener pláticas fluidas sobre tu vida diaria", // [cite: 6]
        "Navegar ciudades y viajes sin usar traductor", // [cite: 6]
        "Conectar de forma genuina con amigos chinos", // [cite: 7]
        "Duplicar tu vocabulario a 300 caracteres" // [cite: 7]
      ]
    },
    {
      id: "hsk3", // [cite: 7]
      level: "HSK 3", // [cite: 7]
      name: "Independencia y Fluidez", // [cite: 7]
      target: "Exprésate con total libertad en el día a día y en el trabajo.", // [cite: 7]
      icon: Globe2,
      color: "amber", // [cite: 7]
      outcomes: [
        "Defender tus opiniones y dar argumentos", // [cite: 7]
        "Comprender mensajes y audios de nativos", // [cite: 7, 8]
        "Desenvolverte en entornos laborales básicos", // [cite: 8]
        "Dominar la gramática media y 600 caracteres" // [cite: 8]
      ]
    }
  ];