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
}
