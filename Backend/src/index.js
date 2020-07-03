const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const helmet = require('helmet');


const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.listen(8080, ()=>{
    console.log('servidor rodando na porta 8080!');
});