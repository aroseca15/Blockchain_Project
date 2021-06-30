const Blockchain = require('./Blockchain');
const Block = require('./Blocks');

describe('Blockchain', () => {
    let BC, BC2;

    beforeEach(() => {
        BC = new Blockchain();
        BC2 = new Blockchain();
    });

    it('starts with genesis block', () => {
        expect(BC.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'foo';
        BC.addBlock(data);

        expect(BC.chain[BC.chain.length - 1].data).toEqual(data);
    });

    

});