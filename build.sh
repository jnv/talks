#!/bin/sh
set -o errexit
set -o nounset

npm run build
mv _static public
rm public/index.html
cp README.md public/index.md

# noops
cp -r 2021-09-unsuck-apis public/
