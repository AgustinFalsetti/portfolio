export interface ProjectTimelineItem {
  phase: string;
  title: string;
  date: string;
  description: string;
  decisions?: string[];
  challenge?: string;
  solution?: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'iot' | 'frontend' | 'fullstack' | 'devops';
  categoryLabel: string;
  tags: string[];
  featured: boolean;
  date: string;
  role: string;
  team: string;
  summary: string;
  objectives: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  status: 'Completado' | 'En producción' | 'Documentado';
  hardwareBom?: { item: string; spec: string; qty: string }[];
  architecture: {
    description: string;
    flow: { from: string; to: string; label: string }[];
    techDetails: string[];
  };
  timeline: ProjectTimelineItem[];
  aiWorkflow: {
    description: string;
    promptsSummary: string[];
    learningsFromAI: string;
  };
  resultsAndLearnings: {
    results: string[];
    learnings: string[];
    futureWork?: string[];
  };
}

export const projects: ProjectData[] = [
  {
    id: 'mimic-manus',
    slug: 'mimic-manus',
    title: 'MIMIC MANUS (Glove Hand IoT)',
    subtitle: 'Mano robótica antropomórfica biomimética con teleoperación háptica y plataforma IoT',
    category: 'iot',
    categoryLabel: 'IoT & Sistemas Embebidos',
    tags: ['ESP32', 'ESP-NOW', 'MQTT', 'C++', 'Arduino', 'Impresión 3D PLA', 'Hardware PCB', 'Netlify'],
    featured: true,
    date: 'Abril 2025 - Noviembre 2026',
    role: 'Desarrollador de Hardware, Firmware ESP32 y Ruteo Mecánico',
    team: 'Vilma Bruzzo y Agustín Falsetti (Orientador: Prof. Edgardo Lovillo - ISFT 176)',
    summary: 'Prototipo de mano robótica articulada a escala real 1:1, construida en manufactura aditiva FDM (filamento PLA) y comandada de forma remota e inalámbrica mediante un guante sensorizado de interfaz humana. Utiliza una arquitectura distribuida basada en dos microcontroladores ESP32 comunicados punto a punto con protocolo ESP-NOW de baja latencia y una pasarela Wi-Fi conectada a HiveMQ Cloud por TLS para supervisión web en tiempo real.',
    objectives: [
      'Diseñar, imprimir en 3D (19 piezas articuladas) y ensamblar una mano robótica derecha a escala 1:1.',
      'Implementar un guante textil ergonómico con 5 sensores de flexión comerciales y circuito divisor de tensión.',
      'Diseñar y fabricar placas de circuito impreso (PCB) en cloruro férrico para el emisor portátil y la etapa de potencia.',
      'Establecer comunicación inalámbrica dual: enlace directo ESP-NOW de mínima latencia y telemetría MQTT TLS hacia la nube.',
      'Validar el prototipo con 3 dedos activos por limitación presupuestaria inicial, proyectándolo a 5 dedos para el hackatón educativo en Morón.'
    ],
    image: '/images/mimic-manus/guante.jpg',
    demoUrl: 'https://glovehand.netlify.app/',
    repoUrl: '[COMPLETAR: URL de repositorio GitHub MIMIC-MANUS]',
    status: 'En producción',
    hardwareBom: [
      { item: 'ESP32-WROOM-32', spec: 'SoC Dual-Core 240 MHz, Wi-Fi/BLE, USB-C', qty: '2 unidades' },
      { item: 'Servomotores SG90', spec: 'Torque 2.5 kg·cm, 180°, alimentación 4.8-6V', qty: '5 unidades' },
      { item: 'Sensores de Flexión', spec: 'Transductores resistivos 15kΩ (recto) a 80kΩ (curvo)', qty: '5 unidades' },
      { item: 'Resistores divisores', spec: '22 kΩ (media geométrica óptima)', qty: '5 unidades' },
      { item: 'Fuente externa de potencia', spec: 'Regulada 5V / 3A (prevención de brownouts)', qty: '1 unidad' },
      { item: 'Filamento 3D', spec: 'PLA Printalot Violeta / Creality Ender 3 Pro', qty: '19 piezas' }
    ],
    architecture: {
      description: 'Arquitectura distribuida en dos nodos: Guante Emisor (alimentado con litio 3.7V) y Mano Receptora/Pasarela (con fuente externa 5V 3A). El enlace de control gestual viaja por ESP-NOW a 2.4 GHz evitando cualquier router, mientras que el ESP32 receptor se conecta a la red Wi-Fi para publicar en HiveMQ Cloud.',
      flow: [
        { from: 'Guante (5 Flex Sensors)', to: 'ESP32 Transmisor (ADC1)', label: 'Lectura analógica (0-3.3V)' },
        { from: 'ESP32 Transmisor', to: 'ESP32 Receptor (Mano)', label: 'ESP-NOW (Paquete MAC directo, ~5ms)' },
        { from: 'ESP32 Receptor', to: 'Servomotores SG90', label: 'PWM 50 Hz (0° - 180° por tendón)' },
        { from: 'ESP32 Receptor', to: 'HiveMQ Cloud (TLS 8883)', label: 'MQTT Publish (guante/dedo1..5)' },
        { from: 'HiveMQ Cloud', to: 'Web App Netlify', label: 'WebSockets TLS (Telemetría y Gestos)' }
      ],
      techDetails: [
        'Mapeo de pines analógicos en ADC1 (GPIO 34, 35, 32, 33, 36) para evitar colisión con el radio Wi-Fi en ADC2.',
        'Masa común unificada entre fuente externa de 5V y ESP32 para eliminar ruido electromagnético.',
        'Canal Wi-Fi estático sincronizado con el AP/hotspot para asegurar recepción de tramas ESP-NOW.'
      ]
    },
    timeline: [
      {
        phase: 'Fase 1',
        title: 'Prueba de concepto artesanal',
        date: 'Abril 2025',
        description: 'Construcción de sensores de flexión caseros con papel, grafito y aluminio, conectados a Arduino UNO R3 en protoboard.',
        decisions: ['Validar la cinemática de tendones con costo cero antes de comprar sensores importados.'],
        challenge: 'Los sensores de grafito presentaban desgaste mecánico severo tras pocas flexiones y deriva de lectura.',
        solution: 'Migración a sensores resistivos comerciales montados sobre guante textil Random con termocontraíble.'
      },
      {
        phase: 'Fase 2',
        title: 'Cinemática 3D y presupuesto acotado (3 dedos)',
        date: 'Agosto 2025',
        description: 'Impresión de las 19 piezas en PLA en la Creality Ender 3 Pro del instituto y ensamblaje de la estructura anatómica.',
        decisions: ['Priorizar pulgar, índice y medio en la primera prueba física debido a la disponibilidad inicial de 3 servos SG90.'],
        challenge: 'Fricción excesiva de la tanza de nylon en los conductos internos de las falanges impresas por capas FDM.',
        solution: 'Lijado manual fino de conductos y lubricación seca, logrando retorno suave con elástico dorsal.'
      },
      {
        phase: 'Fase 3',
        title: 'Migración a arquitectura dual ESP32 e IoT',
        date: 'Septiembre 2026',
        description: 'Reemplazo del Arduino UNO por dos ESP32-WROOM-32. Implementación de protocolo ESP-NOW y pasarela MQTT.',
        decisions: ['Desacoplar el control mecánico de la conexión a internet para evitar retardos al mover los dedos.'],
        challenge: 'Reinicios intempestivos del microcontrolador al moverse los servos (stall current hasta 750 mA por servo).',
        solution: 'Diseño de PCB propia con etapa de alimentación externa 5V / 3A y línea de tierra (GND) unificada.'
      },
      {
        phase: 'Fase 4',
        title: 'Web App Netlify y telemetría en la nube',
        date: 'Octubre - Noviembre 2026',
        description: 'Despliegue del dashboard en Netlify con control de gestos (Mano abierta, Puño, Pinza, OK) y enlace seguro TLS a HiveMQ Cloud.',
        decisions: ['Utilizar WebSockets seguros para que la web funcione en cualquier navegador móvil sin configuración.'],
        challenge: 'El pin GPIO 25 (ADC2) dejaba de leer al encender el Wi-Fi para conectar con HiveMQ.',
        solution: 'Reasignación de pin al GPIO 36 (VP, ADC1), garantizando lectura simultánea a la transmisión.'
      }
    ],
    aiWorkflow: {
      description: 'El desarrollo contó con asistencia de modelos de IA para la depuración de esquemas de conexión, optimización del firmware en C++ y estructuración del informe técnico.',
      promptsSummary: [
        '"Cómo evitar que el ADC2 de ESP32 falle al inicializar WiFiClientSecure"',
        '"Estructura de paquetes struct para transmisión bidireccional en ESP-NOW con verificación de checksum"',
        '"Diseño de un divisor de tensión óptimo para maximizar el rango dinámico de sensores resistivos de 15k a 80k ohmios"'
      ],
      learningsFromAI: 'La IA aceleró notablemente la detección del conflicto de hardware entre el ADC2 y el radio Wi-Fi, permitiendo reasignar pines a GPIOs del ADC1 antes de atacar químicamente las placas PCB.'
    },
    resultsAndLearnings: {
      results: [
        'Respuesta en tiempo real con latencia imperceptible (<10ms) en la sincronización de dedos vía ESP-NOW.',
        'Supervisión remota y control gestual en producción desde https://glovehand.netlify.app/.',
        'Costo total de materiales inferior al 5% del valor de una prótesis comercial equivalente.'
      ],
      learnings: [
        'En sistemas electromecánicos, desacoplar la potencia de la lógica de control es indispensable.',
        'La manufactura aditiva y el open-source permiten crear tecnología de accesibilidad de calidad profesional en la educación técnica pública.'
      ],
      futureWork: [
        'Incorporación de sensores de presión piezoeléctricos (FSR) en las yemas y vibradores hápticos en el guante para feedback táctil.',
        'Rutina de autocalibración en el arranque para diferentes anatomías de mano.'
      ]
    }
  },
  {
    id: 'moron-responde',
    slug: 'moron-responde',
    title: 'Morón Responde',
    subtitle: 'Plataforma cívica web de reclamos urbanos y seguimiento en tiempo real para el Municipio de Morón',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web (React + FastAPI)',
    tags: ['React 18', 'TypeScript', 'Vite', 'FastAPI', 'Python 3.12', 'SQLAlchemy', 'PostgreSQL Neon', 'JWT', 'Leaflet', 'Tailwind CSS', 'Vercel'],
    featured: true,
    date: 'Septiembre 2026 - Octubre 2026',
    role: 'Desarrollador Full-Stack (Frontend, API REST, Migración de Base de Datos y Despliegue)',
    team: 'Proyecto individual evaluado y validado en Antigravity',
    summary: 'Plataforma web integral para que vecinos del Partido de Morón radiquen incidencias urbanas (baches, luminarias, higiene, arbolado) y sigan el avance de sus expedientes mediante un código de ticket único (ej. MOR-2025-XXXX). Incorpora validación geoespacial con GeoJSON para garantizar que los reclamos pertenezcan estrictamente a la jurisdicción de Morón, línea de tiempo cívica (CivicTimeline), catálogo de obras públicas geolocalizadas y panel de teléfonos útiles y UGCs.',
    objectives: [
      'Construir una SPA responsive con React, Vite, TypeScript y Tailwind CSS conforme al sistema de diseño municipal DESIGN.md.',
      'Desarrollar una API REST robusta en Python (FastAPI) con autenticación JWT y roles de usuario (vecino y administrador).',
      'Implementar mapa interactivo con Leaflet que restrinja geográficamente la selección de puntos dentro del perímetro de Morón.',
      'Migrar la base de datos de desarrollo (SQLite / SQL Server local) a PostgreSQL serverless en Neon Cloud y desplegar en Vercel.'
    ],
    image: '/images/moron-responde/screen.png',
    demoUrl: '[COMPLETAR: URL de despliegue en Vercel]',
    repoUrl: '[COMPLETAR: URL de repositorio GitHub Morón Responde]',
    status: 'En producción',
    architecture: {
      description: 'Arquitectura desacoplada en monorepo (/frontend y /backend). El frontend en React consume la API REST de FastAPI protegida por tokens Bearer JWT. Los reclamos y el historial de estados se almacenan en PostgreSQL gestionado con SQLAlchemy y migraciones automáticas Alembic.',
      flow: [
        { from: 'Vecino (Frontend React)', to: 'FastAPI Backend', label: 'POST /api/reclamos (Datos + Coordenadas GPS)' },
        { from: 'FastAPI Backend', to: 'GeoJSON Polygon Filter', label: 'Validación geométrica Point-in-Polygon Morón' },
        { from: 'FastAPI Backend', to: 'PostgreSQL (Neon Cloud)', label: 'Persistencia transaccional (Ticket MOR-2025-XXXX)' },
        { from: 'Vecino / Público', to: 'GET /api/reclamos/{ticket}', label: 'Consulta pública de CivicTimeline sin login' }
      ],
      techDetails: [
        'Generador de tickets automáticos con prefijo institucional y secuencia anual (MOR-2025-XXXX).',
        'Validación estricta de coordenadas con la capa vectorial oficial de los límites del Partido de Morón.',
        'Migración de cadena de conexión desde SQL Server (pyodbc) hacia PostgreSQL (asyncpg/psycopg2) en Neon.'
      ]
    },
    timeline: [
      {
        phase: 'Fase 1',
        title: 'Diseño de arquitectura y sistema de diseño',
        date: '22 Septiembre 2026',
        description: 'Traducción de DESIGN.md y maqueta code.html a componentes React con tokens cromáticos oficiales (#be000d municipal, #135eae cívico, #006b42 resuelto).',
        decisions: ['Utilizar TypeScript para garantizar tipado estricto en los estados de reclamo y respuestas de la API.'],
        challenge: 'Configurar el entorno Node.js y Python 3.12 con uv en entorno Windows.',
        solution: 'Instalación de Python 3.12 gestionado con uv y Node v20.18.0 en variables de entorno locales.'
      },
      {
        phase: 'Fase 2',
        title: 'Desarrollo de API REST y persistencia',
        date: '23 Septiembre 2026',
        description: 'Modelado relacional con SQLAlchemy: tablas Users, Reclamos, EstadoHistorial y Obras. Endpoints de autenticación JWT y creación de tickets.',
        decisions: ['Permitir la consulta de tickets tanto autenticado como anónimo para máxima accesibilidad ciudadana.']
      },
      {
        phase: 'Fase 3',
        title: 'Geolocalización y Delimitación Territorial',
        date: '24 Septiembre 2026',
        description: 'Integración de Leaflet con polígono GeoJSON de Morón para rechazar reportes fuera de jurisdicción.',
        decisions: ['Detectar automáticamente UGC (Unidad de Gestión Comunitaria) más cercana según la coordenada ingresada.'],
        challenge: 'El marcador se permitía colocar fuera del límite municipal si el GPS del celular tenía baja precisión.',
        solution: 'Algoritmo de contención espacial que advierte al usuario si el punto cae fuera del perímetro municipal.'
      },
      {
        phase: 'Fase 4',
        title: 'Migración a PostgreSQL Neon y despliegue en Vercel',
        date: 'Octubre 2026',
        description: 'Migración de la base de datos de desarrollo a PostgreSQL serverless en Neon y configuración de vercel.json para el frontend.',
        decisions: ['Sustituir la configuración previa de SQL Server por PostgreSQL para facilitar el despliegue serverless continuo.']
      }
    ],
    aiWorkflow: {
      description: 'Se utilizó IA en Antigravity para la generación del plan de implementación, scaffolding de componentes y auditoría técnica documentada.',
      promptsSummary: [
        '"Generar modelo SQLAlchemy con generación de ticket MOR-2025-XXXX y relación uno a muchos para historial de estados"',
        '"Crear componente CivicTimeline en Tailwind CSS que muestre estados pendientes, en curso y resueltos con íconos"',
        '"Script en Python para procesar el polígono GeoJSON de Morón y optimizarlo para carga web"'
      ],
      learningsFromAI: 'La IA aceleró la cobertura de pruebas unitarias con pytest (6/6 tests de endpoints en verde) y la adaptación visual al portal oficial moron.gob.ar.'
    },
    resultsAndLearnings: {
      results: [
        'Plataforma 100% funcional con 5 secciones: Inicio, Reportar Incidencia, Mis Solicitudes, Mapa de Obras y Teléfonos.',
        'Pruebas unitarias superadas al 100% y compilación para producción sin errores con Vite.',
        'Informe técnico completo generado en Markdown y docx.'
      ],
      learnings: [
        'La gestión de bases de datos serverless (Neon) simplifica enormemente el despliegue frente a motores on-premise.',
        'El diseño enfocado en accesibilidad ciudadana exige interfaces limpias y búsquedas instantáneas sin fricciones de login.'
      ]
    }
  },
  {
    id: 'isft-176-web',
    slug: 'isft-176-web',
    title: 'Sitio Web Institucional I.S.F.T. N° 176',
    subtitle: 'Rediseño y modernización del portal web institucional del Instituto Superior de Formación Técnica N° 176 de Morón',
    category: 'frontend',
    categoryLabel: 'Frontend & UI Design',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Design System', 'Accesibilidad Web'],
    featured: false,
    date: 'Octubre 2026',
    role: 'Desarrollador Frontend & Diseñador de Interfaces',
    team: 'Proyecto académico en el ISFT 176',
    summary: 'Propuesta de modernización del sitio web oficial del I.S.F.T. N° 176, desarrollada con Vite, React y Tailwind CSS a partir de una especificación estricta de diseño institucional (DESIGN.md), code.html y capturas de referencia. Destaca la oferta académica de tecnicaturas superiores, sección de inscripciones, calendario y canales de comunicación.',
    objectives: [
      'Implementar un diseño moderno, accesible e intuitivo para la comunidad educativa del instituto.',
      'Organizar la información académica de carreras (IoT y Sistemas Embebidos, etc.) y requisitos de ingreso.',
      'Asegurar compatibilidad móvil total y rendimiento óptimo en conexiones lentas.'
    ],
    image: '/images/isft-176/logo.png',
    demoUrl: '[COMPLETAR: URL de demo ISFT 176]',
    repoUrl: '[COMPLETAR: URL de repositorio GitHub ISFT 176]',
    status: 'Completado',
    architecture: {
      description: 'Single Page Application estática basada en React, con componentes modulares para cada carrera, avisos institucionales y formularios de preinscripción.',
      flow: [
        { from: 'Estudiante / Aspirante', to: 'Portal React (Vite)', label: 'Navegación por Carreras e Información' },
        { from: 'Portal React', to: 'Sistema de Archivos Estáticos', label: 'Carga instantánea de planes de estudio' }
      ],
      techDetails: [
        'Estructura basada en componentes reutilizables (CareerCard, NoticeBanner, FacultySection).',
        'Optimización de imágenes institucionales y tipografía legible para lectores de pantalla.'
      ]
    },
    timeline: [
      {
        phase: 'Fase 1',
        title: 'Análisis de requerimientos y sistema de diseño',
        date: 'Octubre 2026',
        description: 'Definición de tokens visuales, colores institucionales y jerarquías tipográficas a partir de DESIGN.md.',
        decisions: ['Adoptar Tailwind CSS para iterar rápidamente sobre la paleta de colores del instituto.']
      },
      {
        phase: 'Fase 2',
        title: 'Maquetación e interactividad',
        date: 'Octubre 2026',
        description: 'Construcción de secciones interactivas, pestañas de carreras y preguntas frecuentes.',
        decisions: ['Optimizar la vista móvil priorizando las fechas clave de inscripción.']
      }
    ],
    aiWorkflow: {
      description: 'Asistencia con IA para convertir maquetas estáticas de code.html a componentes funcionales en React TypeScript.',
      promptsSummary: [
        '"Refactorizar maquetado HTML de sección de carreras a componentes reutilizables en React con Tailwind CSS"',
        '"Mejorar accesibilidad de contraste en botones institucionales según WCAG AA"'
      ],
      learningsFromAI: 'La integración asistida de diseño permite mantener coherencia visual exacta entre los lineamientos gráficos y el código final.'
    },
    resultsAndLearnings: {
      results: [
        'Sitio web institucional rápido, modular y con diseño adaptable a cualquier pantalla.',
        'Documentación lista para mantenimiento por futuros cursos de la tecnicatura.'
      ],
      learnings: [
        'La estandarización en un archivo DESIGN.md evita inconsistencias de espaciado y estilos en el equipo.'
      ]
    }
  },
  {
    id: 'sql-server-windows10',
    slug: 'sql-server-windows10',
    title: 'Guía y Despliegue Automatizado: SQL Server 2022 Express en Windows 10',
    subtitle: 'Automatización de instalación, configuración con sqlcmd y gestión con SSMS para entornos de desarrollo',
    category: 'devops',
    categoryLabel: 'Bases de Datos & DevOps',
    tags: ['SQL Server 2022', 'Transact-SQL', 'PowerShell', 'Chocolatey', 'SSMS', 'Windows 10', 'pyodbc'],
    featured: false,
    date: 'Noviembre 2026',
    role: 'Administrador de Base de Datos y Automatización',
    team: 'Proyecto personal y material técnico de consulta',
    summary: 'Guía técnica y conjunto de scripts reproducibles para instalar, inicializar y configurar Microsoft SQL Server 2022 Express en Windows 10 mediante gestores de paquetes (Chocolatey) y utilidades de línea de comandos (sqlcmd). Cubre configuración de autenticación mixta (SQL y Windows), apertura de puertos TCP/IP (1433), creación de bases de datos relacionales, usuarios dedicados y conexión desde Python vía pyodbc y SQLAlchemy.',
    objectives: [
      'Documentar un procedimiento infalible y repetible para levantar SQL Server 2022 Express en Windows 10 sin fricciones.',
      'Configurar autenticación mixta y usuario sa de forma segura.',
      'Habilitar el protocolo TCP/IP y servicio SQL Server Browser para conexiones remotas y contenedores.',
      'Integrar con herramientas modernas de desarrollo como SSMS, DBeaver y librerías de Python (pyodbc).'
    ],
    image: '/images/sql-server/logo.png',
    demoUrl: undefined,
    repoUrl: '[COMPLETAR: URL de repositorio de scripts SQL Server]',
    status: 'Documentado',
    architecture: {
      description: 'Flujo de instalación y configuración por comandos en Windows PowerShell, vinculando el motor de base de datos con aplicaciones backend.',
      flow: [
        { from: 'PowerShell / Chocolatey', to: 'SQL Server 2022 Express Installer', label: 'choco install sql-server-express' },
        { from: 'sqlcmd CLI', to: 'Instancia SQLEXPRESS', label: 'Habilitación de TCP 1433 y Auth Mixta' },
        { from: 'Python App (pyodbc / SQLAlchemy)', to: 'Instancia SQLEXPRESS', label: 'Conexión por ODBC Driver 18' }
      ],
      techDetails: [
        'Script de verificación de estado de servicios con Get-Service MSSQL$SQLEXPRESS.',
        'Comandos sqlcmd para creación de bases de datos, esquemas relacionales y usuarios con roles restringidos.'
      ]
    },
    timeline: [
      {
        phase: 'Fase 1',
        title: 'Investigación de problemas comunes en Windows 10',
        date: 'Noviembre 2026',
        description: 'Diagnóstico de fallas habituales de instalación en Windows (conflictos de puertos, servicios deshabilitados y permisos de usuario).',
        decisions: ['Optar por Chocolatey para estandarizar la versión exacta de los instaladores.']
      },
      {
        phase: 'Fase 2',
        title: 'Creación de la guía paso a paso y validación de scripts',
        date: 'Noviembre 2026',
        description: 'Redacción de la guía técnica completa en PDF y validación de scripts de inicialización con sqlcmd.',
        challenge: 'El firewall de Windows bloqueaba las conexiones locales entrantes en el puerto TCP 1433.',
        solution: 'Regla de firewall por PowerShell: New-NetFirewallRule -DisplayName "SQL Server" -Direction Inbound -Protocol TCP -LocalPort 1433 -Action Allow.'
      }
    ],
    aiWorkflow: {
      description: 'Uso de IA para validar sintaxis de T-SQL, comandos de PowerShell y formatear la guía técnica con diagramas de flujo.',
      promptsSummary: [
        '"Comando PowerShell para habilitar protocolo TCP/IP en SQL Server Configuration Manager"',
        '"Script T-SQL para verificar modo de autenticación y reiniciar servicio"'
      ],
      learningsFromAI: 'La automatización de infraestructura local documentada ahorra horas de configuración repetitiva en proyectos estudiantiles y laborales.'
    },
    resultsAndLearnings: {
      results: [
        'Guía técnica completa disponible en formato PDF descargable en el repositorio.',
        'Tiempo de aprovisionamiento de una base de datos local reducido de 45 minutos a menos de 10 minutos.'
      ],
      learnings: [
        'Comprender a fondo la arquitectura de servicios y protocolos de red de SQL Server es crucial para resolver problemas de conectividad con clientes modernos.'
      ]
    }
  }
];
