const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require('./router/userRoutes');

//Conexión a la Base de Datos

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//rutas
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`Server is running at http://localhost:${PORT}`);
})