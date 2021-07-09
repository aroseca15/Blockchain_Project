const express = require('express');
const Blockchain = require('../Blockchain/BlockchainIndex');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express();
const BC = new Blockchain();
