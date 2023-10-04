
//responde a la ruta /users
const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();


//1. Creación de una conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.HOSTDATA,
    user: process.env.USERDATA,
    password: process.env.PASSDATA,
    port: process.env.PORTDATA,
    database: process.env.DATABASE
});


//CRUD
//Read: lectura de datos
router.get('/',(req, res)=>{
    res.json({data: 'Listado de Usuarios'});
})

//Create: creación de datos
router.post('/', (req, res)=>{
    /* const { usuario, email, password } = req.body; */
    const { nombres, apellidos, edad } = req.body;
    
    console.log('===================================');

    connection.connect((err)=>{
        if(err) throw err;
        console.log(`Conexión a la Database correcta`);
    });

/*     console.log(usuario);
    console.log(email);
    console.log(password); */

    console.log('===================================');
    
/*     let datoUsuario = req.body.usuario;
    let datoEmail = req.body.email;
    let datoPassword = req.body.password; */
    
    console.log('===================================');

    ///CRUD
    //Create
    //1. Insertar datos en la tabla alumnos
    
    let sql = `INSERT INTO ALUMNOS VALUES (null, "${nombres}", "${apellidos}", ${edad})`
    
    console.log(sql);

    connection.query(sql, (err, result)=>{
        if(err) throw err;
        //console.log(result);
        console.log(`Inserción de datos correcta`);
    })

    res.send(`Hemos recibido tus datos ${nombres} - ${apellidos} - ${edad}`);

})


//Update: actualizamos un dato
router.put('/update/:id', (req, res)=>{

    let userUpdate = req.params.id;

    console.log(userUpdate);

    res.json({
        message: `Actualizado: Usuario = ${userUpdate}`
    })
})


//Delete: eliminamos un dato
router.delete('/delete/:id', (req, res)=>{

    let userUpdate = req.params.id;

    console.log(userUpdate);

    res.json({
        message: `Eliminado: Usuario = ${userUpdate}`
    })
})

module.exports = router;