const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://gustavo:uIbShev4mlB4vi2k@cluster0.samoxff.mongodb.net/?retryWrites=true&w=majority', {}); 
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

app.use(bodyParser.json());
app.use(itemRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
