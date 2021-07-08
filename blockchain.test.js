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

    it('validates a valid chain', () => {
        BC2.addBlock('tea');
        expect(BC.isValidChain(BC2.chain)).toBe(true);
    });

    it('invalidates a chain with a corrupt genesis block', () => {
        BC2.chain[0].data = 'Corrupt Gen Block';

        expect(BC.isValidChain(BC2.chain)).toBe(false);
    });

    // This test MAY be incorrect. The reason is it MAY be that it is comparing to the genesis block rather than block lastBlock. Making this note incase I have to come back. 
    it('invalidates a corrupt chain', () => {
        BC2.addBlock('Coffee');
        BC2.chain[0].data = 'I Need One';

        expect(BC.isValidChain(BC2.chain)).toBe(false);
    });

    it('Replaces the chain with a valid chain', () => {
        BC2.addBlock('Jah');
        BC.replaceChain(BC2.chain);

        expect(BC.chain).toEqual(BC2.chain);
    });

    it('Rejects/ does NOT replace the chain if the new chain is less than or equal in length', () => {
        BC.addBlock('dart');
        BC.replaceChain(BC2.chain);

        expect(BC.chain).not.toEqual(BC2.chain);
    });

});