export default class BeefyRobot {
  position: Array<string> | null;

  constructor() {
    this.position = null;
  }

  place(position: string) {
    const x = parseInt(position[6]);
    const y = parseInt(position[8]);

    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
      this.position = position.substring(6).split(',');
    }
  }

  report(): string {
    let report: string;

    if (this.position) {
      report = this.position.join(',');
    } else {
      report = 'BeefyRobot is not on the table';
    }

    return report;
  }

  rotate(direction: string) {
    if (this.position) {
      const current = this.position[2];
      if (direction == 'LEFT') {
        if (current == 'NORTH') {
          this.position[2] = 'WEST';
        }
        if (current == 'EAST') {
          this.position[2] = 'NORTH';
        }
        if (current == 'SOUTH') {
          this.position[2] = 'EAST';
        }
        if (current == 'WEST') {
          this.position[2] = 'SOUTH';
        }
      }
      if (direction == 'RIGHT') {
        if (current == 'NORTH') {
          this.position[2] = 'EAST';
        }
        if (current == 'EAST') {
          this.position[2] = 'SOUTH';
        }
        if (current == 'SOUTH') {
          this.position[2] = 'WEST';
        }
        if (current == 'WEST') {
          this.position[2] = 'NORTH';
        }
      }
    }
  }

  move() {
    if (this.position) {
      let x = parseInt(this.position[0]);
      let y = parseInt(this.position[1]);
      const direction = this.position[2];

      if (direction == 'NORTH' && y < 4) {
        y += 1;
        this.position[1] = y.toString();
      }
      if (direction == 'SOUTH' && y > 0) {
        y -= 1;
        this.position[1] = y.toString();
      }
      if (direction == 'EAST' && x < 4) {
        x += 1;
        this.position[0] = x.toString();
      }
      if (direction == 'WEST' && x > 0) {
        x -= 1;
        this.position[0] = x.toString();
      }
    }
  }
}
