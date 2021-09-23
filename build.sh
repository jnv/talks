#!/bin/sh
set -o errexit
set -o nounset

npm run build
mv _static public
rm public/index.html
cp README.md public/