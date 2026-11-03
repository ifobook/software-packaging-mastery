# Software Packaging in Popular Frameworks

## Overview
Node.js and Express.js project demonstrating dependency management, automated builds, semantic versioning, environment configuration, npm packaging, and security auditing.

## Installation
```bash
npm ci
```

## Build and Packaging
```bash
npm run build
npm pack --pack-destination artifacts
```

Generated artifact: `artifacts/software-packaging-mastery-1.0.0.tgz`

## Environment Verification
Development: `npm run dev` (port 3000).
Staging: `npm run staging` (port 4000).
Environment settings use `NODE_ENV` and `PORT`; see `.env.example`.

## Dependencies
Dependencies are declared in `package.json` and locked using `package-lock.json`.
Use `npm ci` for reproducible installation and `npm outdated` to check available updates.

## Semantic Versioning
Initial release: `1.0.0`.
MAJOR: breaking changes; MINOR: backward-compatible features; PATCH: backward-compatible fixes.

## Security Audit
Command: `npm audit --omit=dev`.
Result: 0 vulnerabilities found.

## Evidence
![Package build](screenshots/package-build.png)
![Environment verification](screenshots/environment-verification.png)
![Dependency audit](screenshots/dependency-audit.png)

## Author
GitHub: https://github.com/ifobook
