

//Variables en TS
let nombre: string;
let apellido: string;
let edad: number;
let estado: boolean;

let comprar: number | string;

nombre = 'Pepe';
apellido = 'Pérez',
edad = 25;
estado = false;
comprar = 'Veinte';
comprar = 50;

console.log(nombre, apellido, edad, estado, comprar);

console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años`);
console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años`);
console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años`);


console.log('============================================================');

console.log('Clase en TypeScript');

//1. import de clases con export
import { Empleado } from './Empleado';
import { compra } from './Empleado';


//2. Creamos una instancia de la clase Empleado: un objeto
let Pepe: Empleado = new Empleado('Pepe', '123456', 'pepe@gmail.com', 25);


//3. Utilizamod el objeto empleado con sus métodos
Pepe.imprimirNombre();

Pepe.edad = 23;

let horasDeTrabajo: number = 40;

Pepe.imprimirNombre();
Pepe.trabajarEmpleado(horasDeTrabajo);


console.log('============================================================');

console.log('Intefaces');

//Interface: un esquema para crear objetos
/* interface compra {
    producto: string;
    precio:number;
    cantidad: number;
    direccion: string;
} */

//Lo importamos desde el archivo de la clase Empleado.ts
const compraCliente: compra ={
    producto: 'TV',
    precio: 500,
    cantidad: 1,
    direccion: 'Calle 123'
}

console.log(compraCliente);



















