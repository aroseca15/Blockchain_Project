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

    // isValidChain: This has one parameter, an incoming chain. This will check each block to see if it originates with the genesis block by comparing the first element of the incoming chain. If it matches that of the genesis block the function returns true. Since I am using JavaScript, the elements will be stingifed and then compared. The for loop will go through every block in the chain and compare each of them to the genesis block. Line 23 if statement compares hashes from block to block (prevHash matches currHash of lastBlock).
    isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
            return false;

        for (let i = 1; i < chain[0].length; i++) {
            const block = chain[i];
            const lastBlock = chain[i - 1];

            if (block.prevHash !== lastBlock.currHash || block.currHash !== Block.blockHash(block)) {
                return false;
            }
        }
        return true;
    }

    // replaceChain function: AS new blocks with data are created they will pass through this function to replace the current chain with the longest valid chain. This prevents forks from data being entered at the same time.
    replaceChain(newChain) {
        if (newChain.length <= this.chain.length) {
            console.log('Received chain not longer than current chain.');
            return;
        } else if (!this.isValidChain(newChain)) {
            console.log('Received chain is NOT valid.');
            return;
        }

        console.log('Chain Successfully Replaced');
        this.chain = newChain;
    }

}

module.exports = Blockchain;

//     isValidChain(chain) {
    //         if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
    //             return false;
    //         for (let i = 1; i < chain.length; i++) {
    //             const block = chain[i];
    //             const lastBlock = chain[i - 1];
    //             if (block.prevHash !== lastBlock.currHash || block.currHash !== Block.blockHash(block)) {
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }