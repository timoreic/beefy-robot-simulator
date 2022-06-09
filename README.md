# beefy-robot-simulator

## Description

> A command line application simulating a small robot named Beefy moving on a square tabletop, of dimensions 5 units x 5 units.

---

## Commands

#### `PLACE X,Y,F MOVE`

PLACE will put Beefy on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner. - The first valid command to Beefy is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.

#### `MOVE`

MOVE will move Beefy one unit forward in the direction it is currently facing.

#### `LEFT` and `RIGHT`

LEFT and RIGHT will rotate Beefy 90 degrees in the specified direction without changing the position of the robot.

#### `REPORT`

REPORT will announce the X,Y and F of Beefy. This can be in any form, but standard output is sufficient.

---

## Scripts

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `out/index.js`.

#### `npm run build`

Builds the app at `out`.

#### `npm run test`

Runs the `jest` tests.

#### `npm run lint`

Runs `eslint`.
