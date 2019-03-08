require('dotenv').config();
//importando a lib do express
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//iniaciando o objeto 
const app = express();
/**
 * Database setup 
 */
mongoose.connect('mongodb://localhost:27017/upload',
{
    useNewUrlParser: true,
});
//definindo parametros do express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//Chamada do arquivos de rotas
app.use(require('./routes'));

//definindo porta
app.listen(3001);
