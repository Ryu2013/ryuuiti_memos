import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // React.StrictMode は「開発モード専用」の安全チェックツール。
  // コンポーネントの潜在的なバグや非推奨コードを検出する
  // 本番ビルドでは自動的に無効になるため、動作に影響はない。
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
