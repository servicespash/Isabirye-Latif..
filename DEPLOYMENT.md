# Cymatic Evolution | Deployment Protocol

This document outlines the requirements and procedures for deploying the Latty Portfolio architecture to institutional-grade production environments.

## 1. Environment Configuration

The following variables must be defined in your production environment (Cloudflare/GitHub Secrets):

| Variable | Description |
| :--- | :--- |
| `NODE_ENV` | Must be set to `production` |
| `VITE_APP_VERSION` | Current semantic versioning tag |

## 2. Build Commands

Execute the following in the project root:

```bash
# Install dependencies
npm install

# Compile application and server bundle
npm run build
```

The build process generates:
- `dist/`: Static client assets
- `dist/server.cjs`: Bundled Express server for Node.js environments

## 3. Production Deployment

### GitHub Pages (Static)
The included `.github/workflows/deploy.yml` automatically triggers on push to `main`. Ensure GitHub Pages is set to deploy from the `gh-pages` branch.

### Cloudflare Pages (Full-Stack)
Cloudflare will utilize `wrangler.toml`. Set the build command to `npm run build` and the output directory to `dist`.

## 4. System Integrity
Post-deployment, verify the `/api/health` endpoints to ensure the Infrastructure Monitor is successfully polling live telemetry.
