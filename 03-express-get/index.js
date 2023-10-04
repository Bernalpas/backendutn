//1. Importamos la librería de express
const express = require('express');

//instalamos dotenv para las variales del entrono de Node
//importamos dotenv
//const dotenv = require('dotenv');
//dotenv.config();

const path = require('path');

//otra opción para el uso de dotenv
require('dotenv').config()

//2. Ejecutamos las funcionalidades de Express
const app = express();

//3. creamos un Puerto para que el servidor escuche las peticiones
//PORT = 9000;

PORT = process.env.PORT || 9000;

//PORT = 9000 ?? process.env.PORT;

//3306: MYSQL
//3000: React - cra
//4200: Angular
//8080: tomcat
//9000: Sprint Boot
//57...: VITE
//27108: MongoDB

//4. Creamos un ruta para que el cliente pueda realizar peticiones
// Parámetros: 1. Ruta, 2. Función de callback
app.get('/saludo', (request, response) => {

    
    console.log('====================================');
    //console.log(request);
    console.log('====================================');
    console.log(request.url);
    console.log('====================================');
    console.log('Hola, Este es mi primer servidor backend con Express');
    console.log('====================================');
    //console.log(process.env);

    response.end('Hola, Este es mi primer servidor backend con Express');

});


//enviamos una respuesta con un elemento HTML
app.get('/send', (req, res) =>{

    console.log('Peticón a /send');

    res.send(`<h1 style= "color: red";> Bienvenido a la App de Express </h1>`);
});


//enviamos una respuesta con un dato de tipo JSON
app.get('/json', (req, res) =>{

    console.log('Petición a /json');

    res.status(200).json({
        Respuesta: "Es una respuesta en formato JSON - Todo OK"
    });

});


//damos la opción de descargar archivos al usuario
app.get('/descargas', (req, res) =>{

    console.log('Descargas listas');

    res.status(200).download('./archivos/descargas.txt');

});

//respondemos con un archivo html
app.get('/', (req, res) =>{

    console.log('Enviamos un archivo html');

    var options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    res.status(200).sendFile('index.html', options);

});



//5. Ponemos a la escucha a nuestro servidor
app.listen(PORT, (err)=>{

    if(err) { throw err }

    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);

})

