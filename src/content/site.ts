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
    title: 'Kazusa Tsubota — AWS AI Infrastructure / Platform Engineer',
    description:
      'Senior AI Infrastructure / AI Platform Engineer with 6+ years of backend and infrastructure experience. Kubernetes/EKS, GPU serving, Terraform, RAG, and production AI platforms. Based in Osaka, Japan.',
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
    role: 'AWS AI Infrastructure / Platform Engineer',
    pitch:
      '6+ years of backend and infrastructure experience transforming traditional business systems into AI-powered production platforms — across cost, performance, scalability, and operations.',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Python', 'Docker'],
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Download CV',
    location: 'Osaka, Japan',
  },
  about: {
    title: 'About',
    paragraphs: [
      'Senior AI Infrastructure / AI Platform Engineer with 6+ years of backend and infrastructure experience, specializing in transforming traditional business systems into AI-powered production platforms and solving challenges across cost, performance, scalability, and operational complexity.',
      'Experienced in designing scalable AI infrastructure with Kubernetes/EKS, GPU-based model serving, autoscaling, workload-based model routing, Terraform, Docker, and CI/CD. Strong hands-on experience across the AI production stack, including LLM inference, embeddings, Semantic Search, PostgreSQL/pgvector, RAG pipelines, and Tool Calling.',
      'Combines infrastructure and backend engineering expertise to build reliable, scalable, observable, and cost-efficient AI platforms, from model serving and retrieval infrastructure to production APIs and deployment pipelines.',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        company: 'ScalyX.ai',
        role: 'AI Infrastructure / AI Production Engineer',
        period: 'Oct 2023 – Jun 2026',
        location: 'USA · Remote',
        bullets: [
          'Designed and operated infrastructure for a multi-tenant AI-powered retail platform, evolving the architecture from EC2-based workloads to Kubernetes on AWS EKS to support growing production workloads and future tenant expansion.',
          'Designed and optimized AI inference infrastructure by evaluating model characteristics, GPU requirements, and workload patterns, using appropriate GPU configurations and model-serving strategies to balance latency, scalability, availability, and infrastructure cost.',
          'Implemented workload-based multi-model routing, directing simple requests to lightweight models and complex requests to larger models, reducing unnecessary GPU consumption and contributing to a 73% reduction in monthly AWS infrastructure costs while maintaining service performance.',
          'Built production AI services using Python/FastAPI, PostgreSQL, and Docker, integrating LLM capabilities into backend services and business workflows.',
          'Implemented Semantic Search using Embeddings and PostgreSQL/pgvector, providing vector-based retrieval capabilities for AI applications.',
          'Designed and implemented RAG pipelines, connecting document/data ingestion, embedding generation, vector retrieval, and LLM generation to improve the accuracy and contextual relevance of AI responses.',
          'Implemented LLM Tool Calling to enable AI agents to interact with backend services and execute business operations through controlled application tools.',
          'Designed and operated scalable Kubernetes workloads using replicas, ALB-based load balancing, health checks, HPA, Node Autoscaler, and Helm to handle changing application and AI workloads.',
          'Implemented infrastructure as code using Terraform and optimized CI/CD pipelines with Docker, ECR, and Kubernetes to make AI application and infrastructure deployments more consistent, automated, and reliable.',
          'Built end-to-end observability using Prometheus, Grafana, OpenTelemetry, Jaeger, and CloudWatch, monitoring infrastructure, application, and AI workloads and reducing root-cause analysis time by 98%.',
          'Applied security controls across AWS and Kubernetes using IAM, VPC/private networking, Security Groups, Kubernetes RBAC, Secrets Manager, and tenant-level access controls.',
          'Performed load and performance testing to identify bottlenecks and validate system scalability, supporting workloads of up to 10K RPS.',
        ],
      },
      {
        company: 'Madoromi, Inc',
        role: 'Infrastructure / Backend Engineer',
        period: 'Apr 2020 – Jul 2023',
        location: 'Tokyo, Japan · Remote',
        bullets: [
          'Designed and operated cost-efficient AWS infrastructure for an early-stage product using EC2 and Aurora RDS, selecting infrastructure capacity based on actual workload requirements rather than premature scaling.',
          'Designed and developed backend services using TypeScript/NestJS, PostgreSQL, and Node.js, building APIs and business logic for production applications.',
          'Designed a NestJS monorepo with Turborepo that consolidated multiple backend services onto a single EC2 instance, reducing infrastructure complexity and operational cost while maintaining sufficient capacity for the MVP workload.',
          'Implemented infrastructure automation using AWS Lambda and EventBridge to automatically start and stop development infrastructure according to engineering working hours, reducing unnecessary compute consumption.',
          'Optimized application and server resource usage to operate reliably within constrained EC2 CPU and memory resources.',
          'Introduced application and infrastructure observability to identify real production bottlenecks, using operational metrics to guide capacity planning and future architecture improvements.',
          'Worked across both backend development and infrastructure engineering, establishing a strong foundation in distributed application architecture, cloud infrastructure, deployment automation, and production operations.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        label: 'AI Infrastructure & Platform',
        items: [
          'LLM Inference',
          'Model Serving',
          'GPU Infrastructure',
          'Multi-Model Routing',
          'Kubernetes',
          'EKS',
          'HPA',
          'Node Autoscaling',
          'Helm',
        ],
      },
      {
        label: 'AI Engineering',
        items: [
          'RAG',
          'Embeddings',
          'Semantic Search',
          'Vector Search',
          'PostgreSQL/pgvector',
          'LLM Tool Calling',
          'AI Agent Architecture',
        ],
      },
      {
        label: 'Cloud & Infrastructure',
        items: [
          'AWS',
          'EC2',
          'EKS',
          'ALB',
          'VPC',
          'Private Subnets',
          'IAM',
          'Security Groups',
          'RDS/Aurora',
          'S3',
          'ECR',
          'CloudWatch',
        ],
      },
      {
        label: 'Infrastructure as Code & DevOps',
        items: [
          'Terraform',
          'Docker',
          'CI/CD',
          'Infrastructure as Code',
          'Infrastructure Automation',
          'Helm',
          'Deployment Optimization',
        ],
      },
      {
        label: 'Observability & Reliability',
        items: [
          'Prometheus',
          'Grafana',
          'OpenTelemetry',
          'Jaeger',
          'Metrics',
          'Logs',
          'Distributed Tracing',
          'Performance Monitoring',
          'Root Cause Analysis',
          'Load Testing',
        ],
      },
      {
        label: 'Backend Engineering',
        items: [
          'Python',
          'FastAPI',
          'TypeScript',
          'NestJS',
          'Node.js',
          'PostgreSQL',
          'REST APIs',
          'Monorepo',
          'Turborepo',
        ],
      },
      {
        label: 'Security & Multi-Tenancy',
        items: [
          'IAM',
          'Kubernetes RBAC',
          'Network Isolation',
          'Secrets Management',
          'Tenant Isolation',
          'Access Control',
        ],
      },
      {
        label: 'Performance & Cost Optimization',
        items: [
          'GPU Optimization',
          'Resource Right-Sizing',
          'Autoscaling',
          'Workload-Based Routing',
          'Capacity Planning',
          'Performance Optimization',
          'Cloud Cost Optimization',
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    school: 'Kobe University',
    degree: 'Bachelor of Engineering in Computer and Intelligent Systems Engineering',
    year: '2018',
  },
  contact: {
    title: 'Contact',
    lead: 'Open to opportunities in AI infrastructure, AI platform, and cloud platform engineering.',
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
    title: '坪田 一総 — AWS AIインフラ / プラットフォームエンジニア',
    description:
      '6年以上のバックエンド・インフラ経験を持つシニアAIインフラ / AIプラットフォームエンジニア。Kubernetes/EKS、GPU推論、Terraform、RAG基盤の設計・運用。大阪在住。',
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
    role: 'AWS AIインフラ / プラットフォームエンジニア',
    pitch:
      '6年以上のバックエンド・インフラ経験を活かし、従来の業務システムを本番運用可能なAIプラットフォームへ転換。コスト、パフォーマンス、スケーラビリティ、運用の課題に取り組んできました。',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Python', 'Docker'],
    ctaPrimary: '実績を見る',
    ctaSecondary: 'CVをダウンロード',
    location: '大阪府',
  },
  about: {
    title: '紹介',
    paragraphs: [
      '6年以上のバックエンドおよびインフラ経験を持つシニアAIインフラ / AIプラットフォームエンジニアです。従来の業務システムを本番運用可能なAIプラットフォームへ転換し、コスト、パフォーマンス、スケーラビリティ、運用の複雑さといった課題に取り組んできました。',
      'Kubernetes/EKS、GPUベースのモデルサービング、オートスケーリング、ワークロードに応じたモデルルーティング、Terraform、Docker、CI/CDを用いたスケーラブルなAIインフラの設計に強みがあります。LLM推論、Embeddings、セマンティック検索、PostgreSQL/pgvector、RAGパイプライン、Tool Callingなど、AI本番スタック全般の実務経験があります。',
      'インフラとバックエンド双方の知見を組み合わせ、モデルサービングや検索基盤から本番API、デプロイパイプラインまで、信頼性が高く、スケーラブルで、観測可能かつコスト効率の良いAIプラットフォームを構築します。',
    ],
  },
  experience: {
    title: '経歴',
    items: [
      {
        company: 'ScalyX.ai',
        role: 'AIインフラ / AIプロダクションエンジニア',
        period: '2023年10月 – 2026年6月',
        location: '米国 · リモート',
        bullets: [
          'マルチテナントのAIリテールプラットフォーム向けインフラを設計・運用。EC2ベースのワークロードからAWS EKS上のKubernetesへアーキテクチャを進化させ、本番負荷の増大と今後のテナント拡張に対応。',
          'モデル特性、GPU要件、ワークロードパターンを評価し、適切なGPU構成とモデルサービング戦略を用いてAI推論基盤を設計・最適化。レイテンシ、スケーラビリティ、可用性、インフラコストのバランスを実現。',
          'ワークロードに応じたマルチモデルルーティングを実装。単純なリクエストは軽量モデルへ、複雑なリクエストは大規模モデルへ振り分け、不要なGPU消費を削減。サービス性能を維持しながら月次AWSインフラコストを73%削減。',
          'Python/FastAPI、PostgreSQL、Dockerを用いた本番AIサービスを構築し、LLM機能をバックエンドサービスと業務ワークフローに統合。',
          'EmbeddingsとPostgreSQL/pgvectorによるセマンティック検索を実装し、AIアプリケーション向けのベクトル検索基盤を提供。',
          'ドキュメント/データの取り込み、埋め込み生成、ベクトル検索、LLM生成をつなぐRAGパイプラインを設計・実装し、AI回答の精度と文脈適合性を向上。',
          'LLM Tool Callingを実装し、AIエージェントがバックエンドサービスと連携して、制御されたアプリケーションツール経由で業務操作を実行できるようにした。',
          'replicas、ALB負荷分散、ヘルスチェック、HPA、Node Autoscaler、Helmを用いて、アプリケーションおよびAIワークロードの変動に対応するスケーラブルなKubernetesワークロードを設計・運用。',
          'TerraformによるInfrastructure as Codeを実装し、Docker、ECR、Kubernetesを用いたCI/CDパイプラインを最適化。AIアプリケーションとインフラのデプロイをより一貫性があり、自動化され、信頼性の高いものにした。',
          'Prometheus、Grafana、OpenTelemetry、Jaeger、CloudWatchによるエンドツーエンドの可観測性を構築。インフラ、アプリケーション、AIワークロードを監視し、根本原因分析の時間を98%短縮。',
          'IAM、VPC/プライベートネットワーク、セキュリティグループ、Kubernetes RBAC、Secrets Manager、テナント単位のアクセス制御により、AWSおよびKubernetes全体にセキュリティコントロールを適用。',
          '負荷・性能試験を実施し、ボトルネックを特定してシステムのスケーラビリティを検証。最大10K RPSのワークロードに対応。',
        ],
      },
      {
        company: 'Madoromi, Inc',
        role: 'インフラ / バックエンドエンジニア',
        period: '2020年4月 – 2023年7月',
        location: '東京 · リモート',
        bullets: [
          '初期プロダクト向けにEC2とAurora RDSを用いたコスト効率の良いAWSインフラを設計・運用。先回りした過剰スケールではなく、実ワークロードに基づいてキャパシティを選定。',
          'TypeScript/NestJS、PostgreSQL、Node.jsを用いたバックエンドサービスを設計・開発し、本番アプリケーション向けのAPIとビジネスロジックを構築。',
          'Turborepoを用いたNestJSモノレポを設計し、複数のバックエンドサービスを単一のEC2インスタンスに集約。MVPワークロードに十分なキャパシティを維持しつつ、インフラの複雑さと運用コストを削減。',
          'AWS LambdaとEventBridgeによるインフラ自動化を実装し、エンジニアの勤務時間に合わせて開発環境を自動起動・停止。不要なコンピュート消費を削減。',
          '制約のあるEC2のCPU・メモリリソース内で安定稼働するよう、アプリケーションとサーバーのリソース使用を最適化。',
          'アプリケーションおよびインフラの可観測性を導入し、実際の本番ボトルネックを特定。運用メトリクスをキャパシティプランニングと今後のアーキテクチャ改善に活用。',
          'バックエンド開発とインフラエンジニアリングの双方に携わり、分散アプリケーションアーキテクチャ、クラウドインフラ、デプロイ自動化、本番運用の基盤を確立。',
        ],
      },
    ],
  },
  skills: {
    title: 'スキル',
    groups: [
      {
        label: 'AIインフラ・プラットフォーム',
        items: [
          'LLM Inference',
          'Model Serving',
          'GPU Infrastructure',
          'Multi-Model Routing',
          'Kubernetes',
          'EKS',
          'HPA',
          'Node Autoscaling',
          'Helm',
        ],
      },
      {
        label: 'AIエンジニアリング',
        items: [
          'RAG',
          'Embeddings',
          'Semantic Search',
          'Vector Search',
          'PostgreSQL/pgvector',
          'LLM Tool Calling',
          'AI Agent Architecture',
        ],
      },
      {
        label: 'クラウド・インフラ',
        items: [
          'AWS',
          'EC2',
          'EKS',
          'ALB',
          'VPC',
          'Private Subnets',
          'IAM',
          'Security Groups',
          'RDS/Aurora',
          'S3',
          'ECR',
          'CloudWatch',
        ],
      },
      {
        label: 'IaC・DevOps',
        items: [
          'Terraform',
          'Docker',
          'CI/CD',
          'Infrastructure as Code',
          'Infrastructure Automation',
          'Helm',
          'Deployment Optimization',
        ],
      },
      {
        label: '可観測性・信頼性',
        items: [
          'Prometheus',
          'Grafana',
          'OpenTelemetry',
          'Jaeger',
          'Metrics',
          'Logs',
          'Distributed Tracing',
          'Performance Monitoring',
          'Root Cause Analysis',
          'Load Testing',
        ],
      },
      {
        label: 'バックエンド',
        items: [
          'Python',
          'FastAPI',
          'TypeScript',
          'NestJS',
          'Node.js',
          'PostgreSQL',
          'REST APIs',
          'Monorepo',
          'Turborepo',
        ],
      },
      {
        label: 'セキュリティ・マルチテナンシー',
        items: [
          'IAM',
          'Kubernetes RBAC',
          'Network Isolation',
          'Secrets Management',
          'Tenant Isolation',
          'Access Control',
        ],
      },
      {
        label: 'パフォーマンス・コスト最適化',
        items: [
          'GPU Optimization',
          'Resource Right-Sizing',
          'Autoscaling',
          'Workload-Based Routing',
          'Capacity Planning',
          'Performance Optimization',
          'Cloud Cost Optimization',
        ],
      },
    ],
  },
  education: {
    title: '学歴',
    school: '神戸大学',
    degree: 'コンピュータ・インテリジェントシステム工学 学士',
    year: '2018年',
  },
  contact: {
    title: '連絡先',
    lead: 'AIインフラ、AIプラットフォーム、クラウド基盤エンジニアリングの機会に前向きです。',
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
