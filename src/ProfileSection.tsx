import React from 'react';
import profileImage from './assets/profile.jpg';
import { MyCharacter } from "./components/MyCharacter";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-lg border-b-4 border-brand-green mb-8 transition-transform hover:scale-[1.01]">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-green to-brand-blue rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <img
          src={profileImage}
          alt="Profile"
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white object-cover shadow-inner"
        />
        <div className="absolute bottom-2 right-2 bg-white text-white p-2 rounded-full border-2 border-brand-green shadow-sm">
          <MyCharacter className="w-12 h-12" />
        </div>
      </div>
      
      <h1 className="mt-6 text-3xl font-extrabold text-gray-800 tracking-tight">
        加藤 <span className="text-brand-green">竜</span>一
      </h1>
      <p className="text-brand-blue font-bold text-sm mt-1">Katou Ryuuichi</p>
      
      <div className="mt-6  max-w-lg">
        <p className="text-gray-600 text-center leading-relaxed">
          趣味: 筋トレ、勉強、読書<br />
          元介護福祉士<br />
        </p>
      </div>

      <div className="mt-3 max-w-lg text-center">
        <p className="text-gray-600 leading-relaxed">
          人と関わるのが好きなので<br />
          飲み会に誘いたいがハラスメントを恐れて
          もじもじしてます。<br />
        </p>
      </div>

      <div className="mt-8 space-y-8">
      {/* 開発言語・フレームワーク */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 text-center">
          Backend & Frontend
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {['Rails', 'HTML5', 'CSS3', 'JavaScript'].map(tech => (
            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

{/* 🛠 インフラ・ツール */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">
          Infrastructure & Tools
        </h3>
        <div className="flex flex-wrap gap-2 justify-center"> {/* 中央寄せにしました */}
          {/* 'GitHub Actions' を追加しました！ */}
          {['Heroku', 'Docker', 'Git/GitHub', 'GitHub Actions'].map(tech => (
            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 🎨 デザインツール */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">
          Design Tools
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {/* デザイン系なので色をピンク/パープル系に */}
          {['Figma', 'Canva', 'Filmora'].map(tech => (
            <span key={tech} className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium border border-pink-100">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 📚 勉強中 (Studying) */}
      <div>
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">
          Studying
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {/* 勉強中は「これから！」という意図で黄色やオレンジ、または控えめな緑 */}
          {['AWS', 'React', 'TypeScript', 'Vite', 'Tailwind'].map(tech => (
            <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>


     </div>
    
  );
};