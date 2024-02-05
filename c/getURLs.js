#!/usr/bin/env node

const readline = require('readline');
const {JSDOM} = require('jsdom');
const {URL} = require('url');

// Example usage:
let baseURL = process.argv[2];
baseURL += '/';

// check the baseurl is a file or a directory
let isFile = false;
let LastSecondSlash = -1;
for (i = baseURL.lastIndexOf('/') - 1; i >= 0; i--) {
  if (baseURL[i] == '/') {
    LastSecondSlash = i;
    break;
  }
  if (baseURL[i] == '.') {
    isFile = true;
  }
}

if (isFile == true) {
  baseURL = baseURL.substring(0, LastSecondSlash + 1);
}

const rl = readline.createInterface({
  input: process.stdin,
});

// TODO some code
let htmlStream = [];

rl.on('line', (line) => {
  // TODO some code
  htmlStream.push(line);
});

rl.on('close', () => {
  // TODO some code
  const htmlContent = htmlStream.join('\n');
  const htmlDom = new JSDOM(htmlContent);
  const lastElementLists = htmlDom.window.document.querySelectorAll('a');
  lastElementLists.forEach((lastElementList) => {
    const url = new URL(lastElementList.getAttribute('href'), baseURL).href;
    console.log(url);
  });
});
