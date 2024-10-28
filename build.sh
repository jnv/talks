#!/bin/bash
set -euo pipefail
shopt -s globstar

rm -rf public/
npm run build
# reveal-md generates slides.md by default
for f in _static/**/slides.html; do
  mv $f "${f/slides/index}"
done
mv _static public
rm public/index.html
cp README.md public/index.md

# noops
cp -r 2021-09-unsuck-apis public/
cp -r 2024-05-activitypub public/
