"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BeefyRobot {
    constructor() {
        this.position = null;
    }
    place(position) {
        const x = parseInt(position[6]);
        const y = parseInt(position[8]);
        if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
            this.position = position.substring(6).split(',');
        }
    }
    report() {
        let report;
        if (this.position) {
            report = this.position.join(',');
        }
        else {
            report = 'BeefyRobot is not on the table';
        }
        return report;
    }
}
exports.default = BeefyRobot;
