import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Cpu, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Proceso', path: '/proceso' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0d0b14]/85 border-b border-violet-100 dark:border-violet-950/80 transition-colors duration-200 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-purple-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
              AF
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex items-center gap-1.5">
                Agustín Falsetti
                <Sparkles className="w-3.5 h-3.5 text-violet-500 animate-pulse" />
              </div>
              <div className="text-xs text-violet-600 dark:text-violet-400 font-medium flex items-center gap-1">
                <Cpu className="w-3 h-3" /> IoT & Software
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions: Theme Toggle & CV Download */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/cv-agustin-falsetti.pdf"
              download="CV-Agustin-Falsetti.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 active:scale-95 shadow-md shadow-violet-500/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <Download className="w-4 h-4" />
              <span>CV en PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú de navegación"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-violet-100 dark:hover:bg-violet-950/60 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-violet-100 dark:border-violet-900 bg-white/95 dark:bg-[#120f1d]/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-950/40'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="/cv-agustin-falsetti.pdf"
              download="CV-Agustin-Falsetti.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV en PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
