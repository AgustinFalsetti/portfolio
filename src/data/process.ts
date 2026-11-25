export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  methods: string[];
  realWorldExample: {
    project: string;
    context: string;
    action: string;
    learning: string;
  };
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Investigación, BOM y Arquitectura',
    subtitle: 'Antes de tocar código o circuitos: entender el problema real y cuantificar recursos',
    description: 'Todo desarrollo comienza con la formulación de objetivos claros, el relevamiento de viabilidad económica (BOM - Bill of Materials) y el modelado de la arquitectura de datos o del circuito eléctrico.',
    icon: 'Layers',
    methods: [
      'Definición de requerimientos funcionales y no funcionales.',
      'Listado de materiales (BOM) con cotizaciones locales y alternativas accesibles.',
      'Diagramas de flujo de datos y esquemas de conexión antes del ensamble.'
    ],
    realWorldExample: {
      project: 'MIMIC MANUS',
      context: 'Los sensores comerciales de flexión tenían un costo elevado y los servos SG90 necesitaban alimentación estable.',
      action: 'Se inició con una prueba de concepto casera en grafito/papel y se calculó la resistencia óptima de 22 kΩ para el divisor de tensión mediante la media geométrica antes de diseñar la PCB.',
      learning: 'Calcular los parámetros teóricos ahorra iteraciones costosas en componentes quemados o placas mal ruteadas.'
    }
  },
  {
    number: '02',
    title: 'Aceleración Asistida por IA',
    subtitle: 'Uso de modelos generativos como copiloto técnico de ingeniería',
    description: 'No uso la IA para que "haga el trabajo por mí", sino como un acelerador de scaffolding, búsqueda rápida de incompatibilidades de hardware, generación de pruebas unitarias y redacción de documentación técnica exhaustiva.',
    icon: 'Sparkles',
    methods: [
      'Scaffolding rápido de componentes y modelos relacionales tipados.',
      'Detección temprana de conflictos de registros o pines en microcontroladores.',
      'Generación de tests unitarios y validación de casos borde (edge cases).'
    ],
    realWorldExample: {
      project: 'Morón Responde & MIMIC MANUS',
      context: 'Necesidad de generar modelos SQLAlchemy con tickets MOR-2025-XXXX y de aislar el conflicto de pines en el ESP32.',
      action: 'Consultas guiadas para identificar que el ADC2 se desactiva al transmitir con Wi-Fi y scaffolding de suite de pruebas pytest.',
      learning: 'La IA es más potente cuando se le dan restricciones de ingeniería muy precisas en lugar de prompts genéricos.'
    }
  },
  {
    number: '03',
    title: 'Depuración Rigurosa de Problemas Reales',
    subtitle: 'El software y el hardware siempre fallan en los límites: ahí es donde se demuestra la ingeniería',
    description: 'Cuando un sistema físico o una base de datos falla, aplico un método científico de aislamiento de variables: mediciones con multímetro, análisis de consumo con osciloscopio o logs detallados en el monitor serie.',
    icon: 'Wrench',
    methods: [
      'Aislamiento de etapas de potencia y lógica de control.',
      'Inspección de tramas de red y paquetes por monitor serie.',
      'Validación de límites territoriales con algoritmos geométricos.'
    ],
    realWorldExample: {
      project: 'MIMIC MANUS',
      context: 'El ESP32 se reiniciaba constantemente al mover más de dos servomotores al mismo tiempo.',
      action: 'Se midió la corriente de bloqueo (stall current) alcanzando hasta 750 mA por servo; se diseñó una etapa con fuente externa 5V 3A y línea de masa (GND) unificada.',
      learning: 'En sistemas embebidos, el 90% de los comportamientos "fantasma" de software son en realidad problemas de alimentación eléctrica o ruido en masa.'
    }
  },
  {
    number: '04',
    title: 'Validación, Documentación y Despliegue Continuo',
    subtitle: 'Un proyecto no está terminado hasta que está probado, documentado y puesto en marcha',
    description: 'Todo entregable cuenta con documentación reproducible (README, informes técnicos, diagramas de arquitectura) y está preparado para despliegue automatizado en la nube (Vercel, Netlify, brokers MQTT o repositorios de firmware).',
    icon: 'Rocket',
    methods: [
      'Compilación y linting estricto (TypeScript, tsc, vite build).',
      'Despliegue continuo serverless con variables de entorno protegidas.',
      'Elaboración de informes técnicos de ingeniería con enfoque pedagógico y social.'
    ],
    realWorldExample: {
      project: 'Morón Responde',
      context: 'La plataforma requería correr en producción con base de datos en la nube sin costos de servidor dedicado.',
      action: 'Migración de SQLite/SQL Server local a PostgreSQL serverless en Neon Cloud, configuración de Vercel SPA routing y validación de 6/6 tests pytest.',
      learning: 'La arquitectura moderna serverless permite que proyectos de impacto ciudadano tengan disponibilidad continua y costo cero.'
    }
  }
];
