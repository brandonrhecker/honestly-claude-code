#!/usr/bin/env bash
# Snapshot a chapter's current state.
# Usage: bash snapshot.sh <chapter>   (e.g. bash snapshot.sh ch01)
#
# What it captures:
#   - The chapter's pages.js (chapter-specific code)
#   - The rendered PDF (visual artifact of this iteration)
#
# Snapshots go to chapters/<ch>/snapshots/v<N>-<YYYY-MM-DD>/
# Version number auto-increments based on existing snapshots.
#
# For full-repo code rollback (including shared/ + styles.css), pair this
# with a git tag like "ch01-stable-v1" — see git tag --list "ch*-stable-*".

set -euo pipefail

CH="${1:-}"
if [[ -z "$CH" ]]; then
  echo "usage: bash snapshot.sh <chapter>"
  exit 1
fi

ROOT="$(dirname "$(realpath "$0")")"
CH_DIR="$ROOT/chapters/$CH"
SNAP_ROOT="$CH_DIR/snapshots"
PDF="$ROOT/out/chapters/$CH/$CH.pdf"
PAGES_JS="$CH_DIR/pages.js"

if [[ ! -d "$CH_DIR" ]]; then
  echo "error: chapter folder not found: $CH_DIR"
  exit 1
fi
if [[ ! -f "$PDF" ]]; then
  echo "error: rendered PDF not found at $PDF — run 'npm run build' first."
  exit 1
fi

mkdir -p "$SNAP_ROOT"

# Find next version number
LAST_N=$(ls "$SNAP_ROOT" 2>/dev/null | grep -oE '^v[0-9]+' | sed 's/v//' | sort -n | tail -1 || true)
NEXT_N=$(( ${LAST_N:-0} + 1 ))
DATE=$(date +%Y-%m-%d)
DEST="$SNAP_ROOT/v${NEXT_N}-${DATE}"

mkdir -p "$DEST"
cp "$PAGES_JS" "$DEST/pages.js"
cp "$PDF" "$DEST/$CH.pdf"

echo "Snapshot saved: $DEST"
echo "  $DEST/pages.js"
echo "  $DEST/$CH.pdf"
echo ""
echo "Suggested next step: tag the code in git so you can roll back the"
echo "  whole repo state (including shared/styles) for this iteration:"
echo "    git tag ${CH}-stable-v${NEXT_N}"
