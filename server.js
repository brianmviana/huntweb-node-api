const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true, useCreateIndex: true })

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'))


app.listen(3001);