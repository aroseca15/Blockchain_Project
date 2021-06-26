const SHA256 = require('crypto-js/sha256');
class Blocks {
    // Constuctor & toString: Creates the actual and console version of every block.
    constructor(timeStamp, prevHash, currHash, data) {
        this.timeStamp = timeStamp;
        this.prevHash = prevHash;
        this.currHash = currHash;
        this.data = data;
    }
    toString() {

        return `Block - 
        Timestamp: ${this.timeStamp}
        Previous Hash: ${this.prevHash.substring(0, 10)}
        Current Hash: ${this.currHash.substring(0, 10)}
        Data: ${this.data}`;
    };

    // genesis: This is the origin start of the blockchain.
    static genesis() {
        return new this('Genesis Time', '-----', 'f1r57-h45h', [])
    };
// MineBlock: Aides in block validation.
    static mineBlock(prevBlock, data) {
        const timeStamp = Date.now();
        const prevHash = prevBlock.currHash;
        const currHash = Blocks.currHash(timeStamp, prevHash, data);
        return new this(timeStamp, prevHash, currHash, data);
    }

// currHash: This generates a current has for each new block created. 
    static currHash(timeStamp, prevHash, data) {
        return SHA256(`${timeStamp}${prevHash}${data}`).toString();
    }

    // blockHash: This function is for the chain itself, it will generate a hash by using the input of the block. 
    static blockHash(block) {
        const { timeStamp, prevHash, data } = block;
        return block.currHash(timeStamp, prevHash, data);
    }
};

module.exports = Blocks;
