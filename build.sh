#!/bin/sh
set -o errexit
set -o nounset

npm run build
# reveal-md generates slides.md by default
find _static/ -iname "slides.html" -exec rename slides index '{}' \;
mv _static public
rm public/index.html
cp README.md public/index.md

# noops
cp -r 2021-09-unsuck-apis public/
