<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Gather Landing Project Rules

## Design

- Figma is the source of truth for visual implementation.
- Do not reinterpret spacing, typography, position, assets, or copy without explicit approval.
- Animation end states must match the static Figma design.

## Architecture

- Prefer Server Components.
- Add `"use client"` only at interactive leaf boundaries.
- `app/page.tsx` composes landing sections and must not contain feature logic.
- Keep volunteer test typed data in `data/` and pure logic in `lib/`.

## Assets

- Runtime Figma asset URLs are forbidden.
- Store project assets under `public/assets/`.
- Check for an existing equivalent asset before adding a new file.

## Motion

- GSAP and ScrollTrigger are the landing motion stack.
- Preserve `prefers-reduced-motion` behavior.
- Do not overwrite Figma rotation or transform values on illustration internals.

## API

- Do not guess Gather backend endpoints or enum values.
- Validate runtime API responses before rendering them.

## Dependencies

- Do not add a dependency when the existing stack is sufficient.

## Before Completion

Run:

```bash
npm run lint
npm run typecheck
npm run build
```
