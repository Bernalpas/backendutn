const express = require('express');
const router = express.Router();
const Persona = require('../models/persona');

/* GET users listing. */
router.get('/', async (req, res) => {

  const personas = await Persona.find();
  res.json({
    personas: personas
  });

});


//CRUD
//Create: Inseert listo
//READ: lectura de datos: listo
router.post('/crear', async (req, res) => {

  const { nombre, apellido, dni } = req.body;

  console.log(nombre, apellido, dni);

  const persona = new Persona({
    nombre: nombre,
    apellido: apellido,
    dni: dni
  });

  await Persona.create(persona);

  res.json({ 
    mensaje: 'Creamos un usuario'
  });
});

router.delete('/:id', (req, res) => {
  res.send('Eliminamos un usuario');
});

router.put('/:id', (req, res) => {
  res.send('Actualizamos un usuario');
});


module.exports = router;
