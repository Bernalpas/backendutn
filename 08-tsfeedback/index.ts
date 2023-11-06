
//importamos los objetos 
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conexion from './database/conexion';
import path from 'path';

//Ejecutamos la configuración de dotenv
dotenv.config();

//Traemos el puerto para la app
const PORT: number | string = process.env.PORT || 3000;

//Creamos la app
const app: Express = express();

//Middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//rutas de la app
//app.use('/api', usersRoute);

//Configuramos una ruta
app.get('/', (req: Request, res: Response) =>{
    res.send('Soy un back con TS');
});

//Conectamos la database
/* const conectar = new conexion();
conectar.conectarDB(); */

conexion.instance

//Levantamos el server
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});



