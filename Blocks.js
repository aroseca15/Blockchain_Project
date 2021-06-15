class Blocks {
    constructor(timeStamp, prevHash, currHash, data) {
this.timeStamp = timeStamp;
this.prevHash = prevHash;
this.currHash = currHash;
this.data = data;
    };
    toString() {
        return `Block - 
        Timestamp: ${this.timeStamp}
        Previous Hash: ${this.prevHash.substring(0,10)}
        Current Hash: ${this.currHash.substring(0,10)}
        Data: ${this.data};
        `
    };
};

module.exports = Blocks;