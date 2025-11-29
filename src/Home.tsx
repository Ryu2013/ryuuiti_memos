import React, { useState } from 'react';
import { ProfileSection } from './ProfileSection';
import { ArticleSection } from './ArticleSection';
import { PortfolioSection } from './PortfolioSection';
import { SocialLinks } from './SoclLinks';
import type { Article, Project } from '../types';

// モックデータの生成
const generateArticles : Article[] = [
    {
    id: `article-1`,
    title: `Reactのパフォーマンスチューニング その1`,
    date: `2023-10-01`,
    summary: 'Reactのレンダリング最適化について、useMemoとuseCallbackの使い分けを中心に解説します。',
    tags: ['React', 'Performance', 'Hooks']
  },
    {
    id: `article-2`,
    title: `Reactのパフォーマンスチューニング その1`,
    date: `2023-10-01`,
    summary: 'Reactのレンダリング最適化について、useMemoとuseCallbackの使い分けを中心に解説します。',
    tags: ['React', 'Performance', 'Hooks']
  },
];

const mockProjects: Project[] = [
  {
    id: 'p1',
    title: 'ケアシフト',
    description: '重度訪問介護事業向けの業務効率化ツール。自身の管理業務の大変さから開発を決意。モバイルフレンドリーで簡単なUIを意識し訪問先でも使いやすい設計に。',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    techStack: ['Rails', 'Heroku']
  },
];

const Home: React.FC = () => {
  const [articles] = useState<Article[]>(generateArticles);
  const [projects] = useState<Project[]>(mockProjects);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* ヘッダーの装飾 */}
        <div className="text-center mb-8 animate-fade-in-down">
          <h2 className="text-brand-green font-black text-xl tracking-widest uppercase mb-2">プロフィール</h2>
          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        {/* 1. プロフィールセクション */}
        <ProfileSection />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2. 記事セクション (大画面では1カラム、小画面では全幅) */}
          <div className="lg:col-span-1">
             <ArticleSection articles={articles} />
          </div>

          {/* 3. ポートフォリオセクション (大画面では2カラム) */}
          <div className="lg:col-span-2">
            <PortfolioSection projects={projects} />
          </div>
        </div>

        {/* 4. ソーシャルリンク */}
        <SocialLinks />

        <footer className="text-center text-gray-400 text-sm mt-8">
          <p>© 2023 Midori Ao. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
