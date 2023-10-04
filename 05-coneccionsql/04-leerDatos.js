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
//Read
//2. Eliminar datos en la tabla alumnos
const leerDatos = () =>{

    let otrosql = 'SELECT * FROM utndata.alumnos;'

    console.log(otrosql);

    connection.query(otrosql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        //console.log(`Inserción de datos correcta`);
    })

}

connection.connect((err)=>{
    if(err) throw err;
    console.log(`Conexión a la Database correcta`);
});

leerDatos();

//Cerramos la conexión a la database
connection.end();