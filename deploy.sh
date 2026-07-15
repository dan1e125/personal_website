#!/bin/bash
# deploy.sh — build, validate, commit + push (Cloudflare Pages deploys via GitHub Actions)
set -euo pipefail
cd "$(dirname "$0")"

npm run build -- --bump
npm run validate

source_author() {
  node --input-type=module -e "import { SITE } from './scripts/site.config.js'; console.log(SITE.gitAuthor.email)"
}

GIT_AUTHOR_NAME="Daniel Ordonez Arango"
GIT_AUTHOR_EMAIL="$(source_author)"
export GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL
export GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME"
export GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"

git add -A
MSG="${1:-chore: deploy $(date '+%Y-%m-%d %H:%M')}"
git commit -m "$MSG" || echo "(nothing new to commit)"
git push origin main
echo "→ Pushed to origin/main — Cloudflare Pages will deploy in ~1 min"
