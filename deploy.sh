#!/bin/bash
# deploy.sh — bump cache versions, validate, commit + push
# Cloudflare Pages deploys automatically via GitHub Actions on push to main.
set -e

cd "$(dirname "$0")"

DATE=$(date +%Y%m%d)
HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "local")
TS=$(date +%H%M%S)
VERSION="${DATE}-${HASH}-${TS}"

sed -i "s/?v=[^\"']*/?v=${VERSION}/g" index.html
sed -i "s/?v=[^\"']*/?v=${VERSION}/g" case-studies/*.html
sed -i "s/var CACHE = 'danieloa-[^']*'/var CACHE = 'danieloa-${VERSION}'/" sw.js
sed -i "s/?v=[^\"']*/?v=${VERSION}/g" sw.js

echo "→ Cache version → ${VERSION}"

if command -v node >/dev/null 2>&1 && [ -f scripts/validate.mjs ]; then
  node scripts/validate.mjs
  echo "→ Validation passed"
fi

git add -A
MSG="${1:-chore: deploy $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$MSG" || echo "(nothing new to commit)"
git push origin main
echo "→ Pushed to origin/main — Cloudflare Pages will deploy in ~1 min"
