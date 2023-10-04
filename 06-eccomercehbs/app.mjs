import express from 'express';
import morgan from 'morgan';
import hbs from 'hbs';
import path from 'path';
import userRouter from './router/userRouter.mjs';


import { check, validationResult } from 'express-validator'

//Si no encuentra la carpeta de views le agrego el __dirname
import * as url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

console.log(__dirname);

const app = express();

//Middelware
//app.use(morgan());
//app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//1. Configuración de Handlebars
app.set('view engine', 'hbs');
//2. Configuración e ubicación de las vistas
app.set('views', path.join('views'));
//3. Configuración de los archivos parciales
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', userRouter);

app.post(
    '/', 
    [
        check('nombre').isLength({ min: 4 }),
        check('email').isEmail(),
        check('password').isLength({ min: 6 }),
    ],
    (req, res) => {

    const { nombre, email, password } = req.body;

    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.send(`<h1 style="color: red">Errores en los datos ingresados</h1>`)
    }
    
    console.log('=======================================================');
    
    console.log(errores);
    
    console.log(`Los datos recibidos son ${nombre} - ${email} - ${password}`);
    
    console.log('=======================================================');

    res.json({
        nombre: nombre,
        email: email,
        password: password
    });

})

//sólo puede existir un export default por archivo
export default app;
