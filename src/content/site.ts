export type Locale = 'en' | 'ja';

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    photoAlt: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    pitch: string;
    tech: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  education: {
    title: string;
    school: string;
    degree: string;
    year: string;
  };
  contact: {
    title: string;
    lead: string;
    location: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: {
    rights: string;
  };
};

export const links = {
  email: 'kazusa931209@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kazusa-tsubota-241485358',
  github: 'https://github.com/tsubokazu',
  cv: '/Kazusa-Tsubota-CV.pdf',
} as const;

const en: SiteContent = {
  meta: {
    title: 'Kazusa Tsubota — Senior Frontend & Full-Stack Engineer',
    description:
      'Senior Full-Stack Software Engineer with 9+ years of experience building scalable SaaS across AI, healthcare, retail, and enterprise. Based in Osaka, Japan.',
    photoAlt: 'Professional headshot of Kazusa Tsubota in a dark suit and white shirt',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Kazusa Tsubota',
    role: 'Senior Frontend Engineer | Full-Stack Engineer',
    pitch:
      '9+ years of experience building scalable SaaS applications with modern web technologies, AI-powered features, and cloud-native architectures.',
    tech: ['Next.js', 'React', 'TypeScript', 'Python', 'AWS'],
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Download CV',
    location: 'Osaka, Japan',
  },
  about: {
    title: 'About',
    paragraphs: [
      'Senior Full-Stack Software Engineer with 9+ years of experience building scalable SaaS applications across AI, healthcare, retail, and enterprise domains. Strong expertise in frontend development with Next.js, React, React Native, and TypeScript, complemented by hands-on experience building backend services using Python and Node.js.',
      'Experienced in developing modern web and mobile applications, integrating AI-powered features including Retrieval-Augmented Generation (RAG) and AI agents, and delivering cloud-native solutions on AWS and Google Cloud Platform. Passionate about building intuitive user experiences, writing maintainable software, and collaborating with cross-functional teams to deliver high-quality products.',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        company: 'Madoromi, Inc',
        role: 'Frontend Engineer',
        period: 'Dec 2025 – Jun 2026',
        location: 'Tokyo, Japan · Remote',
        bullets: [
          'Developed the user-facing web application and laboratory management portal using Next.js, delivering responsive, intuitive, and high-performance experiences.',
          'Built cross-platform iOS and Android applications using React Native and Expo with a shared codebase.',
          'Developed reusable UI components, application state management, and API integrations for a scalable frontend architecture.',
          'Collaborated with backend engineers to integrate REST APIs and deliver end-to-end features.',
          'Contributed to a genomic healthcare platform that combines DNA test results with medical research for personalized health insights.',
        ],
      },
      {
        company: 'ScalyX.ai',
        role: 'Backend Infrastructure Engineer / Frontend Engineer',
        period: 'Jan 2024 – Dec 2025',
        location: 'USA · Remote',
        bullets: [
          'Designed and developed cloud-native backend infrastructure using Python, FastAPI, Google Cloud Platform, Terraform, Cloud Run, and PostgreSQL.',
          'Built core backend services for a retail management SaaS platform, including Inventory, Product Management, CMS, POS integration, Logistics, Shipping, Stripe Payments, and Tax Automation.',
          'Designed Retrieval-Augmented Generation (RAG) pipelines and AI Agents to automate business workflows and knowledge retrieval.',
          'Developed AI-powered UI features that transformed AI-generated outputs into interactive business workflows.',
          'Built data migration engines enabling onboarding of new merchants from external retail platforms.',
          'Designed scalable cloud deployment pipelines and infrastructure automation using Terraform.',
        ],
      },
      {
        company: 'StoreHub',
        role: 'Full-Stack Engineer',
        period: 'Jul 2017 – Dec 2023',
        location: 'Kuala Lumpur, Malaysia · On-Site',
        bullets: [
          'Joined as a Junior Engineer and progressed to Senior Full-Stack Engineer while contributing to multiple large-scale SaaS products.',
          'Contributed to more than six commercial SaaS products, including POS systems, internal platforms, retail management services, and customer-facing web applications.',
          'Developed modern web applications using React, Vue.js, Node.js, and cloud-native backend technologies.',
          'Built scalable backend APIs supporting thousands of daily retail transactions across Southeast Asia.',
          'Improved application performance, scalability, and system reliability for mission-critical retail services.',
          'Mentored junior engineers and participated in architecture discussions in later project stages.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        label: 'Frontend',
        items: [
          'Next.js',
          'React',
          'React Native',
          'Expo',
          'TypeScript',
          'Tailwind CSS',
          'shadcn/ui',
          'SSR / ISR',
        ],
      },
      {
        label: 'Backend',
        items: [
          'Python (FastAPI)',
          'Node.js',
          'NestJS',
          'REST / GraphQL',
          'JWT / OAuth',
          'Microservices',
        ],
      },
      {
        label: 'AI & LLM',
        items: [
          'RAG',
          'AI Agents',
          'OpenAI API',
          'Vertex AI',
          'Semantic Search',
          'Vector Search',
        ],
      },
      {
        label: 'Cloud & DevOps',
        items: [
          'AWS',
          'Google Cloud',
          'Terraform',
          'Docker',
          'Kubernetes',
          'GitHub Actions',
        ],
      },
      {
        label: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Query Optimization'],
      },
      {
        label: 'Testing',
        items: ['Jest', 'Vitest', 'Playwright', 'Cypress'],
      },
    ],
  },
  education: {
    title: 'Education',
    school: 'Malaya University',
    degree: 'Bachelor of Engineering in Computer and Intelligent Systems Engineering',
    year: '2016',
  },
  contact: {
    title: 'Contact',
    lead: 'Open to opportunities in frontend, full-stack, and AI-powered product engineering.',
    location: 'Osaka, Japan',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

const ja: SiteContent = {
  meta: {
    title: '坪田 一総 — シニアフロントエンド / フルスタックエンジニア',
    description:
      'AI・ヘルスケア・リテール・エンタープライズ領域でスケーラブルなSaaSを構築してきた、9年以上の経験を持つシニアフルスタックエンジニア。大阪在住。',
    photoAlt: 'ダークスーツに白いシャツを着た坪田 一総のプロフェッショナルなポートレート',
  },
  nav: {
    about: '紹介',
    experience: '経歴',
    skills: 'スキル',
    education: '学歴',
    contact: '連絡先',
  },
  hero: {
    greeting: 'こんにちは、',
    name: '坪田 一総',
    role: 'シニアフロントエンドエンジニア | フルスタックエンジニア',
    pitch:
      'モダンなWeb技術、AI機能、クラウドネイティブアーキテクチャでスケーラブルなSaaSを構築してきた9年以上の経験があります。',
    tech: ['Next.js', 'React', 'TypeScript', 'Python', 'AWS'],
    ctaPrimary: '実績を見る',
    ctaSecondary: 'CVをダウンロード',
    location: '大阪府',
  },
  about: {
    title: '紹介',
    paragraphs: [
      'AI・ヘルスケア・リテール・エンタープライズ領域でスケーラブルなSaaSを構築してきた、9年以上の経験を持つシニアフルスタックソフトウェアエンジニアです。Next.js、React、React Native、TypeScriptによるフロントエンドを得意とし、PythonおよびNode.jsでのバックエンド開発経験も有しています。',
      'モダンなWeb・モバイルアプリケーションの開発、RAGやAIエージェントをはじめとするAI機能の統合、AWSおよびGoogle Cloud上でのクラウドネイティブなソリューション提供に携わってきました。直感的なUX、保守しやすいコード、クロスファンクショナルなチームでの高品質なプロダクト提供を大切にしています。',
    ],
  },
  experience: {
    title: '経歴',
    items: [
      {
        company: 'Madoromi, Inc',
        role: 'フロントエンドエンジニア',
        period: '2025年12月 – 2026年6月',
        location: '東京 · リモート',
        bullets: [
          'Next.jsを用いてユーザー向けWebアプリおよび研究室管理ポータルを開発し、レスポンシブで直感的かつ高性能な体験を実現。',
          'React NativeとExpoによる共有コードベースで、iOS・Android向けクロスプラットフォームアプリを構築。',
          '再利用可能なUIコンポーネント、状態管理、API連携を整備し、スケーラブルなフロントエンドアーキテクチャを構築。',
          'バックエンドエンジニアと連携し、REST API統合とエンドツーエンドの機能開発を推進。',
          'DNA検査結果と医療研究を組み合わせたゲノムヘルスケアプラットフォームの開発に貢献。',
        ],
      },
      {
        company: 'ScalyX.ai',
        role: 'バックエンドインフラ / フロントエンドエンジニア',
        period: '2024年1月 – 2025年12月',
        location: '米国 · リモート',
        bullets: [
          'Python、FastAPI、GCP、Terraform、Cloud Run、PostgreSQLを用いたクラウドネイティブなバックエンド基盤を設計・開発。',
          '在庫、商品管理、CMS、POS連携、物流、配送、Stripe決済、税務自動化など、リテール管理SaaSの中核サービスを開発。',
          '業務ワークフロー自動化と知識検索のためのRAGパイプラインおよびAIエージェントを設計。',
          'AI生成結果をインタラクティブな業務フローに変換するAI搭載UI機能を開発。',
          '外部リテールプラットフォームからの新規加盟店オンボーディングを可能にするデータ移行エンジンを構築。',
          'Terraformによるスケーラブルなクラウドデプロイパイプラインとインフラ自動化を設計。',
        ],
      },
      {
        company: 'StoreHub',
        role: 'フルスタックエンジニア',
        period: '2017年7月 – 2023年12月',
        location: 'クアラルンプール · オンサイト',
        bullets: [
          'ジュニアエンジニアとして入社し、複数の大規模SaaSプロダクトに貢献しながらシニアフルスタックエンジニアへ成長。',
          'POS、社内プラットフォーム、リテール管理、顧客向けWebアプリなど、6つ以上の商用SaaSプロダクトに貢献。',
          'React、Vue.js、Node.js、クラウドネイティブ技術を用いたモダンWebアプリケーションを開発。',
          '東南アジア全域で1日数千件のリテール取引を支えるスケーラブルなバックエンドAPIを構築。',
          'ミッションクリティカルなリテールサービスにおけるパフォーマンス・スケーラビリティ・信頼性を向上。',
          'ジュニアエンジニアのメンタリングやアーキテクチャ議論に参加。',
        ],
      },
    ],
  },
  skills: {
    title: 'スキル',
    groups: [
      {
        label: 'フロントエンド',
        items: [
          'Next.js',
          'React',
          'React Native',
          'Expo',
          'TypeScript',
          'Tailwind CSS',
          'shadcn/ui',
          'SSR / ISR',
        ],
      },
      {
        label: 'バックエンド',
        items: [
          'Python (FastAPI)',
          'Node.js',
          'NestJS',
          'REST / GraphQL',
          'JWT / OAuth',
          'Microservices',
        ],
      },
      {
        label: 'AI・LLM',
        items: [
          'RAG',
          'AI Agents',
          'OpenAI API',
          'Vertex AI',
          'Semantic Search',
          'Vector Search',
        ],
      },
      {
        label: 'クラウド・DevOps',
        items: [
          'AWS',
          'Google Cloud',
          'Terraform',
          'Docker',
          'Kubernetes',
          'GitHub Actions',
        ],
      },
      {
        label: 'データベース',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Query Optimization'],
      },
      {
        label: 'テスト',
        items: ['Jest', 'Vitest', 'Playwright', 'Cypress'],
      },
    ],
  },
  education: {
    title: '学歴',
    school: 'マラヤ大学',
    degree: 'コンピュータ・インテリジェントシステム工学 学士',
    year: '2016年',
  },
  contact: {
    title: '連絡先',
    lead: 'フロントエンド、フルスタック、AIプロダクトエンジニアリングの機会に前向きです。',
    location: '大阪府',
    emailLabel: 'メール',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

export const siteContent: Record<Locale, SiteContent> = { en, ja };

export function getContent(locale: string): SiteContent {
  return siteContent[locale as Locale] ?? siteContent.en;
}
