import React, { useState } from 'react';
import { Copy, Check, MapPin, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'agustin.fer.falsetti96@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#8b5cf6', '#c4b5fd', '#10b981'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contacto Directo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Hablemos sobre Proyectos y Tecnología
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Estoy disponible para oportunidades laborales, pasantías profesionales, proyectos de desarrollo IoT, firmware y aplicaciones web full-stack.
        </p>
      </div>

      {/* Direct Email Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white shadow-xl shadow-violet-500/20 text-center space-y-6 relative overflow-hidden">
        <div className="space-y-2">
          <p className="text-xs uppercase font-bold tracking-widest text-violet-200">
            Correo Electrónico Principal
          </p>
          <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono tracking-tight break-all">
            {email}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${email}?subject=Contacto%20desde%20Portfolio%20Web`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-violet-900 font-bold text-sm hover:bg-violet-50 shadow-md transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Enviar Correo Directo</span>
          </a>

          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-sm border border-white/20 transition-all active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-300 font-semibold">¡Copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Dirección</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Social and Institutional Connections */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/AgustinFalsetti"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950 flex items-center justify-center text-violet-700 dark:text-violet-300 group-hover:scale-110 transition-transform">
            <GithubIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">GitHub</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Repositorios, código fuente y colaboraciones.
            </p>
          </div>
          <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Ver perfil ›
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/agustinfalsetti"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition-all group flex flex-col justify-between space-y-4"
        >
          <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950 flex items-center justify-center text-violet-700 dark:text-violet-300 group-hover:scale-110 transition-transform">
            <LinkedinIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">LinkedIn</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Conexión profesional y trayectoria académica.
            </p>
          </div>
          <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Conectar ›
          </span>
        </a>

        {/* Location / Instituto */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs flex flex-col justify-between space-y-4">
          <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950 flex items-center justify-center text-violet-700 dark:text-violet-300">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Ubicación</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Morón, Provincia de Buenos Aires, Argentina. I.S.F.T. N° 176.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            Zona Oeste / Remoto
          </span>
        </div>
      </div>
    </div>
  );
};
