const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hola Mundo desde Node.js!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Conexión a MongoDB


mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = app;
