import * as fs from 'fs';

import BeefyRobot from './BeefyRobot';

// Read commands.txt to an array
const commands = fs
  .readFileSync('./commands.txt', 'utf8')
  .toString()
  .split('\n');

// Initialise BeefyRobot object
const beefyRobot = new BeefyRobot();

// Execute commands
for (const index in commands) {
  beefyRobot.place(commands[index]);
}

console.log(beefyRobot.position);
