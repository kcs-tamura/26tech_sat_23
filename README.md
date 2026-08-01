# ポートフォリオサイト

ゲーム・Web作品を紹介する個人ポートフォリオサイト(サンプル)です。
React + TypeScript + Vite で構築した SPA で、Vercel でのホスティングを想定しています。

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| フレームワーク | React 19（React Compiler 有効） |
| 言語 | TypeScript |
| ビルドツール | Vite 8 |
| ルーティング | react-router-dom v7 |
| スタイリング | 素の CSS（CSS 変数によるテーマ切り替え） |
| デプロイ | Vercel（Edge Middleware による Basic 認証付き） |

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー起動
```

### その他のコマンド

```bash
npm run build    # 型チェック + 本番ビルド（dist/ に出力）
npm run lint     # ESLint によるチェック
npm run preview  # ビルド結果をローカルで確認
```

## ディレクトリ構成

```
my-portfolio/
├── middleware.ts        # Vercel Edge Middleware（Basic 認証）
├── public/
│   └── images/          # プロフィール写真・作品スクリーンショット
└── src/
    ├── data/
    │   └── portfolio.ts # サイトの全コンテンツデータ（型定義付き）
    ├── components/      # セクション別コンポーネント（Hero, About, Skills など）
    ├── pages/
    │   └── WorkDetail.tsx # 作品詳細ページ（/works/:id）
    ├── hooks/
    │   └── useTheme.ts  # ダーク／ライトテーマ切り替え
    └── styles/          # セクション別 CSS（index.css から順番に読み込み）
```

## コンテンツの編集

プロフィール・スキル・作品・ゲームジャム・資格などの表示内容は、すべて `src/data/portfolio.ts` に集約されています。コンポーネントを触らずにこのファイルの編集だけで内容を更新できます。

画像は `public/images/` に配置し、`portfolio.ts` からパスで参照します。

## テーマ切り替え

ヘッダーのボタンでダーク／ライトテーマを切り替えられます。

- 配色は `src/styles/base.css` の CSS 変数で定義（`:root` = ダーク、`[data-theme="light"]` = ライト）
- 選択したテーマは localStorage に保存され、次回アクセス時も維持されます

## デプロイ（Vercel）

`middleware.ts` により、サイト全体に Basic 認証がかかります。Vercel の環境変数で以下を設定してください。

| 環境変数 | 内容 |
| --- | --- |
| `SITE_USER` | Basic 認証のユーザー名（未設定時は `portfolio`） |
| `SITE_PASSWORD` | Basic 認証のパスワード（**未設定の場合は全リクエストが 401 になります**） |
