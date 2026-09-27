# AGENTS.md

Astro + Tailwind starter: Astro 7, Tailwind 4, TypeScript (strict), ESLint 10
(flat config), Prettier. No daisyUI — colors are plain CSS variables (below).
Package manager is **pnpm** (pinned via `packageManager` in `package.json`);
don't use npm or yarn, their lockfiles will conflict with `pnpm-lock.yaml`.

See `README.md` for the full stack list and the CI/Dependabot policy.

## Commands

- `pnpm install` — install deps. If it fails with `ERR_PNPM_IGNORED_BUILDS`,
  add the named package to `allowBuilds` in `pnpm-workspace.yaml`.
- `pnpm dev` — dev server.
- `pnpm check` — type-check `.astro` and `.ts` files.
- `pnpm build` — type-check, then production build. Fails on type errors.
- `pnpm lint` — format with Prettier and fix ESLint issues in place.
- `pnpm lint:check` — same checks without writing files (what CI runs).

**Before finishing any task**, run `pnpm lint:check` and `pnpm build`. Both
must exit with 0 errors.

## Conventions

### Colors

Every color token lives in `src/styles/main.css` as a CSS variable: light
values in `:root`, dark values in `:root[data-theme='dark']`. Add new colors
there and expose them via `@theme inline` — never hardcode a hex/oklch value
in a component. Available tokens: `background` (+ `-100`/`-200`/`-300`),
`foreground`, `primary` (+ `-muted`), `secondary` (+ `-muted`), `accent`,
`caution`, `alert`, `success`. `background-200`/`-300` are calculated from
`background` with relative color syntax, so changing `--background` alone
updates all three shades.

### Dark mode

Toggled by `data-theme="dark"` on `<html>`, set by
`src/components/ui/ThemeToggle.astro`. Tailwind's `dark:` variant targets this
attribute (`@custom-variant dark` in `main.css`), not `prefers-color-scheme`
or a `.dark` class — the OS preference is only used as the initial value.

### Fonts

Configured in `astro.config.mjs` under `fonts` (Astro's Fonts API, Fontsource
provider) and rendered with `<Font cssVariable="--font-x" />` in
`src/layouts/Layout.astro`. To add a font: declare it in both places, then
reference `var(--font-x)` from `main.css`'s `@theme inline`. Don't add
`@fontsource/*` packages directly — the Fonts API replaced them to cut the
number of shipped font files.

### Icons

`astro-icon` + `@iconify-json/lucide`. Use `<Icon name="lucide:icon-name" />`.
One-off custom SVGs go in `src/icons/` and are referenced by filename the same
way.

### Path aliases

`@/*` → `src/*`. `~/*` → `public/*` — only for files served as-is (e.g.
linking a PDF). Importing an image through `~/*` skips Astro's image
optimization; put images in `src/assets` and import them normally instead.

## Repo-specific gotchas

- `pnpm-workspace.yaml` sets `pmOnFail: ignore` to force a single-document
  lockfile. GitHub's dependency graph can't parse pnpm 12's default
  two-document format yet
  ([dependabot-core#15904](https://github.com/dependabot/dependabot-core/issues/15904)) —
  don't remove this setting until that's fixed.
- TypeScript is pinned below v7 (`~6.0.3`) because `@astrojs/check` and
  `typescript-eslint` don't support it yet. Don't bump past 6.x until both do.
- `site` in `astro.config.mjs` is a placeholder (`https://example.com`). Set
  it to the real deployed URL in every new project — it drives the sitemap,
  canonical URLs and Open Graph tags.
