import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { SkillGroup } from '../components/SkillGroup';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { processSteps } from '../data/process';
import { ArrowRight, Sparkles, Cpu, Award } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Projects Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Proyectos Clave</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Trabajo Destacado
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Proyectos reales que integran hardware físico a escala, protocolos de comunicaciones y desarrollo web full-stack con documentación de proceso.
            </p>
          </div>
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
          >
            <span>Ver todos ({projects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3. Methodology & Process Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden shadow-xl shadow-violet-500/15">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Metodología Transversal</span>
            </div>

            <div className="max-w-2xl space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                ¿Cómo abordo un problema de ingeniería?
              </h2>
              <p className="text-violet-100 text-sm sm:text-base leading-relaxed">
                Desde la formulación del BOM de componentes y la aceleración con Inteligencia Artificial, hasta la depuración de caídas de tensión y el despliegue serverless continuo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2"
                >
                  <div className="text-2xl font-black text-violet-300">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-sm text-white">{step.title}</h4>
                  <p className="text-xs text-violet-100 leading-relaxed line-clamp-2">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/proceso"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-violet-900 font-bold text-sm hover:bg-violet-50 transition-colors shadow-md"
              >
                <span>Explorar Metodología Detallada</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>Habilidades Técnicas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Stack Tecnológico y Competencias
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            Clasificadas de forma transparente según el nivel real de aplicación y experiencia en proyectos físicos y software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <SkillGroup key={cat.id} category={cat} />
          ))}
        </div>
      </section>
    </div>
  );
};
