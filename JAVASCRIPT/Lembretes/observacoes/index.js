const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

observacoesPorLembreteId = {};

//:id é um placeholder
//exemplo: /lembretes/123456/observacoes
app.put('/lembretes/:id/observacoes', (req, res) => {

});

app.get('/lembretes/:id/observacoes', (req, res) => {

});

app.listen(5000, (() => {
    console.log('Lembretes. Porta 5000');
}));