import React from 'react';
import { processSteps } from '../data/process';
import { Sparkles, Layers, Wrench, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      default:
        return <Rocket className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Metodología de Trabajo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Cómo Trabajo: De la Idea al Despliegue
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Mi flujo de desarrollo se basa en un enfoque transversal de ingeniería: planificación teórica rigurosa, aceleración mediante Inteligencia Artificial, depuración exhaustiva de hardware y software, y despliegue continuo con pruebas automatizadas.
        </p>
      </div>

      {/* 4 Process Steps in Detail */}
      <div className="space-y-10">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs space-y-6"
          >
            {/* Step Header */}
            <div className="flex items-start gap-4">
              <div className="text-3xl sm:text-4xl font-black text-violet-600 dark:text-violet-400 font-mono">
                {step.number}
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-violet-50 dark:bg-violet-950/80 border border-violet-100 dark:border-violet-800">
                    {getIcon(step.icon)}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                  {step.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {step.description}
            </p>

            {/* Methods Applied */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Prácticas Aplicadas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {step.methods.map((method, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Example Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-violet-50/70 dark:bg-violet-950/30 border border-violet-200/60 dark:border-violet-900/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-violet-800 dark:text-violet-300">
                <span>Ejemplo Real en Proyecto:</span>
                <span className="px-2 py-0.5 rounded-full bg-violet-200/80 dark:bg-violet-900 text-violet-800 dark:text-violet-200">
                  {step.realWorldExample.project}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Contexto:</strong> {step.realWorldExample.context}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Acción tomada:</strong> {step.realWorldExample.action}
              </p>
              <p className="text-xs font-semibold text-violet-700 dark:text-violet-400 pt-1 border-t border-violet-200/50 dark:border-violet-900/40">
                💡 Aprendizaje: {step.realWorldExample.learning}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-violet-500/20">
        <div>
          <h3 className="text-xl font-bold">¿Querés ver estos pasos aplicados?</h3>
          <p className="text-xs text-violet-100 mt-1">
            Revisá la línea de tiempo de cada proyecto con sus decisiones y problemas reales.
          </p>
        </div>
        <Link
          to="/proyectos"
          className="px-5 py-2.5 rounded-xl bg-white text-violet-900 font-bold text-xs hover:bg-violet-50 transition-colors shrink-0 shadow-md flex items-center gap-1.5"
        >
          <span>Explorar Proyectos</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
