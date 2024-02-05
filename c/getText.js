#!/usr/bin/env node

// Extract text from a web page

const {convert} = require('html-to-text');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

// TODO Add some code
let htmlStream = '';

rl.on('line', (line) => {
  // TODO Add some code
  htmlStream += line + '\n';
});

rl.on('close', () => {
  // TODO Add some code
  const text = convert(htmlStream);
  console.log(text);
});
