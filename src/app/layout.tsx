import type { Metadata } from "next";
import { Crimson_Text, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Chunfengbeibei — Centro de Estudios Culturales Chinos",
  description:
    "Aprende chino mandarín online con profesoras nativas. Clases en grupos reducidos, enfoque cultural y académico para hispanohablantes de todas las edades.",
  keywords: [
    "aprender chino online",
    "profesoras nativas de chino",
    "cursos de mandarín para hispanohablantes",
    "clases de chino mandarín",
    "estudiar chino desde casa",
    "cultura china",
    "idioma chino para principiantes",
  ],
  openGraph: {
    title: "Chunfengbeibei — Centro de Estudios Culturales Chinos",
    description:
      "Aprende el idioma del futuro con el alma de su cultura. Profesoras nativas, grupos reducidos, enfoque académico.",
    type: "website",
    locale: "es_ES",
  },
};

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
      <body className="min-h-screen bg-rice text-ink antialiased">
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-imperial focus:px-4 focus:py-2 focus:text-white"
        >
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
