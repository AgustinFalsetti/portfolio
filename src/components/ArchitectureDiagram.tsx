import React from 'react';
import { ArrowRight, Layers, ShieldCheck } from 'lucide-react';

interface ArchitectureFlowItem {
  from: string;
  to: string;
  label: string;
}

interface ArchitectureDiagramProps {
  description: string;
  flow: ArchitectureFlowItem[];
  techDetails: string[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  description,
  flow,
  techDetails,
}) => {
  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-violet-50/50 dark:bg-[#151222] border border-violet-200/70 dark:border-violet-900/60 space-y-6">
      <div className="flex items-center gap-2 text-violet-700 dark:text-violet-300 font-bold text-base">
        <Layers className="w-5 h-5 text-violet-600" />
        <span>Diagrama de Arquitectura y Flujo de Datos</span>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>

      {/* Interactive Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {flow.map((step, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white dark:bg-[#1a172a] border border-violet-100 dark:border-violet-900/40 shadow-xs flex flex-col justify-between space-y-2"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>Paso {idx + 1}</span>
              <span className="w-5 h-5 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center text-violet-700 dark:text-violet-300">
                {idx + 1}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-100">
              <span className="p-1.5 rounded-lg bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-800">
                {step.from}
              </span>
              <ArrowRight className="w-4 h-4 text-violet-500 shrink-0" />
              <span className="p-1.5 rounded-lg bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-800">
                {step.to}
              </span>
            </div>

            <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">
              ↳ {step.label}
            </p>
          </div>
        ))}
      </div>

      {/* Technical Notes */}
      {techDetails && techDetails.length > 0 && (
        <div className="pt-4 border-t border-violet-200/60 dark:border-violet-900/50 space-y-2">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Detalles Clave de Implementación:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {techDetails.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
