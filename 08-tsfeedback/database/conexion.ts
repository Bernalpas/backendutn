import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();

export default class Conexion{

    //atributo estáticos
    private static _instance: Conexion;

    //atributos
    public cnn: mysql.Connection;
    public conectado: boolean = false;

    //constructor
    constructor(){
        console.log('Clase Conexión inicializada');

        this.cnn = mysql.createConnection({ 
            host: process.env.DATA_HOST,
            user: process.env.DATA_USER,
            password: process.env.DATA_PASSWORD,
            port: process.env.DATA_PORT,
            database: process.env.DATA_DATABASE
    });

        this.conectarDB();
        
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    //métodos
    public conectarDB(){
        this.cnn.connect((err: mysql.QueryError | null) => {
            if(err){
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de datos online');
            
        });
    }

}