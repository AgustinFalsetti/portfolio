import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { ProjectData } from '../data/projects';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { Timeline } from '../components/Timeline';
import { MarkdownViewer } from '../components/MarkdownViewer';
import { GithubIcon } from '../components/SocialIcons';
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Target,
  Cpu,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectData | undefined>(undefined);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [showMarkdown, setShowMarkdown] = useState<boolean>(false);

  useEffect(() => {
    const found = projects.find((p) => p.slug === slug);
    setProject(found);

    // Load corresponding markdown log if available
    if (found) {
      fetch(`/content/proceso/${found.slug}.md`)
        .then((res) => {
          if (res.ok) return res.text();
          return '';
        })
        .then((text) => setMarkdownContent(text))
        .catch(() => setMarkdownContent(''));
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Proyecto no encontrado
        </h2>
        <p className="text-sm text-slate-500">
          El proyecto solicitado no existe o fue movido.
        </p>
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a proyectos
        </Link>
      </div>
    );
  }

  const isCompletedLink = (url?: string) => {
    return url && !url.includes('COMPLETAR');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back button */}
      <div>
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todos los proyectos</span>
        </Link>
      </div>

      {/* Project Header */}
      <header className="space-y-4 pb-8 border-b border-violet-100 dark:border-violet-900/60">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
            {project.categoryLabel}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
            {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg font-medium text-violet-700 dark:text-violet-400">
          {project.subtitle}
        </p>

        {/* Metadata pill bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="p-3 rounded-xl bg-violet-50/70 dark:bg-[#161324] border border-violet-100 dark:border-violet-900/40">
            <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-violet-500" /> Fecha:
            </div>
            <p className="mt-0.5">{project.date}</p>
          </div>
          <div className="p-3 rounded-xl bg-violet-50/70 dark:bg-[#161324] border border-violet-100 dark:border-violet-900/40">
            <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-violet-500" /> Rol:
            </div>
            <p className="mt-0.5">{project.role}</p>
          </div>
          <div className="p-3 rounded-xl bg-violet-50/70 dark:bg-[#161324] border border-violet-100 dark:border-violet-900/40">
            <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-violet-500" /> Equipo:
            </div>
            <p className="mt-0.5">{project.team}</p>
          </div>
        </div>

        {/* Action Buttons / Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {isCompletedLink(project.demoUrl) ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-500/25 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Demo en Producción</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>[COMPLETAR: Demo pendiente de link público]</span>
            </span>
          )}

          {isCompletedLink(project.repoUrl) ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#161324] border border-violet-200 dark:border-violet-800 hover:bg-violet-50 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-violet-500" />
              <span>Código en GitHub</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>[COMPLETAR: Repositorio GitHub pendiente]</span>
            </span>
          )}
        </div>
      </header>

      {/* Overview & Objectives */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Resumen Ejecutivo y Contexto
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.summary}
          </p>

          <div className="space-y-2 pt-2">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Objetivos Específicos:
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Image */}
        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-violet-100 dark:border-violet-900/60 shadow-md bg-violet-50 dark:bg-[#161324]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover max-h-72"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* Hardware BOM if available */}
      {project.hardwareBom && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-violet-600" />
            <span>Lista de Materiales y Recursos (BOM)</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-violet-100 dark:border-violet-900/60 bg-white dark:bg-[#161324]">
            <table className="w-full text-left text-xs">
              <thead className="bg-violet-50 dark:bg-violet-950/60 border-b border-violet-100 dark:border-violet-900/40 text-violet-900 dark:text-violet-300 font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Componente</th>
                  <th className="px-4 py-3">Especificación Técnica</th>
                  <th className="px-4 py-3">Cantidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-violet-100 dark:divide-violet-900/40 text-slate-600 dark:text-slate-300">
                {project.hardwareBom.map((bom, index) => (
                  <tr key={index} className="hover:bg-violet-50/40 dark:hover:bg-violet-950/20">
                    <td className="px-4 py-2.5 font-semibold text-slate-800 dark:text-slate-200">
                      {bom.item}
                    </td>
                    <td className="px-4 py-2.5">{bom.spec}</td>
                    <td className="px-4 py-2.5 font-mono font-medium">{bom.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Architecture Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-violet-600" />
          <span>Arquitectura Técnica e Integración</span>
        </h2>
        <ArchitectureDiagram
          description={project.architecture.description}
          flow={project.architecture.flow}
          techDetails={project.architecture.techDetails}
        />
      </section>

      {/* Chronological Process Timeline */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Línea de Tiempo del Proceso de Ingeniería
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Hitos cronológicos, decisiones tomadas, problemas reales de taller y cómo fueron resueltos.
          </p>
        </div>
        <Timeline items={project.timeline} />
      </section>

      {/* AI Workflow Section */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50/60 dark:from-[#181428] dark:to-[#120f1e] border border-violet-200/70 dark:border-violet-900/60 space-y-4">
        <div className="flex items-center gap-2 text-violet-700 dark:text-violet-300 font-bold text-base">
          <Sparkles className="w-5 h-5 text-violet-600" />
          <span>Flujo de Trabajo y Acompañamiento con Inteligencia Artificial</span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.aiWorkflow.description}
        </p>

        <div className="space-y-2 pt-2">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Prompts y Consultas de Arquitectura Clave:
          </p>
          <div className="space-y-1.5">
            {project.aiWorkflow.promptsSummary.map((prompt, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-white/80 dark:bg-[#1a172a] border border-violet-100 dark:border-violet-900/40 text-xs font-mono text-violet-900 dark:text-violet-300"
              >
                ↳ {prompt}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-violet-800 dark:text-violet-300 font-medium pt-2 border-t border-violet-200/60 dark:border-violet-900/40">
          💡 <strong>Aprendizaje con IA:</strong> {project.aiWorkflow.learningsFromAI}
        </p>
      </section>

      {/* Results and Learnings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Resultados Obtenidos</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {project.resultsAndLearnings.results.map((res, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span>Aprendizajes Principales</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {project.resultsAndLearnings.learnings.map((lea, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-violet-500 font-bold">›</span>
                <span>{lea}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Markdown Field Log Toggle */}
      <section className="space-y-4 pt-4 border-t border-violet-100 dark:border-violet-900/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-violet-600" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Bitácora Técnica Completa (Markdown de Campo)
            </h3>
          </div>
          <button
            onClick={() => setShowMarkdown(!showMarkdown)}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 hover:bg-violet-200 transition-colors cursor-pointer"
          >
            {showMarkdown ? 'Ocultar Bitácora' : 'Ver Bitácora en Markdown'}
          </button>
        </div>

        {showMarkdown && (
          <div className="pt-2 animate-in fade-in duration-300">
            <MarkdownViewer
              content={
                markdownContent ||
                `# Bitácora Técnica: ${project.title}\n\nEste archivo está alojado en /content/proceso/${project.slug}.md para edición y ampliación de contenidos.\n\n## Objetivos\n${project.objectives.map(o => '- ' + o).join('\n')}\n\n## Resumen\n${project.summary}`
              }
            />
          </div>
        )}
      </section>
    </div>
  );
};
