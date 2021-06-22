const SHA256 = require('crypto-js/sha256');
class Blocks {
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

    static genesis() {
        return new this('Genesis Time', '-----', 'f1r57-h45h', [])
    };

    static mineBlock(prevBlock, data) {
        const timeStamp = Date.now();
        const prevHash = prevBlock.currHash;
        const currHash = Blocks.currHash(timeStamp, prevHash, data);
        return new this(timeStamp, prevHash, currHash, data);
    }
    static currHash(timeStamp, prevHash, data) {
        return SHA256(`${timeStamp}${prevHash}${data}`).toString();
    }

};

module.exports = Blocks;