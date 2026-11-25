import React from 'react';
import { Cpu, Layout, Server, Database, Terminal, Star } from 'lucide-react';
import type { SkillCategory } from '../data/skills';

interface SkillGroupProps {
  category: SkillCategory;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      default:
        return <Terminal className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Avanzado':
        return 'bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300 border-violet-200 dark:border-violet-800';
      case 'Intermedio':
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border-slate-200 dark:border-slate-700';
      default:
        return 'bg-slate-50 text-slate-500 dark:bg-slate-900/60 dark:text-slate-400 border-slate-200 dark:border-slate-800';
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs hover:shadow-md transition-all space-y-4">
      {/* Category Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-950/70 flex items-center justify-center shrink-0 border border-violet-200/50 dark:border-violet-800/50">
          {getIcon(category.icon)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
            {category.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skill list */}
      <div className="flex flex-wrap gap-2 pt-2">
        {category.skills.map((skill, index) => (
          <div
            key={index}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border ${getLevelBadge(
              skill.level
            )}`}
          >
            {skill.highlight && <Star className="w-3 h-3 text-amber-500 fill-amber-500" />}
            <span>{skill.name}</span>
            <span className="opacity-70 text-[10px]">({skill.level})</span>
          </div>
        ))}
      </div>
    </div>
  );
};
