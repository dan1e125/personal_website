#!/bin/bash
# serve.sh — local preview server for danieloa.com
set -euo pipefail
cd "$(dirname "$0")"

npm run build
PORT="${1:-8080}"

echo "? Serving at http://localhost:${PORT}"
echo "? Press Ctrl+C to stop"
echo ""

if command -v npx >/dev/null 2>&1; then
  npx --yes serve -l "$PORT" .
else
  python3 -m http.server "$PORT"
fi
