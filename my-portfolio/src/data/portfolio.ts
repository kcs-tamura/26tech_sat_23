// プロフィール.
export interface Profile {
  name: string; // 名前漢字表記.
  nameEn: string; // 名前ローマ字表記.
  role: string; // ロール.
  school: string; // 学校名.
  department: string; // 専攻名.
  graduationYear: string; // 卒業年度.
  bio: string; // 自己紹介文.
  motto: string | null; // 座右の銘.
  avatar: string; // 顔写真の画像パス.
  links: {
    github: string;
    twitter: string | null;
    email: string;
  };
}

// スキル.
export interface Skill {
  name: string;
  version: string | null;
  level: number;
  category: string;
  capabilities: string[];
  note: string | null;
}

// 詳細情報.
export interface Venue {
  name: string;
  date: string;
}

// 作品カード.
export interface Work {
  id: number; // 連番.
  title: string; // タイトル.
  genre: string; // ジャンル.
  category: string; // カテゴリ.
  thumbnail: string; // サムネイル.
  screenshots: string[]; // スクリーンショットURI.
  description: string; // 作品の概要説明.
  tags: string[]; // タグ.
  platform: string[]; // プラットフォーム
  period: string; // 期間.
  team: string; // 制作チーム情報.
  role: string; // 実装箇所.
  github: string; // Githubリポジトリリンク.
  link: string | null; // 公開リンク.
  venues: Venue[]; // 出展・公開先.
  techPoints: string | null; // 技術ポイント.
  designNotes: string | null; // 設計上の工夫.
  implementationTheme: string | null; // 実装解説テーマ.
  trpibleshooting: string | null; // 詰まった問題と解決策.
  performance: string | null; // パフォーマンス改善の工夫.
}

// ゲームジャム.
export interface GameJam {
  name: string; // 名前.
  date: string; // 日時.
  theme: string; // 情報.
  description: string; // 作品詳細.
  platform: string; // プラットフォーム.
  role: string; // 担当箇所.
  team: string; // チーム情報.
  result: string | null; // 結果.
  url: string | null; // URL
  reflection: string; // 学び・振り返り.
}

export type CertStatus = '取得済み' | '受験予定'| '取得予定' | '学習中'

export interface Certification{
    name: string // 資格名.
    date: string // 日時.
    category: string // カテゴリ.
    score: string | null // スコア.
    status: CertStatus // ステータス.
}

export interface TimelineItem{
    year: string // 年.
    event: string // イベント.
}


export const profile: Profile={
    name: '田村航海',
    nameEn: 'Kazumi Tamura',
    role: 'Game Creator',
    school: '京都デザイン＆テクノロジー専門学校',
    department: 'スーパーゲームクリエイター専攻',
    graduationYear: '2027年3月卒業見込み',
    bio: '例: 「触れた瞬間の手応え」にこだわるゲームプログラマーです。個人制作の2Dアクションでは、操作入力からアニメーション再生までのフレーム単位の遅延をProfilerで計測・改善し、「動かしていて気持ちいい」と言われる操作感を実現しました。課題にぶつかったときも原因を切り分けて一つずつ潰す姿勢が強みです。',
    motto: '神は細部に宿る',
    avatar: '/images/avatar.png', // publicフォルダからの相対パス.
    links:{
        github: 'https://github.com/kcs-tamura',
        twitter: null,
        email: 'info@example.com',
    },
}

export const skils: Skill[] =[
    {
       name: 'Unity',
        version: '',
        level: 100,
        category: 'game',
        capabilities: ['3D/2Dゲーム開発', 'Physics演算', 'ProceduralGeneration'],
        note: 'hoge'
    },
]

export const works: Work[] =[
    {
        id: 1,
        title: '迷宮脱出ゲーム',
        genre: '3Dパズルアクション',
        category: 'game',
        thumbnail: '/images/meikyu.png',
        screenshots: [],
        description: "",
        tags: [],
        platform: [],
        period: "",
        team: "",
        role: "",
        github: "",
        link: null,
        venues: [],
        techPoints: null,
        designNotes: null,
        implementationTheme: null,
        trpibleshooting: null,
        performance: null
    }
]

export const gameJams: GameJam[] = [
    {
        name: "",
        date: "",
        theme: "",
        description: "",
        platform: "",
        role: "",
        team: "",
        result: null,
        url: null,
        reflection: ""
    }
]

export const certifications: Certification[] =[
    {
        name: "",
        date: "",
        category: "",
        score: null,
        status: "取得済み"
    }
]

export const timeline: TimelineItem[] =[
    {
        year: "2021年3月",
        event: "東京デザインテクノロジーセンター専門学校 卒業"
    },{
        year: "2021年4月",
        event: "株式会社ファンタジスタ 入社"
    },{
        year: "2022年9月",
        event: "開発に携わった太鼓の達人が発売"
    },{
        year: "2024年9月",
        event: "株式会社ファンタジスタ 退社"
    },{
        year: "2024年10月",
        event: "株式会社オルトプラス 入社"
    },
]