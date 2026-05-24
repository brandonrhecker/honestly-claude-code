#!/usr/bin/env bash
# Proposed rename for the 40 awkward-doodle stickers.
# Review this list — flag any name that doesn't match the figure's actual pose.
# After running, see _original-mapping.txt to reverse anything.

cd "$(dirname "$0")"

# ============ HIGH-CONFIDENCE POSES (already used in book.js) ============
mv "awkward_doodle_sticker_07.png" "panicked-hands-behind-head.png"
mv "awkward_doodle_sticker_05.png" "curious-leaner.png"
mv "awkward_doodle_sticker_38.png" "zen-arm-up.png"

# ============ BEST-GUESS POSES (verify against contact-sheet) ============
mv "awkward_doodle_sticker_01.png" "panicked-variant-01.png"
mv "awkward_doodle_sticker_02.png" "drawing-or-writing.png"
mv "awkward_doodle_sticker_03.png" "pointing-up-small.png"
mv "awkward_doodle_sticker_04.png" "looking-up-awe.png"
mv "awkward_doodle_sticker_06.png" "looking-down.png"
mv "awkward_doodle_sticker_08.png" "head-bowed.png"
mv "awkward_doodle_sticker_09.png" "neutral-stare-01.png"
mv "awkward_doodle_sticker_10.png" "writing-or-pointing.png"
mv "awkward_doodle_sticker_11.png" "explaining-arm-raised.png"
mv "awkward_doodle_sticker_12.png" "holding-something-shocked.png"
mv "awkward_doodle_sticker_13.png" "arm-raised-01.png"
mv "awkward_doodle_sticker_14.png" "embarrassed-blushing.png"
mv "awkward_doodle_sticker_15.png" "covering-face.png"
mv "awkward_doodle_sticker_16.png" "holding-up-item.png"
mv "awkward_doodle_sticker_17.png" "neutral-stare-02.png"
mv "awkward_doodle_sticker_18.png" "waving-or-pointing.png"
mv "awkward_doodle_sticker_19.png" "covering-eyes.png"
mv "awkward_doodle_sticker_20.png" "pointing-finger.png"
mv "awkward_doodle_sticker_21.png" "neutral-stare-03.png"
mv "awkward_doodle_sticker_22.png" "thinking-pose.png"
mv "awkward_doodle_sticker_23.png" "round-figure-looking.png"
mv "awkward_doodle_sticker_24.png" "head-cocked-listening.png"
mv "awkward_doodle_sticker_25.png" "shocked-hands-up.png"
mv "awkward_doodle_sticker_26.png" "walking-hands-behind.png"
mv "awkward_doodle_sticker_27.png" "side-glance-smug.png"
mv "awkward_doodle_sticker_28.png" "holding-tool.png"
mv "awkward_doodle_sticker_29.png" "shrugging-confused.png"
mv "awkward_doodle_sticker_30.png" "arms-up-yay.png"
mv "awkward_doodle_sticker_31.png" "dancing-arms-out.png"
mv "awkward_doodle_sticker_32.png" "wearing-glasses-cool.png"
mv "awkward_doodle_sticker_33.png" "innocent-looking-up.png"
mv "awkward_doodle_sticker_34.png" "waving-off-no-thanks.png"
mv "awkward_doodle_sticker_35.png" "pointing-or-snake.png"
mv "awkward_doodle_sticker_36.png" "holding-red-item.png"
mv "awkward_doodle_sticker_37.png" "offering-something.png"
mv "awkward_doodle_sticker_39.png" "holding-something-out.png"
mv "awkward_doodle_sticker_40.png" "confused-lost.png"

echo "Done. 40 stickers renamed."
