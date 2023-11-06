"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos los objetos 
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const conexion_1 = __importDefault(require("./database/conexion"));
//Ejecutamos la configuración de dotenv
dotenv_1.default.config();
//Traemos el puerto para la app
const PORT = process.env.PORT || 3000;
//Creamos la app
const app = (0, express_1.default)();
//Middelwares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
//rutas de la app
//app.use('/api', usersRoute);
//Configuramos una ruta
app.get('/', (req, res) => {
    res.send('Soy un back con TS');
});
//Conectamos la database
/* const conectar = new conexion();
conectar.conectarDB(); */
conexion_1.default.instance;
//Levantamos el server
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});
