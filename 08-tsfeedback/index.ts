
//importamos los objetos 
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

//Ejecutamos la configuración de dotenv
dotenv.config();

//Traemos el puerto para la app
const PORT: number | string = process.env.PORT || 3000;

//Creamos la app
const app: Express = express();

//Configuramos una ruta
app.get('/', (req: Request, res: Response) =>{
    res.send('Soy un back con TS');
});


//Levantamos el server
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});



