import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt';
import connection from '../database/conexion.js'

const userLogin = (req, res) => {
    res.render('login')
}


const userCreate = (req, res) => {

    const { nombre, email, password } = req.body;

    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        console.log(errores);
        return res.send(`<h1 style="color: red">Errores en los datos ingresados</h1>`)
    }

    console.log('=======================================================');
    
    //1. creamos una sal de encriptación
    const salt = bcrypt.genSaltSync(10);
    console.log(salt);

    console.log('=======================================================');
    
    //2. Mezclamos la salt con el password del usuario
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    
    console.log('=======================================================');

    const data = {
        nombre: nombre,
        email: email,
        password: hash
    }

    //3. Conexión a la database
    connection.query('INSERT INTO USUARIOS SET ?', {nombre: nombre, email: email, password: hash }, (error, result) => {
        if(error) {
            console.log(error);
            return res.send(`<h1 style="color: red">Error en la inserción</h1>`)
            //throw error;
        }else{
            return res.render('index')
        }
    });
}


export {
    userLogin, 
    userCreate
}