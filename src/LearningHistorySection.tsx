import React from 'react';

type HistoryEvent = {
    year: string;
    title: string;
    description: string;
    month?: string;
};

const historyEvents: HistoryEvent[] = [
    {
        year: '20代〜',
        title: 'C# / Game Engine',
        description: '趣味でゲームエンジンを触り始め、C#の学習を開始。',
    },
    {
        year: '2022',
        title: 'ITパスポート取得',
        description: 'インターネットの基礎を体系的に学ぶために取得。',
    },
    {
        year: '2024',
        title: 'エンジニアへの転向を決意',
        description: '業務でGASを用いたシフト作成・退職率算定システムを構築。従業員に喜ばれた経験がきっかけとなり、エンジニアを目指す。',
    },
    {
        year: '2025',
        month: '1月',
        title: 'フロントエンド学習開始',
        description: 'HTML, CSS, JavaScriptの学習をスタート。',
    },
    {
        year: '2025',
        month: '6月',
        title: 'バックエンド・インフラ学習開始',
        description: 'サーバーサイドやインフラストラクチャの学習を開始。',
    },
    {
        year: '2025',
        month: '7月',
        title: 'Runteq 入学',
        description: 'プログラミングスクールRunteqに入学し、本格的な学習を開始。',
    },
    {
        year: '2025',
        month: '10月',
        title: 'ポートフォリオ「ケアシフト」完成',
        description: '自身の経験を活かした介護業務支援アプリの初期バージョンが完成。',
    },
    {
        year: '2025',
        month: '11月',
        title: 'インフラ移行 (Heroku → AWS)',
        description: '本格的に営業活動を始めるにあたり、将来の拡張性と柔軟性を確保するため、本番環境をHerokuからAWSへ移行しました。',
    },
    {
        year: '2025',
        month: '12月',
        title: '営業活動開始',
        description: 'パンフレット、名刺を自作し企業へ訪問。アプリケーションに対するご意見を頂く',
    },
    {
        year: 'Current',
        title: 'フロント/バックエンド分離 & CDN導入',
        description: 'UX改善のためフロント/バックエンド分離を進め、AWS上にVPNを用いた本番に近い環境を構築し、動作テスト中。順次本番適用予定。',
    },
];

export const LearningHistorySection: React.FC = () => {
    return (
        <div className="py-12 relative">
            {/* ヘッダーの装飾 */}
            <div className="text-center mb-12 animate-fade-in-down">
                <h2 className="text-brand-green font-black text-xl tracking-widest uppercase mb-2">My Journey</h2>
                <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full"></div>
            </div>

            <div className="border-l-4 border-brand-green/30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10">
                {historyEvents.map((event, index) => (
                    <div key={index} className="relative group">
                        {/* タイムラインのドット */}
                        <div className="absolute -left-[43px] md:-left-[59px] top-1 h-6 w-6 rounded-full border-4 border-white bg-brand-green shadow-md group-hover:scale-125 transition-transform duration-300"></div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <span className="text-xl md:text-2xl font-bold text-brand-green font-mono">
                                {event.year}
                                {event.month && <span className="text-base md:text-lg ml-1 text-gray-500">{event.month}</span>}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800">{event.title}</h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed bg-white/50 p-4 rounded-lg shadow-sm border border-gray-100">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
