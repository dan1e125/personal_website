#!/bin/bash
# deploy.sh — cache bust + git commit + push
set -e

SITE="/var/www/danieloa.com"
cd "$SITE"

# Generate version: YYYYMMDD + short git hash
DATE=$(date +%Y%m%d)
HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "local")
VERSION="${DATE}-${HASH}"

# Replace any existing ?v=... with new version in index.html
sed -i "s/?v=[^\"']*/\?v=${VERSION}/g" index.html

echo "✓ Cache version → ?v=${VERSION}"

# Git commit + push
git add -A

MSG="${1:-chore: deploy $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$MSG" || echo "(nothing new to commit)"

git push origin main
echo "✓ Pushed to origin/main"
