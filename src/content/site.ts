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
    title: 'Kazusa Tsubota — Lead ML Architect | Google Cloud & MLOps',
    description:
      'Senior AI platform and infrastructure engineer for Google Cloud. Vertex AI, Gemini Enterprise Agent Platform Pipelines, GKE, BigQuery, Terraform, and production MLOps. Based in Osaka, Japan.',
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
    role: 'Lead ML Architect | Google Cloud & MLOps Platforms',
    pitch:
      'I design and operate production-grade ML and MLOps platforms on Google Cloud — Vertex AI, GKE, BigQuery, and Terraform — covering the full lifecycle from reusable pipelines and model registry through monitoring, retraining, and rollback.',
    tech: ['GCP', 'Vertex AI', 'Kubernetes', 'Terraform', 'Python'],
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Download CV',
    location: 'Osaka, Japan',
  },
  about: {
    title: 'About',
    paragraphs: [
      'Senior AI platform and infrastructure engineer targeting Lead ML Architect roles for Google Cloud. Designs and operates production-grade ML and MLOps platforms spanning Vertex AI, Gemini Enterprise Agent Platform Pipelines, GKE, Cloud Composer, Dataflow, BigQuery, IAM, and Terraform.',
      'Delivers end-to-end ML lifecycle architectures with reusable pipeline components, controlled promotion, model registry and lineage practices, monitoring, retraining, rollback, and reproducibility standards.',
      'Brings hands-on architectural decision-making across managed and Kubernetes-based serving models, cloud security, governance, observability, and scalable GPU-backed AI workloads.',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        company: 'Mentanomaly',
        role: 'Senior AI Platform & MLOps Infrastructure Engineer',
        period: 'Jul 2024 – Present',
        location: 'Osaka, Japan',
        bullets: [
          'Designed an end-to-end GCP ML platform architecture using Vertex AI for ML lifecycle management and Gemini Enterprise Agent Platform Pipelines for controlled, agent-driven workflow execution.',
          'Built modular, reusable pipeline components with defined inputs and outputs, separating AI orchestration from compute-intensive inference so stages could be independently developed, retried, scaled, and replaced.',
          'Built and operated production ML workloads across Vertex AI, GKE, Cloud Composer, Dataflow, Cloud Storage, IAM, and Terraform; evaluated Vertex AI versus Kubernetes serving through scalability, control, latency, and operational-complexity trade-offs.',
          'Established BigQuery as a centralized analytical layer, transforming raw data into curated training datasets and reusable features with schema consistency, partitioning, access control, data quality, and workload isolation.',
          'Designed ML lifecycle governance covering feature engineering, evaluation, model registration and lineage, approval-based promotion, CI/CD validation, retraining, rollback mechanisms, artifact retirement, and reproducibility across development, testing, and production environments; reduced model release time from 20 to 14 minutes.',
          'Implemented Monitoring & Observability for model quality, data and model drift, ground-truth validation, inference latency, failures, and GPU utilization using Prometheus, Grafana, OpenTelemetry, and tracing; reduced mean time to detect and recover from production ML issues from 2 hours to 20 minutes.',
          'Designed and operated a GPU-backed, asynchronous image-generation platform supporting over 10K users and 30K daily generation jobs; improved inference throughput by 8%, reduced p95 generation latency from 2.5 seconds to 1.7 seconds, increased GPU utilization from 83% to 92%, and reduced infrastructure cost per generation by 7%.',
          'Applied least-privilege IAM, service identities, environment isolation, network boundaries, secret-management, auditability, and resource ownership controls, balancing cloud security and governance against scalability, performance, operability, and cost.',
        ],
      },
      {
        company: 'ScalyX.ai',
        role: 'Senior AI Production & Cloud Infrastructure Engineer',
        period: 'Jul 2022 – Jul 2024',
        location: 'Remote',
        bullets: [
          'Designed production AI-serving architecture across GCP and AWS, using Vertex AI, GKE, Cloud Composer, Dataflow, Cloud Storage, IAM, Terraform, and Kubernetes-based serving to support scalable ML workflows.',
          'Developed reusable, asynchronous pipeline stages for AI orchestration, model inference, post-processing, retries, and failure recovery; enabled independent scaling of CPU- and GPU-bound components and recovery without restarting complete workflows.',
          'Built a resilient RAG and tool-calling pipeline using Python, FastAPI, PostgreSQL with pgvector, and Redis, covering ingestion, embeddings, retrieval, generation, orchestration, memory, caching, retries, timeouts, and fallbacks.',
          'Implemented monitoring for model quality, data and model drift, inference latency, failures, GPU utilization, LLM cost, and workflow performance with Prometheus, OpenTelemetry, and Grafana; reduced mean time to detect and recover from ML production issues from 2 hours to 20 minutes.',
          'Managed model deployment and versioning, IAM controls, Cloud Storage integration, Terraform provisioning, and CI/CD-oriented testing for AI services, improving reliability across evolving multi-tenant retail workflows.',
        ],
      },
      {
        company: 'Madoromi, Inc.',
        role: 'Senior Backend & Cloud Infrastructure Engineer',
        period: 'Jul 2018 – Jul 2022',
        location: 'Tokyo, Japan',
        bullets: [
          'Progressed from junior engineering to senior-level ownership across SaaS and AI-powered applications, designing APIs and data models, resolving production issues, optimizing performance, and contributing to backend architecture.',
          'Expanded responsibility into AWS cloud infrastructure, containers, CI/CD, monitoring, networking, databases, deployment automation, and production operations to strengthen reliability, scalability, and operational readiness.',
          'Facilitated technical discussions with customers and senior stakeholders, translating business requirements into API, data-flow, infrastructure, security, scalability, and observability designs.',
          'Evaluated and documented architecture trade-offs between managed and self-managed infrastructure, synchronous and asynchronous processing, and centralized versus independently scalable services, creating practical implementation plans aligned with stakeholder priorities.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        label: 'Google Cloud ML Platform',
        items: [
          'Google Cloud Platform (GCP)',
          'Vertex AI',
          'Gemini Enterprise Agent Platform Pipelines',
          'BigQuery',
          'GKE',
          'Cloud Composer',
          'Dataflow',
        ],
      },
      {
        label: 'MLOps & ML Lifecycle',
        items: [
          'Pipeline orchestration',
          'Model Registry & lineage',
          'CI/CD for ML',
          'Model monitoring',
          'Drift detection & retraining',
        ],
      },
      {
        label: 'Cloud Architecture & Governance',
        items: [
          'IAM & least-privilege security',
          'Terraform',
          'Monitoring & Observability',
          'Kubernetes',
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    school: 'Kobe University',
    degree: 'Bachelor of Engineering, Computer and Intelligent Systems Engineering',
    year: '2018',
  },
  contact: {
    title: 'Contact',
    lead: 'Open to Lead ML Architect and Google Cloud MLOps platform opportunities.',
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
    title: '坪田 一総 — Lead ML Architect | Google Cloud & MLOps',
    description:
      'Google Cloud向けのシニアAIプラットフォーム / インフラエンジニア。Vertex AI、Gemini Enterprise Agent Platform Pipelines、GKE、BigQuery、Terraformによる本番MLOps。大阪在住。',
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
    role: 'Lead ML Architect | Google Cloud & MLOps Platforms',
    pitch:
      'Google Cloud上で本番運用可能なML / MLOpsプラットフォームを設計・運用しています。Vertex AI、GKE、BigQuery、Terraformを中心に、再利用可能なパイプライン、モデルレジストリ、監視、再学習、ロールバックまで、MLライフサイクル全体を担います。',
    tech: ['GCP', 'Vertex AI', 'Kubernetes', 'Terraform', 'Python'],
    ctaPrimary: '実績を見る',
    ctaSecondary: 'CVをダウンロード',
    location: '大阪府',
  },
  about: {
    title: '紹介',
    paragraphs: [
      'Google CloudのLead ML Architectを目指すシニアAIプラットフォーム / インフラエンジニアです。Vertex AI、Gemini Enterprise Agent Platform Pipelines、GKE、Cloud Composer、Dataflow、BigQuery、IAM、Terraformにまたがる本番グレードのML / MLOpsプラットフォームを設計・運用しています。',
      '再利用可能なパイプラインコンポーネント、制御されたプロモーション、モデルレジストリとリネージ、監視、再学習、ロールバック、再現性の標準を備えた、エンドツーエンドのMLライフサイクルアーキテクチャを提供します。',
      'マネージドおよびKubernetesベースのサービング、クラウドセキュリティ、ガバナンス、可観測性、GPUを用いたスケーラブルなAIワークロードまで、実務に基づくアーキテクチャ判断を行います。',
    ],
  },
  experience: {
    title: '経歴',
    items: [
      {
        company: 'Mentanomaly',
        role: 'シニアAIプラットフォーム / MLOpsインフラエンジニア',
        period: '2024年7月 – 現在',
        location: '大阪府',
        bullets: [
          'Vertex AIによるMLライフサイクル管理と、Gemini Enterprise Agent Platform Pipelinesによる制御されたエージェント駆動ワークフローを組み合わせ、GCP上のエンドツーエンドMLプラットフォームアーキテクチャを設計。',
          '入出力を定義したモジュール型の再利用可能なパイプラインコンポーネントを構築。AIオーケストレーションと計算量の多い推論を分離し、各ステージを独立して開発・再試行・スケール・置換できるようにした。',
          'Vertex AI、GKE、Cloud Composer、Dataflow、Cloud Storage、IAM、Terraform上で本番MLワークロードを構築・運用。スケーラビリティ、制御性、レイテンシ、運用複雑性の観点からVertex AIとKubernetesサービングを比較評価。',
          'BigQueryを中央分析レイヤーとして設計し、生データをキュレーション済み学習データセットと再利用可能な特徴量へ変換。スキーマ一貫性、パーティショニング、アクセス制御、データ品質、ワークロード分離を確保。',
          '特徴量エンジニアリング、評価、モデル登録とリネージ、承認ベースのプロモーション、CI/CD検証、再学習、ロールバック、成果物の退役、開発・テスト・本番を通じた再現性を含むMLライフサイクルガバナンスを設計。モデルリリース時間を20分から14分に短縮。',
          'Prometheus、Grafana、OpenTelemetry、トレーシングを用い、モデル品質、データ/モデルドリフト、正解データ検証、推論レイテンシ、障害、GPU使用率の監視と可観測性を実装。本番ML障害の検知・復旧平均時間を2時間から20分に短縮。',
          '1万人超のユーザーと1日3万件の生成ジョブを支えるGPUベースの非同期画像生成プラットフォームを設計・運用。推論スループットを8%向上、p95生成レイテンシを2.5秒から1.7秒へ短縮、GPU使用率を83%から92%へ向上、生成あたりインフラコストを7%削減。',
          '最小権限IAM、サービスID、環境分離、ネットワーク境界、シークレット管理、監査可能性、リソース所有権を適用。クラウドセキュリティとガバナンスを、スケーラビリティ、性能、運用性、コストと両立。',
        ],
      },
      {
        company: 'ScalyX.ai',
        role: 'シニアAIプロダクション / クラウドインフラエンジニア',
        period: '2022年7月 – 2024年7月',
        location: 'リモート',
        bullets: [
          'Vertex AI、GKE、Cloud Composer、Dataflow、Cloud Storage、IAM、Terraform、Kubernetesサービングを用い、GCPとAWSにまたがる本番AIサービングアーキテクチャを設計。',
          'AIオーケストレーション、モデル推論、後処理、リトライ、障害復旧向けの再利用可能な非同期パイプラインステージを開発。CPU/GPUバウンドコンポーネントの独立スケールと、ワークフロー全体を再起動せずに復旧できる構成を実現。',
          'Python、FastAPI、PostgreSQL（pgvector）、Redisを用い、取り込み、埋め込み、検索、生成、オーケストレーション、メモリ、キャッシュ、リトライ、タイムアウト、フォールバックを含む堅牢なRAGおよびTool Callingパイプラインを構築。',
          'Prometheus、OpenTelemetry、Grafanaでモデル品質、データ/モデルドリフト、推論レイテンシ、障害、GPU使用率、LLMコスト、ワークフロー性能を監視。本番ML障害の検知・復旧平均時間を2時間から20分に短縮。',
          'モデルデプロイとバージョニング、IAM、Cloud Storage連携、Terraformプロビジョニング、AIサービス向けCI/CDテストを運用し、変化するマルチテナントリテールワークフローの信頼性を向上。',
        ],
      },
      {
        company: 'Madoromi, Inc.',
        role: 'シニアバックエンド / クラウドインフラエンジニア',
        period: '2018年7月 – 2022年7月',
        location: '東京',
        bullets: [
          'ジュニアエンジニアからシニアレベルのオーナーシップへ成長。SaaSおよびAIアプリケーションのAPI・データモデル設計、本番障害対応、性能最適化、バックエンドアーキテクチャへの貢献を担当。',
          'AWSクラウドインフラ、コンテナ、CI/CD、監視、ネットワーキング、データベース、デプロイ自動化、本番運用へと責任範囲を拡大し、信頼性、スケーラビリティ、運用準備を強化。',
          '顧客およびシニアステークホルダーとの技術議論をファシリテートし、ビジネス要件をAPI、データフロー、インフラ、セキュリティ、スケーラビリティ、可観測性の設計へ落とし込んだ。',
          'マネージド対セルフマネージド、同期対非同期、中央集権対独立スケール可能なサービスといったアーキテクチャのトレードオフを評価・文書化し、ステークホルダーの優先事項に沿った実装計画を策定。',
        ],
      },
    ],
  },
  skills: {
    title: 'スキル',
    groups: [
      {
        label: 'Google Cloud MLプラットフォーム',
        items: [
          'Google Cloud Platform (GCP)',
          'Vertex AI',
          'Gemini Enterprise Agent Platform Pipelines',
          'BigQuery',
          'GKE',
          'Cloud Composer',
          'Dataflow',
        ],
      },
      {
        label: 'MLOps・MLライフサイクル',
        items: [
          'パイプラインオーケストレーション',
          'Model Registry & lineage',
          'CI/CD for ML',
          'モデル監視',
          'ドリフト検知・再学習',
        ],
      },
      {
        label: 'クラウドアーキテクチャ・ガバナンス',
        items: [
          'IAM・最小権限セキュリティ',
          'Terraform',
          '監視・可観測性',
          'Kubernetes',
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
    lead: 'Lead ML Architect および Google Cloud上のMLOpsプラットフォーム機会に前向きです。',
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
