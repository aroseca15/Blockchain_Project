const SHA256 = require('crypto-js/sha256');

const DIFFICULTY = 4;
class Blocks {
    // Constructor & toString: Creates the actual and console version of every block.
    constructor(timeStamp, prevHash, currHash, data, nonce) {
        this.timeStamp = timeStamp;
        this.prevHash = prevHash;
        this.currHash = currHash;
        this.data = data;
        this.nonce = nonce;
    }
    toString() {

        return `Block - 
        Timestamp: ${this.timeStamp}
        Previous Hash: ${this.prevHash.substring(0, 10)}
        Current Hash: ${this.currHash.substring(0, 10)}
        Nonce: ${this.nonce}
        Data: ${this.data}`;
    };

    // genesis: This is the origin start of the blockchain.
    static genesis() {
        return new this('Genesis Time', '-----', 'f1r57-h45h', [])
    };
    // MineBlock: Aides in block validation.
    static mineBlock(prevBlock, data) {
        const prevHash = prevBlock.currHash;
        let nonce = 0;
        let currHash, timeStamp;
        do {
            nonce++;
            timeStamp = Date.now();
            currHash = Blocks.currHash(timeStamp, prevHash, data);

        } while (currHash.substring(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY));
        
        return new this(timeStamp, prevHash, currHash, data, nonce);
    }

    // currHash: This generates a current has for each new block created. 
    static currHash(timeStamp, prevHash, data, nonce) {
        return SHA256(`${timeStamp}${prevHash}${data}${nonce}`).toString();
    }

    // blockHash: This function is for the chain itself, it will generate a hash by using the input of the block. 
    static blockHash(block) {
        const { timeStamp, prevHash, data, nonce } = block;
        return Block.currHash(timeStamp, prevHash, data, nonce);
    }
};

module.exports = Blocks;
