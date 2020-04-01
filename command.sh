#!/usr/bin/env bash

npm init -y
npm install webpack webpack-cli --save-dev
npm install --save lodash
npx webpack
npx webpack --config webpack.config.js
npm install --save-dev css-loader ts-loader typescript scss-loader
npm install --save-dev @types/lodash
npm install style-loader sass-loader node-sass --save-dev
npm install fibers --save-dev
npx webpack --config webpack.config.js
