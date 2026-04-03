import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  // Un título claro, usando la barra vertical (|) que es más limpia visualmente en Google
  title: "Chunfengbeibei | Centro de Estudios Culturales",
  
  // Descripción principal (SEO para Google): Más persuasiva y de alto valor
  description:
    "Domina el chino mandarín con profesoras nativas. Una experiencia educativa online de primer nivel con inmersión cultural, grupos reducidos y excelencia académica.",
  
  keywords: [
    "aprender chino mandarín",
    "clases de chino online",
    "profesoras nativas de chino",
    "cultura china",
    "preparación HSK", // Agregué certificación, atrae a estudiantes serios
    "instituto de idioma chino",
    "estudiar mandarín",
  ],
  
  // OpenGraph (Lo que la gente ve cuando compartes el link por WhatsApp, Facebook, etc.)
  openGraph: {
    title: "Chunfengbeibei | Aprende Chino Mandarín",
    // Tu frase estrella brilla aquí
    description: "El idioma del futuro con el alma de su cultura. Metodología inmersiva y atención personalizada.",
    type: "website",
    locale: "es_ES",
    siteName: "Chunfengbeibei",
    // IMPORTANTE: Esto es lo que genera la "tarjetita" visual en WhatsApp
    images: [
      {
        url: "/og-image.jpg", // Debes crear esta imagen en tu carpeta "public"
        width: 1200,
        height: 630,
        alt: "Chunfengbeibei - Centro de Estudios Culturales",
      },
    ],
  },
  
  // Twitter Cards (Para que se vea bien en X / Twitter y Telegram)
  twitter: {
    card: "summary_large_image",
    title: "Chunfengbeibei | Centro de Estudios Culturales",
    description: "El idioma del futuro con el alma de su cultura. Estudia chino con profesoras nativas.",
    images: ["/og-image.jpg"],
  },
};