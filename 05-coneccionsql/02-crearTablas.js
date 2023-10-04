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

const crearTabla =  (err) =>{

    let dataTable = 'alumnos';
        
    let sql = `CREATE TABLE ${dataTable} (
        idAlumno int not null auto_increment, 
        nombres VARCHAR(120), 
        apellidos VARCHAR(120), 
        edad int,
        primary key (idAlumno)
        )`;

    //Creamos la database utndata
    connection.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(`Cración de la Tabla ${dataTable} correcta`);
    });

}

//2. Creación de una tabla alumnos
// sólo podemos ejecutar una vez la creación de la database y tablas
connection.connect((err)=>{
    if(err) throw err;
    console.log(`Conexión a la Database correcta`);
});

//Llamamos a la función de creación de la tabla
crearTabla();

//Cerramos la conexión a la database
connection.end();
