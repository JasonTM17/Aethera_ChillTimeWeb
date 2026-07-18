---
phase: 1
title: Bootstrap Vite and Tailwind
status: completed
priority: P2
effort: 1.5h
dependencies: []
---

# Phase 1: Bootstrap Vite and Tailwind

## Overview

Create the React/Vite/TypeScript baseline without clobbering the existing repo root. End phase with a bootable app shell, Tailwind wired through Vite, local git initialized, and scoped commits created.

Repo root: `D:\Aethera_ChillTimeWeb`

## Requirements

- Functional: initialize local git only; create a minimal reviewed Vite React TS scaffold without overwriting root control files (`AGENTS.md:1`, `CLAUDE.md:1`, `plans/260718-1608-cinematic-aethera-hero/plan.md:1`); install Tailwind through the official Vite plugin path; do not add demo assets.
- Non-functional: keep the baseline close to Vite defaults; no remote or push; first commit must be reversible; leave plan and agent files untouched.

## Architecture

Data flow: reviewed config and source patches create the baseline app -> `src/main.tsx` mounts `App` -> `src/index.css` imports Tailwind and local style layers.

Failure modes: accidental root overwrite or Tailwind plugin drift. Mitigation: use targeted patches, official current package guidance, and validate with a build before moving on.

Backward compatibility: repo has no existing runtime contract, so bootstrap is additive only. Keep default Vite script names so later tooling stays conventional.

## Related Code Files

- Create: `.git/`, `.gitignore`, `package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `eslint.config.js`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`

## Implementation Steps

1. Run `git init -b main` after confirming no `.git` directory exists.
2. Commit the reviewed CK plan and UI brief as `docs(plan): define cinematic hero delivery`.
3. Create only the required Vite React TypeScript app and tooling files with targeted patches; preserve `AGENTS.md`, `CLAUDE.md`, and `plans/`.
4. Install `tailwindcss` and `@tailwindcss/vite`; wire the plugin in `vite.config.ts`; import Tailwind from `src/index.css`.
5. Add a minimal semantic shell placeholder that phase 3 can replace cleanly.
6. Run `npm run build` from repo root.
7. Commit `feat: bootstrap vite hero app`.

## Success Criteria

- [x] `npm install` and `npm run build` succeed from repo root.
- [x] No scaffold step overwrites `AGENTS.md`, `CLAUDE.md`, or `plans/`.
- [x] Tailwind utilities compile from `src/index.css`.
- [x] Git exists locally; `origin` was added only after the user's explicit request and no push was performed.

## Risk Assessment

- High (M x H): root overwrite during scaffolding. Mitigation: targeted patches only; never run a generator against `.`.
- Medium (M x M): Tailwind/Vite integration drift. Mitigation: follow the current official Vite plugin docs at implementation time.

## Test and Validation

- `npm run build`
- `npm run dev` smoke check in the browser
- `git status` shows only the intended tracked files before commit

## Rollback

- Before commit: remove only the newly created scaffold files.
- After commit: `git revert` the bootstrap commit.
