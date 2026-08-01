// プロフィール情報定義.
// ここに乗っている情報はすべてダミーです。

export interface Profile{
    name: string // 名前漢字表記.
    nameEn: string // 名前ローマ字表記.
    role: string // ロール.
    school: string // 学校名.
    department: string // 専攻名.
    graduationYear: string // 卒業年度.
    bio: string // 自己紹介文.
    motto: string // モットー、座右の銘.
    avatar: string // 顔写真の画像パス.
    links:{
        github:string // githubのURL.
        twitter: string | null // X(旧Twitter).
        email: string // メールアドレス.
    }
}

// スキル.
export interface Skill {
    name: string // 名前.
    version: string | null // バージョン情報(null許容).
    level: number // スキルレベル.
    category: string // カテゴリ.
    capabilities : string[] // 出来ること.
    note: string | null // 実装経験.
}

// 詳細要素情報.
export interface Venue{
    name: string // 名前.
    date: string // 日時.
}

// 作品カード.
export interface Work{
    id: number // 連番.
    title: string // タイトル.
    genre: string // ジャンル.
    category: string // カテゴリ.
    thumbnail: string // サムネイル.
    screenshots: string[] // スクショ.
    description : string // 作品の概要説明.
    tags: string[] // タグ.
    platform: string[] // プラットフォーム.
    period: string // 期間.
    team: string // 制作チーム情報.
    role: string // 実装担当箇所.
    github: string // Github のURL.
    link: string | null // ゲーム公開リンク.
    venues: Venue[] // 出展・公開先.
    techPoints: string | null // 技術ポイント.
    designNotes: string | null // 設計上の工夫.
    implementationTheme: string | null // 実装解説テーマ.
    troubleshooting: string | null // 詰まった問題と解決策.
    performance: string | null // パフォーマンス改善の工夫.
}

// ゲームジャム.
export interface GameJam {
    name: string // 名前.
    date: string // 日時.
    theme: string // 情報.
    description: string // 作品詳細.
    platform: string[] // プラットフォーム.
    role: string // 担当箇所.
    team: string // チーム情報.
    result: string | null // 結果.
    url: string | null // URL.
    reflection: string // 学び・ふりかえり.
}

export type CertStatus = "取得済み" | "受験予定" | "取得予定" | "学習中";

// 資格情報.
export interface Certification{
    name: string // 資格名.
    date: string // 日時.
    category: string // カテゴリ.
    score: string | null // スコア.
    status: CertStatus // ステータス.
}

// 年表.
export interface TimelineItem {
    year: string // 年.
    event: string // イベント.
}

export const profile: Profile = {
    name: "田村航海",
    nameEn: "Kazumi Tamura",
    role: "フルスタックエンジニア",
    school: "京都デザイン&テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2027年3月卒業見込み",
    bio: "添削した自己紹介をめっちゃ書く私の強みは、課題を最後までやり抜く粘り強さです。\n大学2年次にチーム4人でモバイル向けの2Dアクションゲームを制作した際、リリース直前に特定端末でフレームレートが大幅に低下する不具合が発生しました。原因がなかなか特定できず、メンバーの士気も下がりかけていましたが、私はログを一つずつ追い、描画処理のループ内で不要なメモリ確保が繰り返されていることを突き止めました。\nこの経験から、問題を切り分けて地道に検証する姿勢の大切さを学びました。修正後はフレームレートが安定し、学内の発表会では「操作の手触りが良い」という評価をいただけました。\nリーダーではありませんでしたが、行き詰まった場面で手を動かして突破口を作る役割を担えたと感じています。\n御社でも、目の前の課題から逃げず、チームの力になれるエンジニアとして貢献していきたいと考えています。",
    motto: "モットー、座右の銘 たとえば 信頼は、積むもの などなど",
    avatar: "/images/profile.jpg",
    links: {
        github: "https://github.com/kcs-tamura",
        twitter: "https://x.com/kyoto_tech_",
        email: "mailto:info@example.com"
    }
}

export const skills: Skill[] = [
  {
    name: 'Unity',
    version: '',
    level: 100,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['3D/2Dゲーム開発', 'Physics演算', 'ProceduralGeneration'],
    note: '基本的にすべての機能を実装済',
  },
  {
    name: 'Unreal Engine',
    version: '5',
    level: 80,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['3D/2Dゲーム開発', 'Physics演算', 'ProceduralGeneration', 'バーチャルスタジオ構築'],
    note: 'プロシージャル迷宮生成・A*経路探索を実装済み',
  },
  {
    name: 'C#',
    version: '',
    level: 100,            // 0〜100（後述）
    category: 'language',    // フィルター用カテゴリ
    capabilities: [],
    note: null,
  },
  {
    name: 'Golang',
    version: '',
    level: 100,            // 0〜100（後述）
    category: 'language',    // フィルター用カテゴリ
    capabilities: [],
    note: "一通り実装可",
  },
  {
    name: 'Terraform',
    version: '',
    level: 100,            // 0〜100（後述）
    category: 'language',    // フィルター用カテゴリ
    capabilities: [],
    note: "一通り実装可",
  },
  {
    name: 'AWS',
    version: '',
    level: 100,            // 0〜100（後述）
    category: 'PF',    // フィルター用カテゴリ
    capabilities: [],
    note: "一通り実装可",
  },
  {
    name: 'GCP',
    version: '',
    level: 80,            // 0〜100（後述）
    category: 'PF',    // フィルター用カテゴリ
    capabilities: [],
    note: "一通り実装可",
  },
  {
    name: 'Rider',
    version: '2026',
    level: 100,            // 0〜100（後述）
    category: 'PF',    // フィルター用カテゴリ
    capabilities: [],
    note: "普段使いしている",
  },
  {
    name: 'Rider-2',
    version: '',
    level: 20,            // 0〜100（後述）
    category: 'PF',    // フィルター用カテゴリ
    capabilities: [],
    note: "普段使いしている",
  },
  {
    name: 'Rider-3',
    version: '',
    level: 40,            // 0〜100（後述）
    category: 'PF',    // フィルター用カテゴリ
    capabilities: [],
    note: "普段使いしている",
  },
  {
    name: 'Rider-4',
    version: '',
    level: 60,            // 0〜100（後述）
    category: 'PF',    // フィルター用カテゴリ
    capabilities: [],
    note: "普段使いしている",
  },// 田村が書いているものに関しては参考として記入しているだけなので真似しなくても大丈夫です。
]

