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
//Update
//3. Actualizar datos en la tabla alumnos
const actualizarDatos = () =>{

    let nombres = "Maria";
    let apellidos = "Pérez";
    let edad = 22;

    let id = 20;


    let data = { 
        nombres: nombres,
        apellidos: apellidos,
        edad: edad
    }
    
    let sql = `UPDATE ALUMNOS SET nombres = "${nombres}" WHERE idAlumno = ${id}`
    
    console.log(sql);

    connection.query(sql,(err, result)=>{
        if(err) throw err;
        //console.log(result);
        console.log(`Actualización de datos correcta`);
    })

}

connection.connect((err)=>{
    if(err) throw err;
    console.log(`Conexión a la Database correcta`);
});

actualizarDatos();

//Cerramos la conexión a la database
connection.end();
