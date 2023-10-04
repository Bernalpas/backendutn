import { validationResult } from 'express-validator'


const appInicio = (req, res) => {
    res.render('index')
}


const userCreate = (req, res) => (req, res) => {

    const { nombre, email, password } = req.body;

    const errores = validationResult(req);

    console.log('=======================================================');
    
    console.log(errores);
    
    console.log(`Los datos recibidos son ${nombre} - ${email} - ${password}`);
    
    console.log('=======================================================');
    
    res.json({
        nombre: nombre,
        email: email,
        password: password
    });

}



export {
    appInicio, 
    userCreate
}