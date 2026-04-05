import { Pillar } from "@/types";
import { Users, GraduationCap, Globe } from "lucide-react";

export const PILLARS: Pillar[] = [
    {
      icon: Users,
      title: "Atención Boutique", // [cite: 1]
      text: "Grupos íntimos de máximo 6 personas y clases en vivo. Cada grupo se forma cuidadosamente para asegurar un acompañamiento real, corrección constante de pronunciación y un progreso acelerado.", // [cite: 1]
    },
    {
      icon: GraduationCap,
      title: "Excelencia Oficial", // [cite: 1]
      text: "Guiados por profesoras nativas, nuestro método progresivo se alinea perfectamente con los niveles oficiales HSK, dándote bases sólidas, certificables a nivel internacional y aplicables desde el día uno.", // [cite: 1]
    },
    {
      icon: Globe,
      title: "Inmersión Auténtica", // [cite: 2]
      text: "El idioma no existe en el vacío. Integramos de manera natural costumbres, formas de cortesía y festividades tradicionales para que tu aprendizaje sea profundo, significativo y contextualizado.", // [cite: 2]
    },
  ];