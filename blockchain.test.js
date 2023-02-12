const Blockchain = require('./blockchain');
const Block = require('./block');

describe('blockchain',()=>{
    const blockchain = new Blockchain();
    it('blockchain array instance',()=>{
        expect(blockchain.chain instanceof Array).toBe(true);
    });
    it('starts with Genesis block',()=>{
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });
    it('adding new block',()=>{
        const newData = 'foo bar';
        blockchain.addBlock({data:newData});
        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData);
    })
})