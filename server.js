const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const requireDir = require('require-dir');

//Inciaindo o app
const app = express();

//Permite o trafego de informações post com JSON
app.use(express.json());

// Permite que outros endereços acessem a API
app.use(cors());

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi",
{useNewUrlParser:true});
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/router'));

app.listen(3001);