import React from 'react';
import { FileText } from 'lucide-react';

interface MarkdownViewerProps {
  content: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
  // Simple clean markdown parser for headings, lists, code, and bold
  const renderFormattedMarkdown = (raw: string) => {
    const lines = raw.split('\n');
    return lines.map((line, idx) => {
      // H1
      if (line.startsWith('# ')) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 pb-2 border-b border-violet-100 dark:border-violet-900">
            {line.replace('# ', '')}
          </h2>
        );
      }
      // H2
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-xl font-bold text-violet-700 dark:text-violet-300 mt-6 mb-3">
            {line.replace('## ', '')}
          </h3>
        );
      }
      // H3
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-4 mb-2">
            {line.replace('### ', '')}
          </h4>
        );
      }
      // Lists
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <li key={idx} className="text-sm text-slate-600 dark:text-slate-300 ml-4 list-disc mb-1 leading-relaxed">
            {line.replace(/^[-*]\s+/, '')}
          </li>
        );
      }
      // Horizontal Rule
      if (line.startsWith('---')) {
        return <hr key={idx} className="my-6 border-violet-100 dark:border-violet-900" />;
      }
      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }
      // Regular paragraph
      return (
        <p key={idx} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#161324] border border-violet-100 dark:border-violet-900/60 shadow-xs">
      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-violet-100 dark:border-violet-900/40 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
        <FileText className="w-4 h-4" />
        <span>Documentación de Campo / Archivo Markdown</span>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {renderFormattedMarkdown(content)}
      </div>
    </div>
  );
};
