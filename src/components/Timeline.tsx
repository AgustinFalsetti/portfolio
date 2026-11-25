import React from 'react';
import { Calendar, AlertTriangle, Lightbulb, Check } from 'lucide-react';
import type { ProjectTimelineItem } from '../data/projects';

interface TimelineProps {
  items: ProjectTimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-violet-200 dark:border-violet-800 space-y-10 my-8">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          {/* Timeline Dot Indicator */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-violet-600 border-4 border-white dark:border-[#0d0b14] shadow-md group-hover:scale-125 transition-transform" />

          {/* Timeline Content Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                {item.phase}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </span>
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h4>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Decisions list */}
            {item.decisions && item.decisions.length > 0 && (
              <div className="mb-4 space-y-1.5">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Decisiones Tomadas:
                </p>
                {item.decisions.map((dec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                    <span>{dec}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge & Solution Callout */}
            {item.challenge && (
              <div className="mt-4 pt-4 border-t border-violet-100 dark:border-violet-900/40 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-amber-900 dark:text-amber-300 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Problema Encontrado:</span>
                  </div>
                  <p className="leading-relaxed opacity-95">{item.challenge}</p>
                </div>

                {item.solution && (
                  <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-300 space-y-1">
                    <div className="font-semibold flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Solución Implementada:</span>
                    </div>
                    <p className="leading-relaxed opacity-95">{item.solution}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
