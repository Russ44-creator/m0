#!/usr/bin/env node

// merge two files---the incoming 1-page index and the global index (on disk)
// the details of the global index can be seen in the test cases.

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

let parsedResults = [];

// TODO some code here
rl.on('line', (line) => {
  // TODO some code here
  let elementList = line.split(' | ');
  parsedResults.push([elementList[0].trim(), parseInt(elementList[1].trim()),
    elementList[2].trim()]);
});

rl.on('close', () => {
  mergeIndices();
});

let indexMap = new Map();
// merge
const mergeIndices = () => {
  // TODO some code here
  const globalIndexContent = fs.readFileSync(process.argv[2], 'utf8');
  globalIndexContent.split('\n').forEach((line) => {
    if (line) {
      parts = line.split(' | ');
      if (typeof parts[1] == 'string') {
        urls = parts[1].split(' ');
        indices = [];
        for (i = 0; i < urls.length; i += 2) {
          indices.push([urls[i], parseInt(urls[i + 1])]);
        }
        indexMap.set(parts[0], indices);
      }
    }
  });

  for (i = 0; i < parsedResults.length; i++) {
    data = parsedResults[i];
    if (indexMap.has(data[0])) {
      indexMap.get(data[0]).push([data[2], data[1]]);
      indexMap.get(data[0]).sort((a, b) => b[1] - a[1]);
    } else {
      indexMap.set(data[0], [[data[2], data[1]]]);
    }
  }

  indexMap.forEach((values, key) => {
    res = key + ' | ';
    for (i = 0; i < values.length; i++) {
      res += values[i][0] + ' ' + values[i][1] + ' ';
    }
    res = res.substring(0, res.length - 1);
    console.log(res);
  });
};

