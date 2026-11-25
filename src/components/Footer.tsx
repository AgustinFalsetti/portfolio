import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-violet-100 dark:border-violet-950 bg-white/60 dark:bg-[#0a0810] text-slate-600 dark:text-slate-400 py-12 transition-colors duration-200 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <span className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
                AF
              </span>
              <span>Agustín Fernando Falsetti</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Técnico Superior en Internet de las Cosas y Sistemas Embebidos (I.S.F.T. N° 176 - Morón) y Desarrollador Full-Stack. Pasión por unir el mundo físico (sensores, microcontroladores, PCBs) con plataformas web modernas y accesibles.
            </p>
            <div className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Disponible para proyectos, pasantías y desarrollo tecnológico
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Sobre Mí & Trayectoria
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Proyectos Documentados
                </Link>
              </li>
              <li>
                <Link to="/proceso" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Metodología de Trabajo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Conexión
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:agustin.fer.falsetti96@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-violet-500" />
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AgustinFalsetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-violet-500" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/agustinfalsetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-violet-500" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/cv-agustin-falsetti.pdf"
                  download="CV-Agustin-Falsetti.pdf"
                  className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <FileText className="w-4 h-4 text-violet-500" />
                  <span>Descargar CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-violet-100 dark:border-violet-950/70 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Agustín Fernando Falsetti. Código abierto bajo licencia MIT.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3.5 h-3.5 text-violet-500 fill-violet-500 inline" /> en Morón, Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};
