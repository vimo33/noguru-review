# NoGuru transparent actions

A reusable 2D character layer with real alpha. The surrounding world, floor and
ground shadow have been removed. This is not a mesh, rig or editable 3D model.

## Files and playback

`manifest.json` declares fixed 416 × 432 pixel frames, a transparent `poster.png`,
and four actions: `welcome`, `explain`, `wait`, `nod`. Every frame gives a WebP
atlas filename and an explicit source rectangle (`x`, `y`, `w`, `h`). Paths are
relative to the manifest. Draw that rectangle at your chosen canvas size.
The character itself is approximately 384 pixels tall.

Play at each action's `fps` (12). Non-looping actions hold their final frame;
`wait` loops. It is an explicit forward/reverse quiet sequence to avoid a seam.
Each atlas is 1664 × 1728 pixels with at most 16 frames. Decode only required
pages and use a bounded cache (two decoded pages is sufficient during playback).
RGB is WebP quality 90; the alpha channel is verified lossless after decoding.
Use the poster for reduced motion, pause, loading or an unavailable canvas.
Stop advancing frames when the page or character is offscreen. There is no audio.

## Source and limitations

Generated for the NoGuru project from its approved character reference, then
color-keyed, cropped and edge-defringed. Alpha is lossless; no body, face or hand
pixels were newly drawn, and genuine gaps were not filled. The source is rendered
AI motion and contains minor shape/texture variation. The acknowledgement is a
restrained head movement. There is no skeletal animation or mouth/audio sync.
Action switches are deterministic cuts, not guaranteed seamless transitions.

Supplied as NoGuru project media. No additional third-party asset licence or
trademark rights are granted by this package. Original generation provenance
and processing audit are retained separately by the project.
