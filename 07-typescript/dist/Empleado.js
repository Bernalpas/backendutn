"use strict";
//Clase Empleado: modelos de objetos que vamos a producir
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    //constructor de la clase: es un método especial que se ejecuta cuando se crea un objeto de esta clase
    constructor(nombre, password, email, edad) {
        this.nombre = nombre;
        this.password = password;
        this.email = email;
        this.edad = edad;
    }
    //Métodos: son funciones que se ejecutan dentro de la clase
    imprimirNombre() {
        console.log(`El password es: ${this.mostrarPassword()}`);
        console.log(`Mi nombre es: ${this.nombre}`);
    }
    trabajarEmpleado(hora = 8) {
        console.log(`El empleado ${this.nombre} está trabajando por ${hora} horas`);
    }
    mostrarPassword() {
        return this.password;
    }
}
exports.Empleado = Empleado;
