#!/bin/bash
set -o errexit

# config
git config --global user.email "marcus.klein@live.com"
git config --global user.name "Travis CI"

# build
cd examples/simple
yarn build:example

# deploy
git init
git add .
git commit -m "Deploy to Github Pages"
git push --quiet "https://${GITHUB_TOKEN}@$github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1