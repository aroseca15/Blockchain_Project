const Block = require('./Blocks.js');

describe('Block', () => {;
    let data, lastBlock, block
    beforeEach(() => {
        data = 'learn';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });
it('sets the `data` to match the input', () => {
    expect(block.data).toEqual(data);
});

it('sets the `prevHash` to match the has of the last block', () => {
    expect(block.prevHash).toEqual(lastBlock.currHash);
});
});