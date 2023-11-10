

const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.URL;
const URL_LOCAL = process.env.URL_LOCAL;

console.log(URL_LOCAL);

/* const conexion = mongoose.connect(URL_LOCAL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log('conexion exitosa!')
})
.catch((err) =>{
    console.error(err)
}); */


/* 
const conexion =  mongoose.connect(URL, { 
    useNewUrlParser: true, 
});

mongoose.connection.on('connected', () => {
    console.log('Conexión Correcta');
})

mongoose.connection.on('error', () => {
    console.log('Error en mi Conexión');
})*/




/* mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => { 
        console.log('Base de datos conectada');
    },
    err => { 
        console.log(err);
    }
    ); */
    
    const conexion = mongoose.connect(URL_LOCAL);
    
    conexion.then(() => {
        console.log('Base de datos conectada');
    }).catch((err) => {
        console.log(err);
    }); 
    
    module.exports = conexion;

/* mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db');
});

mongoose.connection.on('error', () => {
    console.log('Error to connected to db');
}); */

