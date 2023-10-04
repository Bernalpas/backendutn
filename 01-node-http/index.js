
// traemos un módulo nativo de Node para crear un servidos
const http = require('http');


//creamos un servido: recibe peticiones y responde con recursos
const servidor = http.createServer((peticion, respuesta) => {
    respuesta.end('Hola, Este es mi primer servidor backend');
});

// un número para comunicarme con el servidor
PORT = 3000;

// levantamos el servidor / app backend
servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`	);
})

