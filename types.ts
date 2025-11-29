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

export interface StepData {
  id: number;
  title: string;
  description: string;
  code?: {
    lang: string;
    filename?: string;
    content: string;
  }[];
  note?: string;
}
