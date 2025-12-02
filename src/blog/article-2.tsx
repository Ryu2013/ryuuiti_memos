import { Link } from 'react-router-dom';
import { MyCharacter } from "../components/MyCharacter";

const Article2 = () => {
    const ogpCode = `    <%# OGP設定（ここを固定の内容にする） %>
    <meta property="og:title" content="ケアシフト | 重度訪問介護事業向け業務効率化アプリ" />
    <meta property="og:description" content="ケアシフトは重度訪問介護事業向け業務効率化アプリです。" />
    <meta property="og:type" content="website" />
   
    <%# URLもトップページに固定してしまうのが一番安全です %>
    <meta property="og:url" content="https://care-shift.com/" />
   
    <%# サイト名 %>
    <meta property="og:site_name" content="ケアシフト" />


    <%# 画像だけはRailsの仕組み上、このヘルパーを使う必要があります %>
    <meta property="og:image" content="<%= image_url('ogp_main.jpg') %>" />


    <%# X (Twitter) 用の設定 %>
    <meta name="twitter:card" content="summary_large_image" />`;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/90">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg">
                            <MyCharacter className="w-16 h-16" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900">
                            りゅういち<span className="text-brand-green">学習メモ</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors">
                            &larr; Home
                        </Link>
                        <div className="text-sm font-medium text-slate-500 border-l border-slate-300 pl-4">
                            Rails OGP Settings
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                <article>
                    {/* Article Header */}
                    <div className="mb-16 text-center">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 bg-indigo-50 rounded-full">
                            Rails / View
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            OGP設定（固定の場合）
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            今回は常に一種類のOGPのみの為、layoutにべた書き。<br />
                            ページ毎にする場合はgemを使うといいらしい。
                        </p>
                    </div>

                    {/* Content Section */}
                    <section className="mb-16">
                        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-700">
                                app/views/layouts/application.html.erb
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="text-emerald-400 font-mono text-sm"><code>{ogpCode}</code></pre>
                            </div>
                        </div>
                    </section>

                </article>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-12 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-slate-500 text-sm">
                        © 2024 TechNotes for Developers.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Article2;
