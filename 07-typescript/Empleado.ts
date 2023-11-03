

//Clase Empleado: modelos de objetos que vamos a producir

export class Empleado{

    //atributos de la clase
    private nombre: string;
    private password: string;
    private email: string;
    public edad: number;


    //constructor de la clase: es un método especial que se ejecuta cuando se crea un objeto de esta clase
    constructor(nombre: string, password: string, email: string, edad: number){
        this.nombre = nombre;
        this.password = password;
        this.email = email;
        this.edad = edad;

    }

    //Métodos: son funciones que se ejecutan dentro de la clase
    public imprimirNombre(){
        console.log(`El password es: ${this.mostrarPassword()}`);
        console.log(`Mi nombre es: ${this.nombre}`);
    }

    public trabajarEmpleado(hora: number = 8){
        console.log(`El empleado ${this.nombre} está trabajando por ${hora} horas`);
    }

    private mostrarPassword(){
        return this.password;
    }
}


export interface compra {
    producto: string;
    precio:number;
    cantidad: number;
    direccion: string;
}



