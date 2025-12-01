import React from 'react';
import type { StepData } from '../../types';
import { CodeBlock } from './CodeBlock';

interface StepCardProps {
  step: StepData;
  isLast: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({ step, isLast }) => {
  return (
    <div className="flex gap-4 sm:gap-6 relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] sm:left-[23px] top-12 bottom-[-48px] w-0.5 bg-slate-200" />
      )}

      {/* Number Badge */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-sm z-10 relative">
          <span className="text-brand-blue font-bold text-lg">{step.id}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pb-12">
        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800">{step.title}</h3>
          </div>

          <p className="text-slate-600 mb-4 whitespace-pre-wrap leading-relaxed">
            {step.description}
          </p>

          {step.code && step.code.map((c, idx) => (
            <CodeBlock key={idx} code={c.content} language={c.lang} filename={c.filename} />
          ))}

          {step.note && (
            <div className="mt-4 p-3 bg-amber-50 text-amber-800 text-sm rounded border border-amber-200 flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{step.note}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
