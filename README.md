<div align="center">

# ChunFengBeiBei | Centro de Estudios Culturales y Lengua China

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
<img src="https://img.shields.io/badge/Google_Sheets_API-34A853?style=for-the-badge&logo=googlesheets&logoColor=white" alt="Google Sheets" />

<br /><br />

**ChunFengBeiBei** es una Landing Page institucional de alto rendimiento diseñada para posicionar al Centro de Estudios Culturales y Lengua China en la web, atraer nuevos estudiantes y capturar leads cualificados. El proyecto combina un diseño editorial premium optimizado para la conversión con una arquitectura Full-Stack moderna, integrando un sistema de gestión de horarios dinámicos y validación oficial de constancias respaldado por Google Sheets.

</div>

---

## 🚀 Producción

La aplicación se encuentra desplegada y operando en su dominio oficial:

👉 **[www.chunfengbeibei.com](https://chunfengbeibei.com)**

📱 *El diseño es **100% responsivo** y cuenta con interacciones adaptativas (Swipe en móviles, controles de carrusel en escritorio, modales interactivos y Glassmorphism).*

---

## ✨ Características Principales

* **Horarios Dinámicos en Tiempo Real:** El componente de horarios se sincroniza en vivo con un documento de Google Sheets. Si un grupo se llena, la UI se actualiza automáticamente mostrando estados como "Últimos lugares" o "Agotado".
* **Sistema de Validación Oficial (Códigos QR):** Plataforma interna de verificación de constancias. Los alumnos y empleadores pueden escanear el código QR de un certificado de finalización de curso para corroborar su validez en la base de datos (Ruta: `/verificar/[folio]`).
* **Captura de Leads Integrada:** Formularios modales interactivos que capturan los datos de los interesados (`PreRegistrationModal`) y los envían de forma segura a través de una API interna de hacia una hoja de Google Sheets.
* **UI/UX Editorial Premium:** Interfaz minimalista construida con Tailwind CSS v4, priorizando la legibilidad, la jerarquía visual de la marca y la conversión.
* **Arquitectura de Contenidos Desacoplada:** El contenido estático de la página (textos, FAQs, niveles) vive en una carpeta `data/` estructurada, permitiendo al dueño editar copys sin tocar los componentes de React.

---

## 🛠️ Stack Tecnológico

### Frontend
* **Next.js 15 (App Router):** Framework principal para Server-Side Rendering (SSR) y Static Site Generation (SSG) optimizado.
* **React 19:** Biblioteca base de interfaces con soporte para los últimos hooks.
* **Tailwind CSS v4:** Motor de utilidades CSS de nueva generación para el diseño responsivo.
* **Lucide React & Radix UI:** Iconografía SVG ligera y primitivas accesibles.

### Backend y Base de Datos
* **Next.js API Routes:** Endpoints Serverless (ej. `/api/register`) para procesar datos de formularios de manera segura sin exponer credenciales en el cliente.
* **Google Sheets API (Headless CMS):** Utilizado como una base de datos ágil y sin costo para gestionar la disponibilidad de los horarios de clase y la validación de los folios de las constancias.

---

## 🛠️ Guía de Instalación y Ejecución (Entorno Local)

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

### 1. Clonar e Instalar Dependencias

Abre tu terminal y ejecuta:

```bash
# Clonar el repositorio (Reemplazar con tu URL real cuando sea público)
git clone https://github.com/1carloso1/ChunFengBeibei.git

# Entrar al directorio
cd chunfengbeibei

# Instalar dependencias de Node.js
npm install
```

### 2. Configurar Variables de Entorno


Crea un archivo `.env.local` en la raíz del proyecto. Este archivo contendrá las credenciales para la conexión con el backend:

```env
# API DE Make.com
MAKE_WEBHOOK_URL= "https://hook.us2.make.com/your_api"

#Url de la hoja de los horarios en Google Sheets
SHEET_CSV_URL = "https://docs.google.com/your_sheet"

#Url de la hoja de los certificados en Google Sheets
CERTIFICATES_CSV_URL = "https://docs.google.com/your_sheet"
```

### 3. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

Esto abrirá la aplicación en `http://localhost:3000`. Cualquier cambio en los archivos de la carpeta `src/` se reflejará instantáneamente gracias al Hot Module Replacement (HMR).

## ☁️ Infraestructura y Despliegue

El sistema está configurado para integración y despliegue continuo (CI/CD) utilizando Vercel. Cualquier push a la rama `main` dispara automáticamente un nuevo build en el entorno de producción.


## 📂 Estructura del Proyecto

La arquitectura sigue las convenciones del App Router de Next.js, separando estrictamente la UI, la lógica y los datos estáticos:

```text
/chunfengbeibei
├── src/
│   ├── app/                                 # Rutas de la aplicación (Next.js App Router)
│   │   ├── api/
│   │   │   └── register/
│   │   │       └── route.ts                 # Endpoint backend que procesa los pre-registros (Leads)
│   │   ├── privacidad/
│   │   │   └── page.tsx                     # Página legal: Aviso de Privacidad
│   │   ├── terminos/
│   │   │   └── page.tsx                     # Página legal: Términos y Condiciones
│   │   ├── verificar/
│   │   │   └── [folio]/
│   │   │       └── page.tsx                 # Sistema dinámico de validación de constancias oficiales (QR)
│   │   ├── globals.css                      # Estilos globales y variables de Tailwind
│   │   ├── layout.tsx                       # Wrapper principal (Estructura HTML, Body, y Metadatos SEO)
│   │   └── page.tsx                         # Landing page principal
│   │
│   ├── components/                          # Arquitectura de Interfaz de Usuario (UI)
│   │   ├── layout/                          # Componentes globales de la página
│   │   │   ├── Footer.tsx                   # Pie de página con enlaces y derechos
│   │   │   └── Navbar.tsx                   # Barra de navegación principal
│   │   ├── sections/                        # Bloques masivos que conforman la Landing Page
│   │   │   ├── AboutSection.tsx             # Sección "Sobre la Academia"
│   │   │   ├── ContactSection.tsx           # Sección con información de contacto directa
│   │   │   ├── FAQSection.tsx               # Sección de Preguntas Frecuentes
│   │   │   ├── HeroSection.tsx              # Portada principal (Primera impresión)
│   │   │   ├── MethodologySection.tsx       # Explicación de la metodología de enseñanza
│   │   │   ├── ProgramsAndScheduleWrapper.tsx # Componente padre que inyecta los datos del servidor a los horarios
│   │   │   ├── ProgramsSection.tsx          # Muestra de niveles de idioma (HSK 1, HSK 2, etc.)
│   │   │   ├── ScheduleSection.tsx          # Interfaz interactiva para filtrar y ver horarios disponibles
│   │   │   └── TestimonialsSection.tsx      # Carrusel con reseñas de los alumnos
│   │   └── ui/                              # Componentes atómicos e interactivos
│   │       ├── accordion.tsx                # Lógica visual desplegable para las FAQs
│   │       └── PreRegistrationModal.tsx     # Ventana emergente (Modal) para capturar datos de interesados
│   │
│   ├── hooks/                               # Lógica reutilizable de React (Custom Hooks)
│   │   ├── useCarousel.ts                   # Manejo de estado y navegación para componentes deslizables
│   │   └── usePreRegistration.ts            # Lógica, estados y validación del formulario de pre-registro
│   │
│   ├── lib/                                 # Utilidades, datos y conexión con servicios externos
│   │   ├── data/                            # Textos puros: Permite al dueño modificar el contenido sin programar
│   │   │   ├── about.ts                     # Textos e historia de la sección "Sobre Nosotros"
│   │   │   ├── courseTitles.ts              # Catálogo que mapea niveles (HSK) a nombres comerciales
│   │   │   ├── faqs.ts                      # Lista de preguntas y respuestas para editar fácilmente
│   │   │   ├── methodology.ts               # Pilares y textos de la sección de metodología
│   │   │   ├── programs.ts                  # Descripciones, requisitos y objetivos de cada nivel
│   │   │   ├── socials.ts                   # Enlaces centralizados de redes sociales
│   │   │   └── testimonials.ts              # Base de datos local con las reseñas de los alumnos
│   │   ├── services/                        # Capa de conexión (Endpoints internos y externos)
│   │   │   ├── certificates.ts              # Fetcher que busca la validez de los folios en Google Sheets
│   │   │   ├── coursesSchedule.ts           # Fetcher en tiempo real de los horarios disponibles (Google Sheets)
│   │   │   └── leadService.ts               # Cliente que envía los datos del interesado hacia la API interna
│   │   └── utils.ts                         # Funciones de apoyo general (Clases Tailwind, Generador link WhatsApp)
│   │
│   └── types/                               # Tipados estrictos para evitar errores en el código
│       └── index.ts                         # Interfaces globales (Course, Certificate, PreRegistrationData, etc.)
│
├── public/                                  # Carpeta estática pública (Logos, imágenes, iconos y favicon)
├── next.config.ts                           # Reglas de compilación y comportamiento de Next.js
├── tailwind.config.ts                       # Archivo maestro de diseño: Colores, fuentes y breakpoints
├── tsconfig.json                            # Configuración estricta del compilador de TypeScript
└── package.json                             # Lista de dependencias del proyecto (React, Tailwind, Lucide, etc.)
```