# Moodify Web プロジェクトガイドライン

## ディレクトリ構造

```bash
src/
├── actions/       # Server Actions
├── app/          # Next.js App Router
│   ├── (auth)/   # 認証関連ページ
│   ├── (app)/    # ログイン後のメイン機能
│   └── (static)/ # 静的ページ（約款・ポリシー等）
├── components/   # 共通コンポーネント
├── lib/         # ユーティリティ・型定義
└── styles/      # グローバルスタイル
```

## 命名規則

### ディレクトリ名

- 小文字のケバブケースを使用
- 例: `components/`, `auth/`, `ui/`

### コンポーネントファイル

- PascalCase を使用
- `.tsx` 拡張子を使用
- 例: `Button.tsx`, `AuthForm.tsx`, `UserProfile.tsx`

### その他のファイル

- ケバブケースを使用
- 例: `user-settings.ts`, `types.ts`

## コンポーネントの分類

### components/ui/

- 基本的なUIコンポーネント
- shadcn/ui コンポーネント
- 例: `Button.tsx`, `Card.tsx`, `Input.tsx`

### components/auth/

- 認証関連のコンポーネント
- 例: `AuthForm.tsx`

### components/dashboard/

- ダッシュボード画面で使用するコンポーネント
- 例: `Nav.tsx`, `MoodSummary.tsx`

## ルーティング構造

### (auth)

- `/login` - ログインページ
- `/auth/callback` - 認証コールバック

### (app)

- `/dashboard` - ダッシュボード
- `/settings` - 設定ページ

### (static)

- `/` - トップページ
- `/about` - アバウト
- `/terms` - 利用規約
- `/policy` - プライバシーポリシー
- `/notice` - お知らせ
- `/contact` - お問い合わせ

## コーディング規約

### Reactコンポーネント

- クライアントコンポーネントには `'use client'` を付与
- Props の型定義は interface を使用
- コンポーネント名は PascalCase

### TypeScript

- 型定義は `lib/types` に集約
- `any` の使用は避ける
- 関数の戻り値の型は明示的に指定

### スタイリング

- Tailwind CSS を使用
- グローバルスタイルは `styles/globals.css` に定義
- コンポーネント固有のスタイルは className で直接指定

## Git管理

### ブランチ命名

- feature/: 新機能開発
- fix/: バグ修正
- chore/: その他のタスク

### コミットメッセージ

- feat: 新機能
- fix: バグ修正
- docs: ドキュメント
- style: スタイル変更
- refactor: リファクタリング
- test: テスト
- chore: その他

## 参考資料

- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
