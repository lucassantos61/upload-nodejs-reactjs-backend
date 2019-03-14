require('dotenv').config();
//importando a lib do express
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
//iniaciando o objeto 
const app = express();
/**
 * Database setup 
 */
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
});
//definindo parametros do express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname,'..','tmp','uploads')));
//Chamada do arquivos de rotas
app.use(require('./routes'));

//definindo porta
app.listen(3001);
