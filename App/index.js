const express = require('express');
// const bodyParser = require('body-parser')
const Blockchain = require('../Blockchain/BlockchainIndex');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express();
const BC = new Blockchain();

app.use(express.json());

app.get('/blocks', (req, res) => {
    res.json(BC.chain);
});

app.post('/mine', (req, res) => {
   const block = BC.addBlock(req.body.data);
   console.log(`New Block Added: ${block.toString()}`);

   res.redirect('/blocks');
});

app.listen(HTTP_PORT, ()=> {
    console.log(`I am listening on ${HTTP_PORT}`);
});
