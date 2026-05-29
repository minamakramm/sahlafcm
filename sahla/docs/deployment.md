# Deployment

Sahla continuously deploys using a configured GitHub Actions pipeline strictly locking your branches securely.

## CI/CD Workflow
1. **Pull Requests (main branch):** Runs `.github/workflows/ci.yml`. Triggers Vitest check + Vite Build to ensure the incoming changes do not shatter the build constraints natively.
2. **Push to Main:** Runs `.github/workflows/deploy.yml`. 
   - Supabase will push changes utilizing the CLI migrations matching the `STAGING` container profile. 
   - Vercel CLI binds a `Preview` staging pipeline.
3. **Releasing (tags):** By tagging a build version (`vX.Y.Z`) on GitHub Releases, Vercel initiates the `production` tag running final deployment optimizations natively over the edge while triggering `.github/workflows/deploy.yml` directly targeting the `PROD` database variables.

## Required Secrets on GitHub:
Before initiating pipeline checks, make sure these Secrets are supplied via Repository Settings > Actions:
- `SUPABASE_ACCESS_TOKEN`
- `SUPABASE_STAGING_PROJECT_REF`
- `SUPABASE_PROD_PROJECT_REF`
- `VERCEL_TOKEN` 
- `VERCEL_ORG_ID` 
- `VERCEL_PROJECT_ID` 
- `VITE_SUPABASE_URL_STAGING` and `PROD` alternatives.
