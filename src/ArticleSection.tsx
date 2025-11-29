import React from 'react';
import type { Article } from '../types';
import { Link } from "react-router-dom";

interface ArticleSectionProps {
  articles: Article[];
}

export const ArticleSection: React.FC<ArticleSectionProps> = ({ articles }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-brand-blue mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-brand-blue text-white p-2 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Technical Articles</h2>
      </div>

      {/* Scrollable Container */}
      <div className="cute-scroll h-[400px] overflow-y-auto pr-2 space-y-3">
        {articles.map((article) => (
          <Link 
            key={article.id} 
            to={`/blog/${article.id}`}
            className="block group p-4 rounded-2xl border-2 border-transparent hover:border-brand-blue/30 bg-blue-50/50 hover:bg-blue-50 transition-all cursor-pointer"
          >
            <article>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-800 group-hover:text-brand-blue transition-colors">
                  {article.title}
                </h3>
                <span className="text-xs font-medium text-gray-400 whitespace-nowrap ml-2">
                  {article.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {article.summary}
              </p>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-white text-brand-blue px-2 py-0.5 rounded-full shadow-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};