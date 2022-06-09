"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const BeefyRobot_1 = __importDefault(require("./BeefyRobot"));
// Read commands.txt to an array
const commands = fs
    .readFileSync('./commands.txt', 'utf8')
    .toString()
    .split('\n');
// Initialise BeefyRobot object
const beefyRobot = new BeefyRobot_1.default();
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
