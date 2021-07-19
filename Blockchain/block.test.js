const Block = require('./Blocks.js');


describe('Block', () => {
    ;
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

    it('generates a current hash that matches the set difficulty', () => {
        expect(block.currHash.substring(0, block.difficulty)).toEqual('0'.repeat(block.difficulty));
    });

    it('lowers the difficulty for slowly mined blocks', () => {
        expect(Block.adjustDifficulty(block, block.timeStamp + 360000)).toEqual(block.difficulty - 1);
    });

    it('raises the difficulty for quickly mined blocks', () => {
        expect(Block.adjustDifficulty(block, block.timeStamp + 1)).toEqual(block.difficulty + 1);
    });

});