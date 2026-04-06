<div align="center">

# ChunFengBeiBei | Centro de Estudios Culturales y Lengua China

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />

<br />

<img src="https://img.shields.io/badge/Wix_Developers-131313?style=for-the-badge&logo=wix&logoColor=white" alt="Wix" />
<img src="https://img.shields.io/badge/Manychat-0084FF?style=for-the-badge&logo=messenger&logoColor=white" alt="Manychat" />

<br /><br />

**ChunFengBeiBei** es una plataforma web educativa diseñada para facilitar el aprendizaje del idioma chino estándar y la preparación para la certificación oficial HSK. El proyecto combina un diseño editorial premium con una arquitectura frontend moderna para optimizar la conversión de leads y la experiencia del usuario.

</div>

---

## 🚀 Prueba Rápida (Demo en Vivo)

La aplicación se encuentra actualmente desplegada en un entorno de producción:

1. Abre la aplicación web: [👉 **ChunFengBeiBei Web App**](https://chun-feng-beibei.vercel.app/)
2. Explora la ruta de aprendizaje HSK y los horarios de los programas.
3. Desliza por las historias de éxito (Testimonios) utilizando los controles interactivos.

📱 *Tip: El diseño es **100% responsivo** y cuenta con interacciones adaptativas (Swipe en móviles, controles de carrusel en escritorio).*

🔗 *Nota de Infraestructura: Actualmente alojado bajo el dominio de Vercel. Próximamente se realizará la migración al dominio principal `www.chunfengbeibei.com`.*

---

## ✨ Características Principales

* **UI/UX Editorial y Premium:** Interfaz minimalista y elegante construida con Tailwind CSS, priorizando la legibilidad y la jerarquía visual de la marca.
* **Carruseles Interactivos Modulares:** Implementación de *Custom Hooks* (`useCarousel`) para manejar la navegación de tarjetas de programas y testimonios, con cálculo matemático de bordes y estados de botones dinámicos.
* **Estructura Componentizada:** Arquitectura limpia separando lógica, datos (en `src/lib/data`) y presentación visual.
* **Integración Próxima de Pre-registro (🚧 En Desarrollo):** Formularios en modales interactivos para capturar intención de inscripción antes del contacto directo.
* **Enrutamiento Inteligente (🚧 En Desarrollo):** Integración con Manychat mediante URLs parametrizadas (`?text=...`) para disparar flujos automatizados en WhatsApp según el programa seleccionado.

---

## 🛠️ Arquitectura y Tecnologías

### Frontend (Cliente)
* **Next.js 15 (App Router):** Framework principal de React para SSR/SSG y enrutamiento optimizado.
* **React 19:** Biblioteca base de interfaces con soporte para los últimos hooks y transiciones.
* **Tailwind CSS v4:** Motor de utilidades CSS de nueva generación para el diseño responsivo.
* **Radix UI:** Primitivas sin estilos (`@radix-ui/react-accordion`) para componentes accesibles y robustos.
* **Lucide React:** Sistema de iconografía SVG ligera y consistente.

### Backend y Datos (🚧 En Desarrollo)
* **Wix Developers:** Funciones serverless y API RESTful para conectar el frontend con la base de datos (Headless CMS) y el CRM de gestión de alumnos.

---

## 🛠️ Guía de Instalación y Ejecución

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

### 1. Clonar e Instalar Dependencias

Abre tu terminal y ejecuta:

```bash
# Clonar el repositorio (Reemplazar con tu URL real cuando sea público)
git clone [https://github.com/tu-usuario/chunfengbeibei.git](https://github.com/tu-usuario/chunfengbeibei.git)

# Entrar al directorio
cd chunfengbeibei

# Instalar dependencias de Node.js
npm install
```

### 2. Configurar Variables de Entorno (🚧 Proceso Futuro)

Nota: Actualmente el proyecto opera de forma estática con datos locales, pero esta sección se activará pronto.

Crea un archivo `.env.local` en la raíz del proyecto. Este archivo contendrá las credenciales para la conexión con el backend:

```env
# Ejemplo de futuras variables
NEXT_PUBLIC_WIX_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_WIX_SITE_ID=tu_site_id_aqui
NEXT_PUBLIC_MANYCHAT_BASE_URL=[https://wa.me/524940000000](https://wa.me/524940000000)
```

### 3. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

Esto abrirá la aplicación en `http://localhost:3000`. Cualquier cambio en los archivos de la carpeta `src/` se reflejará instantáneamente gracias al Hot Module Replacement (HMR).

## ☁️ Despliegue (Producción)

El sistema está configurado para integración y despliegue continuo (CI/CD) utilizando Vercel. Cualquier push a la rama `main` dispara automáticamente un nuevo build.

### Pendientes de DevOps:

- [ ] Configuración de récords DNS (A, CNAME) para el dominio personalizado.

- [ ] Emisión y forzado de certificados SSL en producción.

## 📂 Estructura del Proyecto

La arquitectura sigue las convenciones del App Router de Next.js, separando estrictamente la UI, la lógica y los datos estáticos:

```text
/chunfengbeibei
├── src/
│   ├── app/                    # Rutas principales (Next.js App Router)
│   │   ├── globals.css         # Estilos globales y variables Tailwind
│   │   ├── layout.tsx          # Wrapper principal (HTML, Body, Metadatos)
│   │   ├── page.tsx            # Landing page principal
│   │   ├── privacidad/         # Página de Aviso de Privacidad
│   │   └── terminos/           # Página de Términos y Condiciones
│   │
│   ├── components/             # Arquitectura de UI
│   │   ├── layout/             # Componentes globales (Navbar, Footer)
│   │   ├── sections/           # Bloques masivos de la Landing Page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProgramsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ...
│   │   └── ui/                 # Componentes atómicos (Botones, Acordeones)
│   │
│   ├── hooks/                  # Lógica reutilizable de React
│   │   └── useCarousel.ts      # Custom hook para navegación de tarjetas
│   │
│   ├── lib/                    # Utilidades y Base de Datos estática temporal
│   │   ├── data/               # Archivos TS con los copys y catálogos
│   │   │   ├── courses.ts
│   │   │   ├── programs.ts
│   │   │   ├── testimonials.ts
│   │   │   └── ...
│   │   └── utils.ts            # Helpers generales (ej. tailwind-merge)
│   │
│   └── types/                  # Definiciones de interfaces TypeScript
│       └── index.ts
│
├── public/                     # Assets estáticos (Imágenes, Logos, Favicon)
├── next.config.ts              # Configuración del compilador de Next.js
├── tailwind.config.ts          # Configuración del tema y colores corporativos
└── package.json                # Manifiesto de dependencias y scripts
```