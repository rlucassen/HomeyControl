"use strict";

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const exec = child_process.exec;
const appPath = 'me.lucassen.homeycontrol';

let projectPath = process.cwd();

let totalPath = projectPath + '\\' + appPath;

console.log("totalPath", totalPath);

fs.writeFile('/path/to/file', '', function() { console.log('done') });

let cmd = 'cmd';

let value = ['/k', 'C:\Program Files\\nodejs\\nodevars.bat'];
let opt = {};

let child = child_process.spawn(cmd, value, opt);

child.stdin.setEncoding('utf-8');
child.stdout.pipe(process.stdout);

setTimeout(function () {
  child.stdin.write('node -v \n');
  child.stdin.write(`athom project --run "${totalPath}" \n`);
  setTimeout(function () {
    child.stdin.write('\n');
  }, 2000);
}, 1000);

let writableStream = fs.createWriteStream('./homey.log');

child.stdout.on('data', function (data) {
  writableStream.write(data);
});