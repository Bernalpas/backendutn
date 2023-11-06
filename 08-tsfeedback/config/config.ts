import dotenv from 'dotenv';
dotenv.config();

export  const CONFIG = {
    PORT: 9000,
    DATA_PORT: process.env.DATA_PORT,
    DATA_USER: process.env.DATA_USER,
    DATA_PASSWORD: process.env.DATA_PASSWORD,
    DATA_DATABASE: process.env.DATA_DATABASE,
    DATA_HOST: process.env.DATA_HOST,
}