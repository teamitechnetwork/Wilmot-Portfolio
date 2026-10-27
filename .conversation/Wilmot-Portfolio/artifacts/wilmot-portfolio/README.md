# Wilmot Kerkulah Portfolio

## Deploy with Vercel

1. Push this repository to GitHub and import it into Vercel.
2. Set the Vercel project root directory to `artifacts/wilmot-portfolio`.
3. Keep the settings from `vercel.json`; it installs from the pnpm workspace root and builds this portfolio package.
4. Deploy. Vercel can then create preview deployments for pull requests and production deployments from the connected production branch.

The Vite configuration defaults to `/` and a local preview port when Vercel does not provide Replit's `BASE_PATH` and `PORT` variables.

## GitHub checks

`.github/workflows/ci.yml` runs the workspace typecheck and portfolio production build for pull requests and pushes to `main`.
