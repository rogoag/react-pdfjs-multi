#!/bin/bash
set -o errexit

# config
git config --global user.email "marcus.klein@live.com"
git config --global user.name "Travis CI"

# build
yarn build:example

# deploy
cd examples/simple
git init
git add .
git commit -m "Deploy to Github Pages"
git push "https://${GITHUB_TOKEN}@$github.com/${GITHUB_REPO}.git" gh-pages 