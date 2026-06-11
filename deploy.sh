#!/bin/bash
# deploy.sh — sync cache versions, validate, commit + push
set -e

SITE="/var/www/danieloa.com"
cd "$SITE"

DATE=$(date +%Y%m%d)
HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "local")
VERSION="${DATE}-${HASH}"

sed -i "s/?v=[^\"']*/?v=${VERSION}/g" index.html
sed -i "s/var CACHE = 'danieloa-[^']*'/var CACHE = 'danieloa-${VERSION}'/" sw.js
sed -i "s/?v=[^\"']*/?v=${VERSION}/g" sw.js

echo "✓ Cache version → ${VERSION}"

if command -v node >/dev/null 2>&1 && [ -f scripts/validate.mjs ]; then
  node scripts/validate.mjs
  echo "✓ Validation passed"
fi

git add -A
MSG="${1:-chore: deploy $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$MSG" || echo "(nothing new to commit)"
git push origin main
echo "✓ Pushed to origin/main"
