#!/usr/bin/env bash
# Proposed rename for the doodles set.
# Review this list. Strikethrough or fix any name that looks wrong before running.
# After running, see _original-mapping.txt to reverse anything.

cd "$(dirname "$0")"

# ============ NAMED ICONS (high confidence) ============
mv "Asset 2.svg"  "question-mark-01.svg"
mv "Asset 3.svg"  "speaker.svg"
mv "Asset 4.svg"  "bar-chart-up.svg"
mv "Asset 5.svg"  "shirt-or-banner.svg"
mv "Asset 6.svg"  "wifi-cone.svg"
mv "Asset 8.svg"  "question-mark-02.svg"
mv "Asset 9.svg"  "x-mark.svg"
mv "Asset 10.svg" "hatch-lines.svg"
mv "Asset 11.svg" "at-sign.svg"
mv "Asset 15.svg" "home-word.svg"
mv "Asset 18.svg" "hashtag.svg"
mv "Asset 19.svg" "keyhole.svg"
mv "Asset 21.svg" "megaphone.svg"
mv "Asset 23.svg" "checkmark.svg"
mv "Asset 24.svg" "triangle.svg"
mv "Asset 25.svg" "pencil-01.svg"
mv "Asset 28.svg" "trash-can.svg"
mv "Asset 29.svg" "refresh-circular-01.svg"
mv "Asset 30.svg" "open-book.svg"
mv "Asset 31.svg" "thought-bubble.svg"
mv "Asset 32.svg" "cookie-dotted.svg"
mv "Asset 33.svg" "tag-word.svg"
mv "Asset 34.svg" "pencil-02.svg"
mv "Asset 35.svg" "envelope.svg"
mv "Asset 36.svg" "info-i-circle.svg"
mv "Asset 37.svg" "speech-bubble.svg"
mv "Asset 43.svg" "lock-open.svg"
mv "Asset 45.svg" "refresh-circular-02.svg"
mv "Asset 47.svg" "lock-closed.svg"
mv "Asset 51.svg" "share-word.svg"
mv "Asset 53.svg" "light-bulb.svg"
mv "Asset 54.svg" "idea-word.svg"
mv "Asset 62.svg" "map-pin.svg"
mv "Asset 63.svg" "house.svg"
mv "Asset 64.svg" "play-circle-01.svg"
mv "Asset 65.svg" "plus-circle.svg"
mv "Asset 66.svg" "number-1-circle.svg"
mv "Asset 67.svg" "ok-badge.svg"
mv "Asset 68.svg" "play-circle-02.svg"
mv "Asset 70.svg" "pencil-03.svg"
mv "Asset 71.svg" "pencil-pointer.svg"
mv "Asset 91.svg" "magnifying-glass.svg"

# ============ ARROWS (best-effort — names may need correcting) ============

# Up-pointing
mv "Asset 1.svg"  "arrow-up-dotted.svg"
mv "Asset 16.svg" "arrow-up-skinny-01.svg"
mv "Asset 17.svg" "arrow-up-skinny-02.svg"
mv "Asset 26.svg" "arrow-up-chunky-01.svg"
mv "Asset 27.svg" "arrow-up-skinny-03.svg"
mv "Asset 38.svg" "arrow-up-chunky-02.svg"
mv "Asset 39.svg" "arrow-up-chevron-01.svg"
mv "Asset 40.svg" "arrow-up-chevron-02.svg"
mv "Asset 42.svg" "arrow-up-chunky-03.svg"
mv "Asset 48.svg" "arrow-up-chunky-04.svg"
mv "Asset 72.svg" "arrow-up-simple.svg"
mv "Asset 74.svg" "arrow-up-chunky-05.svg"
mv "Asset 81.svg" "arrow-up-point.svg"
mv "Asset 83.svg" "arrow-up-chevron-03.svg"
mv "Asset 84.svg" "arrow-up-mountain.svg"

# Down-pointing
mv "Asset 22.svg" "arrow-down-skinny.svg"
mv "Asset 56.svg" "arrow-down-chunky-01.svg"
mv "Asset 57.svg" "arrow-down-chunky-02.svg"
mv "Asset 73.svg" "arrow-down-simple.svg"
mv "Asset 87.svg" "arrow-down-curved.svg"

# Right-pointing
mv "Asset 20.svg" "arrow-right-skinny.svg"
mv "Asset 49.svg" "arrow-right-chunky-01.svg"
mv "Asset 50.svg" "arrow-right-chunky-02.svg"
mv "Asset 59.svg" "arrow-right-chunky-03.svg"
mv "Asset 60.svg" "arrow-right-chunky-04.svg"
mv "Asset 75.svg" "arrow-right-chunky-05.svg"
mv "Asset 77.svg" "arrow-right-chunky-06.svg"
mv "Asset 78.svg" "arrow-right-pointer.svg"

# Left-pointing
mv "Asset 12.svg" "arrow-left-wedge.svg"

# Diagonals
mv "Asset 7.svg"  "arrow-up-right-curved.svg"
mv "Asset 13.svg" "arrow-up-curved.svg"
mv "Asset 14.svg" "arrow-down-left-bent.svg"
mv "Asset 44.svg" "arrow-up-right-chunky.svg"
mv "Asset 46.svg" "arrow-down-right-chunky.svg"
mv "Asset 76.svg" "arrow-down-right-shadow.svg"
mv "Asset 82.svg" "arrow-down-right-curved.svg"
mv "Asset 86.svg" "arrow-up-right-arc.svg"

# Bent / right-angle
mv "Asset 55.svg" "arrow-bent-down-right.svg"
mv "Asset 58.svg" "arrow-bent-down-left.svg"
mv "Asset 61.svg" "arrow-bent-up-left.svg"
mv "Asset 69.svg" "arrow-bent-up-right.svg"
mv "Asset 89.svg" "arrow-bent-curve.svg"

# Back / U-turn / curved-back
mv "Asset 41.svg" "arrow-back-double.svg"
mv "Asset 52.svg" "arrow-back-curved.svg"
mv "Asset 79.svg" "arrow-s-curved.svg"
mv "Asset 80.svg" "arrow-c-shape.svg"
mv "Asset 85.svg" "arrow-up-s-curved.svg"
mv "Asset 88.svg" "arrow-vertical-compass.svg"
mv "Asset 90.svg" "arrow-curved-back.svg"

echo "Done. 91 files renamed."
