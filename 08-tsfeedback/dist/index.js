"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos los objetos 
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Ejecutamos la configuración de dotenv
dotenv_1.default.config();
//Traemos el puerto para la app
const PORT = process.env.PORT || 3000;
//Creamos la app
const app = (0, express_1.default)();
//Configuramos una ruta
app.get('/', (req, res) => {
    res.send('Soy un back con TS');
});
//Levantamos el server
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});
