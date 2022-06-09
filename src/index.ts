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
  if (commands[index].substring(0, 5) == 'PLACE') {
    beefyRobot.place(commands[index]);
  }
  if (commands[index] == 'REPORT') {
    console.log(beefyRobot.report());
  }
  if (commands[index] == 'LEFT' || commands[index] == 'RIGHT') {
    beefyRobot.rotate(commands[index]);
  }
  if (commands[index] == 'MOVE') {
    beefyRobot.move();
  }
}
