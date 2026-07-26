# Sidharth Kapoor — Portfolio

Personal portfolio for [sidk.dev](https://www.sidk.dev/), built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

Requirements:

- Node.js 24
- pnpm 11.6.0

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Quality checks

Run the same lint and production build checks expected before deployment:

```bash
pnpm check
```

The static production output is written to `dist/`.

## Vercel deployment

The repository includes an explicit [`vercel.json`](./vercel.json) so Vercel uses:

- the Vite framework preset;
- `pnpm install --frozen-lockfile`;
- `pnpm build`;
- the `dist/` output directory.

Connect the GitHub repository to Vercel and set the production domain to `www.sidk.dev`. Every push to the production branch will trigger a deployment.
