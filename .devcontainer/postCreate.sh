#!/usr/bin/env bash

npm install -D tailwindcss
npm install prettier -D --save-exact
npx tailwindcss init

git config --global user.email "petr@kotas.tech"
git config --global user.name "Petr Kotas"