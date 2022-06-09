import * as fs from 'fs';

// Read commands.txt to an array
const commands = fs
  .readFileSync('./commands.txt', 'utf8')
  .toString()
  .split('\n');

console.log(commands);
