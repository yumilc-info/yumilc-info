# Repository Guidelines

## Project Structure & Module Organization

- `src/app` hosts the App Router entry points (`page.tsx`, route segments such as `about/`, `news/`), plus shared layout, loading, and error boundaries.
- `src/components` contains reusable view components; keep UI-only logic here and co-locate component-specific styles using Panda’s `css()` helper.
- `src/libs` holds utility modules (API clients, parsers) that should be framework-agnostic; prefer pure functions to keep testing simple. News記事は `news.ts` で Markdown (frontmatter) を HTML に変換します。
- `content/news/` collects Markdownソース（`slug`, `title`, `publishedAt`, `summary` frontmatter付き）。ファイル名は日付プレフィックス＋slugを推奨（例: `2024-02-15-release.md`）。
- `public` stores static assets (images under `/decoration`, fonts, icons). Reference them with absolute paths (e.g., `/decoration/yellow.svg`).
- `styled-system/` is Panda CSS’s generated output; do not edit manually—regenerate with `npm run prepare` when tokens change.

## Build, Test, and Development Commands

- `npm run dev` launches the Next.js dev server with Turbopack and hot reload.
- `npm run build` compiles the production bundle and type-checks the project; ensure Google Fonts can be fetched or vendor them locally.
- `npm run start` serves the already-built app; use this for smoke-testing the production output.
- `npm run lint` runs Prettier (check-only) and ESLint; fix issues before opening a PR.
- `npm run format` applies Prettier formatting and ESLint autofixes—run after large edits.
- `npm run prepare` triggers Panda CSS codegen; rerun whenever tokens or design system configs change.
- `npx tsc --noEmit` performs a quick type-only check when you can’t rely on `next build`（ネットワーク遮断でフォント取得が失敗するケース向け）。

## Coding Style & Naming Conventions

- Use TypeScript throughout; export React components as PascalCase functions (e.g., `TopPageBackGround`).
- Follow Prettier’s defaults (tabs disabled, double quotes, trailing commas where valid) and let ESLint flag React/Next-specific issues.
- For Panda CSS, prefer explicit breakpoint objects (`md: { top: ... }`) and avoid unsupported keys such as `base` at the root.
- Asset filenames in `public/` should be kebab-case (`green-u.svg`) to match existing references.

## Testing Guidelines

- No automated test suite is present yet; when adding tests, co-locate them beside the module (`component.test.tsx`) and use Vitest or Jest.
- Until tests exist, perform manual verification via `npm run dev` and capture regressions with focused lint rules or Storybook snapshots if introduced later.
- Aim for high-value integration tests around data fetching (`src/libs`) once a harness is selected; document coverage expectations in future updates.
- Markdown フローでは、新しい記事を追加したら `npx tsc --noEmit` で型チェック→ `npm run dev` で閲覧テストを行い、ハイライトやテーブルが崩れていないか確認してください。

## Commit & Pull Request Guidelines

- Favor imperative, concise commit messages (Japanese or English) that describe the change, e.g., `fix: レイアウトのずれを修正`.
- Group related edits per commit; avoid combining refactors with behavior changes.
- PR descriptions should explain motivation, list major changes, reference related issues, and include screenshots or screen recordings for UI updates.
- Before requesting review, ensure `npm run lint` and `npm run build` pass locally and note any blocked steps (e.g., offline font fetch) in the PR body.
