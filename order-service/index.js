require('dotenv').config();
const express = require('express');
const routes = require('./src/routes');


const PORT = process.env.PORT || 3004;

const app = express();
app.use(express.json()); //aqui podemos acessar o corpo de solicitação do json
app.use(routes); //aqui acessamos as rotas do arquivo routes

//conecto o banco aqui?