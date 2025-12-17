import { Link } from 'react-router-dom';
import { MyCharacter } from "../components/MyCharacter";

const Article3 = () => {
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
                            AWS / CircleCI
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
                            AWS / GitHub Actions
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            SSM Run Commandで<br className="hidden sm:block" />
                            GitHub ActionsからEC2へデプロイ
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            SSH(22)を外に開けずに、GitHub ActionsからAWS OIDC認証を経て<br />
                            SSM Run CommandでEC2にシェルを投げるセキュアな構成手順。
                        </p>
                    </div>

                    {/* Content Section 1: EC2 Preparation */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-xl">1</div>
                            <h2 className="text-2xl font-bold text-slate-800">EC2 側の準備</h2>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
                            <p>EC2をSystems Manager (SSM) の管理対象にする必要があります。</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                                <li>
                                    <span className="font-bold">SSM Agentの導入</span>: Amazon Linux 2などでは標準で入っていますが、running状態であることを確認します。
                                </li>
                                <div className="bg-slate-900 rounded-lg overflow-hidden">
                                    <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-700">
                                        確認コマンド(EC2上で実行)
                                    </div>
                                    <div className="p-4 text-emerald-400 font-mono text-sm">
                                        sudo systemctl status amazon-ssm-agent<br />
                                        Active: active（running）ならOK
                                    </div>
                                </div>
                                <li>
                                    <span className="font-bold">IAM Role作成(EC2用)</span>
                                    <ol className="list-decimal list-inside space-y-1 mt-2 ml-4 text-slate-600">
                                        <li>AWSコンソールで [IAM] を開く</li>
                                        <li>左メニュー [ロール] → [ロールを作成]</li>
                                        <li>信頼されたエンティティタイプ: [AWS のサービス]</li>
                                        <li>ユースケース: [EC2] を選択して [次へ]</li>
                                        <li>許可ポリシー: <code>AmazonSSMManagedInstanceCore</code> で検索してチェックを入れる</li>
                                        <li>[次へ] を押し、ロール名に <code>EC2-SSM-Role</code> など分かりやすい名前をつけて [ロールを作成]</li>
                                    </ol>
                                </li>
                                <li>
                                    <span className="font-bold">EC2 にロールをくっつける</span>
                                    <ol className="list-decimal list-inside space-y-1 mt-2 ml-4 text-slate-600">
                                        <li>AWSコンソールで [EC2] を開く。</li>
                                        <li>対象のインスタンスにチェックを入れる。</li>
                                        <li>右上の [アクション] → [セキュリティ] → [IAM ロールを変更]。</li>
                                        <li>さっき作った EC2-SSM-Role を選択して [IAM ロールの更新]。</li>
                                    </ol>
                                </li>
                            </ul>
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600">
                                ※ Systems Manager の「Fleet Manager / Managed nodes」で、対象EC2が “Managed” として見えていればOKです。<br />
                                ※ これによりSSHポート(22)を開放せずにコマンド実行が可能になります。
                            </div>
                        </div>
                    </section>

                    {/* Content Section 2: Tagging */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-xl">2</div>
                            <h2 className="text-2xl font-bold text-slate-800">ターゲット用タグの設定</h2>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <p className="mb-4">Run Commandの送信先として、インスタンスIDではなく「タグ」を指定するのが運用上便利です。</p>
                            <div className="bg-slate-100 p-4 rounded font-mono text-sm">
                                Key: Role<br />
                                Value: shift-app
                            </div>
                            <p className="mt-4 text-sm text-slate-500">※ このようなタグをEC2に付与しておきます。</p>
                        </div>
                    </section>

                    {/* Content Section 3: IAM Role for GitHub Actions */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-xl">3</div>
                            <h2 className="text-2xl font-bold text-slate-800">GitHub Actions用のIAM Role を作る(OIDC)</h2>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-8">

                            {/* Step 1: OIDC Provider */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-700 mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">A</span>
                                    OIDC プロバイダーを作成
                                </h3>
                                <p className="mb-3 text-slate-600 text-sm">まず、AWS に「GitHub からのアクセスを信頼していいよ」と教えます（初回のみ）。</p>
                                <ol className="list-decimal list-inside space-y-2 ml-2 text-slate-600 text-sm">
                                    <li>AWS コンソールで [IAM] を開く。</li>
                                    <li>左メニューの [ID プロバイダ] → [プロバイダを追加]。</li>
                                    <li>
                                        以下の設定を入力して [プロバイダを追加]。
                                        <ul className="list-disc list-inside ml-6 mt-1 text-slate-500">
                                            <li>プロバイダのタイプ: <strong>OpenID Connect</strong></li>
                                            <li>プロバイダの URL: <code>https://token.actions.githubusercontent.com</code></li>
                                            <li>対象者 (Audience): <code>sts.amazonaws.com</code></li>
                                        </ul>
                                    </li>
                                    <li className="text-amber-600">※ 入力後、必ず「サムプリントを取得」ボタンを押してください。</li>
                                </ol>
                            </div>

                            {/* Step 2: Create Role */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-700 mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">B</span>
                                    GitHub Actions 用の IAM ロールを作成
                                </h3>
                                <p className="mb-3 text-slate-600 text-sm">次に、GitHub Actions が使う専用のロールを作ります。</p>
                                <ol className="list-decimal list-inside space-y-2 ml-2 text-slate-600 text-sm">
                                    <li>IAM の左メニュー [ロール] → [ロールを作成]。</li>
                                    <li>信頼されたエンティティタイプ: <strong>ウェブアイデンティティ</strong> を選択。</li>
                                    <li>
                                        ID プロバイダ: 先ほど作った <code>token.actions.githubusercontent.com</code> を選択。<br />
                                        Audience: <code>sts.amazonaws.com</code> を選択。
                                    </li>
                                    <li>
                                        GitHub 組織: あなたの GitHub アカウント名。<br />
                                        GitHub リポジトリ: 今回のリポジトリ名。
                                    </li>
                                    <li>[次へ] をクリック。</li>
                                </ol>

                                <div className="mt-4">
                                    <p className="font-bold text-slate-700 text-sm mb-2">許可ポリシーの設定（Permissions）</p>
                                    <p className="text-sm text-slate-600 mb-2">[ポリシーを作成] → [JSON] タブに以下を貼り付けます。</p>
                                    <div className="bg-slate-900 rounded-lg overflow-hidden">
                                        <div className="p-4 overflow-x-auto">
                                            <pre className="text-emerald-400 font-mono text-xs leading-relaxed"><code>{`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowSSM",
            "Effect": "Allow",
            "Action": [
                "ssm:SendCommand",
                "ssm:GetCommandInvocation",
                "ssm:ListCommandInvocations"
            ],
            "Resource": [
                "arn:aws:ssm:*:*:document/AWS-RunShellScript",
                "arn:aws:ec2:*:*:instance/*"
            ]
        },
        {
            "Sid": "AllowEC2Describe",
            "Effect": "Allow",
            "Action": "ec2:DescribeInstances",
            "Resource": "*"
        }
    ]
}`}</code></pre>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">
                                        ※ ポリシー名（例: <code>GitHubDeployPolicy</code>）をつけて作成し、ロール作成画面でこれを選択します。
                                    </p>
                                </div>
                                <div className="mt-4 bg-indigo-50 p-3 rounded text-sm text-indigo-800">
                                    最後にロール名（例: <code>GitHubActions-Deploy-Role</code>）をつけて作成完了です。<br />
                                    <strong>ロールのARN</strong>（<code>arn:aws:iam::123456...</code>）を控えておいてください。
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Content Section 4: GitHub Actions Workflow */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-xl">4</div>
                            <h2 className="text-2xl font-bold text-slate-800">GitHub Actions Workflow</h2>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
                            <p>
                                <code>appleboy/ssh-action</code> は使用せず、<code>aws-actions/configure-aws-credentials</code> で認証し、
                                SSM Run Command でデプロイを実行します。
                            </p>

                            <div className="bg-slate-900 rounded-lg overflow-hidden">
                                <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-700">
                                    .github/workflows/deploy.yml
                                </div>
                                <div className="p-4 overflow-x-auto">
                                    <pre className="text-slate-300 font-mono text-xs leading-relaxed"><code>{`name: Deploy to EC2 via SSM

on:
  push:
    branches: [ main ]

# OIDCを使うために必須の設定
permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      # AWSへのログイン (OIDC)
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/GitHubActions-Deploy-Role
          aws-region: ap-northeast-1

      # SSMを使ってデプロイコマンドを実行
      - name: Deploy via SSM Send-Command
        run: |
          aws ssm send-command \\
            --document-name "AWS-RunShellScript" \\
            --targets "Key=tag:Role,Values=shift-app" \\
            --comment "Auto deployment from GitHub Actions" \\
            --parameters 'commands=[
              "cd /var/www/shift_management_app_aws",
              "git pull origin main",
              "source /etc/systemd/system/shift_app.env",
              "bundle install --deployment --without development test",
              "bundle exec rails db:migrate RAILS_ENV=production",
              "bundle exec rails assets:precompile RAILS_ENV=production",
              "sudo systemctl restart shift_app"
            ]' \\
            --output text`}</code></pre>
                                </div>
                            </div>

                            <p className="text-sm text-slate-600 bg-yellow-50 p-4 rounded border border-yellow-200">
                                <strong className="text-yellow-700 block mb-1">⚠️ 重要: 環境変数の読み込み</strong>
                                SSM経由で実行する場合、<code>.bash_profile</code> などが読み込まれないため、<code>bundle</code> コマンドが見つからないことがあります。<br />
                                SystemdのEnvironmentFileを使っている場合は <code>source /etc/systemd/system/shift_app.env</code> のように明示的に読み込むか、コマンドをフルパス（例: <code>/home/ec2-user/.rbenv/shims/bundle</code>）で指定してください。
                            </p>
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
        </div >
    );
};

export default Article3;
