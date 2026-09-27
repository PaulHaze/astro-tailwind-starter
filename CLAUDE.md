# CLAUDE.md

The master agentic doc for this repo is [AGENTS.md](./AGENTS.md) — read it
first. This file only holds instructions specific to Claude Code.

- `pnpm dev` and `pnpm preview` start a server that keeps running after the
  command returns control. If you start one to check something, stop it
  before finishing (`pnpm astro dev stop`, or kill the process) — an orphaned
  server can survive across turns and block its port on the next run.
