# Portfolio & CV Web — Agustín Fernando Falsetti 🚀

Sitio web personal y currículum vítae interactivo de **Agustín Fernando Falsetti**, estudiante de la **Tecnicatura Superior en Internet de las Cosas y Sistemas Embebidos** (I.S.F.T. N° 176 - Morón) y Desarrollador Full-Stack.

El portfolio está diseñado para documentar no solo el resultado final de cada proyecto, sino **todo el proceso real de ingeniería**: planificación teórica, BOM de componentes, aceleración con Inteligencia Artificial, depuración de problemas físicos/eléctricos y despliegue continuo en la nube.

---

## 🛠️ Stack Tecnológico

* **Frontend**: React 18/19, TypeScript, Vite.
* **Estilos y Diseño**: Tailwind CSS v4 con paleta personalizada en **violeta y lila claro** (`#8b5cf6`, `#faf5ff`), tipografías *Plus Jakarta Sans* e *Inter*.
* **Animaciones**: Framer Motion y efectos de celebración con Canvas Confetti.
* **Navegación**: React Router v6 / v7 con soporte SPA en Vercel (`vercel.json`).
* **Modo Claro / Oscuro**: Selector interactivo en barra de navegación con persistencia en `localStorage`.
* **Impresión / CV**: Hoja de estilos optimizada con `@media print` para exportar o imprimir un currículum limpio directamente desde el navegador.

---

## 📂 Estructura de Carpetas

```text
portfolio-agustin/
├── public/
│   ├── favicon.svg                 # Ícono oficial del portfolio
│   ├── cv-agustin-falsetti.pdf     # Documento de CV descargable
│   └── images/                     # Fotos reales de prototipos y capturas
│       ├── mimic-manus/            # Fotos de mano robótica, guante y circuitos
│       ├── moron-responde/         # Capturas de la plataforma cívica
│       └── isft-176/               # Logos institucionales
├── content/
│   └── proceso/                    # Bitácoras de ingeniería en formato Markdown
│       ├── mimic-manus.md
│       ├── moron-responde.md
│       ├── isft-176-web.md
│       └── sql-server-windows10.md
├── src/
│   ├── components/                 # Componentes reutilizables (Navbar, Hero, Timeline...)
│   ├── context/                    # ThemeContext (Modo claro/oscuro)
│   ├── data/                       # Fuente única de datos
│   │   ├── projects.ts             # Metadatos, arquitectura y línea de tiempo
│   │   ├── skills.ts               # Habilidades con nivel de dominio
│   │   ├── experience.ts           # Educación y trayectoria
│   │   └── process.ts              # Pasos metodológicos transversales
│   ├── pages/                      # Páginas de la aplicación (Home, About, Detail...)
│   ├── App.tsx                     # Enrutador y layout global
│   ├── index.css                   # Tailwind v4 y estilos de impresión
│   └── main.tsx                    # Punto de entrada de React
├── vercel.json                     # Reescrituras para routing SPA en Vercel
├── vite.config.ts                  # Configuración de Vite con Tailwind plugin
└── package.json
```

---

## 🚀 Puesta en Marcha Local

Para clonar y ejecutar este portfolio en tu máquina local:

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abrí tu navegador en `http://localhost:5173`.

3. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Genera los archivos optimizados listos para desplegar en la carpeta `/dist`.

4. **Vista previa de producción**:
   ```bash
   npm run preview
   ```

---

## 📝 Guía: Cómo Agregar un Proyecto Nuevo

Para incorporar un nuevo proyecto al portfolio **no necesitas tocar código JSX ni crear nuevas páginas**. Solo debes seguir estos 2 pasos:

### Paso 1: Agregar el objeto de datos en `/src/data/projects.ts`
Agrega un nuevo objeto al arreglo `projects`:

```typescript
{
  id: 'nuevo-proyecto',
  slug: 'nuevo-proyecto',
  title: 'Nombre del Proyecto',
  subtitle: 'Breve descripción en una línea',
  category: 'iot', // 'iot' | 'frontend' | 'fullstack' | 'devops'
  categoryLabel: 'IoT & Sistemas Embebidos',
  tags: ['ESP32', 'React', 'TypeScript'],
  featured: true, // true para aparecer en Home
  date: 'Noviembre 2026',
  role: 'Tu rol en el proyecto',
  team: 'Nombre de los integrantes',
  summary: 'Resumen ejecutivo completo...',
  objectives: ['Objetivo 1', 'Objetivo 2'],
  image: '/images/nuevo-proyecto/portada.jpg',
  demoUrl: 'https://tu-demo.com', // o '[COMPLETAR]'
  repoUrl: 'https://github.com/AgustinFalsetti/...',
  status: 'En producción', // 'Completado' | 'En producción' | 'Documentado'
  architecture: {
    description: 'Descripción de la arquitectura...',
    flow: [
      { from: 'Nodo A', to: 'Nodo B', label: 'Protocolo / Datos' }
    ],
    techDetails: ['Detalle técnico 1', 'Detalle técnico 2']
  },
  timeline: [
    {
      phase: 'Fase 1',
      title: 'Hito inicial',
      date: 'Fecha',
      description: 'Qué se hizo...',
      decisions: ['Decisión tomada'],
      challenge: 'Problema encontrado',
      solution: 'Cómo se resolvió'
    }
  ],
  aiWorkflow: {
    description: 'Cómo te ayudó la IA...',
    promptsSummary: ['Prompt 1', 'Prompt 2'],
    learningsFromAI: 'Aprendizaje obtenido...'
  },
  resultsAndLearnings: {
    results: ['Resultado 1'],
    learnings: ['Lección 1']
  }
}
```

### Paso 2: Crear la bitácora Markdown en `/content/proceso/<slug>.md`
Crea el archivo `/content/proceso/nuevo-proyecto.md` con las notas de campo, esquemas o fragmentos de código que quieras documentar. La página de detalle `/proyectos/nuevo-proyecto` lo leerá automáticamente y lo mostrará al pulsar el botón *"Ver Bitácora en Markdown"*.

---

## ☁️ Despliegue en Vercel

El proyecto incluye el archivo `vercel.json` con la regla de reescritura necesaria para que React Router funcione al recargar cualquier ruta profunda (`/proyectos/:slug`, `/sobre-mi`, etc.):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Para desplegar:
1. Conectá el repositorio en [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

---

## 📋 Lista de Datos Pendientes por Completar (`[COMPLETAR]`)

Para mantener la honestidad técnica, los siguientes datos se marcaron visualmente como `[COMPLETAR]` en la plataforma para que los actualices con tus URLs definitivas:

1. **MIMIC MANUS**:
   - `repoUrl`: URL del repositorio de GitHub de MIMIC MANUS / Glove Hand IoT.
2. **Morón Responde**:
   - `demoUrl`: URL de despliegue activo en Vercel.
   - `repoUrl`: URL del repositorio de GitHub de Morón Responde.
3. **Sitio Web I.S.F.T. N° 176**:
   - `demoUrl`: URL de demostración en vivo (si está desplegado).
   - `repoUrl`: URL del repositorio de GitHub institucional.
4. **Guía SQL Server 2022 Express**:
   - `repoUrl`: URL del repositorio de scripts de automatización en PowerShell/SQL.
5. **CV en PDF**:
   - Reemplazar `/public/cv-agustin-falsetti.pdf` por tu PDF final de currículum actualizado cuando lo desees.
