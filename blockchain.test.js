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

    // it('validates a valid chain', () => {
    //     BC2.addBlock('foo');

    //     expect(BC.isValidChain(BC2.chain)).toBe(true);
    // });

    // it('invalidates a chain with a corrupt genesis block', () => {
    //     BC2.chain[0].data = 'Bad Data';

    //     expect(BC.isValidChain(BC2.chain)).toBe(false);
    // });

    // it('invalidates a corrupt chain', () => {
    //     BC2.addBlock('Hello');
    //     BC2.chain[1].data = 'Bye Bye';

    //     expect(BC.isValidChain(BC2.chain)).toBe(false);
    // });


    // it('invalidates a chain with a corrupt chain', () => {
    //     BC2.addBlock('Valid');
    //     BC2.chain[1].data = 'Corrupted';

    //     expect(BC.isValidChain(BC2.chain)).toBe(false);
    // })

});