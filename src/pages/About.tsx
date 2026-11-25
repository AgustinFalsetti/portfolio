import React from 'react';
import { educationList, experienceList } from '../data/experience';
import { Download, Printer, GraduationCap, Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Top Header / CV Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-violet-100 dark:border-violet-900/60">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Sobre Mí & Currículum
          </h1>
          <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mt-1">
            Formación, Trayectoria Técnica y Enfoque Profesional
          </p>
        </div>

        {/* Print & Download buttons */}
        <div className="flex items-center gap-2 no-print">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-[#161324] border border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-colors cursor-pointer"
            title="Imprimir versión CV"
          >
            <Printer className="w-4 h-4 text-violet-500" />
            <span>Imprimir</span>
          </button>
          <a
            href="/cv-agustin-falsetti.pdf"
            download="CV-Agustin-Falsetti.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Descargar PDF</span>
          </a>
        </div>
      </div>

      {/* Bio Presentation */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>Perfil y Visión de Ingeniería</span>
        </h2>
        <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-3">
          <p>
            Mi nombre es <strong>Agustín Fernando Falsetti</strong>, estudiante avanzado de 3er año en la <strong>Tecnicatura Superior en Internet de las Cosas y Sistemas Embebidos</strong> en el <strong>I.S.F.T. N° 176 de Morón</strong>.
          </p>
          <p>
            Mi pasión radica en la convergencia entre el mundo físico y las aplicaciones de software moderno. No concibo los sistemas embebidos aislados del usuario: creo firmemente en el poder de conectar sensores y actuadores a plataformas web escalables, intuitivas y accesibles.
          </p>
          <p>
            A lo largo de mi formación, he liderado desarrollos que abarcan desde el cálculo de divisores resistivos y el ruteo de placas PCB con atacado químico, hasta el desarrollo de APIs REST en Python (FastAPI), interfaces reactivas en React con TypeScript y la orquestación de bases de datos relacionales en la nube (PostgreSQL y SQL Server).
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-violet-700 dark:text-violet-400 font-bold text-lg">
          <GraduationCap className="w-5 h-5" />
          <h2>Educación y Formación Académica</h2>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs space-y-3"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <div className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                    {edu.institution}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {edu.period}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                    {edu.status}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Competencias Principales:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {edu.competencies.map((comp, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-violet-700 dark:text-violet-400 font-bold text-lg">
          <Briefcase className="w-5 h-5" />
          <h2>Experiencia Técnica y Proyectos Clave</h2>
        </div>

        <div className="space-y-6">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs space-y-3"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                    {exp.organization}
                  </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {exp.period}
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Logros & Desafíos Resueltos:
                </p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-violet-500 font-bold">›</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
