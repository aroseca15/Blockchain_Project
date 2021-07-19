const SHA256 = require('crypto-js/sha256');
const { DIFFICULTY, MINE_RATE } = require('../config');
class Blocks {
    // Constructor & toString: Creates the actual and console version of every block.
    constructor(timeStamp, prevHash, currHash, data, nonce, difficulty) {
        this.timeStamp = timeStamp;
        this.prevHash = prevHash;
        this.currHash = currHash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty || DIFFICULTY;
    }
    toString() {

        return `Block - 
        Timestamp: ${this.timeStamp}
        Previous Hash: ${this.prevHash.substring(0, 10)}
        Current Hash: ${this.currHash.substring(0, 10)}
        Nonce: ${this.nonce}
        Difficulty: ${this.difficulty}
        Data: ${this.data}`;
    };

    // genesis: This is the origin start of the blockchain.
    static genesis() {
        return new this('Genesis Time', '-----', 'f1r57-h45h', [], 0, DIFFICULTY);
    };
    // MineBlock: Aides in block validation.
    static mineBlock(prevBlock, data) {
        let currHash, timeStamp;
        const prevHash = prevBlock.currHash;
        let { difficulty } = prevBlock;
        let nonce = 0;

        do {
            nonce++;
            timeStamp = Date.now();
            difficulty = Blocks.adjustDifficulty(prevBlock, timeStamp)
            currHash = Blocks.currHash(timeStamp, prevHash, data, difficulty);

        } while (currHash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this(timeStamp, prevHash, currHash, data, nonce, difficulty);
    }

    // currHash: This generates a current has for each new block created. 
    static currHash(timeStamp, prevHash, data, nonce, difficulty) {
        return SHA256(`${timeStamp}${prevHash}${data}${nonce}${difficulty}`).toString();
    }

    // blockHash: This function is for the chain itself, it will generate a hash by using the input of the block. 
    static blockHash(block) {
        const { timeStamp, prevHash, data, nonce, difficulty } = block;
        return Block.currHash(timeStamp, prevHash, data, nonce, difficulty);
    }

    // adjustDifficulty: This is a function that uses the current time stamp to compare to the sum and time stamp of the previous block. If the sum is greater than current time stamp the difficulty needs to be raised.
    static adjustDifficulty(prevBlock, currentTime) {
        let { difficulty } = prevBlock;
        difficulty = prevBlock.timeStamp + MINE_RATE > currentTime ? difficulty + 1 : difficulty - 1;
        return difficulty;
    }
};

module.exports = Blocks;
