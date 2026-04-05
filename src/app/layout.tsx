import type { Metadata } from "next";
import { Crimson_Text, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// 1. Configuración de tus fuentes Premium
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

// 2. Tus metadatos definitivos (El SEO y OpenGraph)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.chunfengbeibei.com"),
  title: "ChunFengBeiBei | Centro de Estudios Culturales",
  description:
    "Domina el chino mandarín con profesoras nativas. Una experiencia educativa online de primer nivel con inmersión cultural, grupos reducidos y excelencia académica.",
  keywords: [
    "aprender chino mandarín",
    "clases de chino online",
    "profesoras nativas de chino",
    "cultura china",
    "preparación HSK",
    "instituto de idioma chino",
    "estudiar mandarín",
  ],
  openGraph: {
    title: "ChunFengBeiBei | Aprende Chino Mandarín",
    description: "El idioma del futuro con el alma de su cultura. Metodología inmersiva y atención personalizada.",
    type: "website",
    locale: "es_ES",
    siteName: "ChunFengBeiBei",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "ChunFengBeiBei - Centro de Estudios Culturales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChunFengBeiBei | Centro de Estudios Culturales",
    description: "El idioma del futuro con el alma de su cultura. Estudia chino con profesoras nativas.",
    images: ["/logo.png"],
  },
};

// 3. El componente React (¡Esto era lo que faltaba y causaba el error!)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${crimsonText.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      {/* Tu fondo base y color de texto */}
      <body className="min-h-screen bg-rice text-ink antialiased">
        {/* Rampa de accesibilidad */}
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-jade focus:px-4 focus:py-2 focus:text-white"
        >
          Ir al contenido principal
        </a>
        
        {/* Aquí se inyecta tu Navbar, Hero, etc. */}
        {children}
      </body>
    </html>
  );
}