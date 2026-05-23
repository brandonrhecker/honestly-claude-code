# Preview snapshots

Self-contained HTML renders of stable chapter iterations, kept here so
[claude.ai/design](https://claude.ai/design) and other tooling can show
the actual visual surface without running the build pipeline.

Asset paths in these files are rewritten from `../../../assets/...` to
`../../assets/...` so they resolve correctly when the file is opened from
its location in `build/design-source/preview/`.

To refresh after a stable iteration:

```
cd build
sed 's|\.\./\.\./\.\./assets/|\.\./\.\./assets/|g' out/chapters/ch01/ch01.html \
  > design-source/preview/ch01-stable-vN.html
```

Replace `vN` with the next version number matching the git tag
(e.g. `ch01-stable-v2.html` for tag `ch01-stable-v2`).
