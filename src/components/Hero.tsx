import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Cpu, Sparkles, ShieldCheck, MapPin, Code2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-violet-100 dark:border-violet-950/60">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-violet-400/15 to-purple-500/15 dark:from-violet-600/10 dark:to-purple-900/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>I.S.F.T. N° 176 - Morón • Ciclo 2025/2026</span>
            </motion.div>

            {/* Title & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Agustín Fernando{' '}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Falsetti
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-violet-700 dark:text-violet-400 flex items-center gap-2">
                <Cpu className="w-6 h-6 inline-block" />
                Internet de las Cosas & Sistemas Embebidos
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Combino la ingeniería de hardware físico (sensores, microcontroladores ESP32, protocolos de baja latencia como ESP-NOW, diseño de PCBs y manufactura 3D) con el desarrollo web full-stack moderno (React, FastAPI, PostgreSQL y arquitectura cloud). Cada proyecto está documentado con rigor técnico y pruebas reales de funcionamiento.
            </motion.p>

            {/* Location & Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-violet-500" /> Morón, Buenos Aires, Argentina
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-violet-500" /> Full-Stack & Firmware C++
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-violet-500" /> Enfoque Prototipado Rápido + IA
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-violet-600 hover:bg-violet-700 active:scale-98 shadow-lg shadow-violet-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/cv-agustin-falsetti.pdf"
                download="CV-Agustin-Falsetti.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#181528] hover:bg-violet-50 dark:hover:bg-violet-950/50 border border-violet-200 dark:border-violet-800/80 active:scale-98 shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <Download className="w-4 h-4 text-violet-500" />
                <span>Descargar CV</span>
              </a>
              <Link
                to="/proceso"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 py-2 px-3 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Cómo trabajo</span>
              </Link>
            </motion.div>
          </div>

          {/* Quick Metrics / Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-white to-violet-50/70 dark:from-[#161324] dark:to-[#120f1e] border border-violet-200/80 dark:border-violet-900/60 shadow-xl shadow-violet-500/5">
              <div className="flex items-center justify-between pb-6 border-b border-violet-100 dark:border-violet-900/60">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Perfil Profesional</h3>
                  <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">Currículum & Trayectoria Técnica</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#1a172a] border border-violet-100 dark:border-violet-900/40">
                  <div className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">4</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Proyectos Clave Documentados</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#1a172a] border border-violet-100 dark:border-violet-900/40">
                  <div className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">1:1</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Mano Robótica Escala Real</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#1a172a] border border-violet-100 dark:border-violet-900/40">
                  <div className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">100%</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Tests Pytest en Morón Responde</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#1a172a] border border-violet-100 dark:border-violet-900/40">
                  <div className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">&lt;10ms</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">Latencia ESP-NOW en MIMIC MANUS</div>
                </div>
              </div>

              <div className="pt-4 border-t border-violet-100 dark:border-violet-900/60">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">Especialidad de Trabajo:</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-violet-100/80 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300">
                    ESP32 & C++
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-violet-100/80 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300">
                    React + TypeScript
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-violet-100/80 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300">
                    FastAPI
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-violet-100/80 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300">
                    PostgreSQL & SQL Server
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-violet-100/80 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300">
                    MQTT / HiveMQ
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
