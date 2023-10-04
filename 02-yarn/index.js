
// traemos un módulo nativo de Node para crear un servidos
const http = require('http');


//creamos un servido: recibe peticiones y responde con recursos
const servidor = http.createServer((peticion, respuesta) => {
    console.log('====================================');
    //respuesta.end('Hola, Este es mi primer servidor backend');
    console.log('====================================');
    
    //imprimo la petición
    console.log(peticion);
    console.log('====================================');
    console.log(peticion.url);
    console.log('====================================');
    console.log(peticion.headers);
    console.log('====================================');
    console.log(peticion.method);
    console.log('====================================');

    if(peticion.url == '/'){
        respuesta.end('Hola, Este es mi primer servidor backend');
    }else if (peticion.url == '/formulario'){
        respuesta.end('Te estamos enviando el Formulario');
    }else{
        respuesta.end('No encontramos la Ruta');
    }

});

// un número para comunicarme con el servidor
PORT = 3000;

// levantamos el servidor / app backend
servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`	);
})

