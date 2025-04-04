const express = require('express');
const bodyParser = require('body-parser');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/eventos', (req, res) => {
const evento = req.body;
//envia o evento para o microsserviço de lembretes
axios.post('http://localhost:4000/eventos', evento);
//envia o evento para o microsserviço de observações
axios.post('http://localhost:5000/eventos', evento);
//envia o evento para o microsserviço de consulta
// axios.post("http://localhost:6000/eventos", evento);
// envia o evento para o microseviçi de classificação
postEventoConsulta(evento);

async function postEventoConsulta(evento){
    const url = "http://localhost:6000/eventos";
    const timeout = 5000;

    try {
        await axios.post(url, evento, {timeout})
        
    } catch (error) {
        
    }
}




axios.post("http://localhost:7000/eventos", evento);
res.status(200).send({ msg: "ok" });
});


app.listen(10000, () => {
console.log('Barramento de eventos. Porta 10000.')
})
