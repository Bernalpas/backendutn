import { validationResult } from 'express-validator'


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
    
    
    console.log(`Los datos recibidos son ${nombre} - ${email} - ${password}`);
    
    console.log('=======================================================');
    
    res.json({
        nombre: nombre,
        email: email,
        password: password
    });

}

export {
    userLogin, 
    userCreate
}