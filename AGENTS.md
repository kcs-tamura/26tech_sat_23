# AGENTS.md

このリポジトリで作業する AI コーディングエージェント（Codex / Claude Code など）向けのガイドです。

## コマンド

```bash
npm run dev      # 開発サーバー起動（Vite）
npm run build    # 型チェック（tsc -b）+ 本番ビルド
npm run lint     # ESLint
npm run preview  # ビルド結果のプレビュー
```

テストは存在しない。ビルド前に `tsc -b` が走るため、型エラーがあるとビルドが失敗する。

## 技術スタック

- Vite 8 + React 19 + TypeScript の SPA
- React Compiler 有効（`vite.config.ts` で `@rolldown/plugin-babel` + `reactCompilerPreset` を設定）
- ルーティングは react-router-dom v7、アイコンは react-icons
- CSS フレームワークなし（素の CSS + CSS 変数）

## アーキテクチャ

### データ駆動の構成

サイトの表示内容（プロフィール・スキル・作品・ゲームジャム・資格・年表）はすべて `src/data/portfolio.ts` に型定義付きで一元管理されている。コンテンツの追加・変更はこのファイルを編集するだけでよく、コンポーネント側の修正は不要。現在入っているデータはダミー。

画像は `public/images/`（profile.jpg、games/ 配下）に置き、`portfolio.ts` からパス文字列で参照する。画像読み込み失敗時は `SafeImg` コンポーネントがフォールバック文字列を表示する。

### ルーティング

- `/` … `App.tsx` 内の `HomePage`（Hero → About → Skills → Works → Certifications → Contact の縦並びセクション）
- `/works/:id` … `src/pages/WorkDetail.tsx`。`portfolio.ts` の `works` から id で検索し、見つからなければトップへリダイレクト

### CSS の構成ルール

`src/index.css` がエントリで、`src/styles/` のセクション別 CSS を **順序依存** で @import している：base（リセット + CSS 変数）→ utilities → コンポーネント別（ページの表示順）→ work-detail → responsive（最後に置いてオーバーライド）。新しいセクションを作る場合はこの順序に沿って import を追加する。

### テーマ切り替え

色はすべて `src/styles/base.css` の CSS 変数で定義。`:root` がダーク（デフォルト）、`[data-theme="light"]` がライトの上書き。`src/hooks/useTheme.ts` が `<html>` の `data-theme` 属性を切り替え、localStorage に永続化する。色変更時は両テーマの変数を更新すること。

### Vercel デプロイと Basic 認証

`middleware.ts` は Vercel Edge Middleware で、全パスに Basic 認証をかける。認証情報は環境変数 `SITE_USER`（デフォルト `portfolio`）と `SITE_PASSWORD` で設定。`SITE_PASSWORD` が未設定の場合はすべてのリクエストが 401 になる点に注意。