// 作品カードの内容.
export const works: Work[] = [
  {
    id: 1,                              // 連番（詳細ページのURLに使う）
    title: '迷宮脱出ゲーム',
    genre: '3Dパズルアクション',
    category: 'game',
    thumbnail: "/images/games/tech_thumb.png",                    // '/images/work1.png'
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '作品の概要説明...',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows', 'WebGL'],
    period: '2025年10月〜2026年1月（3ヶ月）',
    team: '個人制作',
    role: 'プログラマー / レベルデザイナー（全工程）',
    github: 'https://github.com/username/repo',
    link: 'https://example.com/',                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: '学校 卒業制作展示会', date: '2026年2月' },
    ],
    techPoints: 'こだわった技術ポイント...',
    designNotes: '設計上の工夫...',
    implementationTheme: '実装解説テーマ（1文）',
    troubleshooting: '詰まった問題と解決策...',
    performance: 'パフォーマンス改善の工夫...',
  },
  {
    id: 2,                              // 連番（詳細ページのURLに使う）
    title: '迷宮脱出ゲーム2',
    genre: '3Dパズルアクション',
    category: 'game',
    thumbnail: "",                    // '/images/work1.png'
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '作品の概要説明...',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows', 'WebGL'],
    period: '2025年10月〜2026年1月（3ヶ月）',
    team: '個人制作',
    role: 'プログラマー / レベルデザイナー（全工程）',
    github: 'https://github.com/username/repo',
    link: 'https://example.com/',                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: '学校 卒業制作展示会', date: '2026年2月' },
    ],
    techPoints: 'こだわった技術ポイント...',
    designNotes: '設計上の工夫...',
    implementationTheme: '実装解説テーマ（1文）',
    troubleshooting: '詰まった問題と解決策...',
    performance: null,
  },
  {
    id: 3,                              // 連番（詳細ページのURLに使う）
    title: '迷宮脱出ゲーム3',
    genre: '3Dパズルアクション',
    category: 'game',
    thumbnail: "",                    // '/images/work1.png'
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '作品の概要説明...',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows', 'WebGL'],
    period: '2025年10月〜2026年1月（3ヶ月）',
    team: '個人制作',
    role: 'プログラマー / レベルデザイナー（全工程）',
    github: 'https://github.com/username/repo',
    link: 'https://example.com/',                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: '学校 卒業制作展示会', date: '2026年2月' },
    ],
    techPoints: 'こだわった技術ポイント...',
    designNotes: '設計上の工夫...',
    implementationTheme: '実装解説テーマ（1文）',
    troubleshooting: '詰まった問題と解決策...',
    performance: 'パフォーマンス改善の工夫...',
  }, // 配列ごとに作品情報を作ってく.
]

export const gameJams: GameJam[] =[
  {
    name: 'Global Game Jam 2025',
    date: '2025年1月（48時間制作）',
    theme: '「Bubble」→ 泡を使った物理パズルを制作',
    description: '作品の説明...',
    platform: ['WebGL', 'Windows'], // FIXME:設計ミスってる
    role: 'プログラマー（物理演算・ステージ生成担当）',
    team: '4名（PG×2・デザイナー×1・サウンド×1）',
    result: null,                       // '総合2位' など、なければ null
    url: 'https://itch.io/...',         // なければ null
    reflection: '学び・振り返り...',
  },
]

export const certifications: Certification[] = [
  {
    name: 'ITパスポート',
    date: '2024年10月合格',
    category: '国家資格',
    score: '665点',                     // なければ null
    status: '取得済み',                 // '取得済み' | '受験予定' | '取得予定' | '学習中'
  },
]

export const timeline: TimelineItem[] = [
  {
    year: "2022年3月",
    event: "群馬県立高崎工業高等学校 卒業",
  },
  {
    year: "2022年4月",
    event: "京都デザイン&テクノロジー専門学校 入学",
  },
  {
    year: "2022年7月",
    event: "初めてUnityで2Dアクションゲームを個人制作",
  },
  {
    year: "2023年2月",
    event: "学内ゲームジャムに参加し、チーム制作で優秀賞を受賞",
  },
  {
    year: "2023年9月",
    event: "C++/DirectXを用いた2Dシューティングゲームを完成",
  },
  {
    year: "2024年3月",
    event: "後期制作展にて卒業制作の3Dアクションゲームを出展",
  },
  {
    year: "2024年8月",
    event: "株式会社〇〇 にてゲームプログラマーとしてインターン参加",
  },
  {
    year: "2025年1月",
    event: "個人開発したモバイルゲームをストアにリリース",
  },
  {
    year: "2026年3月",
    event: "京都デザイン&テクノロジー専門学校 卒業見込み",
  },
]