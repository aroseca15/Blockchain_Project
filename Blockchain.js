const Block = require('./Blocks');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        // Note: If a variable is only used once it would be clear to place the value where needed.
        const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(block);

        return block;
    }
}

module.exports = Blockchain;