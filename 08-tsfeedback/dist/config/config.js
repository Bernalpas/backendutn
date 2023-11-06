"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CONFIG = {
    PORT: 9000,
    DATA_PORT: process.env.DATA_PORT,
    DATA_USER: process.env.DATA_USER,
    DATA_PASSWORD: process.env.DATA_PASSWORD,
    DATA_DATABASE: process.env.DATA_DATABASE,
    DATA_HOST: process.env.DATA_HOST,
};
