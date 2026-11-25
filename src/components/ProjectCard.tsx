import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { ProjectData } from '../data/projects';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isCompletedLink = (url?: string) => {
    return url && !url.includes('COMPLETAR');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 group"
    >
      {/* Image / Banner Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-violet-100 dark:bg-violet-950/40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-[#120f1d]/90 text-violet-700 dark:text-violet-300 backdrop-blur-md shadow-xs">
            {project.categoryLabel}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/90 text-white backdrop-blur-md shadow-xs">
            <CheckCircle className="w-3 h-3" />
            {project.status}
          </span>
        </div>

        {/* Title over image on bottom */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="text-xs font-medium opacity-90 flex items-center gap-2">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.date}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            <Link to={`/proyectos/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 line-clamp-1">
            {project.subtitle}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-900/40"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="px-1.5 py-0.5 text-[11px] text-slate-400 font-medium">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {/* Links & Action */}
          <div className="pt-4 border-t border-violet-100 dark:border-violet-900/60 flex items-center justify-between">
            <Link
              to={`/proyectos/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200 group-hover:translate-x-1 transition-all"
            >
              <span>Ver Proceso & Detalle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2">
              {isCompletedLink(project.demoUrl) && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-colors"
                  title="Ver Demo en Vivo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {isCompletedLink(project.repoUrl) && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-colors"
                  title="Repositorio de Código"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
