export interface SkillItem {
  name: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  experienceYears?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'embedded-iot',
    title: 'IoT & Sistemas Embebidos',
    description: 'Diseño de hardware, firmware de bajo nivel, sensado háptico y protocolos de telemetría.',
    icon: 'Cpu',
    skills: [
      { name: 'ESP32 (WROOM-32 / S3)', level: 'Avanzado', highlight: true },
      { name: 'ESP-NOW (Protocolo 2.4 GHz)', level: 'Avanzado', highlight: true },
      { name: 'MQTT & HiveMQ Cloud (TLS)', level: 'Avanzado', highlight: true },
      { name: 'Arduino IDE & C++', level: 'Avanzado' },
      { name: 'Diseño y Fabricación de PCB (Proteus / Cloruro Férrico)', level: 'Intermedio' },
      { name: 'Impresión 3D FDM (Creality / PLA)', level: 'Intermedio' },
      { name: 'Sensores Resistivos, Divisores & PWM', level: 'Avanzado' },
      { name: 'Simulación (Cirkit Designer / Tinkercad)', level: 'Intermedio' }
    ]
  },
  {
    id: 'frontend',
    title: 'Desarrollo Frontend',
    description: 'Interfaces web reactivas, accesibles y con diseño responsive mobile-first.',
    icon: 'Layout',
    skills: [
      { name: 'React 18 / 19', level: 'Intermedio', highlight: true },
      { name: 'TypeScript / JavaScript', level: 'Intermedio', highlight: true },
      { name: 'Vite & Herramientas Modernas', level: 'Intermedio' },
      { name: 'Tailwind CSS', level: 'Avanzado', highlight: true },
      { name: 'Leaflet & Mapas Interactivos', level: 'Intermedio' },
      { name: 'Framer Motion', level: 'Intermedio' },
      { name: 'HTML5 Semántico & Accesibilidad WCAG', level: 'Avanzado' },
      { name: 'Consumo de APIs REST & WebSockets', level: 'Intermedio' }
    ]
  },
  {
    id: 'backend',
    title: 'Desarrollo Backend',
    description: 'Arquitecturas de API REST, seguridad con JWT y procesamiento de datos.',
    icon: 'Server',
    skills: [
      { name: 'Python 3 (FastAPI)', level: 'Intermedio', highlight: true },
      { name: 'SQLAlchemy (ORM)', level: 'Intermedio' },
      { name: 'Autenticación JWT & Bcrypt', level: 'Intermedio' },
      { name: 'Alembic (Migraciones)', level: 'Intermedio' },
      { name: 'Pruebas Unitarias con Pytest', level: 'Intermedio' },
      { name: 'Gestor de paquetes uv & pip', level: 'Intermedio' }
    ]
  },
  {
    id: 'databases',
    title: 'Bases de Datos',
    description: 'Modelado relacional, optimización de consultas y persistencia segura.',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL (Neon Serverless)', level: 'Intermedio', highlight: true },
      { name: 'Microsoft SQL Server 2022 Express', level: 'Intermedio', highlight: true },
      { name: 'Transact-SQL (T-SQL)', level: 'Intermedio' },
      { name: 'SQLite', level: 'Avanzado' },
      { name: 'SQL Server Management Studio (SSMS)', level: 'Intermedio' },
      { name: 'pyodbc / asyncpg', level: 'Intermedio' }
    ]
  },
  {
    id: 'devops-tools',
    title: 'Herramientas & Despliegue',
    description: 'Control de versiones, despliegue continuo en la nube y utilidades de automatización.',
    icon: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Intermedio', highlight: true },
      { name: 'Vercel (Despliegue SPA & Backend)', level: 'Intermedio', highlight: true },
      { name: 'Netlify', level: 'Intermedio' },
      { name: 'PowerShell & Bash Scripting', level: 'Intermedio' },
      { name: 'Chocolatey (Gestor de Paquetes Windows)', level: 'Intermedio' },
      { name: 'Flujos Asistidos por Inteligencia Artificial', level: 'Avanzado', highlight: true }
    ]
  }
];
