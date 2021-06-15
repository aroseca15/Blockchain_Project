const Block = require('./Blocks');

const block= new Block('jim', 'mandy', 'nasa', 'doctor');
// Console log for block format:
console.log(block.toString());

// Console log for genesis block function:
console.log(Block.genesis().toString());