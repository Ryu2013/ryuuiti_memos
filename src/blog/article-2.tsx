
import { StepCard } from '../components/StepCard.tsx';
import type { StepData } from '../../types.ts';

const steps: StepData[] = [
  {
    id: 1,
    title: "ドメインの購入",
    description: "今回は「お名前.com」で独自ドメインを購入します。他のレジストラでも構いませんが、以降の手順はお名前.comをベースに説明します。",
  },
  {
    id: 2,
    title: "SendGridとの契約",
    description: "メール送信サービス（SMTP）として「SendGrid」のアカウントを作成・契約します。",
  },
  {
    id: 3,
    title: "Domain Authentication (SendGrid)",
    description: "SendGridの管理者ページにログインし、「Settings」 > 「Sender Authentication」 > 「Domain Authentication」へ進みます。\nここでDNSレコード（CNAMEなど）が表示されるので、この画面を開いたままにするか、値を控えておきます。",
  },
  {
    id: 4,
    title: "DNSレコードの設定 (お名前.com)",
    description: "お名前.comのDNS設定ページを開き、Step 3で表示されたDNSレコードを入力します。\n\n重要: 同時に「DNSレコード設定用ネームサーバー変更確認」のチェックを入れ、ネームサーバーを「01.dnsv.jp / 02.dnsv.jp ...」等のGMO提供DNSに変更する設定を行ってください。",
  },
  {
    id: 5,
    title: "認証の確認 (Verify)",
    description: "再度SendGridの画面に戻り、Domain Authenticationの「Verify」ボタンをクリックします。\nDNSの浸透には数分〜数時間かかる場合があります。ステータスが「Verified」になればOKです。",
  },
  {
    id: 6,
    title: "API Keyの生成",
    description: "SendGridの「Settings」 > 「API Keys」から新しいAPI Keyを生成します。\n生成されたキー（SG.xxxx...）は一度しか表示されないため、必ずコピーして安全な場所に保管してください。",
  },
  {
    id: 7,
    title: "Railsアプリの設定",
    description: "Railsアプリケーション側でSMTP設定を行います。環境変数やCredentialsを使用して、APIキーを直接コードに書かないよう注意しましょう。",
    code: [
      {
        lang: "ruby",
        filename: "config/environments/production.rb",
        content: `config.action_mailer.smtp_settings = {
  address:              "smtp.sendgrid.net",
  port:                 587,
  domain:               "care-shift.jp", # あなたのドメイン
  user_name:            "apikey",        # ユーザー名は "apikey" 固定
  password:             Rails.application.credentials.dig(:sendgrid, :api_key),
  authentication:       :plain,
  enable_starttls_auto: true
}`
      },
      {
        lang: "ruby",
        filename: "config/initializers/devise.rb",
        content: `config.mailer_sender = Rails.application.credentials.dig(:mail, :from)`
      },
      {
        lang: "yaml",
        filename: "credentials.yml.enc (EDITOR=vim rails credentials:edit)",
        content: `sendgrid:
  api_key: "SG.wqDJ..." # SendGridで生成したAPI Key
mail:
  from: "noreply@care-shift.jp" # 送信元メールアドレス`
      }
    ]
  }
];

function Article1() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
               </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Tech2<span className="text-indigo-600">Notes</span>
            </h1>
          </div>
          <div className="text-sm font-medium text-slate-500">
            Rails Guide
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <article>
          {/* Article Header */}
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Backend Configuration
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Rails: 独自ドメイン & <br className="hidden sm:block" />
              Devise Confirmable SMTP設定
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Deviseのメール認証機能を本番環境で運用するために、SendGridを使ったSMTP送信設定と独自ドメインの紐付けを行う手順のまとめです。
            </p>
          </div>

          {/* Overview Diagram */}
          <div className="mb-16 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-6 text-center">Architecture Overview</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium">
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-16 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center text-blue-700">
                  お名前.com
                </div>
                <span className="text-slate-500 text-xs">DNS管理</span>
              </div>
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300 transform rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-16 bg-sky-50 border border-sky-200 rounded-lg flex items-center justify-center text-sky-700">
                  SendGrid
                </div>
                <span className="text-slate-500 text-xs">SMTP Server</span>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300 transform rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-16 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center text-red-700">
                  Rails App
                </div>
                <span className="text-slate-500 text-xs">ActionMailer</span>
              </div>
            </div>
             <div className="mt-6 text-center text-xs text-slate-400">
                ドメイン認証を行うことで、なりすましメール扱いされずに送信可能になります
             </div>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <StepCard 
                key={step.id} 
                step={step} 
                isLast={index === steps.length - 1} 
              />
            ))}
          </div>

           {/* Conclusion */}
           <div className="mt-12 p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">設定完了</h3>
              <p className="text-green-700">
                これでDeviseの認証メールが独自ドメイン経由で安全に送信されるようになります。<br/>
                本番環境でのメール送信テストを行い、正しく届くか確認しましょう。
              </p>
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
