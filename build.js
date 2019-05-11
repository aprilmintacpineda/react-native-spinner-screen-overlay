/** @format */

const babelCore = require('@babel/core');
const path = require('path');
const fs = require('fs');

const source = fs.readFileSync(path.join(__dirname, '/src/index.js'), 'utf8');
const code = babelCore.transform(source, {
  babelrc: false,
  presets: [
    ['@babel/preset-env', {
      loose: true
    }],
    '@babel/preset-react'
  ]
}).code;
const codeMin = babelCore.transform(source, {
  babelrc: false,
  presets: [
    ['@babel/preset-env', {
      loose: true
    }],
    '@babel/preset-react',
    ['babel-preset-minify', {
      builtIns: false
    }]
  ]
}).code;

fs.writeFileSync(path.join(__dirname, '/lib/index.js'), code, 'utf8');
fs.writeFileSync(path.join(__dirname, '/lib/index.min.js'), codeMin, 'utf8');
