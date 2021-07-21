const Wallet = require('./Wallet/Wallet_Index');
const wallet = new Wallet();
console.log(wallet.toString());





// const Blockchain = require('./Blockchain/BlockchainIndex')

// let BC = new Blockchain();

// for (let i=0; i<10; i++) {
//     console.log(BC.addBlock(`nub ${i}`).toString());
// }




// const Block = require('./Blocks');

// const block= new Block('jim', 'mandy', 'nasa', 'doctor');

// Console log for block format:
// console.log(block.toString());

// Console log for genesis block function:
// console.log(Block.genesis().toString());

// Test for mineBlock function:
// const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
// console.log(fooBlock.toString());