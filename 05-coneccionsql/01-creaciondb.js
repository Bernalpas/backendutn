const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();


//1. Creación de una conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.HOSTDATA,
    user: process.env.USERDATA,
    password: process.env.PASSDATA,
    port: process.env.PORTDATA,
});

//función crear database
/* const crearDatabase =  (err) =>{

    if(err) throw err;
    
    let database = 'utndata';
        
    let sql = `CREATE DATABASE ${database}`;
    
    //Creamos la database utndata
    connection.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(`Cración de la Database ${database} correcta`);
    });

} */

//2. Creación de una database utndata
// sólo podemos ejecutar una vez la creación de la database y tablas
connection.connect((err)=>{
    if(err) throw err;

    console.log(`Conexión a la Database correcta`);

    //crearDatabase();

    let database = 'utndata';
        
    let sql = `CREATE DATABASE ${database}`;
    
    //Creamos la database utndata
    connection.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(`Cración de la Database ${database} correcta`);
    });
});


//cerramos la conexión para no consumir recursos
connection.end();


