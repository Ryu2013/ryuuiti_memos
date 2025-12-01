export interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
}

export interface SocialLink {
  platform: 'github' | 'twitter';
  url: string;
  username: string;
}

export interface StepImage {
  src: string;     // 画像のパス (例: "/images/step1.png")
  alt: string;     // 画像の説明 (アクセシビリティ用)
  caption?: string; // キャプション（必要な場合のみ）
}

export interface StepData {
  id: number;
  title: string;
  description: string;
  images?: StepImage[];
  code?: {
    lang: string;
    filename?: string;
    content: string;
  }[];
  note?: string;
}
