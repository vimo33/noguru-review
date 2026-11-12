# NoGuru transparent actions — native edge revision

A reusable 2D character layer with real alpha. The world, floor and ground
shadow are absent. This is not a mesh, rig or editable 3D model.

`manifest.json` declares 600×620 frames, a transparent `poster-v2.png`, and four
actions (`welcome`, `explain`, `wait`, `nod`). Paths are relative to the manifest.
Draw each explicit `src`/`x`/`y`/`w`/`h` rectangle at the desired canvas size.
The character is approximately 550 pixels tall at native source resolution.

Play at 12 fps. Only `wait` loops, using an explicit forward/reverse quiet sequence.
Other actions hold their final frame. `posterFrame` gives a useful static index.
Each 1800×1860 atlas holds up to 9 frames. Two decoded RGBA pages use 26,784,000 bytes;
use lazy decode and a bounded two-page cache. Respect reduced motion, pause and
offscreen visibility. There is no audio. Atlas filenames are versioned to avoid
reusing cached earlier files. Use DPR-aware canvas backing and high-quality
smoothing; do not enlarge the source to imply unavailable detail.

The native-resolution revision improves boundary coverage and removes blue
edge contamination. Only the narrow outline band is refined. Original opaque
interior pixels are unchanged before compression. RGB is WebP quality 90; alpha
is verified lossless. Generated source texture/hand variation remains, and
cross-action switches are cuts, not guaranteed seamless motion or mouth sync.

Generated for NoGuru from its approved character reference, then background
removed and edge-refined. Supplied as NoGuru project media; no additional
third-party asset licence or trademark rights are granted. Generation provenance
and processing audit are retained separately. No raw clips or internal records
are included here.
