import React from 'react';
import type { Project } from '../types';

interface PortfolioSectionProps {
  projects: Project[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border-b-4 border-brand-blue p-8 mb-8">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-brand-blue">💼</span> ポートフォリオ
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-brand-green rounded-full text-xs font-semibold border border-brand-green/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};