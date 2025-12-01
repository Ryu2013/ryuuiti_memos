import React from 'react';
import { Link } from 'react-router-dom';
import { MyCharacter } from "../components/MyCharacter";

const TableRow = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <tr className={`border-b border-slate-100 last:border-0 ${className}`}>{children}</tr>
);

const TableCell = ({ children, className = "", isHeader = false }: { children: React.ReactNode; className?: string; isHeader?: boolean }) => {
    const Component = isHeader ? 'th' : 'td';
    return (
        <Component className={`px-4 py-3 text-sm ${isHeader ? 'font-semibold text-slate-700 bg-slate-50' : 'text-slate-600'} ${className}`}>
            {children}
        </Component>
    );
};

const MethodSection = ({
    title,
    methodName,
    usage,
    sql,
    description,
    whenToUse,
    visual
}: {
    title: string;
    methodName: string;
    usage: string;
    sql: string;
    description: React.ReactNode;
    whenToUse: string;
    visual: React.ReactNode;
}) => (
    <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-xl">
                #
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{title} <code className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded text-lg font-mono">.{methodName}</code></h2>
        </div>

        <div className="space-y-8">
            {/* Usage & SQL */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-700">
                        Ruby Code
                    </div>
                    <div className="p-4 overflow-x-auto">
                        <pre className="text-emerald-400 font-mono text-sm"><code>{usage}</code></pre>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-700">
                        Generated SQL
                    </div>
                    <div className="p-4 overflow-x-auto">
                        <pre className="text-blue-300 font-mono text-sm"><code>{sql}</code></pre>
                    </div>
                </div>
            </div>

            {/* Visual Explanation */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        データの流れ (イメージ)
                    </h3>
                    <span className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">Spreadsheet View</span>
                </div>
                <div className="p-6 overflow-x-auto">
                    {visual}
                </div>
            </div>

            {/* Explanation */}
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    解説 & 使いどころ
                </h3>
                <div className="text-indigo-800 space-y-4">
                    <p>{description}</p>
                    <div className="bg-white/60 p-4 rounded-lg">
                        <span className="font-bold text-indigo-900 block mb-1">💡 どういう時に使う？</span>
                        {whenToUse}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

function Article1() {
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
                            Rails Query Methods
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
                            ActiveRecord
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            preload,includes, eager_load, <br className="hidden sm:block" />
                            joins, left_joins の違い
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Railsで関連データを扱う際によく使われる4つのメソッド。<br />
                            それぞれの発行するSQLとデータの取得イメージを視覚的に整理しました。
                        </p>
                    </div>

                    {/* 1. includes */}
                    <MethodSection
                        title="1. 標準的なEager Loading"
                        methodName="includes"
                        usage="User.includes(:posts)"
                        sql={`-- 基本的に2回クエリが発行される
SELECT * FROM users
SELECT * FROM posts WHERE user_id IN (1, 2, ...)`}
                        visual={
                            <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                                <div className="flex-1 w-full">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 text-center">Query 1: Users Table</p>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <TableRow>
                                                <TableCell isHeader>id</TableCell>
                                                <TableCell isHeader>name</TableCell>
                                            </TableRow>
                                        </thead>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <TableCell>Alice</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2</TableCell>
                                                <TableCell>Bob</TableCell>
                                            </TableRow>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="hidden md:flex items-center justify-center h-24">
                                    <span className="text-2xl text-slate-300">+</span>
                                </div>
                                <div className="flex-1 w-full">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 text-center">Query 2: Posts Table (IN clause)</p>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <TableRow>
                                                <TableCell isHeader>id</TableCell>
                                                <TableCell isHeader>user_id</TableCell>
                                                <TableCell isHeader>title</TableCell>
                                            </TableRow>
                                        </thead>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>101</TableCell>
                                                <TableCell className="bg-yellow-50 font-bold text-yellow-700">1</TableCell>
                                                <TableCell>Hello</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>102</TableCell>
                                                <TableCell className="bg-yellow-50 font-bold text-yellow-700">1</TableCell>
                                                <TableCell>Rails</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>103</TableCell>
                                                <TableCell className="bg-yellow-50 font-bold text-yellow-700">2</TableCell>
                                                <TableCell>Ruby</TableCell>
                                            </TableRow>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                        description={
                            <>
                                Railsが最適と判断した方法（通常は.preload、条件によっては.eager_load）でデータを取得します。
                                取得したデータはメモリ上で関連付けられ、N+1問題を回避できます。
                            </>
                        }
                        whenToUse="とりあえず関連データを先読みしたいときはこれ。N+1問題を防ぐための基本。"
                    />

                    {/* 2. preload */}
                    <MethodSection
                        title="2. 必ずクエリを分ける"
                        methodName="preload"
                        usage="User.preload(:posts)"
                        sql={`-- 必ず2回クエリが発行される (JOINしない)
SELECT * FROM users
SELECT * FROM posts WHERE user_id IN (1, 2, ...)`}
                        visual={
                            <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                                <div className="flex-1 w-full">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 text-center">Query 1: Users Table</p>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <TableRow>
                                                <TableCell isHeader>id</TableCell>
                                                <TableCell isHeader>name</TableCell>
                                            </TableRow>
                                        </thead>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <TableCell>Alice</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2</TableCell>
                                                <TableCell>Bob</TableCell>
                                            </TableRow>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="hidden md:flex items-center justify-center h-24">
                                    <span className="text-2xl text-slate-300">||</span>
                                </div>
                                <div className="flex-1 w-full">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 text-center">Query 2: Posts Table (IN clause)</p>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <TableRow>
                                                <TableCell isHeader>id</TableCell>
                                                <TableCell isHeader>user_id</TableCell>
                                                <TableCell isHeader>title</TableCell>
                                            </TableRow>
                                        </thead>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>101</TableCell>
                                                <TableCell className="bg-yellow-50 font-bold text-yellow-700">1</TableCell>
                                                <TableCell>Hello</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>102</TableCell>
                                                <TableCell className="bg-yellow-50 font-bold text-yellow-700">1</TableCell>
                                                <TableCell>Rails</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>103</TableCell>
                                                <TableCell className="bg-yellow-50 font-bold text-yellow-700">2</TableCell>
                                                <TableCell>Ruby</TableCell>
                                            </TableRow>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                        description={
                            <>
                                <code>includes</code> と似ていますが、<b>絶対に JOIN を行わず</b>、必ずクエリを分けて実行します。
                                <code>includes</code> が意図せず <code>LEFT OUTER JOIN</code> を使ってしまうのを防ぎたい場合に有効です。
                            </>
                        }
                        whenToUse="JOINを避けたい時、または includes の挙動を明示的に「クエリ分割」に固定したい時。"
                    />

                    {/* 3. eager_load */}
                    <MethodSection
                        title="3. 強制的に1つのクエリで取得"
                        methodName="eager_load"
                        usage="User.eager_load(:posts)"
                        sql={`-- LEFT OUTER JOIN で1回で取得
SELECT "users"."id" AS t0_r0, "users"."name" AS t0_r1, ...
       "posts"."id" AS t1_r0, "posts"."title" AS t1_r1, ...
FROM "users"
LEFT OUTER JOIN "posts" ON "posts"."user_id" = "users"."id"`}
                        visual={
                            <div className="w-full overflow-x-auto">
                                <p className="text-xs font-bold text-slate-400 uppercase mb-2 text-center">Single Query Result (Joined)</p>
                                <table className="w-full text-left border-collapse min-w-[500px]">
                                    <thead>
                                        <TableRow>
                                            <TableCell isHeader className="bg-indigo-50 text-indigo-700">User.id</TableCell>
                                            <TableCell isHeader className="bg-indigo-50 text-indigo-700">User.name</TableCell>
                                            <TableCell isHeader className="bg-emerald-50 text-emerald-700 border-l border-slate-200">Post.id</TableCell>
                                            <TableCell isHeader className="bg-emerald-50 text-emerald-700">Post.title</TableCell>
                                        </TableRow>
                                    </thead>
                                    <tbody>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>Alice</TableCell>
                                            <TableCell className="border-l border-slate-100">101</TableCell>
                                            <TableCell>Hello</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>Alice</TableCell>
                                            <TableCell className="border-l border-slate-100">102</TableCell>
                                            <TableCell>Rails</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2</TableCell>
                                            <TableCell>Bob</TableCell>
                                            <TableCell className="border-l border-slate-100">103</TableCell>
                                            <TableCell>Ruby</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>3</TableCell>
                                            <TableCell>Charlie</TableCell>
                                            <TableCell className="border-l border-slate-100 text-slate-300 italic">NULL</TableCell>
                                            <TableCell className="text-slate-300 italic">NULL</TableCell>
                                        </TableRow>
                                    </tbody>
                                </table>
                            </div>
                        }
                        description={
                            <>
                                必ず <code>LEFT OUTER JOIN</code> を使用して1回のクエリでデータを取得します。
                                UserとPostの全カラムを結合して取得するため、メモリ使用量は増える可能性がありますが、クエリ回数は1回で済みます。
                            </>
                        }
                        whenToUse="関連テーブル（Posts）のカラムで絞り込み（where）を行いたいかつviewでも使いたい場合。"
                    />

                    {/* 4. joins */}
                    <MethodSection
                        title="4. 関連による絞り込み (データはロードしない)"
                        methodName="joins"
                        usage="User.joins(:posts)"
                        sql={`-- INNER JOIN (関連データはSELECTされない)
SELECT "users".* FROM "users"
INNER JOIN "posts" ON "posts"."user_id" = "users"."id"`}
                        visual={
                            <div className="flex gap-8 items-start justify-center">
                                <div className="w-full">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 text-center">Result: Users with Posts</p>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <TableRow>
                                                <TableCell isHeader>id</TableCell>
                                                <TableCell isHeader>name</TableCell>
                                                <TableCell isHeader className="text-slate-400 font-normal italic">Post Data?</TableCell>
                                            </TableRow>
                                        </thead>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <TableCell>Alice</TableCell>
                                                <TableCell className="text-slate-400 italic text-xs">Not Loaded</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <TableCell>Alice</TableCell>
                                                <TableCell className="text-slate-400 italic text-xs">Not Loaded</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2</TableCell>
                                                <TableCell>Bob</TableCell>
                                                <TableCell className="text-slate-400 italic text-xs">Not Loaded</TableCell>
                                            </TableRow>
                                        </tbody>
                                    </table>
                                    <p className="text-xs text-center mt-2 text-red-500">※ Charlie (Postなし) は除外される</p>
                                </div>
                            </div>
                        }
                        description={
                            <>
                                <code>INNER JOIN</code> を行います。デフォルトでは <code>users</code> テーブルのカラムのみを SELECT します。
                                関連データ（Post）はメモリにロードされません（アクセスするとN+1が発生します）。
                                Postを持っているUserだけを取得したい場合に適しています。
                            </>
                        }
                        whenToUse="関連テーブル（Posts）のカラムで絞り込み（where）を行いたいがviewでは使わない場合。"
                    />

                    {/* 5. left_joins */}
                    <MethodSection
                        title="5. 関連がないレコードも含めて検索"
                        methodName="left_joins"
                        usage="User.left_joins(:posts)"
                        sql={`-- LEFT OUTER JOIN (関連データはSELECTされない)
SELECT "users".* FROM "users"
LEFT OUTER JOIN "posts" ON "posts"."user_id" = "users"."id"`}
                        visual={
                            <div className="flex gap-8 items-start justify-center">
                                <div className="w-full">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2 text-center">Result: All Users</p>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <TableRow>
                                                <TableCell isHeader>id</TableCell>
                                                <TableCell isHeader>name</TableCell>
                                                <TableCell isHeader className="text-slate-400 font-normal italic">Post Data?</TableCell>
                                            </TableRow>
                                        </thead>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <TableCell>Alice</TableCell>
                                                <TableCell className="text-slate-400 italic text-xs">Not Loaded</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2</TableCell>
                                                <TableCell>Bob</TableCell>
                                                <TableCell className="text-slate-400 italic text-xs">Not Loaded</TableCell>
                                            </TableRow>
                                            <TableRow className="bg-blue-50">
                                                <TableCell>3</TableCell>
                                                <TableCell>Charlie</TableCell>
                                                <TableCell className="text-slate-400 italic text-xs">Not Loaded (NULL)</TableCell>
                                            </TableRow>
                                        </tbody>
                                    </table>
                                    <p className="text-xs text-center mt-2 text-blue-500">※ Charlie (Postなし) も含まれる</p>
                                </div>
                            </div>
                        }
                        description={
                            <>
                                <code>LEFT OUTER JOIN</code> を行います。<code>joins</code> と違い、関連データを持たないレコード（Charlie）も結果に含まれます。
                                「Postを持っていないUser」を探す（<code>User.left_joins(:posts).where(posts: {'{'} id: nil {'}'})</code>）際によく使われます。
                            </>
                        }
                        whenToUse="関連テーブル（Posts）のカラムを持っていないで絞り込み（where）を行いたいがviewでは使わない場合。"
                    />

                    {/* Conclusion */}
                    <div className="mt-16 p-8 bg-slate-800 rounded-2xl text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">まとめ</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                            <div className="bg-slate-700 p-4 rounded-lg">
                                <span className="text-emerald-400 font-bold block mb-1">includes</span>
                                <span className="text-sm text-slate-300">基本はこれ。自動でレイルズが選ぶ。</span>
                            </div>
                            <div className="bg-slate-700 p-4 rounded-lg">
                                <span className="text-emerald-400 font-bold block mb-1">preload</span>
                                <span className="text-sm text-slate-300">eager_loadはしたくない時。</span>
                            </div>
                            <div className="bg-slate-700 p-4 rounded-lg">
                                <span className="text-emerald-400 font-bold block mb-1">eager_load</span>
                                <span className="text-sm text-slate-300">関連があるレコードで絞り込み＆データも欲しい時。</span>
                            </div>
                            <div className="bg-slate-700 p-4 rounded-lg">
                                <span className="text-emerald-400 font-bold block mb-1">joins</span>
                                <span className="text-sm text-slate-300">関連があるレコードだけ欲しい時。</span>
                            </div>
                            <div className="bg-slate-700 p-4 rounded-lg">
                                <span className="text-emerald-400 font-bold block mb-1">left_joins</span>
                                <span className="text-sm text-slate-300">関連がないレコードが欲しい時。</span>
                            </div>
                        </div>
                    </div>

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
}

export default Article1;
