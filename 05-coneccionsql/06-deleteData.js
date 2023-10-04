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
//Delete
//4. Eliminar datos en la tabla alumnos
const eliminarDatos = () =>{

    let id = 10;

    let sql = `DELETE FROM ALUMNOS WHERE idAlumno = ${id}`
    
    console.log(sql);

    connection.query(sql,(err, result)=>{
        if(err) throw err;
        //console.log(result);
        console.log(`Eliminación de datos correcta`);
    })
}

connection.connect((err)=>{
    if(err) throw err;
    console.log(`Conexión a la Database correcta`);
});

eliminarDatos();

//Cerramos la conexión a la database
connection.end();