"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
dotenv_1.default.config();
class Conexion {
    //constructor
    constructor() {
        this.conectado = false;
        console.log('Clase Conexión inicializada');
        this.cnn = mysql2_1.default.createConnection({
            host: process.env.DATA_HOST,
            user: process.env.DATA_USER,
            password: process.env.DATA_PASSWORD,
            port: process.env.DATA_PORT,
            database: process.env.DATA_DATABASE
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    //métodos
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}
exports.default = Conexion;
