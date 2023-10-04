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


///CRUD
//Create
//1. Insertar datos en la tabla alumnos
const insertarDatos = () =>{


    let nombres = "Juana";
    let apellidos = "Pérez";
    let edad = 22;
    
    let sql = `INSERT INTO ALUMNOS VALUES (null, "${nombres}", "${apellidos}", ${edad})`
    
    console.log(sql);

    connection.query(sql, (err, result)=>{
        if(err) throw err;
        //console.log(result);
        console.log(`Inserción de datos correcta`);
    })

}

connection.connect((err)=>{
    if(err) throw err;
    console.log(`Conexión a la Database correcta`);
});

insertarDatos();

//Cerramos la conexión a la database
connection.end();

