const express = require('express');
const Blockchain = require('../Blockchain/BlockchainIndex');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express();
const BC = new Blockchain();

app.get('/blocks', (req, res) => {
    res.json(BC.chain);
})

app.listen(HTTP_PORT, ()=> {
    console.log(`I am listening on ${HTTP_PORT}`);
})
