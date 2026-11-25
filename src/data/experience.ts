export interface EducationItem {
  institution: string;
  title: string;
  period: string;
  location: string;
  status: string;
  description: string;
  competencies: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Proyecto' | 'Académico' | 'Comunitario';
  description: string;
  achievements: string[];
  techStack: string[];
}

export const educationList: EducationItem[] = [
  {
    institution: 'I.S.F.T. N° 176 - Morón',
    title: 'Tecnicatura Superior en Internet de las Cosas y Sistemas Embebidos',
    period: '2023 - 2026 (En curso - 3er año)',
    location: 'Morón, Provincia de Buenos Aires, Argentina',
    status: 'Último año (Práctica Profesionalizante IV)',
    description: 'Formación técnico-profesional superior en adquisición de señales analógicas y digitales, diseño de circuitos electrónicos impresos (PCBs), arquitectura de microcontroladores (ESP32, Arduino, ARM), redes y protocolos IoT (ESP-NOW, MQTT, Wi-Fi, BLE, LoRa), y desarrollo de software para la captura, procesamiento y visualización de datos en la nube.',
    competencies: [
      'Programación en C/C++ para sistemas embebidos y microcontroladores.',
      'Diseño asistido por computadora (CAD) de circuitos impresos y manufactura 3D.',
      'Desarrollo de arquitecturas IoT distribuidas con seguridad TLS y brokers MQTT.',
      'Metodología de proyectos de ingeniería, carpetas de campo e informes técnicos.'
    ]
  },
  {
    institution: 'Formación Continua & Certificaciones en IoT y Software',
    title: 'Cursos de Especialización en IoT, Microcontroladores y Desarrollo Web',
    period: '2024 - 2026',
    location: 'Remoto / Buenos Aires',
    status: 'Completado',
    description: 'Especialización continua en desarrollo web moderno (React, FastAPI, TypeScript), bases de datos relacionales avanzadas (PostgreSQL y SQL Server) y aplicación de herramientas de Inteligencia Artificial para aceleración de flujos de desarrollo.',
    competencies: [
      'Full-Stack Web: React, TypeScript, Vite, Tailwind CSS.',
      'Backend moderno con Python, FastAPI y SQLAlchemy.',
      'Administración de servidores de bases de datos relacionales.'
    ]
  }
];

export const experienceList: ExperienceItem[] = [
  {
    role: 'Co-desarrollador de Hardware y Firmware',
    organization: 'Proyecto MIMIC MANUS (Glove Hand IoT)',
    period: 'Abril 2025 - Noviembre 2026',
    location: 'I.S.F.T. N° 176 - Morón',
    type: 'Proyecto',
    description: 'Lideré el diseño e implementación del firmware de baja latencia en ESP32 para teleoperación háptica mediante protocolo ESP-NOW y pasarela MQTT. Diseñé las placas PCB de distribución de potencia y guante transmisor.',
    achievements: [
      'Desarrollo de un enlace de comunicación con latencia imperceptible (<10ms) entre guante y mano.',
      'Resolución de problemas críticos de hardware (abastecimiento de corriente de servos y colisión ADC2 con Wi-Fi).',
      'Puesta en producción de dashboard web en Netlify accesible desde dispositivos móviles.'
    ],
    techStack: ['ESP32', 'ESP-NOW', 'MQTT TLS', 'C++', 'Proteus PCB', 'PLA 3D', 'Netlify']
  },
  {
    role: 'Desarrollador Full-Stack',
    organization: 'Plataforma Cívica Morón Responde',
    period: 'Septiembre 2026 - Octubre 2026',
    location: 'Municipio de Morón',
    type: 'Proyecto',
    description: 'Diseñé y construí de punta a punta una plataforma cívica municipal para el reporte y seguimiento de incidencias urbanas con mapa interactivo y geocercado estricto.',
    achievements: [
      'Implementación de API REST con FastAPI, SQLAlchemy y autenticación JWT con cobertura de pruebas 100%.',
      'Desarrollo de frontend responsive en React 18 con sistema de diseño municipal y Leaflet.',
      'Migración sin fricción de la base de datos a PostgreSQL en Neon Cloud y despliegue en Vercel.'
    ],
    techStack: ['React', 'FastAPI', 'PostgreSQL Neon', 'Tailwind CSS', 'Leaflet', 'Vercel']
  },
  {
    role: 'Diseñador Frontend & Maquetador',
    organization: 'Portal Web I.S.F.T. N° 176',
    period: 'Octubre 2026',
    location: 'Morón',
    type: 'Académico',
    description: 'Modernización del portal institucional del instituto a partir de tokens de diseño accesibles (DESIGN.md) y componentes reutilizables en React.',
    achievements: [
      'Estructura modular con alta fidelidad a las pautas de accesibilidad WCAG 2.1 AA.',
      'Organización de la información académica para facilitar la inscripción a carreras.'
    ],
    techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS']
  }
];
